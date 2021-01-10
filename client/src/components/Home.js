import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="min-h-screen  py-6 sm:py-12  bg-gray-100">
        <div className="relative py-3 sm:max-w-xl mt-16 sm:mt-13 sm:mx-auto ">
          <h1 className="font-bold text-2xl">
            Welcome to my blog. I'm Jerald.
          </h1>
          <p>
            I'm a full stack software developer using MERN stack and also a
            C/C++ programmer from Philippines. This is my blog where I write
            diverse topics and other tutorials I'd like to share with the world.
          </p>
          <p>
            I'm a full stack software developer using MERN stack and also a
            C/C++ programmer from Philippines. This is my blog where I write
            diverse topics and other tutorials I'd like to share with the workd.
          </p>
          <h2>Latest posts</h2>
        </div>
      </div>
    );
  }
}

export default Home;
