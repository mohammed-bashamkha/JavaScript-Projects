let tasks = [
    {
        "title" : "الرياضة الصباحية",
        "date"  : "10/8/2025",
        "isDone": false,
    },
    {
        "title" : "انهاء كورس الجافا سكربت",
        "date"  : "10/8/2025",
        "isDone": false,
    },
    {
        "title" : "البداء في مشروع التخرج",
        "date"  : "10/8/2025",
        "isDone": false,
    },
];
function fillTable() {
    let index = 0;
    let table = document.getElementById("tasks");
    table.innerHTML = `<table id="tasks">
        <caption>
            مهامي
            <span class="add" id="add-task">+</span>
        </caption>`;
    for(let task of tasks) {

        let contentTable = `
        <tr>
            <td>${task.title}<span class="date">${task.date}</span></td>
            <td class="icons">
            <span class="icon edit" id="edit-task">✎</span>
            <span class="icon check" id="check-task">✓</span>
            <span class="icon delete" id="delete-task" onclick="deleteTask(${index})">🗑</span>
            </td>
        </tr>`


        

        table.innerHTML += contentTable
        index++
    }
    // create task
    document.getElementById("add-task").addEventListener("click", ()=>{
        let text = prompt("أدخل اسم المهمة");

        if(text && text.trim() !== "") {
            let now = new Date();
            let dateString = now.toLocaleDateString();

            let createTask = {
                "title" : text,
                "date"  : dateString,
                "isDone": false,
            }
            tasks.push(createTask)
            fillTable()
        }else {window.alert("الحقل فارغ")}
    });
}
    // delete task
    function deleteTask(index) {
        let isConfirm = confirm("هل أنت متأكد من حذف المهمة")
        if(isConfirm) {
            tasks.splice(index,1)
            fillTable()
        }
    }

fillTable()

