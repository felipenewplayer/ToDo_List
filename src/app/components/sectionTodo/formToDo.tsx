import { useForm } from "react-hook-form";

type Tarefa = {
  nome: string;
  data: string;
};

interface TodoFormProps {
  adicionar: (data: Tarefa) => void;
}

export default function TodoForm({ adicionar }: TodoFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Tarefa>();

  return (
    <div className="border rounded p-3 bg-blue-200 flex flex-col index-9999">
      <form
        onSubmit={handleSubmit((data) => {
          adicionar(data);
          reset(); 
        })}
        className="flex flex-col gap-3"
      >
        <button
          type="submit"
          className="bg-green-600 rounded p-2 text-lime-100 mb-5 hover:cursor-pointer"
        >
          Adicionar
        </button>

        <label><strong>Nome</strong></label>
        <input
          {...register("nome", { required: true })}
          placeholder="Digite o nome..."
          type="text"
          className="focus:outline rounded p-1 ps-2 bg-amber-50"
        />
        {errors.nome && <span className="text-red-500 text-sm">Nome obrigatório</span>}

        <label><strong>Data</strong></label>
        <input
          type="date"
          {...register("data", { required: true })}
          className="focus:outline rounded p-1 ps-2 bg-amber-50"
        />
        {errors.data && <span className="text-red-500 text-sm">Data obrigatória</span>}
      </form>
    </div>
  );
}
