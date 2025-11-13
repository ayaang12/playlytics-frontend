import { useState, useEffect } from "react";

interface Props {
  text: string;
  speed?: number;
}

export default function TypingTitle({ text, speed = 120 }: Props) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;

      if (i > text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1
      style={{
        color: "white",
        fontFamily: "League Spartan",
        fontWeight: 800,
        fontSize: "48px",
        textAlign: "center",
      }}
    >
      {display}
    </h1>
  );
}
