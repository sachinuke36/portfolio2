"use client"

import { renderComponent } from "@/utils/SidebarComponent"
import { useState } from "react"
import { FaTerminal } from "react-icons/fa6"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { socials } from "@/data/socials"
import { options } from "@/data/options"

const Home = () => {

  const [activeView, setActiveView] = useState("Overview")

  

  return (
    <div className="max-w-6xl mx-auto mt-6 text-gray-400 font-mono">

      {/* Main Panel */}
      <div className="flex border border-gray-700 bg-[#0b0f14] h-[calc(100vh-120px)] overflow-hidden">

        {/* Sidebar */}
        <div className="w-65 border-r border-gray-700 flex flex-col justify-between">

          {/* Top section */}
          <div>

            <div className="p-3 text-sm tracking-wider text-blue-400 border-b border-gray-700">
              @HOME
            </div>

            <div className="flex flex-col">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => setActiveView(option.value)}
                  className={`flex items-center gap-2 p-3 cursor-pointer transition-colors text-sm
                  ${
                    activeView === option.value
                      ? "bg-gray-800 text-white"
                      : "hover:bg-gray-900"
                  }`}
                >
                  <FaTerminal className="text-xs text-gray-500" />
                  {option.label}
                </div>
              ))}
            </div>

          </div>


          {/* Bottom connections */}
          <div className="border-t border-gray-700 p-3">

            <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
              
              {/* blinking indicator */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>

              ACTIVE_CONNECTIONS
            </div>


            <div className="flex flex-col gap-2 text-gray-500 text-sm">

              <a
                href={socials.twitter}
                target="_blank"
                className="flex justify-between hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <FaTwitter className="text-xs" />
                  X (Twitter)
                </span>

                <span className="text-xs">@sachinuke36</span>
              </a>


              <a
                href={socials.github}
                target="_blank"
                className="flex justify-between hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <FaGithub className="text-xs" />
                  GitHub
                </span>

                <span className="text-xs">@sachinuke36</span>
              </a>


              <a
                href={socials.linkedin}
                target="_blank"
                className="flex justify-between hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <FaLinkedin className="text-xs" />
                  LinkedIn
                </span>

                <span className="text-xs">Sachin Uke</span>
              </a>


              <a
                href={socials.instagram}
                target="_blank"
                className="flex justify-between hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <FaInstagram className="text-xs" />
                  Instagram
                </span>

                <span className="text-xs">@sachin_uke1</span>
              </a>

            </div>

          </div>

        </div>


        {/* Main Content */}
        <div className="flex-1 flex flex-col">

          <div className="border-b border-gray-700 mx-4 p-4">
            <h2 className="text-lg text-gray-200 tracking-wide">
              @ {activeView}
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto p-8">
            {renderComponent(activeView)}
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home