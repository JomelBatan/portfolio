import StackIcon from "tech-stack-icons";

import { useState } from "react";

const CustomIcon = ({ name }: { name: string }) => {
  const nameMap: Record<string, string> = {
    react: "React",
    reactquery: "React Query",
    expressjs: "Express.js",
    nodejs: "Node.js",
    typescript: "TypeScript",
    java: "Java",
    tailwindcss: "Tailwind CSS",
    git: "Git",
    nextjs: "Next.js",
    vercel: "Vercel",
    github: "Github",
    supabase: "Supabase",
    mongodb: "MongoDB",
    render: "Render",
    ai: "Adobe Illustrator",
    canva: "Canva",
    wordpress: "WordPress",
    npm: "Node Package Manager",
    postgresql: "PostgreSQL",
  };

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-blue-50 hover:to-blue-100 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-200 hover:border-blue-300">
        <StackIcon name={name} />
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10">
          {nameMap[name] || name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500"></div>
        </div>
      )}
    </div>
  );
};

export default function TechSet() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-400 mb-2">
          Tech Stack
        </h1>
        <p className="text-gray-400 text-[10px] md:text-base">
          Technologies and tools I work with
        </p>
      </div>

      {/* Core Stack Section */}
      <div className="mb-12 item-center">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8  bg-gradient-to-b from-midgreen to-coolgreen rounded-full mr-4"></div>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-400">
            Core Stack
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          <CustomIcon name="react" />
          <CustomIcon name="reactquery" />
          <CustomIcon name="nextjs" />
          <CustomIcon name="nodejs" />
          <CustomIcon name="typescript" />
          <CustomIcon name="java" />
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-midgreen to-coolgreen rounded-full mr-4"></div>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-400">
            Tools & Platforms
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          <CustomIcon name="wordpress" />
          <CustomIcon name="git" />
          <CustomIcon name="github" />
          <CustomIcon name="supabase" />
          <CustomIcon name="mongodb" />
          <CustomIcon name="postgresql" />
          <CustomIcon name="vercel" />
          <CustomIcon name="render" />
          <CustomIcon name="tailwindcss" />
          <CustomIcon name="ai" />
          <CustomIcon name="canva" />
          <CustomIcon name="npm" />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 p-6  rounded-xl">
        <p className="text-gray-400 text-[10px] md:text-sm">
          Always learning and exploring new technologies to build better
          solutions
        </p>
      </div>
    </div>
  );
}
