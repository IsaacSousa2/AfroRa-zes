'use client';
import { useState } from "react";
import Header from "@/components/layout/Header";
import Introducao from "@/components/Sections/Introducao";
import Legislacao from "@/components/Sections/Legislacao";
import Diversidade from "@/components/Sections/Diversidade";
import Cultura from "@/components/Sections/Cultura";
import Zumbi from "@/components/Sections/zumbi";
import QuilombolasNoCeara from "@/components/Sections/quilombolasCeara";
import Desafios from "@/components/Sections/Desafios";
import Acoes from "@/components/Sections/Acoes";
import Educacao from "@/components/Sections/Educacao";
import Parcerias from "@/components/Sections/Parcerias";
import Perspectivas from "@/components/Sections/Perspectivas";
import Recomendacoes from "@/components/Sections/Recomendacoes";
import { AppThemeProvider } from "../contexts";

export default function Home() {

  const[dark, setDark] = useState(false)

  return (

    <div>
      
        <div className={`flex duration-[0.2s] ${dark ? "bg-black-bg" : "bg-white"}`}>

          <Header />

          <div className="flex flex-col items-center overflow-y-scroll overflow-x-hidden w-full h-screen">

            <div className="w-[800px] px-5 max-w-full">

              <Introducao/>
              <Legislacao/>
              <Diversidade/>
              <Cultura/>
              <Zumbi/>
              <QuilombolasNoCeara/>
              <Desafios/>
              <Acoes/>
              <Educacao/>
              <Parcerias/>
              <Perspectivas/>
              <Recomendacoes/>

            </div> {/*Secoes*/}

          </div> {/*Conteudo principal*/}

        </div>
  </div>

  );
};
