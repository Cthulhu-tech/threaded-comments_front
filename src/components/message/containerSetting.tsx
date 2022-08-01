import { addUserHandlerSender, openHandlerSender } from "../../redux/store/senderMessage";
import { updateHiddenMessageStore } from "../../redux/store/hiddenMessage";
import { LastMessage, ReduxStore } from "../../interface/interface";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

export const ContainerSetting = (data: {msg: LastMessage}) => {

    const dispatch = useDispatch();

    const [storedValue, setValue] = useLocalStorage("hiddenMessage", []);
    const openSender = useSelector((store: ReduxStore) => store.SENDER.open);
    const hiddenMsg = useSelector((store: ReduxStore) => store.HIDDEN_MESSAGE);
    const searchMessage = () => hiddenMsg.filter((value: string) => +value === data.msg.id).length > 0;
    const hiddenMessage = useMemo(() => searchMessage(), [hiddenMsg]);

    
    useEffect(() => {}, [openSender, hiddenMessage, hiddenMsg]);
    useEffect(() => {dispatch(updateHiddenMessageStore(storedValue as number[]))}, [storedValue]);

    return <div className="container-drop_down_list">
        <p className="drop_down_list_paragraph" 
            onClick={() => typeof setValue === "function" && setValue(data.msg.id)}
        >{hiddenMessage ? 'показать' : 'скрыть'}</p>
        <p className="drop_down_list_paragraph" 
            onClick={() => {
                !openSender && dispatch(openHandlerSender(true));
                dispatch(addUserHandlerSender(data.msg.id));
            }}
        >ответить</p>
    </div>

}