import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className=" w-full h-screen duration-100 "
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl ">
          <button
            onClick={() => setColor("red")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("hotpink")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "hotpink" }}
          >
            hotpink
          </button>

          <button
            onClick={() => setColor("#FF4500")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FF4500" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("black")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>

          <button
            onClick={() => setColor("white")}
            className="outline outline-black outline-1 px-4 py-1 rounded-full font-bold text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>

          <button
            onClick={() => setColor("cyan")}
            className=" outline-none px-4 py-1 rounded-full font-bold text-black shadow-lg"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>

          <button
            onClick={() => setColor("#4B0082")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#4B0082" }}
          >
            Indigo
          </button>

          <button
            onClick={() => setColor("#00FF7F")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#00FF7F" }}
          >
            Spring Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
