import { ITypes } from "../types/ITypes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

interface TodosResProps {
    todos: ITypes[]
    setTodos: React.Dispatch<React.SetStateAction<ITypes[]>>
}

const TodoRes: React.FC<TodosResProps> = ({ todos, setTodos }) => {

    const deleteFunc = (id: number) => {
        setTodos(todos.filter(todo => todo.id != id));
    }

    const updateFunc = (id: number) => {
        setTodos(todos.map(td => (td.id == id ? { ...td, isColor: !td.isColor } : td)))
    }


    return (
        <div>
            {
                todos && todos.map((todo, i) => (
                    <div className={`flex items-center justify-between ${todo.isColor == false ? 'bg-green-100 text-green-500 hover:border-green-500' : 'bg-rose-100 text-rose-500 hover:border-rose-500'} w-96 my-4 p-3 rounded-sm border border-transparent`} key={i}>
                        <div>{todo.todo}</div>
                        <div className="flex items-center gap-5">
                            <span className="cursor-pointer" onClick={() => deleteFunc(todo.id)} >
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                            <span className="cursor-pointer" onClick={() => updateFunc(todo.id)} >
                                <FontAwesomeIcon icon={faWandMagicSparkles} />
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoRes
