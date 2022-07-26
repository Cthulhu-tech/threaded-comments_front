import { useEffect, useRef, useState } from 'react';
import { UseImageLoad } from '../../hook/useImageLoad';
import './img.scss';

export const Image = (img: {src: string, alt: string}) => {

    const [popup, setPopup] = useState(false);
    const imgContainerRef = useRef<HTMLDivElement>(null);
    const { image } = UseImageLoad(img.src);

    const SwitchPopupImg = () => setPopup(!popup);
    
    useEffect(() => {}, []);

    return <div onClick={SwitchPopupImg} ref={imgContainerRef} className="sub-container_img">
        <div className="image_container_info">
            <p className="text small">{image.width}x{image.height}</p>
            <p className="text small">{img.alt}</p>
        </div>
        <img src={img.src} alt={img.alt} className="image" />
        {popup && <div className="popup_img" onClick={SwitchPopupImg}>
            <img src={img.src} alt={img.alt} className="image_popup"/>
        </div>}
    </div>

}