import { useState } from "react";

export const UseImageLoad = (src: string) => {

    const [image, setImage] = useState({width: 0, height: 0});

    const imgElement = new Image();

    imgElement.onload = function() {

        setImage({width: imgElement.width, height: imgElement.height});

    }

    imgElement.src = src;

    return { image };

}