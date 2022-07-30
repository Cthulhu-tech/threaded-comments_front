import { LastMessage, ReduxStore } from '../interface/interface';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { updateMessageStore } from '../redux/store/searchMsg';

export const UseSearch = () => {

    const dispatch = useDispatch();
    const msg = useSelector((store: ReduxStore) => store.MESSAGE);

    const [message, setMessage] = useState<LastMessage | null>();
    const store = useSelector((store: ReduxStore) => store.THREAD.threads);

    useEffect(() => {console.log(msg)},[])

    const searchMessage = (id: number) => {
        
        const filteredArray = store
        .filter((thread) => thread.message.some((msg) => msg.id === id))
        .map(thread => thread.message.filter(msg => msg.id === id));

        if(msg.message.find(msg=> msg.id === id)){

            console.log('find')

        }else{

            dispatch(updateMessageStore(filteredArray[0]));
            
            setMessage(filteredArray[0][0]);

        }

    }

    const deletMessage = () => setMessage(null);

    return {message, searchMessage, deletMessage}

}