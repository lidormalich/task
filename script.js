import TaskManager from "./script/missionManager.js";
import Task from "./script/mission.js";

let taskArrManger = new TaskManager();
// add
try {
    for (let item of JSON.parse(sessionStorage.getItem("Data")).taskArr) {
        let a = new Task(item.description);
        taskArrManger.addTask(a);
        a.completed = item.completed;
    }
} catch (error) {
    console.log(error);
}

window.addNewAction = function addNewAction() {
    let mission = document.getElementById('task').value;
    if (mission != "" && mission != null) {
        taskArrManger.addTask(new Task(mission));
        // צריך לעדכן אותו בלבד במקום כל המערך- חסכון במאשבים וזמן ריצה
        updateUI();
        document.getElementById('task').value = "";
    } else {
        alert('problem');
    }

}


window.updateAction = function updateAction(id) {
    let info = prompt("new informtion");
    if (info === null || info == "") {
        alert("somthing wrong, i dot see any text");
    }
    else {
        taskArrManger.updateTaskDescription(id, info);
    }
    updateUI();
    // צריך לעדכן אותו בלבד במקום כל המערך- חסכון במאשבים וזמן ריצה
}

window.checkEnter = function checkEnter(e) {
    if (e.key == "Enter") {
        // console.log("U Prees ENTER");
        addNewAction();
    }
}

window.doComplite = function doComplite(id) {
    taskArrManger.completeTask(id);
    updateUI();
    // צריך לעדכן אותו בלבד במקום כל המערך- חסכון במאשבים וזמן ריצה
}
window.deleteTask = function deleteTask(id) {
    if (confirm("Are you sure?") == true) {
        taskArrManger.deleteTask(id);
        updateUI();
    } else {
        alert("Save Cancelled!");
    }

    // צריך לעדכן אותו בלבד במקום כל המערך- חסכון במאשבים וזמן ריצה
}




function updateUI() {

    document.getElementById('open').innerHTML = "";
    document.getElementById('close').innerHTML = "";
    document.getElementById('openh1').style.display = "none";
    document.getElementById('closeh1').style.display = "none";
    taskArrManger.taskArr.map((item) => {
        if (!item.completed) {
            document.getElementById('openh1').style.display = "block";
            document.getElementById('open').innerHTML += `
            <li class="list-group-item" style='display:flex; gap:10px; justify-content: center;'>
            <div style='width:15rem; word-break: break-all'>
            ${item.description}</div>
                <button class='btn btn-success'><i class="fa-solid fa-check" onclick='doComplite(${item.get("id")})'></i></button>
                <button class='btn btn-primary'><i class="fa-regular fa-pen-to-square" onclick='updateAction(${item.get("id")})'></i></button>
                <button class='btn btn-danger'><i class="fa-regular fa-trash-can " onclick='deleteTask(${item.get("id")})'></i></button>
                <button class='btn btn-link'><a href= "https://wa.me/972526761204/?text="+${encodeURIComponent(taskArrManger.getTaskInfo(item.get("id")))} ><i class="fa-brands fa-whatsapp"></i></a ></button>
            </li>`;
        } else {
            document.getElementById('closeh1').style.display = "block";
            document.getElementById('close').innerHTML += `
            <li  class="list-group-item disabled"  style='display:flex; gap:10px; justify-content: center;'>
                <div style='width:10rem; word-break: break-all'>
                <s> ${item.description}</s></div>
                <i class="fa-solid fa-check-double"></i>
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-regular fa-trash-can "></i>
            </li>`;
        }
    });
    sessionStorage.setItem("Data", JSON.stringify(taskArrManger));
}
updateUI();