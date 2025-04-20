import React, { useState } from 'react';
import Swal from 'sweetalert2';

const FormSupport = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    termsAccepted: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Success!",
      text: "Message Sent!",
      icon: "success",
      background: "#141414",
      color : "#fff",
      confirmButtonColor: "#E50000"
    });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      termsAccepted: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="mt-20">
      <form
        onSubmit={onSubmit}
        className="bg-[#0F0F0F] md:p-12 rounded-2xl p-8 md:w-2xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4"
      >
        <div className="flex flex-col gap-4">
          <label className="text-white text-lg font-bold">First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            className="bg-[#141414] px-4 py-2 placeholder:text-white rounded-md focus:outline-gray-500 caret-white text-white"
            required
            placeholder="Enter Your First Name"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-white text-lg font-bold">Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            className="bg-[#141414] px-4 py-2 placeholder:text-white rounded-md focus:outline-gray-500 caret-white text-white"
            required
            placeholder="Enter Your Last Name"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-white text-lg font-bold">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="bg-[#141414] px-4 py-2 text-white placeholder:text-white rounded-md focus:outline-gray-500 caret-white"
            required
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col md:col-span-2 gap-4">
          <label className="text-white text-lg font-bold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-[#141414] focus:outline-gray-500 caret-white text-white p-2 rounded-md"
            placeholder="Enter Your Message"
            rows={4}
          ></textarea>
        </div>

        <div className="flex flex-col md:col-span-2 gap-4">
          <div className="flex gap-4">
            <input
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              type="checkbox"
              className="cursor-pointer w-4"
              required
            />
            <label className="text-white">I accept the terms & conditions</label>
          </div>
          <button
            type="submit"
            className="p-2 cursor-pointer bg-[#E50000] hover:bg-[#cc0000] rounded-md text-white font-bold transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSupport;
