import React from "react";
import Image from "next/image";
import desktopHeaderBG from "@/public/bg-cafe-lg.jpg";
import tabletHeaderBG from "@/public/bg-cafe.jpg";
import mobileHeaderBG from "@/public/bg-cafe-sm.jpg";
export default function Header(){
    return(
        <header className="absolute left-0 top-0 w-full lg:h-[300px] h-[150px] -z-0">
            <Image className="object-cover lg:block hidden" alt="Header Image" fill src={desktopHeaderBG} />
            <Image className="object-cover hidden sm:block lg:hidden" alt="Header Image" fill src={tabletHeaderBG} />
            <Image className="object-cover block sm:hidden" alt="Header Image" fill src={mobileHeaderBG} />
        </header>
    );
}