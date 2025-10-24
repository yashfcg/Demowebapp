import React from "react";

interface ApplyFormProps {
  title: string;
}

const ApplyForm: React.FC<ApplyFormProps> = ({ title }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-semibold text-center mb-8">{title}</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Desired Position</label>
          <input
            type="text"
            name="position"
            className="w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Interest and Expertise</label>
          <textarea
            name="expertise"
            className="w-full border rounded-md px-3 py-2 shadow-sm h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="sm:col-span-2 flex justify-between items-center">
          <div>
            <label className="block text-sm font-medium mb-1">Upload Resume</label>
            <input
              type="file"
              name="resume"
              className="border rounded-md px-3 py-2 w-full sm:w-72 shadow-sm"
            />
          </div>
        </div>
        <div className="sm:col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;