import { useState } from "react"

export const useMousePosition = () => {

  const [ mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const GetMousePosition = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {

    setMousePosition({x: event.clientX, y: event.clientY});

  }
  
  return {mousePosition, GetMousePosition};
    
};