"use client"

import { skillGroups } from "@/data/skill"
import { useState } from "react"
import { FaChevronRight, FaChevronDown } from "react-icons/fa"



export default function Skills() {

  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="font-mono text-sm">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-200">Installed Packages</h2>
        <p className="text-gray-500 text-xs">/usr/local/skills</p>
      </div>


      <div className="border border-gray-700">

        {skillGroups.map((group, index) => {

          const isOpen = open === index

          return (
            <div key={group.name} className="border-b border-gray-700">

              {/* Category header */}
              <div
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex items-center gap-3 p-3 cursor-pointer hover:bg-[#11151b]"
              >
                {isOpen
                  ? <FaChevronDown className="text-xs text-gray-500" />
                  : <FaChevronRight className="text-xs text-gray-500" />
                }

                <span className="text-gray-200">{group.name}</span>

              </div>


              {/* Skills */}
              {isOpen && (
                <div className="space-y-3 p-4 pt-2">

                  {group.skills.map((skill) => (
                    <div key={skill.name}>

                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">
                          {skill.name}
                        </span>

                        <span className="text-gray-500">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-2 bg-gray-800">

                        <div
                          className="h-2 bg-blue-400"
                          style={{ width: `${skill.level}%` }}
                        />

                      </div>

                    </div>
                  ))}

                </div>
              )}

            </div>
          )
        })}

      </div>

    </div>
  )
}