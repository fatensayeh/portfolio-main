import React from "react";

export default function Job({ experience }) {
  return (
    <div className="flex flex-col pl-8">
      <div>
        <div className="flex">
          <p className="font-bold">{experience.title}</p>
          <a href={experience.link}>
            <p className="text-emerald-500 hover:underline">
              &nbsp;@ {experience.company}
            </p>
          </a>
        </div>
        <p className="text-sm">{experience.date}</p>
        <p className="font-mono pt-4 text-base">{experience.description}</p>
      </div>
    </div>
  );
}
