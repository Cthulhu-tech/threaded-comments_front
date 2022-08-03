import { FetchDataThread } from "../redux/async/thread";
import { Thread } from "../components/threads/thread";
import { ReduxStore } from "../interface/interface";
import { Error } from "../components/error/error";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const ThreadView = () => {

    let { id } = useParams();
    const dispatch = useDispatch();
    const store = useSelector((store: ReduxStore) => store.THREAD);

    const updateThreadStore = () => id && dispatch(FetchDataThread(+id) as any);

    useEffect(() => { updateThreadStore(); }, []);

    if(id && Number.isInteger(+id))
        return <>{store.threads.map((thread) => id && thread.id === +id && <Thread {...{...thread, type: "inside"}} key={thread.id}/>)}</>
    
    

    return <Error error={`Тред ${id} не найден`}/>

}
