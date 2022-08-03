import { updateHiddenMessageStore } from './redux/store/hiddenMessage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from './hook/useLocalStorage';
import { Layouts } from './components/layouts/layouts';
import { ThreadView } from './views/thread';
import { useDispatch } from 'react-redux';
import { HomeView } from './views/home';
import { useEffect } from 'react';
import "./style/global.scss";

export const App = () => {

  const dispatch = useDispatch();
  const [storedValue] = useLocalStorage("hiddenMessage", []);
  useEffect(() => {dispatch(updateHiddenMessageStore(storedValue as number[]));},[storedValue]);

  return <BrowserRouter>
    <Routes>
      <Route element={<Layouts/>}>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/thread/:id" element={<ThreadView/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

}

