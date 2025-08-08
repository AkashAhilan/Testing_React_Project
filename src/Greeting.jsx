import { useState } from "react";
import reactLogo from "./assets/image.png";
import viteLogo from "./assets/image.png";

// import "./App.css";
import Message from "./Message.tsx";

function Greeting() {
  const [count, setCounts] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white text-4xl">
      <h1>&quot;Hello Hack the North &quot;</h1>
      <button
        className="flex rounded-xl px-6 py-3 text-xl font-semibold bg-white/10 hover:bg-white/20 transition"
        onClick={() => setCounts((c) => c + 1)}
      >
        Count: {count}
      </button>
      <button
        className="flex rounded-xl px-6 py-3 text-xl font-semibold bg-white/10 hover:bg-white/20 transition"
        onClick={() => {
          if (count > 5) {
            setCount2(0);
          } else setCount2(10000);
        }}
      >
        Count: {count2}
      </button>
      <Message></Message>
    </div>
  );
}

export default Greeting;
