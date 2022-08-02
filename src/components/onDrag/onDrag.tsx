import { openHandlerSender } from "../../redux/store/senderMessage";
import { ReduxStore } from "../../interface/interface";
import { useEffect, useRef, useState } from "react";
import { useDrag } from "../../hook/useDrag";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './onDrag.scss';

export const OnDrag = (props: {children: React.ReactNode}) => {

    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const [cursor, setCursor] = useState({x: 0, y: 0});
    const [translate, setTranslate] = useState({ x: 0, y: window.pageYOffset});
    const storeSender = useSelector((store: ReduxStore) => store.SENDER);
  
    const handleDrag = (event: MouseEvent) => {
      
      if(ref && ref.current){

        const dialogWidth = ref.current.clientWidth;
        
        const x = Math.min(
          Math.max(0, event.pageX - cursor.x),
          window.innerWidth - dialogWidth - 20
        );
        const y = Math.min(
          Math.max(0, event.pageY - cursor.y),
          window.pageYOffset + window.innerWidth
        );
        setTranslate({
          x: x,
          y: y
        });

      }

    };

    const enableDragging = (event: MouseEvent) => {
  
      setCursor({

          x: event.pageX - translate.x,
          y: event.pageY - translate.y

      });

    }
    
    const drag = useDrag(ref, translate, {onDrag: handleDrag, onMouseDown: enableDragging });
    
    useEffect(() => {},[drag, storeSender]);

    return <div 
            ref={ref} 
            style={{ top: translate.y + "px", left: translate.x + "px" }}
            className="container-drag_element"
            >
        <div className="container-drag_carry">
          <span className="container-drag_close"
            onClick={() => dispatch(openHandlerSender(false))}
          >✕</span>
        </div>
        {props.children}
    </div>

}
