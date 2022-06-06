let DoneTasks = 0
const inputZone = document.querySelector(".input-zone")
const addbtn = document.querySelector(".add-btn")
const listOfTasks = document.querySelector("#tasks")
let task = listOfTasks.querySelectorAll("li")
const textTaskCounter = document.querySelector("#taskCounter")
//! this is when the first load of the app
let tasks = [
    {
        name: "this is the first task",
        isDone: false
    },
    {
        name: "this is the second task",
        isDone: false
    },
]
//!checking if the storage has Tasks JSON stored in it or not
if (localStorage.getItem('Tasks')) tasks = JSON.parse(localStorage.getItem('Tasks'))
//!making sure that the counters are right
taskCounter = tasks.length
tasks.forEach(task => {
    if (task.isDone) DoneTasks++
})

updateHTML()

addbtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputZone.value != "") {
        tasks.unshift({ name: inputZone.value, isDone: false })
        localStorage.setItem("Tasks", JSON.stringify(tasks))
        taskCounter++
        inputZone.value = ""
        updateHTML()
    }
})

function completedTask(i) {
    tasks[i].isDone = true
    localStorage.setItem("Tasks", JSON.stringify(tasks))
    DoneTasks++
    updateHTML()
}


function updateHTML() {
    listOfTasks.innerHTML = ""
    for (let i = 0; i < taskCounter; i++) {
        const li = document.createElement("li")
        li.classList.add("task")
        if (tasks[i].isDone == true) li.classList.toggle("completed")
        const span = document.createElement("span")
        span.classList.add("nameTask")
        span.textContent = tasks[i].name;
        const button = document.createElement("button")
        button.classList.add("Done")
        button.textContent = "Done"
        button.onclick = () => completedTask(i)
        li.appendChild(span)
        li.appendChild(button)
        listOfTasks.appendChild(li)
        textTaskCounter.textContent = `Completed Tasks : ${DoneTasks}/${tasks.length}`
    }

}

function resetTasks() {
    localStorage.removeItem("Tasks")
    window.location.reload()
}