import { IDrag, Position } from "../interface/interface";
import { useState, useEffect } from "react";

export const useDrag = (ref: React.MutableRefObject<HTMLDivElement | null>, deps:Position, options: IDrag) => {
  const {
    onMouseDown = () => {},
    onMouseUp = () => {},
    onMouseMove = () => {},
    onDrag = () => {}
  } = options;

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e:MouseEvent) => {

    setIsDragging(true);

    onMouseDown(e);

  }

  const handlePointerUp = (e:MouseEvent) => {

    setIsDragging(false);

    onMouseUp(e);

  }

  const handlePointerMove = (e:MouseEvent) => {
    onMouseMove(e);

    if (isDragging) return onDrag(e);
  }

  useEffect(() => {

      addEvent();

      return () => removeEvent();

  }, [deps, isDragging]);

  const addEvent = () => {

    const element = ref.current;

    if(element){

      element.addEventListener("mouseup", handlePointerUp);
      element.addEventListener("mouseleave", handlePointerUp);
      element.addEventListener("mousemove", handlePointerMove);
      element.addEventListener("mousedown", handlePointerDown);

    }
    
  }

  const removeEvent = () => {

    const element = ref.current;

    if(element){

      element.removeEventListener("mouseup", handlePointerUp);
      element.removeEventListener("mouseleave", handlePointerUp);
      element.removeEventListener("mousemove", handlePointerMove);
      element.removeEventListener("mousedown", handlePointerDown);

    }

  }

  return { isDragging }

}
