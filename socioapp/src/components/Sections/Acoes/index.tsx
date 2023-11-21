import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/Quilombo_Biritinga_(16263456495).jpg";

export default function Acoes() {

    return(

        <div id="acoes" className="flex flex-col p-10 gap-5">

            <Section title="Ações de Resistência e Empoderamento" text="As comunidades quilombolas se destacam por suas ações resilientes de resistência e empoderamento. Projetos sociais, iniciativas culturais e a promoção da igualdade de gênero são evidências tangíveis do compromisso contínuo dessas comunidades com a melhoria de suas condições de vida." image={true} src={PovoQuilomba} desc="Povo Quilomba" alt="Foto do povo quilomba"/>

        </div>
    );
};
