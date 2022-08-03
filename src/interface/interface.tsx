export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}


export interface Threads {
    description: string;
    id: number;
    img: string[];
    img_name: string[];
    name: string;
    date_create: string;
    creator: string;
    message: LastMessage[];
}

export interface ThreadsInside extends Threads {

    type?: string;

}

export type ThreadsStore = {

    threads: Threads[];

}

export interface ErrorStore {

    message: string;
    resolve: boolean;

}

export type MessageStore = {

    message: LastMessage[];

}

export interface LastMessage {
    id: number;
    name_user: string;
    text_message: string;
    prev_message: string[];
    next_message: string[];
    img: string[];
    img_name: string[];
    date_create: string;
    thread_id: number;
}


export type ReduxStore = {
    THREAD: ThreadsStore;
    MESSAGE: MessageStore;
    HIDDEN_MESSAGE: string[];
    POPUP: Popup;
    SENDER: MessageSenderFrom
}

export type Popup = {
    id: number;
    open: boolean;
}

export type MessageType = {

    data: {
        msg: LastMessage;
        className: string;
    }
    stateMessage: boolean;

}

export type Position = {
    x: number;
    y: number;
}

export interface IDrag {

    onDrag?: (event: MouseEvent) => void;
    onMouseDown?: (event: MouseEvent) => void;
    onMouseUp?: (event: MouseEvent) => void;
    onMouseMove?: (event: MouseEvent) => void;

}

export type SenderFrom = { 
    msg: number; 
    thread: number; 
}

export type MessageSenderFrom = {

    from: never[] | SenderFrom[];
    message: string;
    open: boolean;
    image: never[] | Img[];
    name: string;

}

export type Img = {
    src: string;
    alt: string;
}
