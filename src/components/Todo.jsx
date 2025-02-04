import { useEffect, useRef, useState } from "react";
import InputField from "./body/InputField";
import Title from "./head/Title";
import ToDoList from "./body/ToDoList";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);

  const addTask = () => {
    const task = inputRef.current.value.trim();
    if (!task) return;
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };
    setTodo((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const removeTask = (id) => {
    setTodo((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTodo((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div className="place-self-center bg-white min-h-[550px] max-w-md flex flex-col p-7 rounded-xl w-11/12">
      <Title />
      <InputField ref={inputRef} addTask={addTask} />
      <ToDoList
        toDoList={todo}
        removeTask={removeTask}
        toggleTask={toggleTaskCompletion}
      />
    </div>
  );
};

export default Todo;
