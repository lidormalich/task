export default class TaskManager {
    constructor() {
        this.taskArr = [];
    }
    addTask(newTask) {
        this.taskArr.push(newTask);

    }
    deleteTask(id) {
        for (let index in this.taskArr) {
            if (this.taskArr[index].id == id) {
                this.taskArr.splice(index, 1);
                break;
            }
        }
        this.taskArr.sort((item, item2) => item.priorityNum - item2.priorityNum);
    }

    updateTaskDescription(id, description) {
        for (let index in this.taskArr) {
            if (this.taskArr[index].id == id) {
                this.taskArr[index].description = description;
            }
        }
    }

    getTaskInfo(id) {
        for (let index in this.taskArr) {
            if (this.taskArr[index].id == id) {
                return this.taskArr[index].description;
            }
        }
    }
    completeTask(id) {
        for (let index in this.taskArr) {
            if (this.taskArr[index].id == id) {
                this.taskArr[index].completed = true;
            }
        }
    }
}