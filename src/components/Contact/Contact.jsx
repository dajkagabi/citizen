import React from "react";

const Contact = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base text-[var(--main-text-color)] font-semibold tracking-wide uppercase">
            Get in touch
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Personal Service
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Have a question? A special request? Please feel free to contact us.
          </p>
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Write to us
              </h3>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="block w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="block w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className="block w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    className="block w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Send
                </button>
              </form>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Details
                </h3>
                <address className="not-italic text-gray-600 space-y-4">
                  <p>
                    <strong className="text-gray-900">
                      CITIZEN Headquarters
                    </strong>
                    <br />
                    123 Main Street
                    <br />
                    Anytown, USA 12345
                  </p>
                  <p>
                    <strong className="text-gray-900">Phone:</strong>
                    <br />
                    +1 123-456-7890
                  </p>
                  <p>
                    <strong className="text-gray-900">Email:</strong>
                    <br />
                    info@example.com
                  </p>
                </address>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps?q=123+Main+Street,+Anytown,+USA+12345&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps Location"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
