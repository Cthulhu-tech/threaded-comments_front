import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import './layout.scss';

export const Layouts = () => {

    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>

}