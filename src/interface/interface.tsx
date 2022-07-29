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

export type ThreadsStore = {

    threads: Threads[]

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
}


export type ReduxStore = {
    THREAD: ThreadsStore,
}