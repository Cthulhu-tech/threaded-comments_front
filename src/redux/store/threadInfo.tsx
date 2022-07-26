import { Action, Threads } from "../../interface/interface";


const defaultState = {

    threads: []

}

const updateThreads = "THREADS_UPDATE";
const deleteThreads = "THREADS_DELETE";

export const ThreadsStore = (state = defaultState, action:Action<string, Threads[] | Threads>) => {
    switch (action.type){
        case updateThreads: 
            return { threads: [...state.threads, ...(action.payload as Threads[])]}
        case deleteThreads:
            return {...(state.threads as Threads[]).filter((thread) => (thread.id as number) !== (action.payload as Threads).id)}
        default:
            return state;
    }
}

export const updateThreadStore = (payload: Threads[]) => ({ type: updateThreads, payload });
