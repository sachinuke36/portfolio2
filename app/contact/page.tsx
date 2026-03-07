"use client"

import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {

  const [status, setStatus] = useState("Ready to compose.")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending message...")
    setTimeout(() => {
      setStatus("Message transmitted successfully.")
    }, 1500)
  }

  return (
    <div className="font-mono max-w-6xl mx-auto mt-2 md:mt-6 text-sm px-2 md:px-0">

      {/* Header */}
      <div className="flex justify-between border border-gray-700 p-2 md:p-3 bg-[#0f131a]">
        <span className="text-gray-300 text-xs md:text-sm">&gt; /bin/contact</span>
        <span className="text-gray-500 text-xs md:text-sm">--compose</span>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="border-x border-b border-gray-700 bg-[#0b0f14]"
      >

        {/* To */}
        <div className="flex flex-col sm:flex-row border-b border-gray-700 p-2 md:p-3">
          <span className="w-full sm:w-24 text-gray-500 mb-1 sm:mb-0">To:</span>
          <span className="text-blue-400 text-xs md:text-sm break-all">sachinuke36@kgpian.iitkgp.ac.in</span>
        </div>

        {/* From */}
        <div className="flex flex-col sm:flex-row border-b border-gray-700 p-2 md:p-3">
          <span className="w-full sm:w-24 text-gray-500 mb-1 sm:mb-0">From:</span>
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-transparent outline-none text-gray-300 w-full text-xs md:text-sm"
            required
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col sm:flex-row border-b border-gray-700 p-2 md:p-3">
          <span className="w-full sm:w-24 text-gray-500 mb-1 sm:mb-0">Subject:</span>
          <input
            type="text"
            placeholder="Connection request / Project discussion"
            className="bg-transparent outline-none text-gray-300 w-full text-xs md:text-sm"
          />
        </div>

        {/* Message */}
        <div className="p-2 md:p-3 border-b border-gray-700">
          <textarea
            rows={10}
            placeholder="> Type your message here..."
            className="w-full bg-transparent outline-none text-gray-300 resize-none text-xs md:text-sm"
            required
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 p-2 md:p-3 bg-[#0f131a]">

          <div className="text-gray-500 text-xs order-2 sm:order-1">
            {status}
          </div>

          <div className="flex items-center gap-3 md:gap-4 order-1 sm:order-2">

            <a
              href="https://github.com/sachinuke36"
              target="_blank"
              className="text-gray-500 hover:text-white text-base md:text-sm"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sachin-uke-757892259/"
              target="_blank"
              className="text-gray-500 hover:text-white text-base md:text-sm"
            >
              <FaLinkedin />
            </a>

            <button
              type="submit"
              className="border border-gray-600 px-3 md:px-4 py-1 hover:border-blue-400 hover:text-white transition text-xs md:text-sm"
            >
              [ SEND ]
            </button>

          </div>

        </div>

      </form>

    </div>
  )
}