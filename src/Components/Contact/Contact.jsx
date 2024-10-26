import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://upskilling-egypt.com:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json().catch(() => {
        throw new Error("Invalid JSON response");
      });

      console.log(result);
      toast.success("تم إرسال النموذج بنجاح");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(`حدث خطأ: ${error.message}`);
    }
  };

  return (
    <div
      id="Contact"
      className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-10"
    >
      <div className="flex flex-col items-center gap-2 mb-10">
        <div className="flex gap-80 mb-2">
          <span className="block w-10 border-t-2 border-blue-400 rotate-[135deg]"></span>
          <span className="block w-10 border-t-2 border-blue-400 rotate-[-135deg]"></span>
        </div>
        <div className="flex items-center gap-4">
          <span className="block w-10 border-t-2 border-blue-400 rotate-45"></span>
          <h1 className="text-6xl font-extrabold text-blue-400 mb-14">
            Contact Us
          </h1>
          <span className="block w-10 border-t-2 border-blue-400 -rotate-45"></span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-96 max-w-md"
        >
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="bg-[#CEDCFF] border border-[#5180F6] rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#5180F6] placeholder-black"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className="bg-[#CEDCFF] text-black border border-[#5180F6] rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#5180F6] placeholder-black"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <input
            type="tel"
            placeholder="Phone"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Invalid phone number",
              },
            })}
            className="bg-[#CEDCFF] text-black border border-[#5180F6] rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#5180F6] placeholder-black"
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

          <button
            type="submit"
            className="border-2 border-[#5180F6] text-black rounded-full py-3 px-8 hover:bg-[#5180F6] w-40 hover:text-white transition duration-300 self-center"
          >
            Send
          </button>
        </form>

        <div className="flex flex-col gap-8 ml-14 ">
          <div className="flex items-center gap-3">
            <FaEnvelope size={30} className="text-[#5180F6]" />
            <span className="text-lg text-gray-600">
              upskilling.eg1@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt size={30} className="text-[#5180F6]" />
            <span className="text-lg text-gray-600">+20 115 493 2137</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
