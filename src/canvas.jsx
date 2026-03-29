import { useEffect, useRef, useState} from "react";
import canvasImages from "./canvasImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({ details}) {
    const{startIndex, numImages, duration, size, top, left, zIndex} = details;
    const [index, setIndex] = useState({value: startIndex});
    const canvasRef = useRef(null);

useGSAP(() => {
    gsap.to(index, {
        value: startIndex + numImages - 1, // Animate to the last index of the images
        duration: duration,
        repeat: -1,
        ease: "linear",
        onUpdate: () => {
            setIndex({ value: Math.round(index.value) }); // Update the index state with the current value
        },
    });
});




  useEffect(() => {
    const scale  = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");    
    const image = new Image();
    image.src = canvasImages[index.value]; // Load the image at the current index from the array
    image.onload = () => {
        canvas.width = canvas.offsetWidth * scale;  
        canvas.height = canvas.offsetHeight * scale;
        canvas.style.width = canvas.offsetWidth + "px";  
        canvas.style.height = canvas.offsetHeight + "px";
        ctx.scale(scale, scale); // Scale the canvas context
        ctx.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight);  
    };
  }, [index]);  

  return (
    <canvas
    data-scroll
    data-scroll-speed={(Math.random().toFixed(1))}
    
    
    ref={canvasRef}
    className="absolute" 
    style={{
    width: `${size*1.8}px`,
    height: `${size*1.8}px`,
    top: `${top}%`, 
    left: `${left}%`,
    zIndex: `${zIndex}`, 
 }}
    id="Canvas"
    ></canvas>
  );

}
export default Canvas;