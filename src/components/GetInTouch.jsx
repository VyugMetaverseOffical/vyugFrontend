import React, { useRef } from "react";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "./toast";
function GetInTouch({ BgColor, heading }) {
  // Create refs for each input field
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const codeRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const companyNameRef = useRef(null);
  const companyWebsiteRef = useRef(null);
  const companySpecRef = useRef(null);
  const locationRef = useRef(null);
  const interestRef = useRef(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate fields
    if (
      !firstNameRef.current ||
      !lastNameReffirstNameRef.current ||
      !emailReffirstNameRef.current ||
      !codeReffirstNameRef.current ||
      !phoneNumberReffirstNameRef.current ||
      !companyNameReffirstNameRef.current ||
      !companyWebsiteReffirstNameRef.current ||
      !companySpecReffirstNameRef.current ||
      !locationReffirstNameRef.current ||
      !interestReffirstNameRef.current
    ) {
      toast.error(<ToastError data={"Please fill all fields"} />, ErrorStyling);
      return;
    }

    // Get values from refs
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const code = codeRef.current.value.trim();
    const phoneNumber = phoneNumberRef.current.value.trim();
    const companyName = companyNameRef.current.value.trim();
    const companyWebsite = companyWebsiteRef.current.value.trim();
    const companySpec = companySpecRef.current.value.trim();
    const location = locationRef.current.value.trim();
    const interest = interestRef.current.value.trim();

    // If all fields are filled
    toast.success(
      <ToastSuccess data={"Your response is saved"} />,
      SuccessStyling
    );
    // Here you can handle form data, send it to a server, etc.
  };

  return (
    <section
      className={`py-16 md:py-20 ${BgColor === "black" && "bg-[#242424]"}`}
    >
      <h3
        className={`max-w-5xl mx-auto header  text-[31.5px] md:text-[36px] font-bold uppercase text-center text-[#242424] ${
          BgColor === "black" && "text-[#fff]"
        }`}
      >
        {heading ? heading : "GET IN TOUCH"}
      </h3>
      <form
        className="flex justify-center items-center flex-wrap gap-3 max-w-4xl mx-auto my-8 md:my-12 px-3"
        onSubmit={handleSubmit} // Add onSubmit handler
      >
        <div className="w-full md:w-[45%] flex flex-col">
          <label
            htmlFor="firstName"
            className={`header text-base md:text-lg text-[#242424] font-bold mb-1 mt-2 ${
              BgColor === "black" && "text-[#fff]"
            }`}
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className={`border border-[#AFAFAF] rounded-[0.5rem] p-3 px-5 ${
              BgColor === "black" && "text-[#fff] bg-[#242424]"
            }`}
          />
        </div>
        <div className="w-full md:w-[45%] flex flex-col">
          <label
            htmlFor="lastName"
            className={`header text-base md:text-lg text-[#242424] font-bold mb-1 mt-2 ${
              BgColor === "black" && "text-[#fff]"
            }`}
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className={`border border-[#AFAFAF] rounded-[0.5rem] p-3 px-5 ${
              BgColor === "black" && "text-[#fff] bg-[#242424]"
            }`}
            ref={lastNameRef}
          />
        </div>
        <div className="w-full md:w-[45%] flex flex-col">
          <label
            htmlFor="email"
            className={`header text-base md:text-lg text-[#242424] font-bold mb-1 mt-2 ${
              BgColor === "black" && "text-[#fff]"
            }`}
          >
            Business Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className={`border border-[#AFAFAF] rounded-[0.5rem] p-3 px-5 ${
              BgColor === "black" && "text-[#fff] bg-[#242424]"
            }`}
            ref={emailRef}
          />
        </div>
        <div className="w-full md:w-[45%] flex gap-3">
          <div className="w-[20%] flex flex-col">
            <label
              htmlFor="code"
              className={`header text-base md:text-lg text-[#242424] font-bold mb-1 mt-2 ${
                BgColor === "black" && "text-[#fff]"
              }`}
            >
              Code
            </label>
            <input
              type="number"
              id="code"
              placeholder="+91"
              className={`border border-[#AFAFAF] rounded-[0.5rem] p-3 px-5 ${
                BgColor === "black" && "text-[#fff] bg-[#242424]"
              }`}
              ref={codeRef}
            />
          </div>
          <div className="w-[80%] flex flex-col">
            <label
              htmlFor="phoneNumber"
              className={`header text-base md:text-lg text-[#242424] font-bold mb-1 mt-2 ${
                BgColor === "black" && "text-[#fff]"
              }`}
            >
              Contact No.
            </label>
            <input
              type="number"
              id="phoneNumber"
              placeholder=""
              className={`border border-[#AFAFAF] rounded-[0.5rem] p-3 px-5 ${
                BgColor === "black" && "text-[#fff] bg-[#242424]"
              }`}
              ref={phoneNumberRef}
            />
          </div>
        </div>
        <div className="w-full md:w-[45%] flex flex-col">
          <label
            htmlFor="companyName"
            className={`header text-base md:text-lg text-[#242424] font-bold mb-1 mt-2 ${
              BgColor === "black" && "text-[#fff]"
            }`}
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            placeholder="Company Name"
            className={`border border-[#AFAFAF] rounded-[0.5rem] p-3 px-5 ${
              BgColor === "black" && "text-[#fff] bg-[#242424]"
            }`}
            ref={companyNameRef}
          />
        </div>
        <div className="w-full md:w-[45%] flex flex-col">
          <label
            htmlFor="companyWebsite"
            className={`header text-base md:text-lg text-[#242424] font-bold mb-1 mt-2 ${
              BgColor === "black" && "text-[#fff]"
            }`}
          >
            Company Website
          </label>
          <input
            type="text"
            id="companyWebsite"
            placeholder="Company Website"
            className={`border border-[#AFAFAF] rounded-[0.5rem] p-3 px-5 ${
              BgColor === "black" && "text-[#fff] bg-[#242424]"
            }`}
            ref={companyWebsiteRef}
          />
        </div>
        <div className="w-full md:w-[45%] flex flex-col">
          <label
            htmlFor="companySpec"
            className={`header text-base md:text-lg text-[#242424] font-bold mb-1 mt-2 ${
              BgColor === "black" && "text-[#fff]"
            }`}
          >
            Company Specialization
          </label>
          <input
            type="text"
            id="companySpec"
            placeholder="Company Specialization"
            className={`border border-[#AFAFAF] rounded-[0.5rem] p-3 px-5 ${
              BgColor === "black" && "text-[#fff] bg-[#242424]"
            }`}
            ref={companySpecRef}
          />
        </div>
        <div className="w-full md:w-[45%] flex flex-col">
          <label
            htmlFor="location"
            className={`header text-base md:text-lg text-[#242424] font-bold mb-1 mt-2 ${
              BgColor === "black" && "text-[#fff]"
            }`}
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            className={`border border-[#AFAFAF] rounded-[0.5rem] p-3 px-5 ${
              BgColor === "black" && "text-[#fff] bg-[#242424]"
            }`}
            ref={locationRef}
          />
        </div>
        <div className="w-full md:w-[92%] flex flex-col">
          <label
            htmlFor="interest"
            className={`header text-base md:text-lg text-[#242424] font-bold mb-1 mt-2 ${
              BgColor === "black" && "text-[#fff]"
            }`}
          >
            Tell us about your interest in investing in VYUG
          </label>
          <textarea
            id="interest"
            placeholder="Type here"
            className={`border border-[#AFAFAF] rounded-[0.5rem] p-3 px-5 h-[150px] ${
              BgColor === "black" && "text-[#fff] bg-[#242424]"
            }`}
            ref={interestRef}
          />
        </div>
        <div className="w-full md:w-[92%] my-6 md:my-10">
          <button
            type="submit" // Ensure button type is submit
            className={`${
              BgColor === "black" ? "black-btn" : "white-btn"
            } py-2 px-4 block lg:px-10 description text-sm mx-auto sm:text-base uppercase`}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default GetInTouch;
