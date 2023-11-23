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
        <div className={`h-screen w-[400px] bg-white-facebook pt-2 lg:w-[20px] lg:bg-white`}>
            <div className="justify-between gap-5 flex flex-col items-center h-full">
                <div className="flex lg:hidden">
                    <Image src={Logo} alt="Logo" className="w-[250px]" />
                </div>

                <div className="">
                    <div className="hidden lg:flex absolute">
                        <button className="w-[20px] absolute" onClick={abrirMenu}>
                            <Image src={menuHamburguer} alt="Menu Hamburguer" width={20} height={20} />
                        </button>
                    </div>
                    
                    <div className={`${menuAtivado? 'duration-[0.8s] lg:ml[1px] lg:absolute top-0 left-0 ':'lg:ml-[-500px]'} flex flex-col text-2xl font-bold lg:bg-white-facebook md:w-[110px] lg:h-[2000px] text-gray-text gap-3 h-full lg:w-[165px] lg:text-xl lg:items-center`}>
                        <div className="top-5 hidden lg:flex absolute">
                            <Image src={Logo} alt="Logo" className="w-[250px] lg:w-[120px]" />
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-10 lg:mt-[80%] ml-10">
                            <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s] mr-10 ">Sobre</a>
                            <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s] mr-10">Legislação</a>
                            <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s] mr-10">Cultura</a>
                            <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s] mr-10">Desafios</a>
                            <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s] mr-10">Ações</a>
                            <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s] mr-10">Educação</a>
                            <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s] mr-10">Parcerias</a>
                            <a href="#QuemSao" className="hover:text-black transition-all duration-[0.2s] mr-10">Perspectivas</a>
                        </div>
                        <div className="hidden lg:flex bottom-3 items-center justify-center mr-[40px] mb-3 lg:mr-[33px] mt-[200px] "> 
                            <label htmlFor="" className="">
                                <button className={`absolute w-[40px] h-[30] bg-gray-button rounded-2xl flex items-center `} onClick={virarBotao}>
                                    <span className={`w-[16px] h-[16px] bg-white rounded-full justify-start ml-[0,8px] ${botaoAtivado? 'ml-[23px] duration-[0.8s]' : 'ml=[0,8px] duration-[0.8s]'}`}></span>
                                </button>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mr-[40px] mb-6 lg:mr-[-5px] lg:hidden"> 
                    <label htmlFor="">
                        <button className={`absolute w-[40px] h-[30] bg-gray-button rounded-2xl flex items-center`} onClick={virarBotao}>
                            <span className={`w-[16px] h-[16px] bg-white rounded-full justify-start ml-[0,8px] ${botaoAtivado? 'ml-[23px] duration-[0.8s]' : 'ml=[0,8px] duration-[0.8s]'}`}></span>
                        </button>
                    </label>
                </div>
                
            </div>
            <body>
                
            </body>
        </div>
        
    );
};