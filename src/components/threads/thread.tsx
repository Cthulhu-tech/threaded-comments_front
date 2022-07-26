import { dateFormating } from "../../utils/dateFormating";
import { Threads } from "../../interface/interface";
import { Image } from "../img/img";
import { useEffect } from 'react';
import './thread.scss';

export const Thread = (thread: Threads) => {

    useEffect(() => { }, []);

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
    </section>

}