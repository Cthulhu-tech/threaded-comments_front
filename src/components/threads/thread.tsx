import { addUserHandlerSender, openHandlerSender } from "../../redux/store/senderMessage";
import { ReduxStore, ThreadsInside } from "../../interface/interface";
import { dateFormating } from "../../utils/dateFormating";
import parse, { domToReact } from 'html-react-parser';
import { useNavigate } from "react-router-dom";
import { Message } from "../message/message";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Image } from "../img/img";
import { useEffect } from "react";
import './thread.scss';
import { NavLink } from "react-router-dom";

export const Thread = (thread: ThreadsInside) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const msg = useSelector((store: ReduxStore) => store.MESSAGE);

    useEffect(() => {},[msg]);

    return <section className="thread_container">
        <article className="thread_info">
            <NavLink className="thread_theam text  btn" 
            to={'/thread/' + thread.id}
            >{thread.name}</NavLink>
            <p className="text creator">{thread.creator}</p>
            <p className="text">{dateFormating(thread.date_create)}</p>
            <p className="text">№{thread.id}</p>
            <div className="btn answer"
                onClick={() => {
                    dispatch(openHandlerSender(true));
                    dispatch(addUserHandlerSender({msg: 0, thread: thread.id}));
                }}
            >ответ</div>
        </article>
        <article className="image_container">
            {thread.img.map((img, i) => <Image key={i} {...{src: img, alt: thread.img_name[i]}} />)}
        </article>
        <article className="thread_description">
            {parse(thread.description, {
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
            })}
        </article>
        <>{thread.type && thread.message.map((msg) => <Message key={msg.id} {...{msg: msg, className: "message"}} />)}</>
        <>{!!!thread.type && thread.message.slice(-3).map((msg) => <Message key={msg.id} {...{msg: msg, className: "message"}} />)}</>
    </section>

}