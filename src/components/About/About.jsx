import React from "react";
import about from "../../assets/about.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={about}
          alt="Citizen watch movement"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-16">
        <h2 className="text-3xl font-bold text-primary mb-4">About</h2>
        <p className="text-lg text-secondary mb-8">
          CITIZEN is a watch company that has the capabilities of all its
          manufacturing in-house, from crafting individual watch components to
          final assembly. A truly global watch brand, CITIZEN does business in
          about 140 market worldwide.
        </p>
        <button className="flex items-center px-6 py-3 rounded-full border-2 border-primary text-primary">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default About;
