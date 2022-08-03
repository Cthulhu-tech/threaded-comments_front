import { Action, ErrorStore } from "../../interface/interface";

const defaultState: ErrorStore = {

    message: "",
    resolve: true

}

const error = "SITE_ERROR";

export const _ErrorStore = (state = defaultState, action:Action<string, ErrorStore>) => {
    switch (action.type){
        case error:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const errorState = (payload: ErrorStore) => ({ type: error, payload });
