import React, { useState } from "react";
import logo from "./../assets/M.svg";
import NavElement from "./NavElement";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const logged_in = useSelector((state) => state.user.logged_in);
  const [isOpen, setIsOpen] = useState(false);
  const url = "/faten_sayeh_resume_cv.pdf";
  const filename = "faten_sayeh_resume";
  const handleDownload = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between">
        {/* Logo */}
        <Link
          to={"/"}
          className="flex-shrink-0 transition ease-in-out hover:rotate-90"
        >
          <img className="h-16 w-auto" src={logo} alt="Company Logo" />{" "}
        </Link>
        {/* Routes */}
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <NavElement
            id="01"
            title="A propos de moi"
            path="/about"
          ></NavElement>
          <NavElement
            id="02"
            title="Expérience"
            path="/experience"
          ></NavElement>
          <NavElement id="03" title="Contact" path="contact"></NavElement>
          <NavElement id="04" title="Projet" path="project"></NavElement>
          <div>
            <button
              onClick={handleDownload}
              className="px-4 py-2 border-2 border-emerald-500 rounded-lg text-emerald-500 text-lg leading-relaxed font-mono hover:text-white transition-all"
            >
              Mon CV
            </button>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          >
            {isOpen ? (
              <X className="block h-6 w-6 " />
            ) : (
              <Menu className="block h-6 w-6 " />
            )}
          </button>
        </div>
      </div>
      {/* Routes */}
      {/* Mobile Menu */}
      <div className=" flex flex-col lg:hidden">
        {isOpen && (
          <div>
            <NavElement
              id="01"
              title="A propos de moi"
              path="/about"
              handleCloseMenu={setIsOpen}
            ></NavElement>
            <NavElement
              id="02"
              title="Expérience"
              path="/experience"
            ></NavElement>
            <NavElement id="03" title="Contact" path="contact"></NavElement>
            <div>
              <button
                onClick={handleDownload}
                className="px-3 pt-4 rounded-lg text-emerald-500 text-lg leading-relaxed font-mono hover:text-white transition-all"
              >
                Télécharger mon CV
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
