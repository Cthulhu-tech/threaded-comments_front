import { useEffect, useRef, useState } from 'react';
import { UseImageLoad } from '../../hook/useImageLoad';
import './img.scss';

export const Image = (img: {src: string, alt: string}) => {

    const [load, setLoad] = useState(true);
    const [popup, setPopup] = useState(false);
    const [loadPopup, setLoadPopup] = useState(true);
    const imgContainerRef = useRef<HTMLDivElement>(null);
    const { image } = UseImageLoad(img.src);

    const handleOnLoad = () => setLoad(false);
    const handleOnLoadPopup = () => setLoadPopup(false);

    const SwitchPopupImg = () => {

        setPopup(!popup);
        setLoadPopup(true);

    }
    
    useEffect(() => {}, [loadPopup, load]);

    return <div onClick={SwitchPopupImg} ref={imgContainerRef} className="sub-container_img">
        <div className="image_container_info">
            <p className="text small">{image.width}x{image.height}</p>
            <p className="text small">{img.alt}</p>
        </div>
        {load && <div className="loading"/>}
        <img src={img.src} alt={img.alt} className={!load ? "image" : "onLoading"} onLoad={handleOnLoad}/>
        {popup && <div className="popup_img" onClick={SwitchPopupImg}>
            {loadPopup && <div style={{width: image.width, height: image.height}} className="loading"/>}
            <img src={img.src} alt={img.alt} className={!loadPopup ? "image_popup" : "onLoading"} onLoad={handleOnLoadPopup}/>
        </div>}
    </div>

}