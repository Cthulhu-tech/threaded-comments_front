import { deleteUserHandlerSender, openHandlerSender, updateMessageHandlerSender } from '../../redux/store/senderMessage';
import { ReduxStore } from '../../interface/interface';
import { useEffect, useRef, useState } from 'react';
import { UseFetch } from '../../hook/useFetch';
import { useSelector } from 'react-redux';
import { OnDrag } from '../onDrag/onDrag';
import { useDispatch } from 'react-redux';
import { ButtonMessage } from './button';
import { InputSending } from './input';
import { ImageMessage } from './image';
import './sendingMessage.scss';
import { Name } from './name';

export const SendingMessage = () => {

    const dispatch = useDispatch();
    const [img, setImg] = useState(false);
    const ref = useRef<HTMLTextAreaElement>(null);
    const store = useSelector((store: ReduxStore) => store.SENDER);

    const {load , data, error, fetchData} = UseFetch('POST');

    const textareaHamdler = (event: React.ChangeEvent<HTMLTextAreaElement>) => dispatch(updateMessageHandlerSender(event.target.value));

    const dataSend = () => {

        fetchData(process.env.REACT_APP_SERVER as string + 'message', {from: store.from, message: store.message, img: store.image});
        dispatch(openHandlerSender(false));

    }

    useEffect(() => {console.log(store)}, [store]);

    return <OnDrag>
    {store.from.length > 0 ? 
    <div className="container-sending">
      <div>
        {store?.from?.length > 0 && store.from.map((id) => <div 
          key={id.msg}
          className="message_from btn"
          onClick={() => dispatch(deleteUserHandlerSender({msg: id.msg, thread: id.thread}))}
        > » {id.msg === 0 ? 'в тред №' + id.thread : id.msg}</div>)}
      </div>
      <div className="container-message">
        <textarea className="container-textarea input" onChange={textareaHamdler} ref={ref} value={store.message}/> 
      </div>
      <Name/>
      <ImageMessage/>
      {img && <InputSending/>}
      <div className="container-button">
        <ButtonMessage/>
        <div className="btn btn-primary"
          onClick={() => setImg(!img)}
        >
          <p>image</p>
        </div>
        {store.from.length > 0 && 
        <button className="btn btn-sender"
          onClick={dataSend}
        >Отправить</button>}
      </div>
    </div>
    :
    <div className="container-error">Требуется отправитель</div>}
    </OnDrag>

}