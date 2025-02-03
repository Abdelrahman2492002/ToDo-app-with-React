import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  return (
    <div className="mt-6">
      <ul className="flex flex-col gap-y-4">
        <ToDoItem text={"Study React and JS"} />
      </ul>
    </div>
  );
};

export default ToDoList;
