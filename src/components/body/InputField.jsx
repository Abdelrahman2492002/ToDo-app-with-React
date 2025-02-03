const InputField = () => {
  return (
    <div className="flex items-center bg-gray-300 mt-5 rounded-full">
      <input
        className="flex-1 h-14 px-6 border-none outline-none "
        type="text"
        placeholder="Add your task"
      />
      <button className="rounded-full bg-orange-500 h-16 w-32 text-white cursor-pointer">
        Add +
      </button>
    </div>
  );
};

export default InputField;
