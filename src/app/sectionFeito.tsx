export default function PanfletosFeito(){
     return (
        <>
            <div className="flex flex-col justify-center mt-5 gap-2 m-1 w-1.0xl ">
                <div className="flex justify-between">
                    <h2><strong> Feito </strong></h2>
                    <button className="items-end hover:cursor-pointer">+</button>
                </div>
                <div className="bg-lime-400 rounded p-5 m">
                    <ul>
                        <li>Nome: <strong>Estudar inglês</strong></li>
                        <li>Data: <strong>Estudar inglês</strong></li>
                        <li>Concluido: <button>Concluido Dps troca por check</button></li>
                        <button>Excluir</button>
                        <button>Editar</button>
                    </ul>
                </div>
            </div>
        </>
    )
}