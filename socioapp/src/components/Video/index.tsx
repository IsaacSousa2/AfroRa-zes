import { useState } from "react";
import { BsHandIndex } from "react-icons/bs";
import Image from "next/image";

type VideoProps = {

    title: string,
    channel: string,
    videoUrl: string,
    videoCode: string,
};

export default function Video({title, channel, videoUrl, videoCode}: VideoProps) {

    const[dark, setDark] = useState(false);

    return(

        <div className="flex flex-col gap-5">
                        
            <div className="flex flex-col">

                    {/*Adicionar depois a foto do canal*/}
                    <p className={`text-2xl font-bold ${dark ? "text-white" : ""}`}>{title}</p>
                    <p className={`text-gray-text`}>{channel}</p>
            </div> {/*Título e canal*/}

            <div>

                <a href={videoUrl} target="_blank" className="group relative cursor-pointer">

                    <img src={`http://img.youtube.com/vi/${videoCode}/hqdefault.jpg`} draggable="false" loading="eager" className="w-full" alt="Video do Youtube"/> {/*Video*/}
                    <BsHandIndex className="absolute top-1/2 left-1/2 mt-[-25px] mb-0 mr-0 ml-[-25px] opacity-0 text-6xl text-white-facebook drop-shadow-sm duration-[0.2s] group-hover:opacity-100 group-active:scale-90"/> {/*Ícone da mão*/}

                </a> {/*Vídeo*/}

                <p className="text-gray-text">Para uma melhor experiência, clique na tela para ir diretamente para o vídeo.</p> {/*Aviso*/}

            </div> {/*Vídeo*/}

        </div>
    );
};
