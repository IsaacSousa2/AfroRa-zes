import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/quilomboDance.png";

export default function Cultura() {

    return(

        <div id="#cultura" className="flex flex-col p-10 gap-5">

            <Section title="Cultura e identidade" text="A cultura quilombola é marcada por expressões artísticas, religiosas e gastronômicas únicas, contribuindo para a riqueza do mosaico cultural brasileiro. A preservação da identidade é um valor central, transmitido por gerações como parte fundamental da herança dessas comunidades." image={true} src={PovoQuilomba} desc="Quilombolas de Marambaia comemoram a posse de terra no dia da consciência negra" alt="Foto do povo quilomba"/>

        </div>
    );
};
