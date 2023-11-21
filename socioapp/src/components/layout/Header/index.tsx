'use client'
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/images/logo.png";
import doubleRight from "../../../../public/icons/Header/doubleRight.png";
import { useState } from "react";
import menuHamburguer from "../../../../public/icons/Header/menuHamburguer.png"
export default function Header() {
    const[menuAtivado, setMenuAtivado] = useState(false);/* */
    function abrirMenu() {
        if (menuAtivado == false) {setMenuAtivado(true);}
        else {setMenuAtivado(false);}}/*estrutura de condição para menu hamburguer*/
    return(
        <div>
            <div className="bg-white-facebook w-[450px] h-screen items-center flex flex-col justify-between lg:w-[80px]">
                <div className="hidden lg:flex hover:hidden p-2">
                    <div className="">
                        <Image src={menuHamburguer} alt="Menu Hamburguer" width={28} height={28}/>
                    </div>
                </div>
                <div className="lg:hidden">
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="flex flex-col text-2xl font-bold text-center gap-4 lg:bg-cinzaEscuro lg:w-[300px] lg:h-[300px] lg:flex lg:items-center lg:justify-center rounded-md duration-[0.7s] ">
                    <Link href="#" className="hover:text-cinzaEscuro transition-all duration-[0.7s]">Sobre Nós</Link>
                    <Link href="#" className="hover:text-cinzaEscuro transition-all duration-[0.7s]">Quilombos</Link>
                    <Link href="#" className="hover:text-cinzaEscuro transition-all duration-[0.7s]">Quem São</Link>
                    <Link href="#" className="hover:text-cinzaEscuro transition-all duration-[0.7s]">Localidade</Link>
                    <Link href="#" className="hover:text-cinzaEscuro transition-all duration-[0.7s]">Conscientização</Link>
                </div>
                <div className="lg:bottom-1">
                    <button className="bg-cinzaEscuro w-[50px] h-[25px] rounded-3xl"><span className="items-start flex rounded-full bg-branco h-[21px] w-[20px] ml-[3px]">ㅤ</span></button>
                </div>
            </div>
        </div>
    );
};
