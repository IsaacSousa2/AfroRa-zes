import Section from "@/components/Section";
import Video from "@/components/Video";

export default function Recomendacoes() {

    return(

        <div className="flex flex-col p-10 gap-5">

            <Section title="Recomendações" text="Para maior conhecimento, veja algumas recomendações que possam lhe agradar."/>

            <div className="flex flex-col items-center">

                <Video title="Documentário - Quilombolas" channel="Canção Nova Play" videoUrl="https://www.youtube.com/watch?v=EZmzo-p6mzU&ab_channel=Can%C3%A7%C3%A3oNovaPlay" videoCode="EZmzo-p6mzU"/>
                
            </div> {/*Videos*/}

        </div>
    );
};
