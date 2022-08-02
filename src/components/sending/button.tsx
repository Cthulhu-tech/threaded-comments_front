import { updateMessageHandlerSender } from "../../redux/store/senderMessage";
import { ReduxStore } from "../../interface/interface";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const ButtonMessage = () => {

    const dispatch = useDispatch();
    const store = useSelector((store: ReduxStore) => store.SENDER);

    return <>
        <div className="btn btn-primary"
          onClick={() => dispatch(updateMessageHandlerSender(store.message + "<br></br>"))}
        >
          <b>br</b>
        </div>
        <div className="btn btn-primary"
          onClick={() => dispatch(updateMessageHandlerSender(store.message + "<i></i>"))}
        >
          <i>i</i>
        </div>
        <div className="btn btn-primary"
          onClick={() => dispatch(updateMessageHandlerSender(store.message + "<spoiler></spoiler>"))}
        >
          <span className="spoiler">/spoiler</span>
        </div>
    </>

}