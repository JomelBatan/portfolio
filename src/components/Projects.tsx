const expo = import.meta.env.VITE_EXPO_APP_LINK;
const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "SWIFFO",
      subtitle: "Online Reservation of Manpower Services",
      liveLink: "https://swiffo.onrender.com/",
      techStack: ["React", "Tailwind", "Node.Js", "Express.Js", "MongoDB"],
    },
    {
      id: 2,
      title: "Moss",
      subtitle: "Social Media App",
      liveLink: expo,
      techStack: [
        "React Native",
        "Expo",
        "Nativewind",
        "MongoDB",
        "Convex",
        "Express.Js",
        "Node.Js",
      ],
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-wider">
          Projects
        </h1>
        <div className="w-64 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mt-6"></div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="nes-click"
            onClick={() => window.open(project.liveLink, "_blank")}
          >
            <div className="relative items-center transform transition-all duration-500">
              {/* Main Floppy Disk */}
              <div
                className="relative w-full h-80  bg-gradient-to-b from-gray-300 to-gray-400 rounded-sm border border-gray-500 overflow-hidden"
                style={{
                  boxShadow:
                    "inset 0 2px 4px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.1)",
                }}
              >
                {/* Top notch - floppy disk characteristic */}
                <div className="absolute top-0 right-8 w-6 h-4 bg-gray-900 rounded-b-sm"></div>

                {/* Metal slider */}
                <div className="absolute top-6 left-6 right-6 h-1 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full shadow-inner"></div>

                {/* Main label area */}
                <div
                  className="mt-12 mx-6 bg-white rounded-sm p-4 shadow-inner border border-gray-300"
                  style={{ height: "200px" }}
                >
                  {/* Label Header */}
                  <div className="border-b border-gray-300 pb-2 mb-3">
                    <div className="text-lg font-mono font-bold text-black leading-tight">
                      {project.title}
                    </div>
                    <div className="text-sm text-gray-600 font-mono">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Tech stack as file list */}
                  <div className="text-xs font-mono text-gray-700">
                    <div className="mb-1 font-bold">STACK:</div>
                    <div className="grid grid-cols-2 gap-x-2">
                      {project.techStack.map((tech, index) => (
                        <div key={index} className="ml-2 text-gray-600">
                          • {tech.toUpperCase()}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disk ID */}
                  <div className="absolute bottom-2 right-2 text-xs font-mono text-gray-500">
                    {`DISK_${
                      project.id.toLocaleString().length === 1 ? "00" : "0"
                    }${project.id}`}
                  </div>
                </div>

                {/* Write protection tab */}
                <div className="absolute bottom-6 left-2 w-3 h-3 bg-gray-600 border border-gray-700"></div>

                {/* Center hub */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-700 shadow-inner">
                  <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-sm transition-all duration-500 pointer-events-none `}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
