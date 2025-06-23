import Image from "next/image";
import Board from "./components/board/Board";

export default function Home() {
  return (
    <div className="main">
      <Board />
    </div>
  );
}
