"use client";

import "./Board.css";
import Chip from "../chip/Chip";
import { useState } from "react";
// this is "умственные пируэты" XD

interface Cords {
  x: number;
  y: number;
}

export default function Board() {
  const [cords, setCords] = useState<Cords>({ x: 0, y: 0 });
  const targetCell = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const x: number = event.clientX;
    const y: number = event.clientY;
    if (target.id != "board") {
      console.log("cell: ", target);

      setCords({ x, y });
    }
  };
  return (
    <div className="board-wrapper w-full h-screen flex items-center justify-center">
      <div className="board">
        <Chip x={cords.x} y={cords.y} />
        <table id="board" onClick={targetCell}>
          <tbody>
            {/* {top cells} */}
            <tr>
              <td className="cell horisontal corner">Start</td>
              {Array.from({ length: 11 }).map((_, i) => (
                <td key={i} className="cell horisontal">
                  {i}
                </td>
              ))}
              <td className="cell horisontal corner">Jail</td>
            </tr>
            {/* middle cells  */}
            {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td className="cell vertical">{i}</td>
                <td colSpan={11} className="cell vertical pointer-events-none">
                  {i}
                </td>
                <td className="cell vertical">{i}</td>
              </tr>
            ))}
            {/* bottom cells */}
            <tr>
              <td className="cell horisontal corner">Safe place</td>
              {Array.from({ length: 11 }).map((_, i) => (
                <td key={i} className="cell horisontal">
                  {i}
                </td>
              ))}
              <td className="cell horisontal corner">Go to jail</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
