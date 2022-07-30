import { combineReducers, createStore } from "redux";
import { ThreadsStore } from "./store/threadInfo";
import { MessageStore } from "./store/searchMsg";



const root = combineReducers({

    THREAD: ThreadsStore,
    MESSAGE: MessageStore
    
});

export const store = createStore(root);
