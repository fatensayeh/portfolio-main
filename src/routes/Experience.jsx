import React, { useState } from "react";
import Job from "../components/Job";
import Employer from "../components/Employer";
import { experiences } from "../service/experience.js";

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <div className=" flex flex-col w-full px-12 xl:px-56 lg:py-44">
      <p className=" text-emerald-500 font-mono ">Mon expérience</p>
      <div className="flex flex-col mt-8 md:flex-row md:items-start ">
        <div className="flex  overflow-x-scroll md:overflow-x-clip md:flex-col">
          {experiences.map((experience, index) => (
            <button key={index} onClick={() => setActive(index)}>
              <Employer
                name={experience.company}
                isActive={active === index}
              ></Employer>
            </button>
          ))}
        </div>

        <div>
          <Job experience={experiences[active]}></Job>
        </div>
      </div>
    </div>
  );
}
