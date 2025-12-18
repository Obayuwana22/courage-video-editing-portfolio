import React from "react";

const Contact = () => {
  return (
    <div className="text-white">
      <h2 className="text-2xl mb-5">Get in touch</h2>
      <p className="text-xl">
        Interested in collaborating? Want to discuss your brief? Fill out some
        info and I will be in touch shortly.{" "}
      </p>

      <form>
        <div className="flex flex-col gap-5 mt-20">
          <div>
            <label htmlFor="firstName">
              Name <span className="text-white/50 text-sm">(required)</span>
            </label>
            <div className="flex gap-2 mt-1">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="FirstName"
                  placeholder="First Name"
                  required
                  className="border border-white rounded-3xl w-full px-3 py-2 focus:outline-2 outline-white outline-offset-2"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="lastName" className="text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="LastName"
                  placeholder="Last Name"
                  required
                  className="border border-white rounded-3xl w-full px-3 py-2 focus:outline-2 outline-white outline-offset-2"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">
              Email <span className="text-white/50 text-sm">(required)</span>
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Your Email"
              required
              className="border border-white rounded-3xl w-full px-3 py-2 focus:outline-2 outline-white outline-offset-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message">
              Message <span className="text-white/50 text-sm">(required)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="What would you like to discuss?"
              required
              className="border border-white rounded-3xl w-full px-3 py-2 focus:outline-2 outline-white outline-offset-2"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled
          className="border rounded-3xl px-7 py-3 bg-white text-black mt-5 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
