import { Action, LastMessage } from "../../interface/interface";


const defaultState = {

    message: []

}

const updateMessage = "MESSAGE_UPDATE";
const deleteMessage = "MESSAGE_DELETE";
const deleteallMessage = "MESSAGE_DELETE_ALL";

export const MessageStore = (state = defaultState, action:Action<string, LastMessage[] | number>) => {
    switch (action.type){
        case updateMessage:
            const index = state.message.findIndex((msg: LastMessage) => msg.id === (action.payload as LastMessage[])[0].id);
            if(index === -1)
            return { message: [...state.message, ...(action.payload as LastMessage[])]}
            return state;
        case deleteMessage:
            return {message: [...(state.message as LastMessage[]).filter((thread) => thread.id !== (action.payload as number))]}
        case deleteallMessage:
            return {message: []}
        default:
            return state;
    }
}

export const updateMessageStore = (payload: LastMessage[]) => ({ type: updateMessage, payload });
export const deleteMessageStore = (payload: number) => ({ type: deleteMessage, payload });
export const deleteAllMessageStore = () => ({ type: deleteallMessage });
