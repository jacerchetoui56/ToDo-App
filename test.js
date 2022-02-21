let taskCounter = 2
let DoneTasks = 0
const inputZone = document.querySelector(".input-zone")
const addbtn = document.querySelector(".add-btn")
const listOfTasks = document.querySelector("#tasks")
let task = listOfTasks.querySelectorAll("li")
const textTaskCounter = document.querySelector("#taskCounter")

let tasks = [
    {
        name : "this is a task",
        isDone : false
    },
    {
        name : "this is another task",
        isDone : false
    },
    
]

updateHTML()

addbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    tasks.unshift({name: inputZone.value ,isDone:false})

    taskCounter++
    inputZone.value = ""
    updateHTML()
})

function completedTask(i){
    tasks[i].isDone = true
    DoneTasks++
    updateHTML()
}


function updateHTML(){
    listOfTasks.innerHTML = ""
    for(let i=0;i< taskCounter;i++){
        const li = document.createElement("li")
        li.classList.add("task")
        if(tasks[i].isDone==true) li.classList.toggle("completed")
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