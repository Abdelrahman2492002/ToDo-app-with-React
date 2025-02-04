import { useEffect, useRef, useState } from "react";
import InputField from "./body/InputField";
import Title from "./head/Title";
import ToDoList from "./body/ToDoList";

const DEFAULT_TASKS = [
  { id: 1, task: "Learn JavaScript and React", completed: true },
  { id: 2, task: "Code a ToDo App", completed: false },
  { id: 3, task: "Make dinner and go to sleep", completed: false },
];

const getFromTodoList = (key) => {
  const storedList = JSON.parse(localStorage.getItem(key));
  return storedList && storedList.length > 0 ? storedList : DEFAULT_TASKS;
};
const Todo = () => {
  const [todoList, setTodoList] = useState(() => getFromTodoList("todoList"));
  const inputRef = useRef(null);

  const addTask = () => {
    const task = inputRef.current.value.trim();
    if (!task) return;
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const removeTask = (id) => {
    setTodoList((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="place-self-center bg-white min-h-[550px] max-w-md flex flex-col p-7 rounded-xl w-11/12">
      <Title />
      <InputField ref={inputRef} addTask={addTask} />
      <ToDoList
        toDoList={todoList}
        removeTask={removeTask}
        toggleTask={toggleTaskCompletion}
      />
    </div>
  );
};

export default Todo;
