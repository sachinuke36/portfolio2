"use client"

import { renderComponent } from "@/utils/SidebarComponent"
import { useState } from "react"
import { FaTerminal } from "react-icons/fa6"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { socials } from "@/data/socials"
import { options } from "@/data/options"

const Home = () => {

  const [activeView, setActiveView] = useState("Overview")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)



  return (
    <div className="max-w-6xl mx-auto mt-2 md:mt-6 text-gray-400 font-mono px-2 md:px-0">

      {/* Main Panel */}
      <div className="flex relative border border-gray-700 bg-[#0b0f14] h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] overflow-hidden">

        {/* Sidebar */}
        <div className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          fixed md:relative
          z-30
          w-64 md:w-65
          h-full
          border-r border-gray-700
          bg-[#0b0f14]
          flex flex-col gap-10
          transition-transform duration-300 ease-in-out
        `}>

          {/* Top section */}
          <div>

            <div className="p-3 text-sm tracking-wider text-blue-400 md:border-b border-gray-700">
              @HOME
            </div>

            <div className="flex flex-col">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setActiveView(option.value)
                    setIsSidebarOpen(false)
                  }}
                  className={`flex items-center gap-2 p-3  cursor-pointer transition-colors text-sm
                  ${
                    activeView === option.value
                      ? "md:bg-gray-800 text-white"
                      : "md:hover:bg-gray-900"
                  }`}
                >
                  <FaTerminal className="text-xs text-gray-500" />
                  {option.label}
                </div>
              ))}
            </div>

          </div>


          {/* Bottom connections */}
          <div className="md:border-t border-gray-700 p-3">

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


        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col w-full">

          <div className="border-b border-gray-700 p-3 md:p-4 mx-2 md:mx-4 flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden text-gray-400 hover:text-white text-xl mr-3"
              aria-label="Toggle sidebar"
            >
              <HiMenu />
            </button>

            <h2 className="text-base md:text-lg text-gray-200 tracking-wide">
              @ {activeView}
            </h2>

            <div className="md:hidden w-8"></div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            {renderComponent(activeView)}
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home