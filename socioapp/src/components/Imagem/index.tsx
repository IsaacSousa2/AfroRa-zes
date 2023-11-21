import { useState } from "react";
import Image from "next/image";

type ImageProps = {

    desc: string,
    src: any,
    alt: string,
};

export default function Imagem({desc, src, alt}: ImageProps) {

    const[dark, setDark] = useState(false);

    return(

        <div>

            <Image className="max-w-full" src={src} alt={alt} draggable="true" loading="eager"/>
            <p className={`duration-[0.2s] ${dark ? "text-black-text" : "text-gray-text"}`}>{desc}</p>
            
        </div>
    );
};
