import { Thread } from "../components/threads/thread";
import { ReduxStore } from "../interface/interface";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const HomeView = () => {

    const store = useSelector((store: ReduxStore) => store.THREAD);

    useEffect(() => {

        console.log(store)

    }, [store]);

    return <>{
        store.threads.map((thread) => <Thread {...thread} key={thread.id}/>)
    }</>

}