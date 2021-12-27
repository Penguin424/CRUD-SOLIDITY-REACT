/* eslint-disable react-hooks/exhaustive-deps */
import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import { ITaskFormat, TasksContract } from "./@types";
import Web3 from "web3";

const App = () => {
  const [taskContract, setTaskContract] = useState<any>();
  const [tasks, setTasks] = useState<ITaskFormat[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  const { account, connect, status } = useMetaMask();

  useEffect(() => {
    handleInitMetaMask();
  }, [status]);

  const handleInitMetaMask = async () => {
    if (status === "notConnected") {
      await connect();
    }

    if (status === "connected") {
      const res = await fetch("/TasksContract.json");
      const taskContractJson: TasksContract = await res.json();
      const provider = new Web3("http://localhost:7545");
      const TruffleContract = require("@truffle/contract");

      const TaskContractProvider = TruffleContract(taskContractJson);
      TaskContractProvider.setProvider(provider.currentProvider);
      const taskContract = await TaskContractProvider.deployed();

      const taskCounter = await (await taskContract.taskCounter()).toNumber();
      const tasksDB = [];

      for (let i = 1; i <= taskCounter; i++) {
        const task = await taskContract.tasks(i);

        let taskId = task.id.toNumber();
        let taskTitle = task.title;
        let taskDescription = task.description;
        let taskCreatedAt = task.createdAt.toNumber();
        let taskDone = task.done;

        let taskJson: ITaskFormat = {
          id: taskId,
          title: taskTitle,
          description: taskDescription,
          createdAt: taskCreatedAt,
          done: taskDone,
        };

        tasksDB.push(taskJson);
      }

      setTaskContract(taskContract);
      setTasks(tasksDB);
      setLoading(false);
    }
  };

  const handleGetTasks = async () => {
    const taskCounter = await (await taskContract.taskCounter()).toNumber();
    const tasksDB = [];

    for (let i = 1; i <= taskCounter; i++) {
      const task = await taskContract.tasks(i);

      let taskId = task.id.toNumber();
      let taskTitle = task.title;
      let taskDescription = task.description;
      let taskCreatedAt = task.createdAt.toNumber();
      let taskDone = task.done;

      let taskJson: ITaskFormat = {
        id: taskId,
        title: taskTitle,
        description: taskDescription,
        createdAt: taskCreatedAt,
        done: taskDone,
      };

      tasksDB.push(taskJson);
    }

    setTasks(tasksDB);
  };

  const handleToggleTask = async (element: ITaskFormat) => {
    setLoading(true);
    await taskContract.toggleDone(element.id, {
      from: account,
    });

    await handleGetTasks();
    setLoading(false);
  };

  const handleSubmitTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await taskContract.createTask(title, description, {
      from: account,
    });

    await handleGetTasks();
    setTitle("");
    setDescription("");

    setLoading(false);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body rounded-0 mb-4 bg-dark">
            <h1>DApp</h1>
            <h6 className="text-mute">Decentralized Task App</h6>
            <span>Wallet</span>
            <span>{account}</span>
          </div>
          <form
            onSubmit={handleSubmitTask}
            className="card card-bpdu bg-dark rounded-0 p-3"
          >
            <h4>Save a task</h4>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              type="text"
              placeholder="Write Task"
              className="form-control bg-dark text-white rounded-0 border-0 my-4"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-control bg-dark text-white rounded-0 border-0 my-4"
              rows={2}
              placeholder="I have to do..."
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
        <div className="col-md-8">
          {loading ? (
            <p>cargando...</p>
          ) : (
            tasks.map((task: ITaskFormat) => (
              <div className="card bg-dark rounded-0 mb-2" key={task.id}>
                <div className="card-header d-flex justify-content-between aling-items-center">
                  <span> {task.title}</span>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`task-${task.id}`}
                      onChange={() => handleToggleTask(task)}
                      checked={task.done}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">{task.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created at:{" "}
                      {new Date(task.createdAt * 1000).toLocaleString()}
                    </small>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
