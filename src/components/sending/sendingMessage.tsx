import { deleteUserHandlerSender, openHandlerSender, updateMessageHandlerSender } from '../../redux/store/senderMessage';
import { ReduxStore } from '../../interface/interface';
import { UseFetch } from '../../hook/useFetch';
import { useSelector } from 'react-redux';
import { OnDrag } from '../onDrag/onDrag';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import './sendingMessage.scss';

export const SendingMessage = () => {

    const dispatch = useDispatch();
    const ref = useRef<HTMLTextAreaElement>(null);
    const store = useSelector((store: ReduxStore) => store.SENDER);

    const {load , data, error, fetchData} = UseFetch('POST');

    const textareaHamdler = (event: React.ChangeEvent<HTMLTextAreaElement>) => dispatch(updateMessageHandlerSender(event.target.value));

    const dataSend = () => {

      fetchData(process.env.REACT_APP_SERVER as string + 'send', {from: store.from, message: store.message});
      dispatch(openHandlerSender(false));

    }

    useEffect(() => {console.log(store)}, [store]);

    return <OnDrag>
    <div className="container-sending">
      <div>
        {store.from.map((id) => <div 
          key={id}
          className="message_from btn"
          onClick={() => dispatch(deleteUserHandlerSender(id))}
        > » {id}</div>)}
      </div>
      <div className="container-message">
        <textarea className="container-textarea" onChange={textareaHamdler} ref={ref} value={store.message}/>
      </div>
      <div className="container-button">
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
        <button className="btn btn-sender"
          onClick={dataSend}
        >Отправить</button>
      </div>
    </div>
    </OnDrag>

}