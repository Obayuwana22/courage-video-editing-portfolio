import React from "react";

const Contact = () => {
  return (
    <div className="text-white py-16 md:py-24 xl:px-60">
      <div className="flex flex-col md:flex-row md:items-start md:gap-16 xl:gap-24">
        {/* Left Column - Heading and Description */}
        <div className="mb-12 md:mb-0 md:w-1/3">
          <h2 className="text-3xl md:text-4xl mb-6 font-normal">
            Get in touch
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            Interested in collaborating? Want to discuss your brief? Fill out
            some info and I will be in touch shortly.
          </p>
        </div>

        {/* Right Column - Form */}
        <form className="w-full md:w-2/3 md:flex-1">
          <div className="flex flex-col gap-6">
            {/* Name Fields */}
            <div>
              <label htmlFor="firstName" className="block mb-3 text-sm">
                Name <span className="text-white/50">(required)</span>
              </label>
              <div className="flex gap-3 w-full">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="firstName" className="text-xs ">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="FirstName"
                    placeholder=""
                    required
                    className="border border-white rounded-full w-full px-5 py-3 
                      bg-transparent text-white placeholder:text-white/30
                      focus:outline-2 focus:outline-white focus:outline-offset-2 focus:bg-white/20
                      "
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="lastName" className="text-xs ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="LastName"
                    placeholder=""
                    required
                    className="border border-white rounded-full w-full px-5 py-3 
                      bg-transparent text-white placeholder:text-white/30
                      focus:outline-2 focus:outline-white focus:outline-offset-2 focus:bg-white/20
                      "
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                Email <span className="text-white/50">(required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                placeholder=""
                required
               className="border border-white rounded-full w-full px-5 py-3 
                      bg-transparent text-white placeholder:text-white/30
                      focus:outline-2 focus:outline-white focus:outline-offset-2 focus:bg-white/20
                      "
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm">
                Message <span className="text-white/50">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder=""
                required
                className="border border-white rounded-3xl w-full px-5 py-3 
                      bg-transparent text-white placeholder:text-white/30
                      focus:outline-2 focus:outline-white focus:outline-offset-2 focus:bg-white/20 resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled
            className="mt-6 rounded-full px-10 py-3 bg-white/90 text-black font-medium
              hover:bg-white transition-all duration-200
              active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>

      {/* Footer Information */}
      {/* <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-white/60 text-sm">www.antonio-ribeiro-films.com</p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <p className="text-white/60 text-sm">+44 (0)7919 032192</p>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
