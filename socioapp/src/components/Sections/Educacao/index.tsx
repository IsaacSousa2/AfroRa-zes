import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/Quilombo_Biritinga_(16263456495).jpg";

export default function Educacao() {

    return(

        <div id="educacao" className="flex flex-col p-10 gap-5">

            <Section title="Educação e Conscientização" text="A educação desempenha um papel crucial na promoção da conscientização sobre a história, cultura e desafios enfrentados pelos quilombos. Iniciativas educacionais internas e externas contribuem para o fortalecimento da identidade cultural e o combate ao preconceito." image={true} src={PovoQuilomba} desc="Povo Quilomba" alt="Foto do povo quilomba"/>

        </div>
    );
};
