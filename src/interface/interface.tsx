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
}

export type ThreadsStore = {

    threads: Threads[]

}

export type ReduxStore = {
    THREAD: ThreadsStore,
}