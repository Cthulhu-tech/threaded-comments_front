import { useEffect, useState } from "react"

export const UseFetch = (url: string, method: string) => {

    const [load, setLoad] = useState(true);
    const [data, setData] = useState<any>();
    const [error, setError] = useState({error: false, message: ""});

    useEffect(() => {

        fetch(url, {
            method,
            mode: 'cors',
            redirect: 'follow',
            credentials: "include",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => {

            return response.json();

        })
        .then((json) => {

            setData(json);
            setLoad(false);

        })
        .catch((error) => {

            setLoad(false);
            setError({error: true, message: error.message});

        })

    }, []);

    return {load , data, error};

}