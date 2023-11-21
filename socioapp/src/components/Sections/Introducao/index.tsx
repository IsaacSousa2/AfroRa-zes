"use client";
import { useState } from "react";
import Image from "next/image";
import ImagemTurma from "../../../assets/img/DALL·E 2023-11-18 20.45.53 - make a meme of a cat.png";
import PovoQuilomba from "../../../assets/img/Quilomba/Quilombo_Biritinga_(16263456495).jpg";
import Section from "../../Section";

export default function Introducao() {

    const[dark, setDark] = useState(false);

    return(

        <div id="quemSao" className="flex flex-col p-10 gap-5">

            <div className="flex flex-col gap-2">

                <h1 className={`text-7xl font-bold duration-[0.2s] sm:text-4xl ${dark ? "text-white" : ""}`}>Povo Quilombola</h1> {/*Titulo*/}
                <p className={`duration-[0.2s] ${dark ? "text-black-text" : "text-gray-text"}`}>Resistência e Herança Cultural nas Comunidades Quilombolas do Brasil</p> {/*Subtitulo*/}

                <div className="flex items-center gap-3">

                    <Image src={ImagemTurma} alt="Foto da turma" draggable="false" loading="eager" className="w-10 rounded-full"/>
                    <p className={`${dark ? "max-w-full text-black-text" : "max-w-full"}`}>2° Ano B • 12 minutos de leitura • 20 de Novembro de 2023</p>

                </div> {/*Autor*/}

            </div> {/*Header*/}

            <Section title="Quem são?" text="Os quilombos representam comunidades historicamente formadas por pessoas afrodescendentes que fugiram da escravidão no período colonial brasileiro. Esses refúgios autossustentáveis foram cruciais para a preservação da cultura e da liberdade, tornando-se símbolos de resistência e perseverança." image={true} src={PovoQuilomba} desc="Povo Quilomba" alt="Foto do povo quilomba"/>

        </div>
    );
};
