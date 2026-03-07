"use client"

import { experiences } from "@/data/experiences"



export default function Experience() {
    return (
        <div className="font-mono text-sm">

            <div className="mb-6">
                <h2 className="text-xl text-gray-200">Syslog</h2>
                <p className="text-gray-500 text-xs">/var/log/experience.log</p>
            </div>

            <div className="space-y-10 relative border-gray-700 pl-6">

                {experiences.map((exp, index) => (
                    <div key={index} className="relative border-l border-gray-700 pl-4">

                         {/* timeline indicator */}
            <div className="absolute -left-1.75 top-2 flex items-center justify-center">

              {/* ping */}
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-500 opacity-75 animate-ping"></span>

              {/* solid dot */}
              <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500"></span>

            </div>

                        <div>
                            {/* header */}
                            <p className="text-xs text-gray-400 mb-1">
                                <span className="text-blue-400">[{exp.date}]</span>{" "}
                                <span className="text-yellow-400">{exp.level}</span>{" "}
                                <span className="text-gray-500">@ {exp.location}</span>
                            </p>

                            {/* role */}
                            <h3 className="text-gray-200 text-base">
                                {exp.role}{" "}
                                <span className="text-gray-400">at {exp.company}</span>
                            </h3>

                            {/* points */}
                            <ul className="mt-2 space-y-1 text-gray-400">
                                {exp.points.map((p, i) => (
                                    <li key={i}>• {p}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}

                <p className="text-gray-500 text-xs">— End of log</p>

            </div>
        </div>
    )
}