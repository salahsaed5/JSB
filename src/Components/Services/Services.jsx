import React from "react";
import p1 from "../../assets/Rectangle 250 (1).png";
import p2 from "../../assets/Rectangle 250.png";
import p3 from "../../assets/Rectangle 250@2x.png";

const ServicesCard = ({ title, image, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-72">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h2 className="text-lg font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 bg-gray-100">
      <div className="flex flex-col items-center gap-2 mb-10">
        <div className="flex gap-44 mb-2">
          <span className="block w-10 border-t-2 border-blue-400 rotate-[135deg]"></span>
          <span className="block w-10 border-t-2 border-blue-400 rotate-[-135deg]"></span>
        </div>
        <div className="flex items-center gap-4">
          <span className="block w-10 border-t-2 border-blue-400 rotate-45"></span>
          <h1 className="text-4xl font-extrabold text-blue-400 mb-14">Services</h1>
          <span className="block w-10 border-t-2 border-blue-400 -rotate-45"></span>
        </div>
      </div>

      {/* Project Cards Section */}
      <div className="flex flex-wrap gap-5 justify-center">
        <ServicesCard
          title="Waste Collection"
          image={p1}
          description="We provide efficient and eco-friendly waste collection services for your community."
        />
        <ServicesCard
          title="Recycling Management"
          image={p2}
          description="Managing recyclables to ensure materials get reused and processed properly."
        />
        <ServicesCard
          title="Landfill Reduction"
          image={p3}
          description="Helping reduce landfill waste with sustainable practices."
        />
      </div>

      {/* Help Me Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700">
          Help Me
        </button>
      </div>
    </div>
  );
};

export default Services;
