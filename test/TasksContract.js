const TasksContract = artifacts.require("./TasksContract.sol");

contract("TaskContract", () => {
  before(async () => {
    this.taskContract = await TasksContract.deployed();
  });

  it("deploys successfully", async () => {
    const address = await this.taskContract.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("get Task List", async () => {
    const taskCounter = await this.taskContract.taskCounter();
    const task = await this.taskContract.tasks(taskCounter);

    assert.equal(task.id.toNumber(), taskCounter);
    assert.equal(task.title, "mi primer tarea de ejemplo");
    assert.equal(task.description, "tiene que hacer algo");
    assert.equal(taskCounter, 1);
  });

  it("Task created successfully", async () => {
    const result = await this.taskContract.createTask(
      "some task",
      "description two"
    );
    const taskEvent = result.logs[0].args;
    const taskCounter = await this.taskContract.taskCounter();

    assert.equal(taskCounter, 2);
    assert.equal(taskEvent.id.toNumber(), taskCounter);
    assert.equal(taskEvent.id.toNumber(), 2);
    assert.equal(taskEvent.title, "some task");
    assert.equal(taskEvent.description, "description two");
    assert.equal(taskEvent.done, false);
  });

  it("Task toggle done", async () => {
    const result = await this.taskContract.toggleDone(1);
    const taskEvent = result.logs[0].args;
    const task = await this.taskContract.tasks(1);

    assert.equal(task.done, true);
    assert.equal(taskEvent.id.toNumber(), 1);
    assert.equal(taskEvent.done, true);
  });
});
