import { MessageType } from "../../interface/interface";
import { UseSearch } from "../../hook/useSearch";
import { Message } from "./message";
import { useEffect } from "react";

export const SubMessage = (props: MessageType) => {

    const { message, addMessage, searchMessage, deletMessage, deleteAll } = UseSearch();

    useEffect(() => {

        return () => deletMessage(props.data.msg.id);

    }, []);

    return <div className="container_message"
    onMouseEnter={()=> {        
        !searchMessage(props.data.msg.id) && addMessage(props.data.msg.id);
    }}
    onMouseLeave={() => {
        props.data.className === "message" ? deleteAll() : deletMessage(props.data.msg.id);
    }}
    >
    {!props.stateMessage && props.data.msg.next_message && props.data.msg.next_message.map((next) => 
    <p key={next} className="comments"
    onMouseEnter={()=> {
        searchMessage(props.data.msg.id);
        searchMessage(+next);
    }} > » {next}</p>)}
    {props.stateMessage && props.data.msg.prev_message && props.data.msg.prev_message.map((prev) => 
    <p key={prev} className="comments"
    onMouseEnter={()=> {
        searchMessage(props.data.msg.id);
        searchMessage(+prev);
    }} > » {prev}</p>)}
    {message && message.id !== props.data.msg.id &&
    <div
    
    onMouseLeave={() => {
        message && deletMessage(message.id);
    }} className="dynamic_message">
        <Message {...{msg: message, className: "message sub_message"}}/>
    </div>}
</div>

}