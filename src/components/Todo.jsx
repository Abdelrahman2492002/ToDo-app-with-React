import InputField from "./body/InputField";
import Title from "./head/Title";
import ToDoList from "./body/ToDoList";

const Todo = () => {
  return (
    <div className="place-self-center bg-white min-h-[550px] max-w-md flex flex-col p-7 rounded-xl w-11/12">
      <Title />
      <InputField />
      <ToDoList />
    </div>
  );
};

export default Todo;
