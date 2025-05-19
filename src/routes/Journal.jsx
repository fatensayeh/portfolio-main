import { useState } from "react";
import Note from "@/components/Note";
import { CirclePlus } from "lucide-react";
import OpenNote from "@/components/OpenNote";
import UpdateNote from "@/components/UpdateNote";
import {
  useGetNotesByUserQuery,
  useDeleteNoteMutation,
  useGetNotesQuery,
} from "@/service/apiSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Journal() {
  const [section, setSection] = useState("");
  const [updatingNoteId, setUpdatingNoteId] = useState(null);
  const [selectedNote, setSelecteedNote] = useState(null);

  const logged_in = useSelector((state) => state.user.logged_in);
  const user_id = useSelector((state) => state.user.user_id);

  const {
    data: notes = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesByUserQuery(user_id);
  const [deleteNote, { deleteLoading }] = useDeleteNoteMutation();

  const handleDeleteNote = async () => {
    try {
      const idNote = notes[selectedNote].id;
      await deleteNote(idNote).unwrap();
      console.log("Note deleted successfully");
      setSelecteedNote(null);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const createNote = () => {
    setSelecteedNote(null);
    setUpdatingNoteId(null);
    setUpdatingNoteId(-1);
  };

  const logged_out_content = (
    <div className="w-screen h-dvh bg-white flex flex-col justify-center items-center">
        <p className="text-vscode-blue font-medium text-2xl "> Veuillez vous connecter pour accéder à cette page!</p>
        <Link to="/project" className="p-6 m-4 bg-vscode-blue text-white rounded-lg  hover:bg-slate-800 hover:scale-110 transition ease-in duration-75">Page de connexion</Link>
    </div>
  );

  const logged_in_content = (
    <div className="w-screen h-dvh bg-white flex">
      <div
        id="sidebar"
        className="w-80 rounded flex flex-col items-start p-4 pt-8 bg-slate-100 gap-4 border-r-2 border-vscode-blue"
      >
        <button
          href=""
          className="text-vscode-blue/75 hover:text-vscode-blue/50 font-bold text-xl"
        >
          Carnet de notes
        </button>
        <button
          href=""
          className="text-vscode-blue/75 hover:text-vscode-blue/50 font-bold text-xl"
        >
          Agenda
        </button>
        <button
          href=""
          className="text-vscode-blue/75 hover:text-vscode-blue/50 font-bold text-xl"
        >
          Todo list
        </button>
      </div>
      <div className="flex">
        <div id="notes" className="flex p-8 gap-8 flex-wrap ">
          <button
            onClick={() => createNote()}
            className="flex items-center justify-center w-56 h-56 bg-amber-100 border-2 border-amber-300 rounded-xl order-vscode-blue/50 p-4 transition duration-200 ease-in-out hover:scale-110 hover:bg-amber-400"
          >
            <CirclePlus size={80} strokeWidth={2.25} color="#f59e0b" />
          </button>
          {notes != undefined &&
            notes.map((note, index) => (
              <Note
                key={index}
                title={note.title}
                body={note.body}
                noteClicked={() => {
                  setSelecteedNote(index);
                  setUpdatingNoteId(null);
                }}
              ></Note>
            ))}
        </div>
        <div id="update" className="flex p-8">
          {selectedNote != null && (
            <OpenNote
              id={notes[selectedNote].id}
              title={notes[selectedNote].title}
              body={notes[selectedNote].body}
              deleteNote={() => handleDeleteNote(selectedNote)}
              updateNote={() => {}}
            ></OpenNote>
          )}
          {updatingNoteId != null && (
            <UpdateNote
              id={updatingNoteId}
              saveNote={console.log("saving")}
            ></UpdateNote>
          )}
        </div>
      </div>
    </div>
  );

  const content = logged_in ? logged_in_content : logged_out_content;
  return <>{content}</>;
}
