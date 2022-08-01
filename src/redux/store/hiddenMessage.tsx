import { Action } from "../../interface/interface";


const defaultState = [0];

const updateMessage = "HIDDEN_MESSAGE_UPDATE";

export const HiddenMessageStore = (state = defaultState, action:Action<string, number[]>) => {
    switch (action.type){
        case updateMessage:
            return action.payload;
        default:
            return state;
    }
}

export const updateHiddenMessageStore = (payload: number[]) => ({ type: updateMessage, payload });