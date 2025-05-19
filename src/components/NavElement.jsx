import React from "react";
import { Link } from "react-router-dom";

export default function NavElement({ id, title, path }) {
  return (
    <Link to={path} className="px-3 flex items-center pt-4 lg:pt-0">
      <p className="text-emerald-500 font-mono">{id}. </p>
      <p className="hover:text-slate-100 font-mono">{title}</p>
    </Link>
  );
}
