import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/Quilombo_Biritinga_(16263456495).jpg";

export default function Questoes() {

    return(

        <div id="questoes" className="flex flex-col p-10 gap-5">

            <Section title="Questões de Território e Meio Ambiente" text="A preservação do território quilombola é essencial para a manutenção de práticas tradicionais e a preservação ambiental. As comunidades muitas vezes enfrentam pressões externas, incluindo ameaças à terra e recursos naturais, destacando a importância da proteção legal e ambiental." image={true} src={PovoQuilomba} desc="Povo Quilomba" alt="Foto do povo quilomba"/>

        </div>
    );
};
