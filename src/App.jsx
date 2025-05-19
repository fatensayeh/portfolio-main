import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Socials from "./components/Socials";
import { Provider } from "react-redux";
import store from "./store/store.js";


function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="min-h-screen bg-vscode-blue mx-auto flex flex-col">
          <Navbar />
          <Outlet></Outlet>
          <Socials></Socials>
        </div>
      </div>
    </Provider>
  );
}

export default App;
