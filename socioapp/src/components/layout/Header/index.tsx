'use client'
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/img/AfroLogo.png";
import menuHamburguer from "../../../assets/icons/menuHamburguer.png"
import doubleRight from "../../../assets/icons/doubleRight.png";
import { useState } from "react";
export default function Header() {
    const[menuAtivado, setMenuAtivado] = useState(false);/* */
    function abrirMenu() {

        if (menuAtivado == false) {setMenuAtivado(true);}

        else {setMenuAtivado(false);}

    }/*estrutura de condição para menu hamburguer*/
    const[botaoAtivado, setBotaoAtivado] = useState(false);/* */
    function virarBotao() {

        if (botaoAtivado == false) {setBotaoAtivado(true);}

        else {setBotaoAtivado(false);}

    }/*estrutura de condição para menu hamburguer*/
    return(
        <div className="h-screen w-[400px] bg-white-facebook p-5 lg:w-[90px] lg:bg-white">
            <div className="justify-between gap-5 flex flex-col items-center h-full max-h-[1500px] my-auto">
                <div className="flex lg:hidden">
                    <Image src={Logo} alt="Logo" className="w-[250px]" />
                </div>

                <div className="">
                    <div className="hidden lg:flex p-2">
                        <button className="" onClick={abrirMenu}>
                            <Image src={menuHamburguer} alt="Menu Hamburguer" width={28} height={28} />
                        </button>
                    </div>
                    
                    <div className="flex flex-col text-2xl font-bold text-gray-text lg:hidden justify-start">
                        <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s]">Quem são</a>
                        <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s]">Legislação</a>
                        <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s]">Cultura</a>
                        <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s]">Desafios</a>
                        <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s]">Ações</a>
                        <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s]">Educação</a>
                        <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s]">Parcerias</a>
                        <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s]">Perspectivas</a>
                    </div>
                </div>
                <div className="flex items-center justify-center"> 
                    <label htmlFor="">
                        <button className={`absolute w-[40px] h-[30] bg-gray-button rounded-2xl flex items-center `} onClick={virarBotao}>
                            <span className={`w-[16px] h-[16px] bg-white rounded-full justify-start ml-[0,8px] ${botaoAtivado? 'ml-[23px] duration-[0.8s]' : 'ml=[0,8px] duration-[0.8s]'}`}></span>
                        </button>
                    </label>
                </div>
                
            </div>
        </div>
    );
};