import { IoLink } from "react-icons/io5";

type LinkInfoProps = {

    href: string,
    text: string,
}

export default function LinkInfo( { href, text }: LinkInfoProps ) {

    return(

        <a href={href} target="_blank">
            
            <div className="group flex items-center gap-3 p-3 max-w-full border-2 border-solid border-gray-text rounded-lg duration-[0.2s] cursor-pointer hover:bg-white-facebook sc450:flex-col">

                <IoLink className="text-5xl text-gray-text duration-[0.2s]"/>
                <div className="bg-gray-text h-12 w-[2px] sc450:w-full sc450:h-[2px]"></div>
                <p className="text-gray-text duration-[0.2s] text-justify">{text}</p>

            </div>

        </a>
    );
};
