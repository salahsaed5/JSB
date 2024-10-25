import React from "react";
import avatarImg from "../../assets/p1.png";
import logo from "../../assets/Group 565.png";

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${avatarImg})`,
        backgroundSize: "60%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", 
      }}
    >
      <div className="absolute inset-0 flex flex-col md:flex-row items-start justify-end p-6 md:p-20">
        <img
          src={logo}
          alt="Round Rock Logo"
          className="absolute w-[449px] h-[87px] top-20 right-10 md:right-[400px]"
        />

        <div
          className="flex flex-col items-center justify-center text-white space-y-6 mt-32 md:mt-48 mx-auto"
          style={{ paddingLeft: " 450px" }}
        >
          <button className="w-[167px] h-[50px] rounded-[20px] bg-blue-600 text-white font-semibold hover:scale-105 transition duration-300">
            Experts
          </button>

          <div className="text-center leading-none">
            <h3 className="text-8xl font-thin text-[#4F4F4F]">Lorem</h3>
            <h1
              style={{ marginTop: "-10px" }}
              className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#4F4F4F]"
            >
              Lorem lorem
            </h1>
          </div>

          <p className="text-[#4F4F4F] text-sm md:text-lg text-center pt-4">
            <h5> Lorem Ipsum is simply dummy text of the printing and </h5>
            <h5>typesetting industry. Lorem Ipsum has been the industry's</h5>
            standard dummy text ever since the
          </p>

          <button className="w-[167px] h-[50px] rounded-[20px] bg-blue-600 text-white font-semibold hover:opacity-85 transition duration-300 hover:scale-105">
            Help Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
