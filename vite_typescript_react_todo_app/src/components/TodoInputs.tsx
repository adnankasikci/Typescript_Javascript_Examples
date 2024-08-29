
interface TodoInputProps {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addFunc: (e: React.FormEvent) => void
}

const TodoInputs: React.FC<TodoInputProps> = ({ todo, setTodo, addFunc }) => {
    return (
        <form className="flex items-center gap-5" onSubmit={e => addFunc(e)}>
            <input className="h-12 px-3 border border-slate-200 focus-within:outline-none rounded-sm" value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder="Todo yaz..." />
            <button className="bg-slate-200 h-12 px-10 rounded-sm border hover:border-blue-500 text-sm font-medium" type="submit">Ekle</button>
        </form>
    )
}

export default TodoInputs
