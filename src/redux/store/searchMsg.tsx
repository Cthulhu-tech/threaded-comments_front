import { Action, LastMessage } from "../../interface/interface";


const defaultState = {

    message: []

}

const updateMessage = "MESSAGE_UPDATE";
const deleteMessage = "MESSAGE_DELETE";

export const MessageStore = (state = defaultState, action:Action<string, LastMessage[] | LastMessage>) => {
    switch (action.type){
        case updateMessage:
            const index = state.message.findIndex((msg: LastMessage) => msg.id === (action.payload as LastMessage[])[0].id);
            if(index === -1)
            return { message: [...state.message, ...(action.payload as LastMessage[])]}
            return state;
        case deleteMessage:
            return {...(state.message as LastMessage[]).filter((thread) => (thread.id as number) !== (action.payload as LastMessage).id)}
        default:
            return state;
    }
}

export const updateMessageStore = (payload: LastMessage[]) => ({ type: updateMessage, payload });
