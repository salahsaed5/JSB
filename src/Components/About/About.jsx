import React from "react";
import backgroundImg from "../../assets/Rectangle 262.png"; // صورة الخلفية
import contentImg from "../../assets/Rectangle 263.png"; // صورة المحتوى

const About = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* الحاوية الأساسية مع التنسيق الأفقي */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full p-10 rounded-3xl"
        style={{
          backgroundColor: "#6D91EE",
        }}
      >
        {/* القسم الأيسر */}
        <div className="space-y-6 flex flex-col items-center text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-white">About Us</h2>
          <img
            src={contentImg}
            alt="Content"
            className="rounded-xl shadow-lg object-cover w-72"
          />
          <p className="text-lg text-white leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
       
        </div>

        {/* القسم الأيمن */}
        <div className="space-y-6 flex flex-col items-center text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-white">Where</h2>
          <p className="text-lg text-white leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <button className="bg-yellow-400 text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
            Help Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
  