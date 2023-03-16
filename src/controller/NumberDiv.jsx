import React, { useRef, useEffect, useState } from "react";

function NumberDiv({ value, interval }) {
  const divRef = useRef(null);
  const [number, setNumber] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = divRef.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isVisible && number < value && !intervalId) {
        const id = setInterval(() => {
          setNumber((prev) => {
            if (prev >= value) {
              clearInterval(intervalId);
              setIntervalId(null);
              return value;
            }
            return prev + 1;
          });
        }, interval); // utiliza o intervalo passado como prop
        setIntervalId(id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [value, number, interval, intervalId]);

  return <div ref={divRef}>{number}</div>;
}

export default NumberDiv;