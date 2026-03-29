import "./index.css";
import Canvas from "./canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll()
    },[]);
  return (
    <>
      <div className="w-full relative min-h-screen">
        
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
        <div className="w-full h-screen text-white text-4xl font-bold flex items-center justify-center">
          <nav className="fixed top-0 left-0 w-full p-8 flex justify-between bg-red bg-opacity-50">
            <div className="brand text-2xl font-regular">Chill-I</div>
            <div className="links flex gap-10">
              {["Home", "About", "Services", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-lg hover:text-red-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;