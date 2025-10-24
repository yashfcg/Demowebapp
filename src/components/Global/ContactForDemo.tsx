"use client";
import { z, ZodError } from "zod";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { MapPin ,Mail} from "lucide-react";
// import GlobalButton from "../ui/GlobalButton";
import React, { useRef, useState } from "react";
import { InlineWidget } from "react-calendly";
import {
  BulbIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  LinkedInIcon,
} from "../ui/Icons";
import axios from "axios";

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
interface FormDataInterface {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  website: string;
  company: string;
  jobtitle: string;
}
function RequestDemoForm({ selected }: { selected: string }) {
  const successToast = () => toast.success("Demo request successful.");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState<FormDataInterface>({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    website: "",
    company: "",
    jobtitle: "",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const token = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();
      if (!token) throw "Verification failed";
      const parsedFormdata = formSchema.safeParse(formData);
      if (!parsedFormdata.success) throw parsedFormdata.error;
      const response = await axios.post("/api/requestDemo", formData, {
        headers: {
          "Content-Type": "application/json",
          "google-recaptcha-token": token,
        },
      });
      if (response.status == 200) {
        successToast();
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          website: "",
          company: "",
          jobtitle: "",
        });
        console.log("here");
      } else {
        throw "Submission failed";
      }
    } catch (e) {
      setIsError(true);
      if (e instanceof ZodError) {
        setErrorMsg(e.errors[0].message);
      } else {
      }
    }
    setIsLoading(false);
  }

  return (
    <div
      className={`${
        selected == "Request Demo" ? "block xl:block" : "hidden xl:block"
      } w-[45%]  min-w-80 shadow-xl rounded-xl overflow-clip `}
    >
      <div className="bg-[#235ABD] p-5">
        <h1 className="font-inter text-white text-xl font-medium">
          Request a Product Demo
        </h1>
        <p className="font-inter text-[#EFF3FD] opacity-90 font-light">
          Fill out the form below and our team will get back to you
        </p>
      </div>
      <div className="px-4 mt-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-x-2 gap-y-5">
            <div className="xl:col-span-1 col-span-2 gap-1 flex flex-col">
              <label>
                First Name<span className="text-red-600">*</span>
              </label>
              <input
                name="firtName"
                type="text"
                value={formData.firstname}
                onChange={(e) => {
                  setIsError(false);
                  setFormData((prev) => ({
                    ...prev,
                    firstname: e.target.value,
                  }));
                }}
                className="text-gray-800 p-1 font-inter border-1 border-gray-300 rounded"
              ></input>
            </div>
            <div className="xl:col-span-1 col-span-2 gap-1 flex flex-col">
              <label>
                Last Name<span className="text-red-600">*</span>
              </label>
              <input
                name="lastName"
                type="text"
                value={formData.lastname}
                onChange={(e) => {
                  setIsError(false);
                  setFormData((prev) => ({
                    ...prev,
                    lastname: e.target.value,
                  }));
                }}
                className="text-gray-800 p-1 font-inter border-1 border-gray-300 rounded"
              ></input>
            </div>
            <div className="xl:col-span-1 col-span-2 gap-1 flex flex-col">
              <label>
                Email<span className="text-red-600">*</span>
              </label>
              <input
                name="email"
                type="text"
                value={formData.email}
                onChange={(e) => {
                  setIsError(false);
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                className="text-gray-800 p-1 font-inter border-1 border-gray-300 rounded"
              ></input>
            </div>
            <div className="xl:col-span-1 col-span-2 gap-1 flex flex-col">
              <label>Phone</label>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={(e) => {
                  setIsError(false);
                  setFormData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }));
                }}
                className="text-gray-800 p-1 font-inter border-1 border-gray-300 rounded"
              ></input>
            </div>
            <div className="xl:col-span-1 col-span-2 gap-1 flex flex-col">
              <label>Company Name</label>
              <input
                name="companyName"
                type="text"
                value={formData.company}
                onChange={(e) => {
                  setIsError(false);
                  setFormData((prev) => ({
                    ...prev,
                    company: e.target.value,
                  }));
                }}
                className="text-gray-800 p-1 font-inter border-1 border-gray-300 rounded"
              ></input>
            </div>
            <div className="xl:col-span-1 col-span-2 gap-1 flex flex-col">
              <label>Job Title</label>
              <input
                name="jobTitle"
                type="text"
                value={formData.jobtitle}
                onChange={(e) => {
                  setIsError(false);
                  setFormData((prev) => ({
                    ...prev,
                    jobtitle: e.target.value,
                  }));
                }}
                className="text-gray-800 p-1 font-inter border-1 border-gray-300 rounded"
              ></input>
            </div>
            <div className="col-span-2 gap-1 flex flex-col">
              <label>Website</label>
              <input
                name="website"
                type="text"
                value={formData.website}
                onChange={(e) => {
                  setIsError(false);
                  setFormData((prev) => ({
                    ...prev,
                    website: e.target.value,
                  }));
                }}
                className="text-gray-800 p-1 font-inter border-1 border-gray-300 rounded"
              ></input>
            </div>
          </div>

          <div className="flex flex-col my-10">
            <p className={`text-red-800 ${isError ? "block" : "hidden"}`}>
              {errorMsg}
            </p>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              size="invisible"
            />
            <button
              disabled={isLoading}
              type="submit"
              className={`${
                isLoading ? "bg-gray-400" : "bg-[#235ABD]"
              }  w-full  hover:cursor-pointer text-white font-inter text-lg py-2 rounded`}
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
function CalendlyForm({ selected }: { selected: string }) {
  return (
    <div
      className={`${
        selected == "Schedule" ? "block xl:block" : "hidden xl:block"
      } w-[45%] min-w-80 shadow-xl rounded-xl overflow-clip h-fit`}
    >
      <div className="bg-[#235ABD] p-5">
        <h1 className="font-inter text-white  text-xl font-medium">
          Schedule a Meeting
        </h1>
        <p className="font-inter text-[#EFF3FD] opacity-90 font-light">
          Book a time directly with our Sales Director
        </p>
      </div>
      <div className="px-5 ">
        <div className="py-4 border-b-1 border-gray-300 flex flex-row justify-between items-center">
          <div className=" w-[25%] rounded-full aspect-square   overflow-clip bg-gray-200 relative">
            <Image
              src="/assets/global/contactForDemo/wendy.jpg"
              alt="placeholder"
              fill
              className="w-full h-auto  object-center"
            />
          </div>
          <div className="w-[70%] flex flex-col ">
            <h1 className="font-inter text-[#152B3D] text-xl">Wendy Brown</h1>
            <h2 className="font-inter text-gray-500 flex gap-2">
              <span>Sales Director, Flairdocs</span>
              <a
                href="https://www.linkedin.com/in/wendybrown2128/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer"
              >
                <LinkedInIcon size="size-5" />
              </a>
            </h2>
            <p className="font-inter text-gray-500 mt-2">
              With over 10 years of experience in document management solutions,
              Wendy can help you find the perfect setup for your
              organization&apos;s needs.
            </p>
          </div>
        </div>
      </div>
      <div className="p-1 md:p-5 ">
        <div className="rounded border-1   border-gray-200">
          {<InlineWidget url={"https://calendly.com/aligntogether-postman"} />}
        </div>
      </div>
    </div>
  );
}
export default function ContactForDemo() {
  const [selected, setSelected] = useState<string>("Schedule");
  const [openFaq, setOpenFaq] = useState<number>(-1);
  const FAQs = [
    {
      Q: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet?1",
      A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur neque non blandit. Suspendisse convallis orci nisi, at blandit ipsum viverra non. Quisque lobortis enim luctus dui porta mattis. Etiam vitae mi nec nisl ornare consequat a sed nulla. Vivamus ultricies purus ut egestas eleifend. Donec aliquet venenatis tempus.",
    },
    {
      Q: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet?2",
      A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur neque non blandit. Suspendisse convallis orci nisi, at blandit ipsum viverra non. Quisque lobortis enim luctus dui porta mattis. Etiam vitae mi nec nisl ornare consequat a sed nulla. Vivamus ultricies purus ut egestas eleifend. Donec aliquet venenatis tempus.",
    },
    {
      Q: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet?3",
      A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt consectetur neque non blandit. Suspendisse convallis orci nisi, at blandit ipsum viverra non. Quisque lobortis enim luctus dui porta mattis. Etiam vitae mi nec nisl ornare consequat a sed nulla. Vivamus ultricies purus ut egestas eleifend. Donec aliquet venenatis tempus.",
    },
  ];
  const locations = [
    {
      city: "Columbus, OH",
      email: "ohio_fs@flairsoft.net",
    },
    {
      city: "Lansing, MI",
      email: "michigan_fs@flairsoft.net",
    },
    {
      city: "Oklahoma City, OK",
      email: "oklahoma_fs@flairsoft.net",
    },
    {
      city: "Portland, OR",
      email: "oregon_fs@flairsoft.net",
    },
    {
      city: "Montgomery, AL",
      email: "info@flairdocs.com",
    },
  ];
  // const formFields = [
  //   "First Name",
  //   "Last Name",
  //   "Email",
  //   "Phone",
  //   "Company Name",
  //   "Job Title",
  //   "Website",
  // ];
  // bg change from bg-[#EFF3FD] to bg-white
  return (
    <div
      id="contact-demo-form"
      className="w-full h-auto min-h-fit pb-10 pt-30 bg-white
      flex justify-center items-center
     "
    >
      <div className="w-full flex flex-col items-center gap-10">
        <Toaster position="bottom-right" reverseOrder={false} />
        <h1 className="font-archivo text-xl md:text-4xl  font-[700] text-[#152B3D]">
          Experience <span className="text-[#235ABD]">Flairdocs</span> in Action
        </h1>
        <p className="font-inter font-base w-[60%] min-w-80 text-[#4b5563] text-xl text-center ">
          Discover how Flairdocs can streamline your document workflow and boost
          your team&apos;s productivity
        </p>
        <div className="w-[80%] min-w-80 flex flex-col  xl:flex-row items-center xl:items-stretch  xl:justify-between ">
          <div className="xl:hidden flex flex-col w-[45%] min-w-80 mb-5 border bg-[#235ABD]/10 p-4 rounded-xl gap-5">
            <p className="flex items-center gap-1">
              <span>
                <BulbIcon color="#235ABD" size="size-5" />
              </span>
              <span className="text-base font-inter">
                Choose how you&apos;d like to proceed
              </span>
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setSelected("Request Demo")}
                className={`py-2 w-[45%] rounded-xl border text-center text-base font-inter font-medium ${
                  selected == "Request Demo"
                    ? "bg-[#235ABD] text-white"
                    : "text-[#235ABD]"
                }`}
              >
                Request Demo
              </button>
              <button
                onClick={() => setSelected("Schedule")}
                className={`py-2 w-[45%] rounded-xl border font-inter font-medium ${
                  selected == "Schedule"
                    ? "bg-[#235ABD] text-white"
                    : "text-[#235ABD]"
                }`}
              >
                Schedule Meeting
              </button>
            </div>
          </div>
          <RequestDemoForm selected={selected} />
          <CalendlyForm selected={selected} />
        </div>
<div className="bg-[#F6F8F8] w-full py-5 pb-10">

        <h1 className="font-archivo text-center text-xl md:text-3xl mt-2 font-[700] text-[#152B3D]">
          Contact Us
        </h1>
        <div className="py-0 px-4 text-center">

      <h2 className="text-xl md:text-2xl font-medium mb-6">
        Find us across multiple cities to serve you better
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {locations.map((loc, index) => (
          <div
          key={index}
          className="bg-[#d6e4ff] rounded-lg p-4 w-[250px] text-left shadow-sm"
          >
            {/* City row */}
            <div className="flex items-start gap-2 mb-1">
              <MapPin className="mt-[2px]" size={18} />
              <h3 className="font-semibold">{loc.city}</h3>
            </div>

            {/* Email row */}
            <div className="flex items-start gap-2">
              <Mail className="mt-[2px]" size={16} />
              <p className="text-sm">{loc.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>

        <h1 className="font-archivo text-xl md:text-3xl mt-2 font-[700] text-[#152B3D]">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col gap-5 items-center w-[60%] min-w-80 ">
          {FAQs.map((faq, index) => {
            return (
              <div
                key={faq.Q}
                className="flex flex-col w-full gap-2 p-4 items-start bg-white border-1 border-gray-100 shadow-xl rounded-xl"
              >
                <h1
                  onClick={() => {
                    setOpenFaq((prev) => (prev == index ? -1 : index));
                  }}
                  className="hover:cursor-pointer font-medium w-full flex justify-between items-center font-inter text-black"
                >
                  <span>{faq.Q}</span>
                  {openFaq == index ? (
                    <ChevronUpIcon color="black" strokeWidth="1" />
                  ) : (
                    <ChevronDownIcon color="black" strokeWidth="1" />
                  )}
                </h1>
                <p
                  className={`font-inter text-gray-600 ${
                    openFaq == index ? "block" : "hidden"
                  }`}
                >
                  {faq.A}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="md:left-[10%]  w-[75%] min-w-80 h-auto min-[99vh] bg-white flex md:flex-row items-center md:items-start justify-around  flex-col-reverse">
        <div className=" flex-col justify-end w-[40vw] max-w-90 h-auto min-w-80 mb-5 md:mb-0">
          <div className="w-full h-auto flex justify-center">
            <h1 className="font-archivo text-[2rem] font-[700] text-[#152B3D]">
              Contact for a Demo
            </h1>
          </div>
          <div className=" w-full md:w-full  h-auto px-2 md:px-0 ">
            <form>
              {formFields.map((field) => {
                return (
                  <div
                    key={field}
                    className="flex justify-between md:justify-end items-center font-[400] my-5 w-full  "
                  >
                    <p className="text-[#152B3D] font-roboto text-sm">
                      {field}
                    </p>
                    <input
                      name="field"
                      className="h-8 border border-[#2A72FF] rounded-md  w-[50%]  pl-2 py-auto md:w-[65%] ml-[5%] md:ml-[5%]"
                    ></input>
                  </div>
                );
              })}
              <div className="flex justify-end items-center my-5 w-full">
                <GlobalButton
                  type="Primary"
                  text={"REQUEST DEMO"}
                  onPress={() => {}}
                  size="large"
                />
              </div>
            </form>
          </div>
        </div>
        <div className=" relative w-[45vw] md:w-[45vw] h-auto min-w-80 mt-5 md:mt-0 left-[5%] ">
          <Image
            width={1846}
            height={1436}
            alt="Device Mockup"
            src={"/assets/global/contactForDemo/deviceMockup.png"}
            className="w-full h-auto"
          />
        </div>
      </div> */}
    </div>
  );
}
