import TypingAnimation from "./TypingAnimation";
import picture from "../assets/jomel.png";

export default function Hero() {
  return (
    <div className="nes-container !p-0 m-4  flex-col md:flex-row flex h-full justify-center items-center ">
      <div className="flex-row w-full md:w-1/2 px-2 md:px-8 pt-4 md:pt-0">
        <p className="text-xl md:text-2xl text-center md:text-start">Hi I'm</p>
        <h1 className="text-3xl md:text-6xl text-center md:text-start">
          Jomel Batan
        </h1>
        <TypingAnimation
          words={[
            "Full Stack Developer",
            "Mobile Developer",
            "Problem Solver",
            "Code Enthusiast",
          ]}
          typeSpeed={80}
          deleteSpeed={40}
          delayBetweenWords={2500}
        />
        <p className="text-center md:text-justify">
          I work with React and Node to build fast, scalable, and user-friendly
          web and mobile applications.
        </p>
        <div className="gap-4 flex ">
          <a
            href="https://www.facebook.com/batan.jomel"
            target="_blank"
            rel="noopener noreferrer"
            className="group block transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            <i className="nes-icon facebook"></i>
          </a>
          <a
            href="https://github.com/JomelBatan"
            target="_blank"
            rel="noopener noreferrer"
            className="group block transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            <i className="nes-icon github"></i>
          </a>
          <a
            href="mailto:jomelbatan02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            <i className="nes-icon gmail"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jomel-batan-97846b194"
            target="_blank"
            rel="noopener noreferrer"
            className="group block transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            <i className="nes-icon linkedin"></i>
          </a>
        </div>
      </div>
      <div className="relative flex w-full md:w-1/2 justify-end md:items-center md:justify-center">
        <img src={picture} className="w-3/4" />
      </div>
    </div>
  );
}
