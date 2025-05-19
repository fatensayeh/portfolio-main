import React, { useRef } from "react";
import { sendEmail } from "../service/emailSender";

export default function Contact() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const message = messageInputRef.current.value;

    sendEmail(name, email, message);

    // Reset input fields
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";

    console.log(name + email + message);
  };

  return (
    <div className="w-screen flex justify-center">
      <div className="px-24">
        <p className="text-3xl text-name-color font-bold">
          N'hésitez pas à me contacter
        </p>
        <form className="flex flex-col py-8" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-name-color dark:text-white"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50/25 border border-name-color/50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nom"
              ref={nameInputRef}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-name-color dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50/25 border border-name-color/50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              ref={emailInputRef}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-name-color dark:text-white"
            >
              Message...
            </label>
            <textarea
              type="text"
              id="project"
              className="h-40 bg-gray-50/25 border border-name-color/50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Message"
              ref={messageInputRef}
              required
            />
          </div>
          <div className="flex justify-center pt-8">
            <button
              className="bg-vscode-blue rounded-md p-2 border-2 border-emerald-500 text-emerald-500 text-lg leading-relaxed font-mono shrink-0 hover:bg-emerald-500 hover:text-white"
              type="submit"
            >
              <div>Envoyer</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
