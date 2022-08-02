import { deleteImgHandlerSender } from "../../redux/store/senderMessage";
import { ReduxStore } from "../../interface/interface";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Image } from "../img/img";

export const ImageMessage = () => {

    const dispatch = useDispatch();
    const store = useSelector((store: ReduxStore) => store.SENDER);

    return <div className="container_img">
    {store.image.map((img) => 
        <div className="sub_container-img">
            <div className="close">
                <span className="container_img-close btn"
                onClick={() => dispatch(deleteImgHandlerSender(img))}
                >✕</span>
            </div>
            <Image key={img.src} {...{src: img.src, alt: img.alt}}/>
        </div>)}
    </div>

}