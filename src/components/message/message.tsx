import { dateFormating } from "../../utils/dateFormating";
import { LastMessage } from "../../interface/interface";
import { useMousePosition } from "../../hook/useMouse";
import { UseSearch } from "../../hook/useSearch";
import { Image } from "../img/img";
import "./message.scss";

export const Message = (data: {msg: LastMessage, className: string}) => {

    const { mousePosition, GetMousePosition } = useMousePosition();
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
                {data.msg.prev_message && data.msg.prev_message.map((prev) => <p key={prev} className="comments" onMouseOver={(event)=> {
                    searchMessage(+prev);
                    GetMousePosition(event);
                }}> » {prev}</p>)}
            </div>
            <div className="image_container-msg">
                {data.msg?.img && data.msg?.img.map((img, i) => <Image key={i} {...{src: img, alt: data.msg.img_name && data.msg?.img_name[i]}} />)}
            </div>
            <p>{data.msg.text_message}</p>
        </div>
        <div className="container_message">
            {data.msg.next_message && data.msg.next_message.map((next) => <p key={next} className="comments" onMouseOver={(event)=> {
                searchMessage(+next);
                GetMousePosition(event);
            }} > » {next}</p>)}
        </div>
        {message && 
        <div onMouseLeave={deletMessage} style={{translate: `translate(${mousePosition.x}px, ${mousePosition.y}px)`}} className="dynamic_message">
            <Message {...{msg: message, className: "message sub_message"}}/>
        </div>}
    </div>

}