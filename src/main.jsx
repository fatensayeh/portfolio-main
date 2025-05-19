import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import About from "./routes/About.jsx";
import Experience from "./routes/Experience.jsx";
import Work from "./routes/Work.jsx";
import Contact from "./routes/Contact.jsx";
import Index from "./routes/Index.jsx";
import Project from "./routes/Project.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Journal from "./routes/Journal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "about", element: <About /> },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/journal",
        element: <Journal />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
