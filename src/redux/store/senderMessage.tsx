import { Action, Img, MessageSenderFrom, SenderFrom  } from "../../interface/interface";


const defaultState: MessageSenderFrom = {

    from: [],
    message: "",
    open: false,
    image: []

}

const SendOpenHandler = "SEND_OPEN_HANDLER";
const SendMessageHandler = "SEND_MESSAGE_HANDLER";
const SendAddUserHandler = "SEND_ADD_USER_HANDLER";
const SendDeleteUserHandler = "SEND_DELETE_USER_HANDLER";

const SendAddImgHandler = "SEND_ADD_IMG_USER_HANDLER";
const SendDeleteImgHandler = "SEND_DELETE_IMG_USER_HANDLER";

export const SenderMessageStore = (state = defaultState, action:Action<string, string | number | boolean | SenderFrom | Img>) => {

    switch (action.type){
        case SendOpenHandler:
            return {...state, open: action.payload as boolean}
        case SendMessageHandler:
            return {...state, message: action.payload as string}
        case SendAddUserHandler:
            const index = (state.from as SenderFrom[]).findIndex((id) => id.msg === (action.payload as SenderFrom).msg);
            if(index === -1)
            return {...state, from: [...state.from, action.payload as SenderFrom]}
            return state;
        case SendDeleteUserHandler:
            let filterData = [...state.from.map((userId) => userId.msg !== (action.payload as SenderFrom).msg ? userId : userId.msg === 0 && (action.payload as SenderFrom).msg === 0 ? [] : {msg: 0, thread: userId.thread})];
            filterData = filterData.filter((element) => Array.isArray(element) !== true);
            state = {...state, from: filterData.length > 0 ? (filterData as SenderFrom[]) : []}
            state.from = state.from.filter((value, index, self) => index === self.findIndex((t) => (t.msg === value.msg)));
            return state;
        case SendAddImgHandler:
            return {...state, image: [...state.image, action.payload as Img]}
        case SendDeleteImgHandler:
            return {...state, image: [...state.image.filter(img => img.src !== (action.payload as Img).src)]}
        default:
            return state;
    }
}


export const openHandlerSender = (payload: boolean) => ({ type: SendOpenHandler, payload });
export const updateMessageHandlerSender = (payload: string) => ({ type: SendMessageHandler, payload });
export const addUserHandlerSender = (payload: SenderFrom) => ({ type: SendAddUserHandler, payload });
export const deleteUserHandlerSender = (payload: SenderFrom) => ({ type: SendDeleteUserHandler, payload });

export const addImgHandlerSender = (payload: Img) => ({ type: SendAddImgHandler, payload });
export const deleteImgHandlerSender = (payload: Img) => ({ type: SendDeleteImgHandler, payload });
