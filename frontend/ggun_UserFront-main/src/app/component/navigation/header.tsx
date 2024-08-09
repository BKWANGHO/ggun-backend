'use client';

import { useEffect, useState } from "react";
import MyHeaderLink from "../header/myheaderLink";
import HeaderLink from "../header/headerLink";
import { getCookie } from "cookies-next";

function Header() {

    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {

        const handleScroll = () => {
            window.scrollY > 10 ? setShowHeader(false) : setShowHeader(true);
        };
        window.addEventListener('scroll', handleScroll);

    }, []);

    const exist = true;


    const accessToken = getCookie('accessToken')

    return (
        <nav className="w-screen flex justify-center">
            <div className={`duration-500 ease-in-out transition-[width] px-3 border ${showHeader == true ? 'h-[70px] w-[85%]' : 'h-[40px] w-full'} shadow-sm rounded-b-lg bg-white`}>
                {exist==true ? <MyHeaderLink /> : <HeaderLink /> }
            </div>
        </nav >

    );
}
export default Header;