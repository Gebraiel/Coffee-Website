import React from "react";
import Image from "next/image";
import desktopHeaderBG from "@/public/bg-cafe-lg.jpg";
import tabletHeaderBG from "@/public/bg-cafe.jpg";
import mobileHeaderBG from "@/public/bg-cafe-sm.jpg";
export default function Header(){
    return(
        <header className="relative w-full lg:h-[300px]">
            <Image className="object-cover lg:block hidden" fill src={desktopHeaderBG} />
            <Image className="hidden sm:block lg:hidden"src={tabletHeaderBG} />
            <Image className="block sm:hidden"src={mobileHeaderBG} />
        </header>
    );
}