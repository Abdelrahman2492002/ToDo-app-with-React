import ToDoItem from "./ToDoItem";
import noTasks from "../../assets/noTasks.jpg";
const ToDoList = ({ toDoList, removeTask, toggleTask }) => {
  return (
    <div className="mt-6  flex-1">
      {toDoList.length ? (
        <ul className="flex flex-col gap-y-4">
          {toDoList.map((todo) => (
            <ToDoItem
              key={todo.id}
              task={todo.task}
              id={todo.id}
              isComplete={todo.completed}
              removeTask={removeTask}
              toggleTask={toggleTask}
            />
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center opacity-55 mt-15 flex-col">
          <img src={noTasks} alt="no tasks image" />
          <p className="text-2xl">No tasks</p>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
