import { LastMessage, ReduxStore } from "../../interface/interface";
import { updatePopup } from "../../redux/store/settingPopup";
import { dateFormating } from "../../utils/dateFormating";
import { ContainerSetting } from "./containerSetting";
import parse, { domToReact } from 'html-react-parser';
import { useEffect, useMemo, useState } from "react";
import { SubMessage } from "./subMessage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Image } from "../img/img";
import "./message.scss";

export const Message = (data: {msg: LastMessage, className: string}) => {

    const msg = data.msg;
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const popup = useSelector((store: ReduxStore) => store.POPUP);
    const hiddenMsg = useSelector((store: ReduxStore) => store.HIDDEN_MESSAGE);
    const searchMessage = () => hiddenMsg.filter((value: string) => +value === data.msg.id).length > 0;
    const hiddenMessage = useMemo(() => searchMessage(), [hiddenMsg]);

    useEffect(() => {

        if(popup.id !== msg.id) setOpen(false);

    }, [open, popup, hiddenMsg]);

    return <div className={data.className}>
        <div className="msg_info">
            <p className="msg user">{msg.name_user}</p>
            <p className="msg">{dateFormating(msg.date_create)}</p>
            <p className="msg">№{data.msg.id}</p>
            <div className="btn drop_down_list" 
                onClick={() =>{
                    setOpen(!open);
                    dispatch(updatePopup({id: msg.id, open: !open }));
                }}
            >
            </div>
            <div className="sub-drop_down_list" onMouseLeave={() => setOpen(false)}>
                {popup.id === msg.id && open && <ContainerSetting {...{msg}}/>}
            </div>
        </div>
        <div className="message_txt">
            <SubMessage data={data} stateMessage={true}/>
            {!hiddenMessage ? <>
            <div className="image_container-msg">
                {msg?.img && msg?.img.map((img, i) => <Image key={i} {...{src: img, alt: msg.img_name && msg?.img_name[i]}} />)}
            </div>
            <p>{parse(msg.text_message, {
                replace: (domNode) => {
                    if ((domNode as any).name === "br") {
                        return <b>{(domNode as any).name}</b>
                    }
                    if ((domNode as any).name === "i") {
                        return <i>{(domNode as any).name}</i>
                    }
                    if ((domNode as any).name === "spoiler") {
                        return <span className="spoiler">{domToReact((domNode as any).children, (domNode as any).options)}</span>
                    }
                }
            })}</p>
            </> : <p>скрыто</p>}
        </div>
            <SubMessage data={data} stateMessage={false}/>
        </div>
}