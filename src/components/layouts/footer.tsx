import { updateThreadStore } from '../../redux/store/threadInfo';
import { useInView } from 'react-intersection-observer';
import { ReduxStore } from '../../interface/interface';
import { useLocation } from 'react-router-dom';
import { UseFetch } from '../../hook/useFetch';
import { Loading } from '../loading/loading';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Footer = () => {

    const dispatch = useDispatch();
    const location = useLocation().pathname;
    const {load, data, error, fetchData} = UseFetch("POST");
    const store = useSelector((state: ReduxStore) => state.THREAD);

    const updateData = () =>{

        const max = Math.max(...store.threads.map((_) => _.id)) + 1;

        if(max)
            fetchData((process.env.REACT_APP_SERVER as string) + "threads", {id: max});
    
    }

    const [ref] = useInView({threshold: 0, onChange: updateData});

    useEffect(() => {

        if(!error.message.includes("not found") && data && data.length > 0) dispatch(updateThreadStore(data) as any);

    }, [location, load, error]);

    return <footer ref={
        !error.message.includes("not found") 
        && store.threads.length > 0 
        && location === '/' ? ref : null} 
        className="footer layout"
        >
        <div className="creator_info">
            <div className="sub-creator_info">
                    😻
                <a 
                    className="link_info"
                    href="https://github.com/Cthulhu-tech"
                >creator</a>
                    🙀
                <a 
                    className="link_info"
                    href="https://github.com/Cthulhu-tech/threaded-comments_front"
                >project</a>
            </div>
        </div>
    </footer>

}
