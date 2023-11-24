import Section from "@/components/Section";
import Video from "@/components/Video";

export default function Recomendacoes() {

    return(

        <div id="recomendacoes" className="flex flex-col p-10 gap-5">

            <Section title="Recomendações" text="Para um maior aprodundamento no conteúdo, aqui estão algumas recomendações que possam interessar você." image={false}/>

            <Video title="Documentário - Quilombolas" channel="Canção Nova Play" videoCode="EZmzo-p6mzU" videoUrl="https://www.youtube.com/watch?v=EZmzo-p6mzU&ab_channel=Can%C3%A7%C3%A3oNovaPlay"/>
            <Video title="Documentário - Quilombolas" channel="Canção Nova Play" videoCode="EZmzo-p6mzU" videoUrl="https://www.youtube.com/watch?v=EZmzo-p6mzU&ab_channel=Can%C3%A7%C3%A3oNovaPlay"/>

        </div>
    );
};
