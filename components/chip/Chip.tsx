"use client";
// import "./Chip.css";

// import targetCell from "./action";

interface Cords {
  x: number;
  y: number;
}

export default function Chip(props: Cords) {
  const cords = props;
  const { x, y } = cords;
  return (
    <div
      className="chip-wrapper absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: x,
        top: y,
      }}
    >
      <img src="/chip.png" alt="chip img" className="chip w-[80px] h-auto" />
    </div>
  );
}
