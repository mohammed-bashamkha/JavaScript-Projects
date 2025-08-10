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

let table = document.getElementById("tasks");
table.innerHTML = `<table id="tasks">
    <caption>
        مهامي
        <span class="add">+</span>
    </caption>`;
for(let task of tasks) {

    let contentTable = `
    <tr>
        <td>${task.title}<span class="date">${task.date}</span></td>
        <td class="icons">
            <span class="icon edit">✎</span>
            <span class="icon check">✓</span>
            <span class="icon delete">🗑</span>
        </td>
    </tr>`

    table.innerHTML += contentTable
}