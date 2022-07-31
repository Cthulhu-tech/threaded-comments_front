import { Action } from "../../interface/interface";


const defaultState = [""];

const updateMessage = "HIDDEN_MESSAGE_UPDATE";

export const HiddenMessageStore = (state = defaultState, action:Action<string, string[]>) => {
    switch (action.type){
        case updateMessage:
            return action.payload;
        default:
            return state;
    }
}

export const updateHiddenMessageStore = (payload: string[]) => ({ type: updateMessage, payload });