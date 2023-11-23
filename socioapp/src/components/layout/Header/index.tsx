'use client'
import Image from "next/image";
import Logo from "../../../assets/img/AfroLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { MdDiversity1 } from "react-icons/md";
import { TbWorldPlus } from "react-icons/tb";
import { MdLightbulbOutline } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { FaHeadSideVirus } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
export default function Header() {

    const[menuAtivado, setMenuAtivado] = useState(false);
    const[dark, setDark] = useState(false);

    function abrirMenu() {

        if (menuAtivado == false) {
            setMenuAtivado(true);
        }
        else {
            setMenuAtivado(false);
        }

    }

    function fecharMenu(){

        if (menuAtivado == false) {
            setMenuAtivado(false);
        }
        else {
            setMenuAtivado(false);
        }

    }/estrutura de condição para menu hamburguer/

    function trocarTema() {

        if (dark == false) {

            setDark(true);
        }

        else {

            setDark(false);
        }

    }/estrutura de condição para menu hamburguer/

    return(

        <>

            <RxHamburgerMenu onClick={abrirMenu}  className={`absolute z-10 hidden text-2xl text-black-bg mt-2 ml-2 cursor-pointer lg:flex ${menuAtivado? 'lg:hidden' : 'flex'}`}/>
            
            <div className={`h-screen w-[500px] bg-white-facebook pt-2 duration-[0.2s] lg:ml-[-500px]`}>

                <div className="flex flex-col items-center justify-between gap-5 p-5 h-full ">

                    <Image src={Logo} className="max-w-full" draggable="false" loading="eager" alt="Logo do projeto"/> 

                    <div className="flex flex-col items-start">

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsPeople className="text-2xl"/> 
                            <a href="#quemSao" className="text-3xl font-bold">Quem são</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsBook className="text-2xl" /> 
                            <a href="#legislacao" className="text-3xl font-bold">Legislação</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdDiversity1 className="text-2xl" />
                            <a href="#diversidade" className="text-3xl font-bold">Diversidade</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <TbWorldPlus className="text-2xl" />
                            <a href="#cultura" className="text-3xl font-bold">Cultura</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdLightbulbOutline className="text-2xl" />
                            <a href="#desafios" className="text-3xl font-bold">Desafios</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsMegaphone className="text-2xl" />
                            <a href="#acoes" className="text-3xl font-bold">Ações</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdOutlineCastForEducation className="text-2xl" />
                            <a href="#educacao" className="text-3xl font-bold">Educação</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <RiContactsLine className="text-2xl" />
                            <a href="#parcerias" className="text-3xl font-bold">Parcerias</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <FaHeadSideVirus className="text-2xl" />
                            <a href="#perspectivas" className="text-3xl font-bold">Perspectivas</a>

                        </div> 

                    </div> 

                    <div onClick={ trocarTema } className={` w-16 p-1 rounded-full cursor-pointer ${dark? 'bg-gray-text' : 'bg-black-2'}`}>
                        <div onClick={trocarTema} className={`${dark ? "ml-[64%] bg-black" : "bg-white"} w-5 h-5 rounded-full duration-[0.2s] cursor-pointer`}></div>
                    </div>
                    
                </div>

            </div>

            <div onClick={fecharMenu} className={`hidden lg:block duration-[0.2s] ${menuAtivado ? "bg-white-facebook/60 backdrop-blur-sm" : "bg-white-facebook/0 backdrop-blur-0"} fixed w-screen h-screen`}></div>

            <div className={`hidden lg:flex fixed h-screen w-[250px] max-w-full bg-white-facebook duration-[0.2s] ${menuAtivado ? "ml-0" : "ml-[-400px]"}`}>

                <div className="flex flex-col items-center justify-between gap-5 p-5 h-full">

                    <Image src={Logo} className="max-w-full" draggable="false" loading="eager" alt="Logo do projeto"/>

                    <div className="flex flex-col items-start">

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsPeople className="text-2xl"/>
                            <a href="#quemSao" className="text-2xl font-bold">Quem são</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsBook className="text-2xl" />  
                            <a href="#legislacao" className="text-2xl font-bold">Legislação</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdDiversity1 className="text-2xl" />
                            <a href="#diversidade" className="text-2xl font-bold">Diversidade</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <TbWorldPlus className="text-2xl" />
                            <a href="#cultura" className="text-2xl font-bold">Cultura</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdLightbulbOutline className="text-2xl" />
                            <a href="#desafios" className="text-2xl font-bold">Desafios</a>

                        </div>

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsMegaphone className="text-2xl" />
                            <a href="#acoes" className="text-2xl font-bold">Ações</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdOutlineCastForEducation className="text-2xl" /> 
                            <a href="#educacao" className="text-2xl font-bold">Educação</a>

                        </div> 

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <RiContactsLine className="text-2xl" />
                            <a href="#parcerias" className="text-2xl font-bold">Parcerias</a>

                        </div>

                        <div className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <FaHeadSideVirus className="text-2xl" />
                            <a href="#perspectivas" className="text-2xl font-bold">Perspectivas</a>

                        </div>

                    </div> 

                    <div onClick={ trocarTema } className={` w-16 p-1 rounded-full cursor-pointer ${dark? 'bg-gray-text' : 'bg-black-2'}`}>
                        <div onClick={trocarTema} className={`${dark ? "ml-[64%] bg-black" : "bg-white"} w-5 h-5 rounded-full duration-[0.2s] cursor-pointer`}></div>
                    </div>

                </div> 
            </div> 

        </>
    );
};
