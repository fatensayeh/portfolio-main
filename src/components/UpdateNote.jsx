import React from "react";
import { useRef } from "react";
import { Trash } from "lucide-react";
import { useSelector } from "react-redux";
import { useAddNewNoteMutation } from "@/service/apiSlice";

export default function UpdateNote({ id, title, body, deleteNote }) {
  const titleInputRef = useRef();
  const bodyInputRef = useRef();
  const [addNewNote, { isLoading }] = useAddNewNoteMutation();

  const user_id = useSelector((state) => state.user.user_id);

  const createNote = async (e) => {
    e.preventDefault();

    const title = titleInputRef.current.value;
    const body = bodyInputRef.current.value;
    try {
      await addNewNote({ user_id, title, body }).unwrap();
    } catch (error) {
      console.error("Error saving note:", error);
    }

    // Reset input fields
    titleInputRef.current.value = "";
    bodyInputRef.current.value = "";
  };

  return (
    <div className="p-4 relative w-96 h-fit bg-amber-100 border-2 border-amber-300 rounded-xl order-vscode-blue/50">
      <form className="flex flex-col py-8" onSubmit={createNote}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-bold text-amber-500 dark:text-white"
          >
            Titre
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50/25 border border-name-color/50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Titre"
            ref={titleInputRef}
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="body"
            className="block mb-2 text-sm font-bold text-amber-500 dark:text-white"
          >
            Corps
          </label>
          <textarea
            type="text"
            id="body"
            className="bg-gray-50/25 border border-name-color/50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Corps"
            ref={bodyInputRef}
            required
          />
        </div>

        <div className="flex justify-center pt-8">
          <button
            className="bg-amber-500 rounded-md p-2 border-2 border-amber-300 text-amber-100 text-lg leading-relaxed font-mono shrink-0 hover:bg-amber-100 hover:text-amber-500"
            type="submit"
          >
            <div>Enregistrer</div>
          </button>
        </div>
      </form>
      <button className="p-4 absolute bottom-0 right-0 " onClick={deleteNote}>
        <Trash color="#f59e0b" strokeWidth="3" />
      </button>
    </div>
  );
}
