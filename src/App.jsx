 import "./index.css";
import Canvas from "./canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll()
    },[]);
  return (
    <>
      <div className="w-full relative min-h-screen">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} /> 
        ))}
        <div className="w-full h-screen z-[10] text-white relative">
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
            <h1 className="text-[14rem] font-normal tracking-tight leading-none pl-5">
            Thirtysixstudio </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative text-white mt-32 px-10">
        {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
        <h1 className="text-8xl">about the brand</h1>
        <p className="text-lg w-[80%] mt-10 font-normal">
          At Thirtysixstudios, we believe in creating bold and meaningful brand experiences that reflect our passion for design and innovation. We focus on crafting unique visual identities and digital solutions that truly represent who we are. Our approach is rooted in creativity, storytelling, and attention to detail, allowing us to push boundaries while staying authentic to our vision. We see every project as an opportunity to explore new ideas, express ourselves, and create work that leaves a lasting impression.</p>
      </div>
    </>
  );
}

export default App;