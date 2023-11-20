import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (

    <div className="flex">

      <Header />

      <div className="flex flex-col items-center overflow-y-scroll w-full h-screen">

        <div className="w-[800px] max-w-full">
          <h1 className="text-6xl font-bold">Povo Quilomba</h1>
          <p>Um trabalho de sociologio feito pelos mitos.</p>
        </div>

      </div> {/*Conteudo principal*/}

    </div>

  );
};
