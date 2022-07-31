import { updateHiddenMessageStore } from "../../redux/store/hiddenMessage";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { LastMessage, ReduxStore } from "../../interface/interface";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

export const ContainerSetting = (data: {msg: LastMessage}) => {

    const dispatch = useDispatch();

    const [storedValue, setValue] = useLocalStorage("hiddenMessage", []);
    const hiddenMsg = useSelector((store: ReduxStore) => store.HIDDEN_MESSAGE);

    const searchMessage = () => hiddenMsg.filter((value: string) => +value === data.msg.id).length > 0;
    const hiddenMessage = useMemo(() => searchMessage(), [hiddenMsg]);

    
    useEffect(() => {}, [hiddenMessage, hiddenMsg]);
    useEffect(() => {dispatch(updateHiddenMessageStore(storedValue as string[]))}, [storedValue]);

    return <div className="container-drop_down_list">
        <p className="drop_down_list_paragraph" 
            onClick={() => typeof setValue === "function" && setValue(`${data.msg.id}`)}
        >{hiddenMessage ? 'показать' : 'скрыть'}</p>
        <p className="drop_down_list_paragraph" 
            onClick={() => console.log('click')}
        >ответить</p>
    </div>

}