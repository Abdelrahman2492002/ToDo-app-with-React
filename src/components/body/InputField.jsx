import { forwardRef } from "react";

const InputField = forwardRef((props, ref) => {
  const { addTask } = props;

  return (
    <form className="flex items-center bg-gray-200 mt-5 rounded overflow-hidden">
      <input
        className="flex-1 h-10 px-6 border-none outline-none"
        type="text"
        placeholder="Add your task"
        ref={ref}
      />
      <button
        onClick={(e) => {
          addTask();
          e.preventDefault();
        }}
        className="bg-orange-500 h-10 w-24 text-white cursor-pointer"
      >
        Add +
      </button>
    </form>
  );
});

export default InputField;
