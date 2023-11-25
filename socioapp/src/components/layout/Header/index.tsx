'use client'
import { useState } from "react";
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
import { FaRegEye } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
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

        if (menuAtivado == true) {

            setMenuAtivado(false);
        }
        else {
            setMenuAtivado(true);
        }

    }{/*estrutura de condição para menu hamburguer*/}
    function trocarTema() {

        if (dark == false) {

            setDark(true);
        }

        else {

            setDark(false);
        }

    }{/*estrutura de condição para Troca de tema*/}

    return(

        <>

            <RxHamburgerMenu onClick={abrirMenu}  className={`absolute z-10 hidden text-2xl text-black-bg mt-2 ml-2 cursor-pointer lg:flex ${menuAtivado? 'lg:hidden' : 'flex'}`}/> {/*Btn para abrir menu*/}
            
            <div className={`h-screen w-[500px] bg-white-facebook pt-2 duration-[0.2s] lg:ml-[-500px]`}>

                <div className="flex flex-col items-center justify-center gap-5 p-5 h-full ">

                    <Image src={Logo} className="w-[250px] max-w-full absolute top-5" draggable="false" loading="eager" alt="Logo do projeto"/> 

                    <div className="flex flex-col items-start">

                        <a href="#quemSao" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <BsPeople className="text-2xl"/> 
                            <p className="text-2xl font-bold">Quem são</p>

                        </a> 

                        <a href="#legislacao" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <BsBook className="text-2xl" /> 
                            <p className="text-2xl font-bold">Legislação</p>

                        </a> 

                        <a href="#diversidade" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <MdDiversity1 className="text-2xl" />
                            <p className="text-2xl font-bold">Diversidade</p>

                        </a> 

                        <a href="#cultura" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <TbWorldPlus className="text-2xl" />
                            <p className="text-2xl font-bold">Cultura</p>

                        </a> 

                        <a href="#desafios" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <MdLightbulbOutline className="text-2xl" />
                            <p className="text-2xl font-bold">Desafios</p>

                        </a> 

                        <a href="#acoes" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <BsMegaphone className="text-2xl" />
                            <p className="text-2xl font-bold">Ações</p>

                        </a> 

                        <a href="#educacao"className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <MdOutlineCastForEducation className="text-2xl" />
                            <p className="text-2xl font-bold">Educação</p>

                        </a> 

                        <a href="#parcerias" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <RiContactsLine className="text-2xl" />
                            <p className="text-2xl font-bold">Parcerias</p>

                        </a> 

                        <a href="#perspectivas" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <FaRegEye className="text-2xl" />
                            <p className="text-2xl font-bold">Perspectivas</p>

                        </a>

                        <a href="#recomendacoes" className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text active:brightness-90">

                            <MdSlowMotionVideo className="text-2xl" />
                            <p className="text-2xl font-bold">Recomendações</p>

                        </a>
                    
                    </div> {/*Btns para navegação*/}
                    
                </div>

            </div> {/*Header*/}

            <div onClick={fecharMenu} className={`absolute z-10 duration-[0.2s] lgMin:hidden ${menuAtivado ? "bg-white-facebook/60 backdrop-blur-sm w-screen h-screen" : "bg-white-facebook/0 backdrop-blur-0"}`}></div> {/*Fundo do header para telas menores*/}

            <div className={`hidden z-10 lg:flex fixed h-screen w-[250px] max-w-full bg-white-facebook duration-[0.2s] ${menuAtivado ? "ml-0" : "ml-[-400px]"}`}>

                <div className="flex flex-col items-center justify-center gap-5 p-5 h-full">

                    <Image src={Logo} className="max-w-full absolute top-4 w-[200px] left-[23px]" draggable="false" loading="eager" alt="Logo do projeto"/> {/*Logo*/}

                    <div className="flex flex-col items-start">

                        <a href="#quemSao" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsPeople className="text-2xl"/>
                            <p className="text-2xl font-bold">Quem são</p>

                        </a> 

                        <a href="#legislacao" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsBook className="text-2xl" />  
                            <p className="text-2xl font-bold">Legislação</p>

                        </a> 

                        <a href="#diversidade" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdDiversity1 className="text-2xl" />
                            <p className="text-2xl font-bold">Diversidade</p>

                        </a> 

                        <a href="#cultura" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <TbWorldPlus className="text-2xl" />
                            <p className="text-2xl font-bold">Cultura</p>

                        </a> 

                        <a href="#desafios" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdLightbulbOutline className="text-2xl" />
                            <p className="text-2xl font-bold">Desafios</p>

                        </a>

                        <a href="#acoes" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <BsMegaphone className="text-2xl" />
                            <p className="text-2xl font-bold">Ações</p>

                        </a> 

                        <a href="#educacao" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdOutlineCastForEducation className="text-2xl" /> 
                            <p className="text-2xl font-bold">Educação</p>

                        </a> 

                        <a href="#parcerias" onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <RiContactsLine className="text-2xl" />
                            <p className="text-2xl font-bold">Parcerias</p>

                        </a>

                        <div onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <FaRegEye className="text-2xl" />
                            <a href="#perspectivas" className="text-2xl font-bold">Perspectivas</a>

                        </div>

                        <div onClick={ trocarTema } className="flex items-center gap-3 rounded-lg cursor-pointer py-3 px-3 duration-[0.2s] hover:bg-gray-text">

                            <MdSlowMotionVideo className="text-2xl" />
                            <a href="#recomendacoes" className="text-2xl font-bold">Recomendações</a>

                        </div>

                    </div> {/*Btns de paginação*/}

                </div> 
                
            </div> {/*Header para telas menores*/}

        </>
    );
};
