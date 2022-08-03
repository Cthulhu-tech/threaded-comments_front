import { addImgHandlerSender } from "../../redux/store/senderMessage";
import { ReduxStore } from "../../interface/interface";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const InputSending = () => {

    const dispatch = useDispatch();
    const [img, setImg] = useState({src: '', alt: ''});
    const store = useSelector((store: ReduxStore) => store.SENDER);

    const imgHandler = (event: React.ChangeEvent<HTMLInputElement>) => store.image.length < 4 && setImg({...img, [event.target.name] : event.target.value});

    const addImg = () => {

        setImg({src: '', alt: ''});
        dispatch(addImgHandlerSender(img));

    }

    useEffect(() => {},[img]);

    return <div className="container_img">
    <input className="input input_img" placeholder={store.image.length < 4 ? "ссылка на картинку" : "не больше 3 картинок"} name="src" value={img.src} onChange={imgHandler}/>
    <input className="input input_img" placeholder={store.image.length < 4 ? "описание картинки" : "не больше 3 картинок"} name="alt" value={img.alt} onChange={imgHandler}/>
    <div className="btn btn-primary"onClick={addImg}>
          <p>добавить</p>
        </div>
  </div>

}
