import { SendingMessage } from "../sending/sendingMessage";
import { ReduxStore } from "../../interface/interface";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import './layout.scss';

export const Layouts = () => {

    const open = useSelector((store: ReduxStore) => store.SENDER.open);

    useEffect(() => {}, [open]);

    return <>
        <Header/>
        <Outlet/>
        {open && <SendingMessage/>}
        <Footer/>
    </>

}