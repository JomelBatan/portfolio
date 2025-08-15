import { useState, useEffect } from "react";

export default function TypingAnimation({
  words = ["Developer", "Designer", "Creator", "Problem Solver"],
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  className = "",
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          // Deleting characters
          if (currentText.length > 0) {
            setCurrentText(currentWord.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          // Typing characters
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.substring(0, currentText.length + 1));
          } else {
            // Word is complete, wait before deleting
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className={`inline-block ${className}`}>
      <span className="text-sm md:text-2xl font-bold bg-gradient-to-r from-deepgreen via-midgreen to-coolgreen bg-clip-text text-transparent">
        {currentText}
        <span
          className={`inline-block w-1 h-4 md:h-6 bg-gradient-to-b from-deepgreen to-coolgreen ml-1 ${
            showCursor ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
        />
      </span>
    </div>
  );
}
