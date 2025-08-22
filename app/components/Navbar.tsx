import React, { useEffect, useRef } from "react";

export default function Navbar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let pos = scroll.scrollLeft;
    let dir = 1;
    const speed = 1;

    const interval = setInterval(() => {
      pos += dir * speed;
      if (pos > scroll.scrollWidth - scroll.clientWidth || pos < 0) dir *= -1;
      scroll.scrollLeft = pos;
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-2 overflow-hidden">
      <div
        ref={scrollRef}
        className="whitespace-nowrap text-white font-bold text-center text-sm"
      >
        OPORTUNITATEA PE CARE O AȘTEPTAI. E TIPUL SĂ-ȚI SCHIMBI VIAȚA
      </div>
    </div>
  );
}
