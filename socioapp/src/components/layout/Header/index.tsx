'use client'
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/img/AfroLogo.png";
import doubleRight from "../../../assets/icons/doubleRight.png";
import { useState } from "react";
import menuHamburguer from "../../../assets/icons/menuHamburguer.png"
export default function Header() {
    const[menuAtivado, setMenuAtivado] = useState(false);/* */
    function abrirMenu() {
        if (menuAtivado == false) {setMenuAtivado(true);}
        else {setMenuAtivado(false);}}/*estrutura de condição para menu hamburguer*/
    return(
        <div>
            <div className="bg-white-facebook w-[450px] h-screen p-5 items-center flex flex-col justify-between lg:w-[80px]">

                <div className="hidden lg:flex hover:hidden p-2">
                    <div className="">
                        <Image src={menuHamburguer} alt="Menu Hamburguer" width={28} height={28}/>
                    </div>
                </div>

                <div className="lg:hidden">
                    <Image src={Logo} alt="Logo" className="w-[250px]"/>
                </div>

                <div className="flex flex-col text-2xl font-bold text-center gap-4 lg:bg-cinzaEscuro lg:w-[300px] lg:h-[300px] lg:flex lg:items-center lg:justify-center rounded-md duration-[0.7s] ">

                    <a href="#quemSao" className="hover:text-gray-text transition-all duration-[0.2s]">Quem são</a>
                    <a href="#legislacao" className="hover:text-gray-text transition-all duration-[0.2s]">Legislação</a>
                    <a href="#diversidade" className="hover:text-gray-text transition-all duration-[0.2s]">Diversidade</a>
                    <a href="#cultura" className="hover:text-gray-text transition-all duration-[0.2s]">Cultura</a>
                    <a href="#desafios" className="hover:text-gray-text transition-all duration-[0.2s]">Desafios</a>
                    <a href="#acoes" className="hover:text-gray-text transition-all duration-[0.2s]">Ações</a>
                    <a href="#educacao" className="hover:text-gray-text transition-all duration-[0.2s]">Educação</a>
                    <a href="#parcerias" className="hover:text-gray-text transition-all duration-[0.2s]">Parcerias</a>
                    <a href="#perspectivas" className="hover:text-gray-text transition-all duration-[0.2s]">Perspectivas</a>

                </div>

                <div className="lg:bottom-1">

                    <button className="bg-cinzaEscuro w-[50px] h-[25px] rounded-3xl"><span className="items-start flex rounded-full bg-branco h-[21px] w-[20px] ml-[3px]"></span></button>

                </div>

            </div>
        </div>
    );
};