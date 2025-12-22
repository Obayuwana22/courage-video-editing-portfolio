import React from "react";

export default function GetInTouchPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row ">
      {/* Left Side - Form (White Background) */}
      <div className="w-full md:w-1/2 bg-white text-black p-8 md:p-16 lg:p-24 flex items-center pt-32 xl:pt-72 pb-20 xl:pb-60 px-5 xl:px-60">
        <div className="w-full max-w-xl">
          <h1 className="text-4xl md:text-5xl font-normal mb-6">
            Get in touch
          </h1>
          <p className="text-lg md:text-xl mb-10 text-black/80 leading-relaxed">
            Interested in collaborating? Want to discuss your brief? Fill out
            some info and I will be in touch shortly.
          </p>

          <form className="w-full">
            <div className="flex flex-col gap-6">
              {/* Name Fields */}
              <div>
                <label htmlFor="firstName" className="block mb-3 text-sm">
                  Name <span className="text-black/50">(required)</span>
                </label>
                <div className="flex gap-3 w-full">
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      htmlFor="firstName"
                      className="text-xs text-black/70"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="FirstName"
                      placeholder=""
                      required
                      className="border border-black/30 rounded-full w-full px-5 py-3 
                        bg-white text-black placeholder:text-black/30
                        focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20
                        transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="lastName" className="text-xs text-black/70">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="LastName"
                      placeholder=""
                      required
                      className="border border-black/30 rounded-full w-full px-5 py-3 
                        bg-white text-black placeholder:text-black/30
                        focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20
                        transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm">
                  Email <span className="text-black/50">(required)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder=""
                  required
                  className="border border-black/30 rounded-full w-full px-5 py-3 
                    bg-white text-black placeholder:text-black/30
                    focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20
                    transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm">
                  Message <span className="text-black/50">(required)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder=""
                  required
                  className="border border-black/30 rounded-3xl w-full px-5 py-3 
                    bg-white text-black placeholder:text-black/30
                    focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20
                    transition-all duration-200 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 rounded-full px-10 py-3 bg-black text-white font-medium
                hover:bg-black/80 transition-all duration-200
                active:scale-95"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 bg-gray-900 min-h-100 md:min-h-screen">
        <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-white/20 text-center p-8">
            {/* Placeholder for background image */}
            <p className="text-sm">Background Image Area</p>
          </div>
        </div>
      </div>
    </main>
  );
}
