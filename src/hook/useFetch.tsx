import { useEffect, useState } from "react"

export const UseFetch = (method: string) => {

    const [load, setLoad] = useState(true);
    const [data, setData] = useState<any>();
    const [error, setError] = useState({error: false, message: ""});

    const fetchData = (url: string, body?: any) => {

        fetch(url, {
            method,
            mode: 'cors',
            redirect: 'follow',
            credentials: "include",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(body)

        })
        .then((response) => {

            if(!response.ok) {

                setLoad(false);
                
                response.json().then(json => setError(json));

            }else{

                return response.json();

            }

        })
        .then((json) => {

            setData(json);
            setLoad(false);

        })
        .catch((error) => {

            setLoad(false);
            setError({error: true, message: error.message});

        });

    }

    useEffect(() => {}, []);

    return {load , data, error, fetchData};

}