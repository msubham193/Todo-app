import { useState,useMemo } from "react";
import Layout from "../../components/Layout";
import { IoChevronBack } from "react-icons/io5";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import mockData from "../../../mockData.json";
import TodoItem from "../../components/TodoItem";

export async function getServerSideProps({ query }) {
    return {
      props: {
        collection: query.slug,
      },
    };
  }
const CollectionPage = ({ collection }) => {
    console.log(collection);

  const [tasks, setTasks] = useState(mockData.tasks);
  const todoTasks = useMemo(() => {
    return tasks.filter((task) => !task.isCompleted);
  }, [tasks]);

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted);
  }, [tasks]);

  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        name: newTask,
        id: Math.floor(Math.random() * 100000000),
        isCompleted: false,
        description: newTask,
      },
    ]);
  };

  return (
    <Layout>
      <div className="flex flex-col space-y-8 w-full max-w-xl overflow-y-auto max-h-[70%] m-10 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center space-x-4">
            <div className="rounded-xl bg-gray-200/20 p-2">
              <IoChevronBack className="w-4 h-4" />
            </div>
            <h3 className="text-2xl font-medium capitalize">{collection}</h3>
          </div>
          <div className="flex items-center justify-center">
            <BsThreeDots className="w-4 h-4" />
          </div>
        </div>
        <div className="flex select-none items-center px-4 py-2 space-x-4 border-gray-700 border rounded-2xl">
          <div
            className="p-1 transition transform bg-pink-500 rounded-lg cursor-pointer active:scale-90 hover:scale-105"
            onClick={handleSubmit}
          >
            <BsPlus className="w-5 h-5" />
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              name="todo"
              id="todo"
              className="w-full bg-transparent outline-none placeholder:text-gray-400"
              placeholder="Add a task"
              //   value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </form>
        </div>
        <div>
          <div>
            <h3>Tasks -5</h3>
            <div>
              {todoTasks.map((task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
            </div>
          </div>
          <div>
            <h3>Completed Tasks -2</h3>
            <div>
              {completedTasks.map((task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CollectionPage;
