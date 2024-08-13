import { useState } from "react";
import logo from "./assets/1.jpg";
import bgimage from "./assets/3.jpg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
      {/* <img src={bgimage} alt="" className="absolute w-full h-full"></img> */}
      <header className="mt-7 rounded-md ml-7 mr-7  flex justify-between items-center text-black py-4 px-8 md:px-32 bg-gradient-to-r from-white to-red drop-shadow-md">
        <a href="#" className="text-center flex space-x-3 items-center">
          <img
            src={logo}
            alt=""
            className="w-28  h-28 rounded-full shadow-md shadow-zinc-500"
          />
          <h1 className="hover:cursor-pointer hover:text-red-800 font-semibold text-base text-3xl">INBIO
          </h1>
        </a>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer text-2xl">
            Home
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer text-2xl">
            About
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer text-2xl">
            Services
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer text-2xl">
            Experience
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer text-2xl">
            Contact
          </li>
        </ul>
        <div className="relative hidden md:flex items-center justify-center gap-3">
          <li className="bx bx-search absolute left-3"></li>
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
          />
        </div>
        <div className="justify-between hidden xl:flex pl-3 font-semibold text-xl hover:cursor-pointer hover:bg-red-800 rounded-md p-3 hover:text-white shadow-gray-600">
          Sign in
        </div>
        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
        <div
          className={`absolute xl:hidden top-40 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Home
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Products
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Explores
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Contact
          </li>
        </div>
      </header>
      <body className="">
      <div className="relative flex mt-7 mx-7 justify-between">
        <div className="py-20 px-4 sm:px-6 md:py-24 md:px-16 lg:py-32 lg:px-32 space-y-3">
          <h1 className="text-white font-normal text-xl sm:text-2xl md:text-3xl">
            WELCOME TO MY WORLD
          </h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4">
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl">Hi, I'm</h1>
            <h1 className="text-red-400 font-bold text-2xl sm:text-3xl md:text-5xl">Pheng Sophors</h1>
          </div>
          <h1 className="text-white font-bold text-lg sm:text-xl md:text-3xl">a Software Developer.</h1>
          <p className="text-white text-sm sm:text-base md:text-lg">
            I use animation as a third dimension by which to simplify experience
            and building through each and every interaction. I'm not adding
            motion just to spruce things up, but doing it in ways that.
          </p>
          <div className="pt-8 md:pt-16 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-full shadow-md shadow-gray-600 w-32 sm:w-36">
              HIRE ME
            </button>
            <button className="flex items-center space-x-2 hidden sm:flex border border-yellow-500 text-white  px-4 rounded-full shadow-md shadow-gray-600">
              <i className="bx bx-play bg-yellow-500 p-2 rounded-full"></i>
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>
      </body>
    </div>
  );
}
