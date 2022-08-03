import { updateNameHandlerSender } from "../../redux/store/senderMessage";
import { ReduxStore } from "../../interface/interface";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const Name = () => {

    const dispatch = useDispatch();
    const store = useSelector((store: ReduxStore) => store.SENDER);
    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(updateNameHandlerSender(event.target.value));

    useEffect(() => {console.log(store)}, [store]);

    return <input type="text" className="input" placeholder="имя" onChange={nameHandler}/>

}