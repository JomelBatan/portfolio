import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Download, Heart, Coffee } from "lucide-react";
import myResume from "../assets/BATAN_JOMEL_R_RESUME.pdf";
const RetroPortfolioFooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBooting, setIsBooting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBootSequence = () => {
    setIsBooting(true);
    setTimeout(() => setIsBooting(false), 3000);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "EMAIL",
      command: "MAILTO.EXE",
      href: "mailto:jomelbatan02@gmail.com",
    },
    {
      icon: Github,
      label: "GITHUB",
      command: "GITHUB.EXE",
      href: "https://github.com/JomelBatan",
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      command: "LINKEDIN.EXE",
      href: "https://www.linkedin.com/in/jomel-batan-97846b194",
    },
    {
      icon: Download,
      label: "RESUME",
      command: "RESUME.PDF",
      href: myResume,
    },
  ];

  return (
    <footer className="bg-gray-900 border-t-4 border-gray-700 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left Section - System Info */}
          <div className="space-y-6">
            <div className="bg-black border-2 border-gray-600 rounded-sm p-4">
              <div className="text-green-400 font-mono text-sm mb-2">
                SYSTEM.INF
              </div>
              <div className="text-white font-mono text-xs space-y-1">
                <div>NAME: JOMEL BATAN</div>
                <div>VERSION: 2024.1.0</div>
                <div>STATUS: AVAILABLE_FOR_HIRE</div>
                <div>
                  UPTIME: {Math.floor(Date.now() / 1000 / 60 / 60 / 24)} DAYS
                </div>
                <div>LAST_BOOT: {currentTime.toLocaleTimeString()}</div>
              </div>
            </div>

            {/* Skills Disk Stack */}
            <div className="space-y-2">
              <div className="text-gray-400 font-mono text-sm mb-3">
                SKILL_DISKS:
              </div>
              {[
                "FRONTEND.DISK",
                "BACKEND.DISK",
                "DATABASE.DISK",
                "MOBILE_DEVELOPMENT.DISK",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer hover:translate-x-1 transition-transform duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-sm border border-gray-500 relative flex-shrink-0">
                    <div className="absolute top-0.5 right-1 w-1 h-0.5 bg-gray-900"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center Section - Social Links as Floppy Disks */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-gray-400 font-mono text-sm mb-6">
                INSERT_DISK_TO_CONNECT:
              </div>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-24 h-24 bg-gradient-to-b from-gray-300 to-gray-400 rounded-sm border-2 border-gray-500 relative mx-auto shadow-lg group-hover:shadow-xl group-hover:shadow-green-500/20">
                      {/* Floppy disk details */}
                      <div className="absolute top-1 right-2 w-2 h-1 bg-gray-900 rounded-b-sm"></div>
                      <div className="absolute top-2 left-1 right-1 h-0.5 bg-gray-600"></div>

                      {/* Icon in center */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <social.icon className="w-6 h-6 text-gray-700 group-hover:text-gray-800 transition-colors" />
                      </div>

                      {/* Center hub */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full border border-gray-700">
                        <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 rounded-full"></div>
                      </div>

                      {/* Write protect tab */}
                      <div className="absolute bottom-1 left-0.5 w-1 h-1 bg-gray-600 border border-gray-700"></div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-xs font-mono text-gray-400 group-hover:text-green-400 transition-colors">
                        {social.command}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Terminal */}
          <div className="space-y-6">
            <div className="bg-black border-2 border-gray-600 rounded-sm">
              {/* Terminal header */}
              <div className="bg-gray-700 px-3 py-2 border-b border-gray-600 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white font-mono text-xs">CONTACT.EXE</div>
              </div>

              {/* Terminal content */}
              <div className="p-4 h-40 overflow-hidden">
                {isBooting ? (
                  <div className="text-green-400 font-mono text-xs space-y-1">
                    <div>INITIALIZING CONNECTION...</div>
                    <div>LOADING SOCIAL_PROTOCOLS.DLL...</div>
                    <div>ESTABLISHING HANDSHAKE...</div>
                    <div className="animate-pulse">READY TO COMMUNICATE ▊</div>
                  </div>
                ) : (
                  <div className="text-green-400 font-mono text-xs space-y-1">
                    <div>{`C:\CONTACT> HELLO.EXE`}</div>
                    <div className="text-white">Hello! I'm available for:</div>
                    <div className="text-white ml-2">
                      • Full-time opportunities
                    </div>
                    <div className="text-white ml-2">• Freelance projects</div>
                    <div className="text-white ml-2">• Collaboration</div>
                    <div className="text-white ml-2">• Coffee chats</div>
                    <div className="mt-2">{`C:\CONTACT> _`}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Boot button */}
            <button
              onClick={handleBootSequence}
              className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-mono text-sm py-2 px-4 rounded transition-colors duration-200"
            >
              {isBooting ? "BOOTING..." : "BOOT_CONTACT.EXE"}
            </button>
          </div>
        </div>

        {/* Bottom Section - Copyright & Credits */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Left - Copyright with floppy */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-b from-gray-300 to-gray-400 rounded-sm border border-gray-500 relative">
                <div className="absolute top-0.5 right-1.5 w-1.5 h-0.5 bg-gray-900 rounded-b-sm"></div>
                <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-mono text-black font-bold">
                  ©24
                </div>
              </div>
              <div className="text-gray-400 font-mono text-sm">
                <div>COPYRIGHT © 2025 JOMEL</div>
                <div className="text-xs">ALL_RIGHTS_RESERVED.TXT</div>
              </div>
            </div>

            {/* Center - Fun stats */}
            <div className="flex items-center gap-6 text-gray-500 font-mono text-xs">
              <div className="flex items-center gap-1">
                <Coffee className="w-3 h-3" />
                <span>COFFEE: {Math.floor(Math.random() * 1000) + 500}MB</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-red-500" />
                <span>MADE_WITH_LOVE.EXE</span>
              </div>
            </div>

            {/* Right - System specs */}
            <div className="text-gray-500 font-mono text-xs text-center md:text-right">
              <div>POWERED_BY: REACT.EXE v18.2</div>
              <div>RUNTIME: BROWSER.SYS</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RetroPortfolioFooter;
