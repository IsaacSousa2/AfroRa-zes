import Section from "@/components/Section";
import PovoQuilomba from "../../../assets/img/Quilomba/Quilombo_Biritinga_(16263456495).jpg";

export default function Parcerias() {

    return(

        <div id="parcerias" className="flex flex-col p-10 gap-5">

            <Section title="Parcerias e Apoio Externo" text="A colaboração entre organizações governamentais, não governamentais e a sociedade civil é fundamental para o desenvolvimento sustentável das comunidades quilombolas. Parcerias e apoio externo são ferramentas importantes para enfrentar desafios e promover a inclusão social." image={true} src={PovoQuilomba} desc="Povo Quilomba" alt="Foto do povo quilomba"/>

        </div>
    );
};
