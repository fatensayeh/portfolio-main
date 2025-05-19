import React from "react";
import { Trash } from "lucide-react";
import { SquarePen } from "lucide-react";

export default function OpenNote({id, title, body, updateNote, deleteNote }) {
  return (
    <div className="p-4 relative w-96 h-fit bg-amber-100 border-2 border-amber-300 rounded-xl order-vscode-blue/50">
      <button className="font-bold text-amber-500 text-lg">{title}</button>
      <p className="text-md">{body}</p>
      <button className="p-4 absolute bottom-0 right-0 " onClick={deleteNote}>
        <Trash color="#f59e0b" strokeWidth="3" />
      </button>
      <button className="p-4 absolute bottom-0 right-10 " onClick={updateNote}>
        <SquarePen color="#f59e0b" strokeWidth="3" />
      </button>
    </div>
  );
}
