"use client";
import React, { useState } from "react";

export interface JobPost {
  title: string;
  overviewTittle: string;
  overviewDescription: string;
  responsibilityTittle: string;
  responsibilityDescription: string;
  qualificationTittle: string;
  qualificationDescription: string;
}

interface JobPostingProps {
  jobs: JobPost[];
}

const JobPosting: React.FC<JobPostingProps> = ({ jobs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
      <ul className="space-y-6">
        {jobs.map((job, index) => (
          <li key={index} className="border rounded-lg bg-white shadow p-4">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left flex justify-between items-center text-lg font-semibold"
            >
              {job.title}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>

            {activeIndex === index && (
              <div className="mt-4 space-y-4 text-sm text-gray-700">
                <div>
                  <h3 className="font-bold">{job.overviewTittle}</h3>
                  <p>{job.overviewDescription}</p>
                </div>
                <div>
                  <h3 className="font-bold">{job.responsibilityTittle}</h3>
                  <p>{job.responsibilityDescription}</p>
                </div>
                <div>
                  <h3 className="font-bold">{job.qualificationTittle}</h3>
                  <p>{job.qualificationDescription}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JobPosting;