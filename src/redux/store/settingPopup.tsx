import { Action, Popup } from "../../interface/interface";

const defaultState = {id: 0, open: false};

const updatePopupSetting = "UPDATE_POPUP_SETTING";

export const PopupSettingStore = (state = defaultState, action:Action<string, Popup>) => {
    switch (action.type){
        case updatePopupSetting:
            return action.payload;
        default:
            return state;
    }
}

export const updatePopup = (payload: Popup) => ({ type: updatePopupSetting, payload });
