import todo_icon from "../../assets/todo_icon.png";
const Title = () => {
  return (
    <div className="flex items-center gap-2 mt-5">
      <img className="w-8" src={todo_icon} alt="todo icon" />
      <h1 className="font-semibold text-3xl">To-Do List</h1>
    </div>
  );
};

export default Title;
