import { LastMessage, ReduxStore } from '../interface/interface';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteAllMessageStore, deleteMessageStore, updateMessageStore } from '../redux/store/searchMsg';

export const UseSearch = () => {

    const dispatch = useDispatch();
    const msg = useSelector((store: ReduxStore) => store.MESSAGE);

    const [message, setMessage] = useState<LastMessage | null>();
    const store = useSelector((store: ReduxStore) => store.THREAD.threads);

    useEffect(() => {},[msg, message])

    const searchMessage = (id: number) => {
        
        const filter = store.filter((thread) => thread.message.some((msg) => msg.id === id));

        if(filter.length === 0){

            console.log('fetchdata')

        }else{

            const filteredArray = filter.map(thread => thread.message.filter(msg => msg.id === id));

            if(msg.message.find(msg=> msg.id === id)){
    
                console.log('find');

                return;
    
            }else{
    
                dispatch(updateMessageStore(filteredArray[0]));
                
                setMessage(filteredArray[0][0]);
    
            }

        }

    }

    const deletMessage = (id: number) => {

        setMessage(null);
        dispatch(deleteMessageStore(id));
        
    };

    const deteleAll = () => {

        setMessage(null);
        dispatch(deleteAllMessageStore());
    
    };

    return {message, searchMessage, deletMessage, deteleAll}

}