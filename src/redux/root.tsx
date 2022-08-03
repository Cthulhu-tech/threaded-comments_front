import { applyMiddleware, combineReducers, createStore } from "redux";
import { SenderMessageStore } from "./store/senderMessage";
import { HiddenMessageStore } from "./store/hiddenMessage";
import { PopupSettingStore } from "./store/settingPopup";
import { ThreadsStore } from "./store/threadInfo";
import { MessageStore } from "./store/searchMsg";
import { _ErrorStore } from "./store/error";
import thunk from "redux-thunk";

const root = combineReducers({

    THREAD: ThreadsStore,
    MESSAGE: MessageStore,
    HIDDEN_MESSAGE: HiddenMessageStore,
    POPUP: PopupSettingStore,
    SENDER: SenderMessageStore,
    ERROR: _ErrorStore
    
});

export const store = createStore(root, applyMiddleware(thunk));
