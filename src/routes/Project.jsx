import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Project() {
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [creatingNewUser, setCreatingNewUser] = useState(false);
  const user_name = useSelector((state) => state.user.username);
  const logged_in = useSelector((state) => state.user.logged_in);
  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();

  const handleCreateNewUSer = async (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const username = usernameInputRef.current.value;

    // Create new item
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    handleLogin(e);

    usernameInputRef.current.value = "";
    setCreatingNewUser(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform registration logic here
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    // Import fs to work with the file system

    try {
      let auth = null;

      await fetch("http://localhost:3001/user/" + email)
        .then((res) => res.json())
        .then((user) => {
          auth = user;
        });
      // Create new item
      // Check if the email exists in the JSON file
      if (auth !== null && auth.error === undefined) {
        // check password
        if (password !== auth.password) {
          setIncorrectPassword(true);
          throw Error;
        }
        dispatch({
          type: "user/login",
          payload: {
            username: auth.username,
            user_id: auth.id,
          },
        });
        console.log("Login successful for user:", auth.username);
      } else {
        // User doesn't exist / register
        console.log("User not found. Registering");
        // You could add code here to register a new user if needed
        setCreatingNewUser(true);
      }
    } catch (error) {
      console.error("Error reading user data:", error);
    }

    // Reset input fields
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <div className="w-screen flex justify-center">
      {/* connexion here */}

      {!logged_in && (
        <div className="px-24">
          <p className="text-3xl text-name-color font-bold">
            Connecter ou enregistrer vous
          </p>
          <form
            className="flex flex-col py-8"
            onSubmit={(e) => {
              if (creatingNewUser) {
                handleCreateNewUSer(e);
              } else {
                handleLogin(e);
              }
            }}
          >
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
                Mot de passe
              </label>
              <input
                type="password"
                id="email"
                className="bg-gray-50/25 border border-name-color/50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mot de passe"
                ref={passwordInputRef}
                required
              />
            </div>
            {creatingNewUser && (
              <div className="mb-5">
                <label
                  htmlFor="user_name"
                  className="block mb-2 text-sm font-medium text-name-color dark:text-white"
                >
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  id="user_name"
                  className="bg-gray-50/25 border border-name-color/50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nom d'utilisateur"
                  ref={usernameInputRef}
                  required
                />
              </div>
            )}

            <div className="flex justify-center pt-8">
              <button
                className="bg-vscode-blue rounded-md p-2 border-2 border-emerald-500 text-emerald-500 text-lg leading-relaxed font-mono shrink-0 hover:bg-emerald-500 hover:text-white"
                type="submit"
              >
                <div>Connexion/Enregistrement</div>
              </button>
            </div>
            {incorrectPassword && (
              <div className="flex justify-center pt-8">
                <div
                  className="bg-vscode-blue rounded-md p-2 border-2 border-red-500 text-red-500 text-lg leading-relaxed font-mono shrink-0 hover:bg-red-500 hover:text-white"
                  type="submit"
                >
                  <div>Mot de passe incorrect!</div>
                </div>
              </div>
            )}
          </form>
        </div>
      )}
      {/* logged_in here */}
      {logged_in && (
        <div className="flex flex-col items-center">
          <p className="text-3xl text-name-color font-bold">
            {user_name}, Bienvenu dans votre journal de bord
          </p>
          <p className="text-xl text-name-color font-bold w-full flex justify-center">
            Vous pouvez consulter toutes vos activités ici.
          </p>

          <div
            id="rubriques"
            className="flex justify-center items-center pt-48 gap-8"
          >
            <Link
              to={"/journal"}
              className=" w-56 h-24 bg-emerald-500 rounded-lg flex justify-center items-center text-3xl border-2 border-solid transition duration-200 ease-in-out hover:scale-110 hover:bg-emerald-300"
            >
              <p className="text-white">Commencer</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
