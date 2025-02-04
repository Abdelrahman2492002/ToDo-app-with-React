import tick from "../../assets/tick.png";
import not_tick from "../../assets/not_tick.png";
import delete_icon from "../../assets/delete.png";
const ToDoItem = ({ id, task, isComplete, removeTask, toggleTask }) => {
  console.log(isComplete);
  return (
    <>
      <li className="flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer flex-1"
          onClick={() => toggleTask(id)}
        >
          <img
            className="w-7"
            src={isComplete ? tick : not_tick}
            alt="isComplete icon"
          />
          <p
            className={`${isComplete ? "line-through text-slate-500 " : "text-slate-800"} decoration-slate-900`}
          >
            {task}
          </p>
        </div>
        <img
          className="w-3.5 cursor-pointer"
          src={delete_icon}
          alt="delete icon"
          onClick={() => removeTask(id)}
        />
      </li>
    </>
  );
};

export default ToDoItem;
