'use client'

import { useState } from "react"
import TodoForm from "./formToDo";

interface Tarefa {
    nome: string;
    data: string;
}
export default function PanfletosTodo() {
    const [showForm, setShowForm] = useState(false);
    const [tarefas, setTarefas] = useState([{
        nome: "Estuda espanhol",
        data: "29/09/2025"
    }, {
        nome: "Estuda frances",
        data: "29/09/2025"
    },]);
    function adicionar(data: Tarefa) {
        setTarefas([...tarefas, data]);
    }
    return (
        <>
            <div className="flex flex-col justify-center mt-5 gap-2 m-1 w-1.0xl ">
                <div className="flex justify-between">
                    <h2><strong> To do </strong></h2>
                    <button
                        className="items-end hover:cursor-pointer"
                        onClick={() => setShowForm(!showForm)}>+</button>
                </div>  
                {tarefas.map(t => (
                    <div key={t.nome}
                        className="bg-green-400 rounded p-5 m">
                        <ul >
                            <li>Nome: <strong>{t.nome}</strong></li>
                            <li>Data: <strong>{t.data}</strong></li>
                            <li>Concluido: <button>Concluido Dps troca por check</button></li>
                            <button className="bg-red-600">Excluir</button>
                            <button className="bg-yellow-50">Editar</button>
                        </ul>
                    </div>
                ))}

            </div>
            {showForm && (
                <div
                    className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
                    onClick={() => setShowForm(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative border rounded p-5 bg-white w-[90%] max-w-md shadow-lg"
                    >
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-red-600"
                        >
                            &times;
                        </button>

                        <TodoForm adicionar={adicionar} />
                    </div>
                </div>
            )}
        </>
    )
}