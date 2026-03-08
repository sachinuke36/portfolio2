"use client"

import { education } from "@/data/education"



export default function Education() {
  return (
    <div className="font-mono text-sm">

      {/* header */}
      <div className="flex items-center gap-2 text-gray-300 mb-6">
        <span>⚙</span>
        <h2 className="tracking-wider">KERNEL / FIRMWARE VERSIONS</h2>
      </div>

      <div className="relative border-gray-700 pl-6 space-y-10">

        {education.map((edu, i) => (
          <div key={i} className="relative border-l border-gray-700 pl-4">

<div className="absolute -left-1.75 top-4 flex items-center justify-center">

              {/* ping ring */}
              <span className="absolute inline-flex h-4 w-4 rounded-full border border-white opacity-60 animate-ping"></span>

              {/* hollow circle */}
              <span className="relative inline-flex h-3 w-3 rounded-full border border-white bg-[#0b0f14]"></span>

            </div>
            {/* title */}
            <div className="flex gap-2 flex-row items-center justify-between">

              <h3 className="text-gray-200">
                {edu.degree}
              </h3>

              <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">
                {edu.version} ({edu.duration})
              </span>

            </div>

            {/* institute */}
            <p className="text-gray-400 mt-1">
              {edu.institute}
            </p>

            {/* location */}
            <p className="text-gray-500 text-xs mb-4">
              Location: {edu.location}
            </p>

            {/* installed modules */}
            <p className="text-gray-500 text-xs mb-2">
              INSTALLED MODULES:
            </p>

            <div className="flex flex-wrap gap-2">

              {edu.modules.map((module, index) => (
                <span
                  key={index}
                  className="border border-gray-700 px-2 py-1 text-xs text-gray-300 bg-[#0f131a]"
                >
                  {module}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}