import { useState } from "react";
import Imagem from "../Imagem";

type SectionProps = {

    title: string,
    text: any,
    text2?: any,
    text3?: any,
    image?: boolean,
    src?: any,
    alt?: string,
    desc?: string,
};

export default function Section( { title, text, text2, text3, image, src, alt, desc}: SectionProps ) {

    const[dark, setDark] = useState(false);
    const[dadsa, setDda] = useState(["1", "2"]);

    return(

        <>  

            <h1 className={`text-4xl font-bold ${dark ? "text-white" : ""}`}>{title}</h1>

            <div className="flex flex-col gap-5">

                <p className={`indent-5 duration-[0.2s] text-justify ${dark ? "text-white" : "text-black"}`}>{text}</p>
                <p className={`indent-5 duration-[0.2s] text-justify ${dark ? "text-white" : "text-black"}`}>{text2}</p>
                <p className={`indent-5 duration-[0.2s] text-justify ${dark ? "text-white" : "text-black"}`}>{text3}</p>

                {image ? <Imagem src={src} alt={alt} desc={desc}/> : <></>}

            </div>
        
        </>
    );
};
