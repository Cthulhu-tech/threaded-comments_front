import useDrag from '../../hook/useElementPosition';
import { ReduxStore } from '../../interface/interface';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './sendingMessage.scss';

export const SendingMessage = () => {

    const storeSender = useSelector((store: ReduxStore) => store.SENDER);

    const divRef = useRef(null);

    const [translate, setTranslate] = useState({ x: 0, y: 0 });
  
    const handleDrag = (e:any) => {
      setTranslate({
        x: translate.x + e.movementX,
        y: translate.y + e.movementY
      });
    };
  
    const drag = useDrag(divRef, [translate], {
      onDrag: handleDrag
    });

    useEffect(() => {console.log(drag)},[drag, storeSender]);

    return <div className="container-sending"  ref={divRef} style={{transform: `translateX(${translate.x}px) translateY(${translate.y}px)`}}>
        <div className="container-message">
            <p>{drag.isDragging}</p>
        </div>
    </div>

}