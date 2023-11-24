import Section from "@/components/Section";
import LinkInfo from "@/components/LinkInfo";
import PovoQuilomba from "../../../assets/img/Quilomba/resistencia.png";

export default function Acoes() {

    return(

        <div id="acoes" className="flex flex-col p-10 gap-5">

            <Section title="Ações de resistência e empoderamento" text="As comunidades quilombolas se destacam por suas ações resilientes de resistência e empoderamento. Projetos sociais, iniciativas culturais e a promoção da igualdade de gênero são evidências tangíveis do compromisso contínuo dessas comunidades com a melhoria de suas condições de vida." image={true} src={PovoQuilomba} desc="Exposição feita para relembrar a resistência e memória dos povos quilombolas" alt="Foto do povo quilomba"/>
            <LinkInfo href="https://www.correiobraziliense.com.br/euestudante/cultura/2023/05/5098292-exposicao-retrata-resistencia-e-memoria-de-quilombos-do-jequitinhonha.html" text="Saiba mais sobre a exposição, clique aqui."/>

        </div>
    );
};
