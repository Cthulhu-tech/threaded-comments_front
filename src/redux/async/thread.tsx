import { errorState } from "../store/error";
import { updateThreadStore } from "../store/threadInfo";

export const FetchDataThread = (id: number) => {

    return (dispatch: any) => {

        fetch(((process.env.REACT_APP_SERVER as string) + "threads"), {

            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            credentials: "include",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify({id: +id})

        })
        .then((response) => {

            if(!response.ok) {
                
                throw new Error("Ошибка при обновлении треда");

            }else{

                return response.json();

            }

        })
        .then((json) => {

            dispatch(updateThreadStore(json));

        })
        .catch((error) => {

            dispatch(errorState({message: error.message, resolve: false}));

        });

    }

}