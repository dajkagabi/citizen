import React from "react";

const Hero = () => {
  return (
    <div className="bg-white p-12 lg:p-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="mb-8">
            <h2 className="text-3xl font-light mb-4 text-gray-800">
              Global Network
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            CITIZEN is a manufacture, a watch company that does all its
            manufacturing in-house, from crafting individual watch components to
            final assembly. A truly global watch brand, CITIZEN does business in
            over 140 countries worldwide.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8">
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4 text-gray-800">
              EUROPE
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>UK
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Austria
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>France
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Germany
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Italy
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Netherlands
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Portugal
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Spain
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Switzerland
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4 text-gray-800">
              AFRICA
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm mb-8">
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>South Africa
              </li>
            </ul>
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4 text-gray-800">
              MIDDLE EAST
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Middle East
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4 text-gray-800">
              ASIA
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>China
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>India
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Malaysia
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Taiwan Region
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Hong Kong SAR
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Philippines
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Japan
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Singapore
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Thailand
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Vietnam
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Indonesia
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Cambodia
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4 text-gray-800">
              OCEANIA
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm mb-8">
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Australia
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>New Zealand
              </li>
            </ul>
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4 text-gray-800">
              AMERICAS
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Canada
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Panama
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>Mexico
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">&gt;</span>USA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
