import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { updateThreadStore } from './redux/store/threadInfo';
import { Layouts } from './components/layouts/layouts';
import { Loading } from './components/loading/loading';
import { Error } from './components/error/error';
import { UseFetch } from './hook/useFetch';
import { useDispatch } from 'react-redux';
import { HomeView } from './views/home';
import { useEffect } from 'react';
import "./style/global.scss";

export const App = () => {

  const dispatch = useDispatch();
  const {load, data, error} = UseFetch((process.env.REACT_APP_SERVER as string) + "api/threads", "POST", {start: 0, end: 1});

  useEffect(() => {

    if(!error.error && data && data.length > 0){

      dispatch(updateThreadStore(data) as any);
      
    }

  }, [load, data, error]);

  if(load) return <Loading/>
  if(error.error) return <Error error={error.message}/>

  return <BrowserRouter>
    <Routes>
      <Route element={<Layouts/>}>
        <Route path="/" element={<HomeView/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

}

