import tick from "../../assets/tick.png";
import not_tick from "../../assets/not_tick.png";
import delete_icon from "../../assets/delete.png";
const ToDoItem = ({ text }) => {
  return (
    <>
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="w-6 cursor-pointer" src={tick} alt="" />
          <p className="text-[17px] text-slate-700">{text}</p>
        </div>
        <img
          className="w-5 cursor-pointer"
          src={delete_icon}
          alt="delete icon"
        />
      </li>
    </>
  );
};

export default ToDoItem;
