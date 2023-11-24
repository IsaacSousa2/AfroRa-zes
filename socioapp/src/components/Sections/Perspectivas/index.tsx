import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/protesto.png";

export default function Perspectivas() {

    return(

        <div id="perspectivas" className="flex flex-col p-10 gap-5">

            <Section title="Perspectivas Futuras" text="As perspectivas futuras dos quilombos envolvem a continuidade da luta por igualdade e justiça. Investir em educação, fortalecer parcerias, promover a preservação ambiental e combater a discriminação são passos essenciais para assegurar um futuro mais inclusivo e promissor para essas comunidades." image={true} src={PovoQuilomba} desc="Quilombolas no Amapá lutam contra despejo de comunidade que tem mais de um século" alt="Foto do povo quilomba"/>

        </div>
    );
};
