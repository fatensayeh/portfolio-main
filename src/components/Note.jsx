import React from "react";

export default function Note({ title, body, noteClicked }) {
  return (
    <div
      className="relative w-56 h-56 bg-amber-100 border-2 border-amber-300 rounded-xl order-vscode-blue/50 p-4 transition duration-200 ease-in-out hover:scale-110 hover:bg-amber-400"
      onClick={() => noteClicked()}
    >
      <button className="font-bold text-amber-500">{title}</button>
      <p className="text-text-tiny">{body}</p>
    </div>
  );
}
