import Section from "@/components/Section";
import LinkInfo from "@/components/LinkInfo";
import PovoQuilomba from "../../../assets/img/Quilomba/Programa brasil quilombola.png";

export default function Parcerias() {

    return(

        <div id="parcerias" className="flex flex-col p-10 gap-5">

            <Section title="Parcerias e apoio externo" text="A colaboração entre organizações governamentais, não governamentais e a sociedade civil é fundamental para o desenvolvimento sustentável das comunidades quilombolas. Parcerias e apoio externo são ferramentas importantes para enfrentar desafios e promover a inclusão social." image={true} src={PovoQuilomba} desc="" alt="Foto do povo quilomba"/>
            <LinkInfo href="https://www.gov.br/mdh/pt-br/navegue-por-temas/igualdade-etnico-racial/acoes-e-programas/programa-brasil-quilombola" text="Saiba mais clicando aqui"/>

        </div>
    );
};
