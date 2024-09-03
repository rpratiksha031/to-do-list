import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

function Body() {
  const [list, setList] = useState([]);

  const [task, setTask] = useState(" ");
  const [time, setTime] = useState("00:00");

  function handleChange() {
    let newItems = {
      task: task,
      time: time,
    };

    let updatedList = [...list];
    updatedList.push(newItems);
    setList(updatedList);
  }

  const handleDelete = (index) => {
    let reducedList = [...list];
    reducedList.splice(index);
    setList(reducedList);
  };

  const handleDeleteAll = () => {
    setList([]);
  };
  console.log("list", list);
  return (
    <div className="bg-bg-image  py-40 text-center text-2xl ">
      <div className="bg-teal-500 py-40 mx-64 mb-5 mx-60  ">
        <div className="font-bold font-serif mb-10 ">ENTER YOUR TASK</div>
        <input
          type="text"
          placeholder="add-tasks"
          className="mr-5 px-5 py-3"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="time"
          className="py-3"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          className="ml-5 bg-teal-100 px-3 hover:bg-stone-200 py-3"
          onClick={handleChange}
        >
          Add
        </button>
        {/* // tasksss */}
        <div>
          {list.map((ele, index) => (
            <div key={index} className="bg-teal-300 mx-10 mt-6 py-3 space-y-10">
              <div>
                <span className="font-bold text-2xl">{ele.task}</span>
                <span className="ml-40 font-serif font-bold text-2xl">
                  {ele.time}
                </span>
                <button
                  className="ml-40 text-2xl "
                  onClick={() => handleDelete(index)}
                >
                  <RiDeleteBinLine />
                </button>
              </div>
            </div>
          ))}
        </div>
        {list.length >= 1 && (
          <button
            className="bg-teal-100 mt-10 px-4 py-2 hover:bg-stone-200"
            onClick={handleDeleteAll}
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}

export default Body;
