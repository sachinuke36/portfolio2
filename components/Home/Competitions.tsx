"use client"

import { competitions } from "@/data/competitions"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

export default function Competitions() {
  return (
    <div className="font-mono text-sm">

      <div className="mb-6">
        <h2 className="text-xl text-gray-200">Competitions</h2>
        <p className="text-gray-500 text-xs">/var/log/competitions.log</p>
      </div>

      <div className="space-y-10 relative pl-6">

        {competitions.map((comp, index) => (
          <div key={index} className="relative border-l border-gray-700 pl-6">

            {/* timeline indicator */}
            <div className="absolute -left-1.75 top-2 flex items-center justify-center">

              <span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500"></span>

            </div>

            {/* header */}
            <p className="text-xs text-gray-400 mb-1">
              <span className="text-blue-400">[{comp.date}]</span>{" "}
              <span className="text-yellow-400">COMPETITION</span>
            </p>

            {/* title */}
            <h3 className="text-gray-200 text-base">
              {comp.title}
            </h3>

            <p className="text-gray-500 text-xs mb-3">
              {comp.event}
            </p>

            {/* tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {comp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="border border-gray-700 px-2 py-1 text-xs text-gray-300 bg-[#0f131a]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* objective */}
            <p className="text-gray-400 mb-3">
              <span className="text-gray-300">Objective:</span> {comp.objective}
            </p>

            {/* achievements */}
            <ul className="space-y-1 text-gray-400 mb-4">
              {comp.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            {/* links */}
            <div className="flex gap-4 text-xs text-gray-400">

              {comp.github && (
                <a
                  href={comp.github}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <FaGithub />
                  src/repo
                </a>
              )}

              {comp.live && (
                <a
                  href={comp.live}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <FiExternalLink />
                  deploy/live
                </a>
              )}

            </div>

          </div>
        ))}

        <p className="text-gray-500 text-xs">— End of log</p>

      </div>
    </div>
  )
}