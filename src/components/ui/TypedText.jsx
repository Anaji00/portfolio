import React, { useState, useEffect } from 'react';

export function TypedText({
  strings = [],
  speed = 70,
  deleteSpeed = 35,
  pause = 1800,
  className = ''
}) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!strings || strings.length === 0) return;

    const currentString = strings[index % strings.length];
    let timeout;

    if (isTyping) {
      if (display.length < currentString.length) {
        timeout = setTimeout(() => {
          setDisplay(currentString.slice(0, display.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => {
          setDisplay(display.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIndex((prev) => (prev + 1) % strings.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, isTyping, index, strings, speed, deleteSpeed, pause]);

  return (
    <span className={`inline-flex items-center text-[#e8e8f0] font-medium ${className}`}>
      <span>{display}</span>
      <span
        className="inline-block w-[2px] h-[1.15em] ml-1 bg-[#7effd4] animate-pulse align-middle"
        aria-hidden="true"
      />
    </span>
  );
}

export default TypedText;
