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
        <div className="w-full h-screen text-white relative">
          <nav className="w-full p-8 flex justify-between bg-red bg-opacity-50">
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
          <div className="textcontainer w-full px-[20%]"> 
          <div className="text w-[50%]">
            <h3 className="text-4xl leading-[1.5]">
            At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.
            </h3>
            <p className="text-md w-[80%] mt-10 text-gray-300 font-md">
              We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
            </p>
            <p className="text-md mt-10">scroll</p>
             </div>
          </div>
          <div className="w-full">
            <h1 className="text-[17rem] font-normal tracking-tight">
            Thirtysixstudio </h1>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;