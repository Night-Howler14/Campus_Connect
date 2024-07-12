import React, { useState } from "react";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="bg-c flex flex-col items-center justify-center relative my-[5rem]">
      <style>
        {`
          body {
            background-color: #d4ddb7;
          }
        `}
      </style>
      <div className="max-w-4xl w-full mx-auto px-4">
        <img
          src="images/want_feedback.png"
          className="absolute top- left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-70 lg:w-88 z-0"
        />
        {/* <img
          src="images/icon.png"
          className="absolute top-9 left-7 w-10 h-10 z-8"
        /> */}
        {/* <p className="ml-4 absolute top-12 left-14">CAMPUS CONNECT</p> */}
        <div className="bg-d p-8 bg-opacity-50 rounded z-20">
          <form
            onSubmit={handleSubmit}
            className="w-full"
            style={{ marginTop: "100px" }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-f">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input mt-1 block w-full rounded-full z-100 pl-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-f">
                Email Id
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input mt-1 block w-full rounded-full pl-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-f">
                Description
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea mt-1 block w-full rounded pl-2"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-6 flex justify-center">
              {" "}
              {/* Add flex and justify-center to center the button */}
              <button
                type="submit"
                className="bg-b hover:bg-b text-white font-bold py-2 px-20 rounded-full"
                style={{ marginTop: "10px" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
