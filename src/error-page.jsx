import { useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <div className="min-h-screen bg-vscode-blue mx-auto">
        <div>
          <div className="flex flex-col ">
            <Navbar />
          </div>
          <div className="flex flex-col items-center py-44">
            <div>
              <p className="text-red-500">
                [ERROR] Logs of {date} at {time}
              </p>
              <p className="text-red-500">
                [ERROR] Oops! Seems like you lost your way
              </p>
              <p className="text-red-500">
                [ERROR] Sorry, an unexpected error has occurred.
              </p>
              <p className="text-red-500">
                [ERROR] Caused by: {error.statusText || error.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
