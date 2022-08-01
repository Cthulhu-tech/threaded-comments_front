import { SenderMessageStore } from "./store/senderMessage";
import { HiddenMessageStore } from "./store/hiddenMessage";
import { PopupSettingStore } from "./store/settingPopup";
import { combineReducers, createStore } from "redux";
import { ThreadsStore } from "./store/threadInfo";
import { MessageStore } from "./store/searchMsg";

const root = combineReducers({

    THREAD: ThreadsStore,
    MESSAGE: MessageStore,
    HIDDEN_MESSAGE: HiddenMessageStore,
    POPUP: PopupSettingStore,
    SENDER: SenderMessageStore,
    
});

export const store = createStore(root);
