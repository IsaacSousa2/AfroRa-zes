import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/jkjk.png";
import LinkInfo from "@/components/LinkInfo";

export default function Legislacao() {

    return(

        <div id="legislacao" className="flex flex-col p-10 gap-5">

            <Section title="Legislação e reconhecimento" text={`A legislação brasileira, com destaque para a Constituição de 1988, reconhece a importância dos quilombos, garantindo-lhes direitos territoriais e culturais. O reconhecimento legal é um marco significativo na promoção da justiça social e na preservação das raízes culturais dessas comunidades.`} image={true} src={PovoQuilomba} desc="Crianças quilombolas escrevendo" alt="Foto de duas crianças escrevendo"/>

            <LinkInfo href="https://www.camara.leg.br/noticias/899296-projeto-preve-regras-para-regularizacao-de-terras-quilombolas/#:~:text=O%20Projeto%20de%20Lei%201942,foi%20promulgada%20a%20atual%20Constitui%C3%A7%C3%A3o)." text="Clique aqui para saber mais sobre a legislação de 1988."/>

        </div>
    );
};
