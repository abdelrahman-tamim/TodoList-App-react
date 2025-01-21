import { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [todoinput, settodoinput] = useState([]);
  const [currentinput, setcurrentinput] = useState("");

  const addtoinput = () => {
    if (currentinput.trim() !== "") {
      settodoinput([...todoinput, { text: currentinput, completed: false }]);
    }
    setcurrentinput("");
  };

  const deletetask = (index) => {
    const newTasks = todoinput.filter((_, i) => i != index);
    settodoinput(newTasks);
  };

  const taskcompleted = (index) => {
    const updatedtasks = todoinput.map((task, i) => {
      if (index === i) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    settodoinput(updatedtasks);
  };

  const clearcompleted = () => {
    const incompleattasks = todoinput.filter((task) => !task.completed);
    settodoinput(incompleattasks);
  };

  return (
    <>
      <div className="add">
        <input
          type="text"
          className="add-input"
          placeholder="What Do you want to Do Today?"
          value={currentinput}
          onChange={(e) => {
            setcurrentinput(e.target.value);
          }}
        />
        <button className="add-btn" onClick={addtoinput}>
          Add
        </button>
      </div>
      <div className="todosection">
        <div className="clear-sec">
          <img src="/src/clearvictor.png" onClick={clearcompleted} />
          <span>Clear Complete</span>
        </div>
        {todoinput.map((item, index) => {
          return (
            <>
              <div className="item">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onClick={() => taskcompleted(index)}
                />
                {item.text}
                <img src="/src/Vector.png" onClick={() => deletetask(index)} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ToDo;
