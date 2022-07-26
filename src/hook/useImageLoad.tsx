import { useEffect, useState } from "react";

export const UseImageLoad = (src: string) => {

    const [imgRef] = useState(new Image());
    const [image, setImage] = useState({width: 0, height: 0});

    useEffect(() => {

        imgRef.onload = function() {

            setImage({width: imgRef.width, height: imgRef.height});
    
        }
    
        imgRef.src = src;

    }, []);

    return { image,  imgRef };

}