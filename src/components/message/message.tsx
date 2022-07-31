import { dateFormating } from "../../utils/dateFormating";
import { LastMessage } from "../../interface/interface";
import { UseSearch } from "../../hook/useSearch";
import { SubMessage } from "./subMessage";
import { Image } from "../img/img";
import "./message.scss";

export const Message = (data: {msg: LastMessage, className: string}) => {

    const {message, searchMessage, deletMessage, deteleAll}= UseSearch();

    return <div className={data.className} onMouseLeave={() => data.className === "message" && deteleAll()}>
        <div className="msg_info">
            <p className="msg user">{data.msg.name_user}</p>
            <p className="msg">{dateFormating(data.msg.date_create)}</p>
            <p className="msg">№{data.msg.id}</p>
            <div className="btn drop_down_list"></div>
        </div>
        <div className="message_txt">
            <SubMessage data={data} stateMessage={true}/>
            <div className="image_container-msg">
                {data.msg?.img && data.msg?.img.map((img, i) => <Image key={i} {...{src: img, alt: data.msg.img_name && data.msg?.img_name[i]}} />)}
            </div>
            <p>{data.msg.text_message}</p>
        </div>
            <SubMessage data={data} stateMessage={false}/>
        </div>
}