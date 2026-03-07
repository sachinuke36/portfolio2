export default function Overview() {
  return (
    <div className="space-y-6 text-sm">

      {/* USER IDENTITY */}
      <div>
        <p className="text-gray-500 mb-2">USER_IDENTITY</p>

        <p>
          Hello! I'm <span className="text-blue-400">Sachin Uke</span>, a
          software engineer passionate about building intelligent systems and
          scalable software. My work spans{" "}
          <span className="text-blue-400">
            AI/ML, Deep Learning, Generative AI applications, and AI Agents
          </span>{" "}
          along with designing robust{" "}
          <span className="text-green-400">
            backend systems and distributed architectures
          </span>.
        </p>

        <p className="mt-2">
          I also enjoy building modern{" "}
          <span className="text-yellow-400">
            full-stack web and mobile applications
          </span>{" "}
          using technologies like React, Next.js, Node.js, and cloud-native
          infrastructure.
        </p>

        <p className="mt-2">
          My goal is to combine <span className="text-blue-400">AI</span> and{" "}
          <span className="text-green-400">scalable engineering</span> to create
          impactful real-world systems.
        </p>
      </div>

      {/* CURRENT STATUS */}
      <div>
        <p className="text-gray-500 mb-2">CURRENT_STATUS</p>

        <div className="border border-gray-700 p-4 bg-black">
          <p>
            Process: <span className="text-green-400">RUNNING</span>
          </p>

          <p>
            Focus:{" "}
            <span className="text-blue-400">
              AI Systems, Backend Engineering, Full-Stack Development
            </span>
          </p>

          <p>
            Location: <span className="text-yellow-400">IIT Kharagpur</span>
          </p>
        </div>
      </div>

    </div>
  )
}