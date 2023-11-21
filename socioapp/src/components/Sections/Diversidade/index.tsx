import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/Quilombo_Biritinga_(16263456495).jpg";

export default function Diversidade() {

    return(

        <div id="diversidade" className="flex flex-col p-10 gap-5">

            <Section title="Diversidade e Distribuição Geográfica" text="Os quilombos são diversos em sua composição étnica, cultural e geográfica. Espalhados por todo o Brasil, desde regiões rurais até áreas urbanas, esses locais apresentam uma riqueza singular de tradições, promovendo a preservação da herança africana em território brasileiro." image={true} src={PovoQuilomba} desc="Povo Quilomba" alt="Foto do povo quilomba"/>

        </div>
    );
};
