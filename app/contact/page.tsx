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
    <div className="font-mono max-w-6xl mx-auto mt-6 text-sm">

      {/* Header */}
      <div className="flex justify-between border border-gray-700 p-3 bg-[#0f131a]">
        <span className="text-gray-300">&gt; /bin/contact</span>
        <span className="text-gray-500">--compose</span>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="border-x border-b border-gray-700 bg-[#0b0f14]"
      >

        {/* To */}
        <div className="flex border-b border-gray-700 p-3">
          <span className="w-24 text-gray-500">To:</span>
          <span className="text-blue-400">sachinuke36@kgpian.iitkgp.ac.in</span>
        </div>

        {/* From */}
        <div className="flex border-b border-gray-700 p-3">
          <span className="w-24 text-gray-500">From:</span>
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-transparent outline-none text-gray-300 w-full"
            required
          />
        </div>

        {/* Subject */}
        <div className="flex border-b border-gray-700 p-3">
          <span className="w-24 text-gray-500">Subject:</span>
          <input
            type="text"
            placeholder="Connection request / Project discussion"
            className="bg-transparent outline-none text-gray-300 w-full"
          />
        </div>

        {/* Message */}
        <div className="p-3 border-b border-gray-700">
          <textarea
            rows={10}
            placeholder="> Type your message here..."
            className="w-full bg-transparent outline-none text-gray-300 resize-none"
            required
          />
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-3 bg-[#0f131a]">

          <div className="text-gray-500 text-xs">
            {status}
          </div>

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/sachinuke36"
              target="_blank"
              className="text-gray-500 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sachin-uke-757892259/"
              target="_blank"
              className="text-gray-500 hover:text-white"
            >
              <FaLinkedin />
            </a>

            <button
              type="submit"
              className="border border-gray-600 px-4 py-1 hover:border-blue-400 hover:text-white transition"
            >
              [ SEND ]
            </button>

          </div>

        </div>

      </form>

    </div>
  )
}