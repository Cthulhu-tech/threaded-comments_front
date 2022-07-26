import { combineReducers, createStore } from "redux";
import { ThreadsStore } from "./store/threadInfo";



const root = combineReducers({

    THREAD: ThreadsStore,

});

export const store = createStore(root);