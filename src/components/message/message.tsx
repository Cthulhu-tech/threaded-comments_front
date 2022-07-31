import { LastMessage, ReduxStore } from "../../interface/interface";
import { dateFormating } from "../../utils/dateFormating";
import { ContainerSetting } from "./containerSetting";
import { useEffect, useMemo, useState } from "react";
import { SubMessage } from "./subMessage";
import { useSelector } from "react-redux";
import { Image } from "../img/img";
import "./message.scss";

export const Message = (data: {msg: LastMessage, className: string}) => {

    const msg = data.msg;
    const [open, setOpen] = useState(false);
    const hiddenMsg = useSelector((store: ReduxStore) => store.HIDDEN_MESSAGE);
    const searchMessage = () => hiddenMsg.filter((value: string) => +value === data.msg.id).length > 0;
    const hiddenMessage = useMemo(() => searchMessage(), [hiddenMsg]);

    useEffect(() => {}, [hiddenMsg]);

    return <div className={data.className}>
        <div className="msg_info">
            <p className="msg user">{msg.name_user}</p>
            <p className="msg">{dateFormating(msg.date_create)}</p>
            <p className="msg">№{data.msg.id}</p>
            <div className="btn drop_down_list" 
                onMouseEnter={() => setOpen(true)}
            >
                <div className="sub-drop_down_list" 

                >
                    {open && <ContainerSetting {...{msg}}/>}
                </div>
            </div>
        </div>
        <div className="message_txt">
            <SubMessage data={data} stateMessage={true}/>
            {!hiddenMessage ? <>
            <div className="image_container-msg">
                {msg?.img && msg?.img.map((img, i) => <Image key={i} {...{src: img, alt: msg.img_name && msg?.img_name[i]}} />)}
            </div>
            <p>{msg.text_message}</p>
            </> : <p>скрыто</p>}
        </div>
            <SubMessage data={data} stateMessage={false}/>
        </div>
}