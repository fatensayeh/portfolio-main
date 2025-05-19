import React from "react";

export default function Employer({ name, isActive, setActive }) {
  const handleClick = () => {
    setActive(index);
  };

  const className = `text-nowrap leading-relaxed font-mono text-base p-2 pl-4 border-b-2 md:border-b-0 md:border-l-2 hover:text-emerald-500 hover:border-emerald-500 hover:bg-slate-700/50 ${
    isActive
      ? "border-emerald-500 text-emerald-500"
      : "border-gray-400 text-gray-400 "
  }`;
  return <p className={className}>{name}</p>;
}
