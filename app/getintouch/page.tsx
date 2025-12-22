import Image from "next/image";
import React from "react";

export default function GetInTouchPage() {
  return (
    // <main className="min-h-screen flex flex-col md:flex-row ">
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 ">
      <Image
        src="/getInTouch.webp"
        alt="About Courage Obayuwana Films"
        fill
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2U1ZTVlNSIvPjwvc3ZnPg=="
      />
      {/* Left Side - Form (White Background) */}
      {/* <div className="w-full md:w-1/2  text-black p-8 md:p-16 lg:p-24 flex items-center pt-32 xl:pt-72 pb-20 xl:pb-60 px-5 xl:px-60 relative z-10"></div> */}
      <div className="w-full text-black p-8 flex items-center pt-32 px-5 2xl:pl-60 relative z-10">
        <div className="w-full max-w-xl xl:mt-20">
          <h1 className="text-3xl xl:text-4xl font-normal mb-6 ">
            Get in touch
          </h1>
          <p className="text-lg xl:text-xl mb-10 text-black ">
            Interested in collaborating? Want to discuss your brief? Fill out
            some info and I will be in touch shortly.
          </p>

          <form className="w-full">
            <div className="flex flex-col gap-6">
              {/* Name Fields */}
              <div>
                <label htmlFor="firstName" className="block mb-3 text-sm">
                  Name <span className="text-black">(required)</span>
                </label>
                <div className="flex gap-3 w-full">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="firstName" className="text-xs text-black">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="FirstName"
                      placeholder=""
                      required
                      className="border border-black rounded-full w-full px-5 py-3 
                        bg-white text-black placeholder:text-black/30
                        focus:outline-2 focus:outline-black focus:outline-offset-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="lastName" className="text-xs text-black">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="LastName"
                      placeholder=""
                      required
                      className="border border-black rounded-full w-full px-5 py-3 
                        bg-white text-black placeholder:text-black/30
                        focus:outline-2 focus:outline-black focus:outline-offset-2"
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
                  className="border border-black rounded-full w-full px-5 py-3 
                    bg-white text-black placeholder:text-black/30
                    focus:outline-2 focus:outline-black focus:outline-offset-2"
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
                  rows={3}
                  placeholder=""
                  required
                  className="border border-black rounded-3xl w-full px-5 py-3 
                    bg-white text-black placeholder:text-black/30
                    focus:outline-2 focus:outline-black focus:outline-offset-2
                    resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled
              className="mt-6 rounded-full px-10 py-3 bg-black text-white font-medium
                hover:bg-black/80 transition-all duration-200
                active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
