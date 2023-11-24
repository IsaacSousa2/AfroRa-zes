import Section from "@/components/Section";
import LinkInfo from "@/components/LinkInfo";
import PovoQuilomba from "../../../assets/img/Quilomba/aluno.png";

export default function Educacao() {

    return(

        <div id="educacao" className="flex flex-col p-10 gap-5">

            <Section title="Educação e Conscientização" text="A educação desempenha um papel crucial na promoção da conscientização sobre a história, cultura e desafios enfrentados pelos quilombos. Iniciativas educacionais internas e externas contribuem para o fortalecimento da identidade cultural e o combate ao preconceito." image={true} src={PovoQuilomba} desc="Aluno observando fotografias do povo quilombola" alt="Foto do povo quilomba"/>
            <LinkInfo href="https://ww2.uft.edu.br/index.php/ultimas-noticias/10619-2013-03-alunos-de-ensino-medio-comparecem-no-encerramento-da-exposicao-sobre-quilombolas" text="Para saber mais sobre a visita dos alunos, clique aqui."/>

        </div>
    );
};
