import { dateFormating } from "../../utils/dateFormating";
import { LastMessage } from "../../interface/interface";
import { UseSearch } from "../../hook/useSearch";
import { Image } from "../img/img";
import "./message.scss";

export const Message = (msg: LastMessage) => {

    const { message, searchMessage, deletMessage} = UseSearch();

    return <div className="message">
        <div className="msg_info">
            <p className="msg user">{msg.name_user}</p>
            <p className="msg">{dateFormating(msg.date_create)}</p>
            <p className="msg">№{msg.id}</p>
            <div className="btn drop_down_list"></div>
        </div>
        <div className="message_txt">
            {msg.prev_message && msg.prev_message.map((prev) => <p key={prev} className="comments"> » {prev}</p>)}
            <div className="image_container-msg">
                {msg?.img && msg?.img.map((img, i) => <Image key={i} {...{src: img, alt: msg.img_name && msg?.img_name[i]}} />)}
            </div>
            <p>{msg.text_message}</p>
        </div>
        <div className="container-next_message">
            {msg.next_message && msg.next_message.map((next) => <p key={next} className="comments" onMouseOver={()=> searchMessage(+next)} > » {next}</p>)}
            {message && <div onMouseLeave={deletMessage} className="dynamic_message"><Message {...message}/></div>}
        </div>
    </div>

}