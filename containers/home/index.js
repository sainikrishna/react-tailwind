import { useState } from "react";
import Drawer from "../../components/drawer";
import Header from "../../components/header";
import Footer from "./footer";
import HomeHero from "./hero";
import JoinUs from "./joinUs";
import Rating from "./rating";
import Tabs from "./tabs";

export default function HomeContainer(){
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    return <>
        <Header onOpenDrawer={setIsOpenDrawer} />
        <HomeHero />
        <Rating />
        <Tabs />
        <JoinUs />
        <Footer />
        <Drawer isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer} />
    </>
}