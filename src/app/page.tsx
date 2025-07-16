import SectionPanfletos from "./section";

export default function Home() {

  return (
    <main>
      <h1 className="text-center mt-10 mb-10 text-4xl">Lista de Tarefas</h1>
      <div className="flex  ml-5 md:ml-10">
        <SectionPanfletos/>
      </div>
    </main>
  )
}