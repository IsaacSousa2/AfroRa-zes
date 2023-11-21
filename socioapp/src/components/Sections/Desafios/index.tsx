import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/Quilombo_Biritinga_(16263456495).jpg";

export default function Desafios() {

    return(

        <div id="desafios" className="flex flex-col p-10 gap-5">

            <Section title="Desafios Sociais e Econômicos" text="Apesar dos avanços legais, os quilombos enfrentam desafios sociais e econômicos, como acesso limitado à educação, saúde e oportunidades de emprego. Essas barreiras refletem desigualdades persistentes e ressaltam a necessidade contínua de políticas inclusivas." image={true} src={PovoQuilomba} desc="Povo Quilomba" alt="Foto do povo quilomba"/>

        </div>
    );
};
