import { dateFormating } from "../../utils/dateFormating";
import { LastMessage } from "../../interface/interface";
import { UseSearch } from "../../hook/useSearch";
import { Image } from "../img/img";
import { useState } from 'react';
import "./message.scss";

export const Message = (data: {msg: LastMessage, className: string}) => {

    const [msgPosition, msgState] = useState<boolean>();
    const { message, searchMessage, deletMessage} = UseSearch();

    return <div className={data.className}>
        <div className="msg_info">
            <p className="msg user">{data.msg.name_user}</p>
            <p className="msg">{dateFormating(data.msg.date_create)}</p>
            <p className="msg">№{data.msg.id}</p>
            <div className="btn drop_down_list"></div>
        </div>
        <div className="message_txt">
            <div className="container_message">
                {data.msg.prev_message && data.msg.prev_message.map((prev) => <p key={prev} className="comments" onMouseOver={()=> {
                    searchMessage(+prev);
                    msgState(false);
                }}> » {prev}</p>)}
                {message && !msgPosition && <div onMouseLeave={deletMessage} className="dynamic_message"><Message {...{msg: message, className: "message sub_message"}}/></div>}
            </div>
            <div className="image_container-msg">
                {data.msg?.img && data.msg?.img.map((img, i) => <Image key={i} {...{src: img, alt: data.msg.img_name && data.msg?.img_name[i]}} />)}
            </div>
            <p>{data.msg.text_message}</p>
        </div>
        <div className="container_message">
            {data.msg.next_message && data.msg.next_message.map((next) => <p key={next} className="comments" onMouseOver={()=> {
                searchMessage(+next);
                msgState(true);
            }} > » {next}</p>)}
            {message && msgPosition && <div onMouseLeave={deletMessage} className="dynamic_message"><Message {...{msg: message, className: "message sub_message"}}/></div>}
        </div>
    </div>

}