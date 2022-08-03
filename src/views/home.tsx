import { updateThreadStore } from "../redux/store/threadInfo";
import { Loading } from "../components/loading/loading";
import { Thread } from "../components/threads/thread";
import { ReduxStore } from "../interface/interface";
import { Error } from "../components/error/error";
import { UseFetch } from "../hook/useFetch";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const HomeView = () => {

    const dispatch = useDispatch();
    const {load, data, error, fetchData} = UseFetch("POST");
    const store = useSelector((store: ReduxStore) => store.THREAD);

    useEffect(() => {}, [store]);

    useEffect(() => {fetchData(((process.env.REACT_APP_SERVER as string) + "threads"))}, []);
    useEffect(() => {
      if(!error.error && data && data.length > 0)
        dispatch(updateThreadStore(data) as any);
    }, [load, data, error]);
  
    if(load) return <Loading/>
    if(error.error) return <Error error={error.message}/>

    return <main className="main">{store.threads.map((thread) => <Thread {...{...thread}} key={thread.id}/>)}</main>

}