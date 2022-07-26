import { updateThreadStore } from '../../redux/store/threadInfo';
import { useInView } from 'react-intersection-observer';
import { ReduxStore } from '../../interface/interface';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export const Footer = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState({error: ''});
    const store = useSelector((state: ReduxStore) => state.THREAD);

    const updateData = () => {

        fetch((process.env.REACT_APP_SERVER as string) + "api/threads", {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            credentials: "include",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify({start: store.threads.length, end: store.threads.length + 1})

        })
        .then((response) => {

            if(!response.ok) response.json().then(json => setError(json));

            return response.json();

        })
        .then((json) => {

            dispatch(updateThreadStore(json) as any);

        });

    }

    const [ref] = useInView({threshold: 0, onChange: updateData});

    useEffect(() => {}, [error]);

    return <footer ref={error.error !== "limit not found" ? ref : null} className="footer layout">

        {error.error === "limit not found" && "конец"}

    </footer>

}