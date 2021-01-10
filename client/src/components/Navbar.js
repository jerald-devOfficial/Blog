import React, { useState } from "react";
import { Link } from "react-router-dom";
import computerEmoji from "./img/computer-emoji.png";

function Navbar() {
  return (
    <header className="font-dosis fixed top-0 w-screen bg-white shadow-lg flex justify-between items-center px-4 z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src={computerEmoji}
              alt="computer emoji"
              className="h-8 w-8 inline"
            />
            <h1 className="inline ml-2">Blog</h1>
          </Link>
        </div>
      </div>
      <div className="flex">
        <Link
          to="/posts"
          className="font-bold px-2 py-1 text-black text-1xl rounded hover:bg-gray-100"
        >
          Posts
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
