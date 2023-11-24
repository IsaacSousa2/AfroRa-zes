import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/Mapa.png";

export default function QuilombolasNoCeara() {

    return(

        <div id="quilombolasNoCeara" className="flex flex-col p-10 gap-5">

            <Section title="Quilombolas no Ceará" text="No Ceará, como em outras partes do Brasil, os quilombolas representam comunidades descendentes de africanos escravizados que fugiram para áreas remotas, muitas vezes formando comunidades autossustentáveis conhecidas como quilombos. Essas comunidades resistiram à escravidão e, ao longo do tempo, contribuíram para a diversidade cultural do país." image={true} src={PovoQuilomba} desc="Quilombolas no Amapá lutam contra despejo de comunidade que tem mais de um século" alt="Foto do povo quilomba"/>

        </div>
    );
};
