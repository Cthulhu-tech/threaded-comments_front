import { Action, SenderMessage,  } from "../../interface/interface";


const defaultState = {

    from: [],
    message: null,
    open: false

}

const SendOpenHandler = "SEND_OPEN_HANDLER";
const SendMessageHandler = "SEND_MESSAGE_HANDLER";
const SendAddUserHandler = "SEND_ADD_USER_HANDLER";
const SendDeleteUserHandler = "SEND_DELETE_USER_HANDLER";

export const SenderMessageStore = (state = defaultState, action:Action<string, string | number | boolean>) => {
    switch (action.type){
        case SendOpenHandler:
            return {...state, open: action.payload as boolean}
        case SendMessageHandler:
            return {...state, message: action.payload as string}
        case SendAddUserHandler:
            return {...state, from: [...state.from, action.payload as number]}
        case SendDeleteUserHandler:
            return {...state, from: [...state.from.filter((userId) => userId !== action.payload as number)]}
        default:
            return state;
    }
}

export const openHandlerSender = (payload: boolean) => ({ type: SendOpenHandler, payload });
export const updateMessageHandlerSender = (payload: string) => ({ type: SendMessageHandler, payload });
export const addUserHandlerSender = (payload: number) => ({ type: SendAddUserHandler, payload });
export const deleteUserHandlerSender = (payload: number) => ({ type: SendDeleteUserHandler, payload });
