import { updateThreadStore } from '../../redux/store/threadInfo';
import { useInView } from 'react-intersection-observer';
import { ReduxStore } from '../../interface/interface';
import { UseFetch } from '../../hook/useFetch';
import { Loading } from '../loading/loading';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Footer = () => {

    const dispatch = useDispatch();
    const {load, data, error, fetchData} = UseFetch("POST");
    const store = useSelector((state: ReduxStore) => state.THREAD);

    const updateData = () => fetchData((process.env.REACT_APP_SERVER as string) + "api/threads", {thread: store.threads.length});

    const [ref] = useInView({threshold: 0, onChange: updateData});

    useEffect(() => {

        if(data && data.length > 0) dispatch(updateThreadStore(data) as any);

    }, [load]);

    if(load) return <Loading/>

    return <footer ref={error.message !== "limit not found" ? ref : null} className="footer layout">

        {error.message === "limit not found" && "конец"}

    </footer>

}