import { Action, Threads } from "../../interface/interface";

const defaultState = {

    threads: []

}

const updateThreads = "THREADS_UPDATE";

export const ThreadsStore = (state = defaultState, action:Action<string, Threads[]>) => {
    switch (action.type){
        case updateThreads:
            const index = (state.threads as Threads[]).findIndex((thread) => thread.id === (action.payload as Threads[])[0].id);

            if(index === -1)
                return { threads: [ ...(state.threads as Threads[]), ...(action.payload as Threads[])]}

                return { threads: [ ...(state.threads as Threads[]).filter((thread) => thread.id !== (action.payload as Threads[])[0].id), ...(action.payload as Threads[])]
                    .sort((a, b) => {
                        return a.id - b.id;
                    })}
        default:
            return state;
    }
}

export const updateThreadStore = (payload: Threads[]) => ({ type: updateThreads, payload });
