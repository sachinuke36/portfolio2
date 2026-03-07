"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import { FaFolder, FaChevronRight, FaChevronDown, FaGithub } from "react-icons/fa"

export default function Workbench() {

  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="font-mono max-w-6xl mx-auto mt-2 md:mt-6 text-sm px-2 md:px-0">

      {/* header */}
      <div className="mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl text-gray-200">/projects</h2>
        <p className="text-gray-500 text-xs">
          Active development environments and archived repositories.
        </p>
      </div>

      <div className="border border-gray-700">

        {projects.map((project, i) => {

          const isOpen = open === i

          return (
            <div key={i} className="border-b border-gray-700">

              {/* project header */}
              <div
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex items-center justify-between p-2 md:p-3 cursor-pointer hover:bg-[#11151b]"
              >

                <div className="flex items-center gap-2 md:gap-3">

                  {isOpen ? (
                    <FaChevronDown className="text-xs text-gray-500" />
                  ) : (
                    <FaChevronRight className="text-xs text-gray-500" />
                  )}

                  <FaFolder className="text-blue-400 text-sm" />

                  <span className="text-gray-200 text-xs md:text-sm">
                    {project.role}
                  </span>

                </div>

                <div className="text-xs text-gray-500 hidden sm:block">
                  {project.date}
                </div>

              </div>


              {/* expanded content */}
              {isOpen && (
                <div className="p-3 md:p-5 border-t border-gray-700 bg-[#0b0f14]">

                  {/* project meta */}
                  <p className="text-xs text-gray-500 mb-3">
                    {project.location} · {project.level}
                  </p>

                  {/* date for mobile - shown here instead of header */}
                  <p className="text-xs text-gray-500 mb-3 sm:hidden">
                    {project.date}
                  </p>

                  {/* description bullets */}
                  <ul className="space-y-2 text-gray-400 mb-4 text-xs md:text-sm">
                    {project.points.map((point, j) => (
                      <li key={j}>• {point}</li>
                    ))}
                  </ul>

                  {/* tech tags example */}
                  <div className="flex flex-wrap gap-2 mb-4">

                    {project.tags.map((tag, k) => (
                      <span
                        key={k}
                        className="px-2 py-1 border border-gray-700 text-xs text-gray-300 bg-[#0f131a]"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  {/* repo links */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-gray-400">

                    <a
                      className="flex items-center gap-2 hover:text-white"
                      href="#"
                    >
                      <FaGithub /> src/repo
                    </a>

                    <a
                      className="hover:text-white"
                      href="#"
                    >
                      deploy/live
                    </a>

                  </div>

                </div>
              )}

            </div>
          )
        })}

      </div>

    </div>
  )
}