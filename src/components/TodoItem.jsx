import React, { useRef } from "react";
import { BsCheck } from "react-icons/bs";

const TodoItem = ({ tasks, setTasks, task }) => {
  const checkboxRef = useRef();
  const onChangehandler = () => {
    const tasksCopy = [...tasks];
    tasksCopy = tasksCopy.map((t) => {
      if (t.id === task.id) {
        return { ...t, isCompleted: checkboxRef.current.checked };
      } else {
        return t;
      }
    });
    setTasks(tasksCopy);
  };

  return (
    <div className="flex items-center space-x-4 p-4 my-6 rounded-3xl bg-[#21212B]">
      <div className="relative">
        <input
          type="checkbox"
          name={task.name}
          id={task.id}
          className="opacity-0 w-6 h-6 absolute"
          defaultChecked={task.isCompleted}
          ref={checkboxRef}
          onChange={onChangehandler}
        />
        <div className="flex items-center justify-center w-6 h-6 bg-transparent border-2 border-pink-500 rounded-lg">
          <BsCheck className="hidden w-6 h-6 rounded-lg" />
        </div>
      </div>
      <label
        htmlFor={task.id}
        className={`text-lg font-light select-none
    ${task.isCompleted ? "line-through" : ""}
    `}
      >
        {task.name}
      </label>
    </div>
  );
};

export default TodoItem;
