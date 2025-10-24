import { NextResponse } from "next/server"
import {z} from "zod";
import axios from "axios";
interface FormDataInterface {
    email : string
    firstname : string 
    lastname : string
    phone : string 
    website : string 
    company : string 
    jobtitle : string
}
const formSchema = z.object({
  firstname: z
    .string()
    .min(3, "First name must be atleast 3 characters")
    .max(20, "First name must be atmost 20 characters.")
    .regex(/^[A-Za-z\s]+$/, "First name can only contain letters and spaces"),
  lastname: z
    .string()
    .min(3, "Last name must be atleast 3 characters")
    .max(20, "Last name must be atmost 20 characters.")
    .regex(/^[A-Za-z\s]+$/, "Last name can only contain letters and spaces"),
  email: z.string().email("Invalid Email"),
  // phone: z.string().regex(/^\d{10}$/, {
  //   message: "Invalid Phone Number",
  // }),
  // company: z.string().min(1, "Pls select a company"),
  // job_title : z.string(),
  // website : z.string()
});
export async function POST(req: Request ) {
  
  try {
    const formData:FormDataInterface  = await req.json(); 
    const token : string = req.headers.get("google-recaptcha-token") || "";
    if(!token || token =="")throw "Human verificaion failed"
    const secretKey = process.env.RECAPTCHA_SECRET_KEY as string;
    const verificaionResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null, 
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );
    const data = verificaionResponse.data;

    if (!data.success ) {
      throw "Human verification failed"
    }
    const url = process.env.HUBSPOT_REQUEST_DEMO_URL;
    console.log(url , "URL");
    const parsedData = formSchema.safeParse(formData);
    if(!parsedData.success){
      throw parsedData.error
    }
    const response = await fetch(url as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          {
            "name": "email",
            "value": "test1@example.com"
            },
            {
            "name": "firstname",
            "value": "Test1"
            },{
                "name" : "lastname",
                "value" : "testLastname1"
            },{
                "name" : "phone",
                "value" : "1234567891"
            },{
                "name" : "website",
                "value" : "test.com"
            },{
                "name" : "company",
                "value" : "AlignTogether"
            },{
                "name" : "jobtitle",
                "value" : "tester"
            }
        ],
        context: {
          pageUri: "flairdocs-apr-2025.vercel.app",
          pageName: "Request Demo",
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HubSpot form error: ${errorData.message || 'Unknown error'}`);
    }

    console.log('✅ Form submitted successfully to HubSpot!' , response);
    return  NextResponse.json({ success: true, message: 'Form submitted!' });
  } catch (err) {
    console.error('❌ Failed to submit form to HubSpot:', err);
    return NextResponse.json({ success: false, error: 'Something went wrong' }, { status: 500 });;
  }
}