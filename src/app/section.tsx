import PanfletosEmProgresso from "./sectionEmProgresso";
import PanfletosFeito from "./sectionFeito";
import PanfletosTodo from "./components/sectionTodo/sectionTodo";

export default function SectionPanfletos() {
    return (
        <section className="flex flex-col md:flex-row gap-4 justify-center items-start">
            <div className="w-[320px] max-h-screen overflow-auto  p-1 shadow">
                <PanfletosTodo />
            </div>
            <div className="w-[320px] max-h-screen overflow-auto">
                <PanfletosEmProgresso />
            </div>
            <div className="w-[320px] max-h-screen overflow-auto">
                <PanfletosFeito />
            </div>
        </section>


    )
}