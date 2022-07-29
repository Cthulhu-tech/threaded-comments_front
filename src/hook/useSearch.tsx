import { LastMessage, ReduxStore } from "../interface/interface";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const UseSearch = () => {

    const [message, setMessage] = useState<LastMessage | null>();
    const store = useSelector((store: ReduxStore) => store.THREAD.threads);

    useEffect(() => {},[])

    const searchMessage = (id: number) => {

        const filteredArray = store
        .filter((thread) => thread.message.some((msg) => msg.id === id))
        .map(thread => thread.message.filter(msg => msg.id === id));

        setMessage(filteredArray[0][0]);

    }

    const deletMessage = () => setMessage(null);

    return {message, searchMessage, deletMessage}

}