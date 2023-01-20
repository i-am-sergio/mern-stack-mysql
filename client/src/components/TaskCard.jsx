import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-blue-300 rounded-md p-4 mt-8">
      <header className="flex justify-between">
        <h2 className="font-bold text-sm">{task.title}</h2>
        <span onClick={() => handleDone(task.done)}
          className="hover:cursor-pointer"
        >
          {task.done == 1 ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createdAt}</span>
      <div className="flex gap-x-2">
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-800 hover:bg-red-700 px-2 py-1 text-white rounded-md"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(`/edit/${task.id}`)}
          className="bg-blue-700 hover:bg-blue-600 px-2 py-1 text-white rounded-md"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
