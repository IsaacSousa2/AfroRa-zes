import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/Mapa.png";
import LinkInfo from "@/components/LinkInfo";

export default function Diversidade() {

    return(

        <div id="diversidade" className="flex flex-col p-10 gap-5">

            <Section title="Diversidade e distribuição geográfica" text="Os quilombos são diversos em sua composição étnica, cultural e geográfica. Espalhados por todo o Brasil, desde regiões rurais até áreas urbanas, esses locais apresentam uma riqueza singular de tradições, promovendo a preservação da herança africana em território brasileiro." image={true} src={PovoQuilomba} desc="Censo feito pelo IBGE em 2022" alt="Foto do povo quilomba"/>

            <LinkInfo href="https://www.socioambiental.org/noticias-socioambientais/censo-2022-revela-que-brasil-tem-mais-de-13-milhao-de-quilombolas-menos-de" text="Para saber mais sobre o censo de 2022, clique aqui."/>

        </div>
    );
};
