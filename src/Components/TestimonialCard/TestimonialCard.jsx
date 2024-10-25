import React from "react";
import { FaStar } from "react-icons/fa";
import picture from "../../assets/Ellipse 1.png";

const TestimonialCard = ({ name, image, text, rating }) => (
  <div
    className="border-[#6D91EE] rounded-3xl p-6 shadow-md bg-white flex gap-4 w-full md:w-[550px]"
    style={{ border: '1.5px solid #6D91EE' }}
  >
    <div className="flex-shrink-0">
      <img
        src={image}
        alt={name}
        className="rounded-full object-cover"
        style={{ width: '80px', height: '80px' }}
      />
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <h3 className="text-lg font-semibold text-[#6D91EE]">{name}</h3>
      <p className="text-gray-600 mt-1">{text}</p>
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-blue-400" : "text-gray-300"}
          />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Courtney Henry",
      image: picture,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    {
      name: "Courtney Henry",
      image: picture,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    {
      name: "Courtney Henry",
      image: picture,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    {
      name: "Courtney Henry",
      image: picture,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-10 md:p-20 flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 mb-10">
        <div className="flex gap-10 md:gap-80 mb-2">
          <span className="block w-10 border-t-2 border-blue-400 rotate-[135deg]"></span>
          <span className="block w-10 border-t-2 border-blue-400 rotate-[-135deg]"></span>
        </div>
        <div className="flex items-center gap-4">
          <span className="block w-10 border-t-2 border-blue-400 rotate-45"></span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-400 mb-8 md:mb-14">
            Testimonials
          </h1>
          <span className="block w-10 border-t-2 border-blue-400 -rotate-45"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full max-w-6xl">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            image={testimonial.image}
            text={testimonial.text}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
