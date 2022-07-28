import { dateFormating } from "../../utils/dateFormating";
import { Threads } from "../../interface/interface";
import parse, { domToReact } from 'html-react-parser';
import { Image } from "../img/img";
import './thread.scss';

export const Thread = (thread: Threads) => {

    return <section className="thread_container">
        <article className="thread_info">
            <h1 className="thread_theam text  btn">{thread.name}</h1>
            <p className="text creator">{thread.creator}</p>
            <p className="text">{dateFormating(thread.date_create)}</p>
            <p className="text">№{thread.id}</p>
            <div className="btn answer">ответ</div>
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
    </section>

}