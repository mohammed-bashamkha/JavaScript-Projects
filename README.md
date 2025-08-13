# 📝 To-Do List

A simple task management application using **JavaScript** and **LocalStorage**.  
It allows you to add, edit, delete, and control the status of tasks (completed or not).

---

## 📌 Features
- ➕ **Add a new task** with automatic creation date.
- ✏ **Edit tasks** easily.
- ✅ **Mark tasks as completed** or undo completion.
- 🗑 **Delete tasks** with confirmation before removal.
- 💾 **Save data in LocalStorage** to keep tasks even after page reload.
- 📱 **Simple and user-friendly design**.

---

## 📂 Files
- **index.html** → Main display page.
- **style.css** → Page styling.
- **main.js** → JavaScript code for task management.

---

## 💻 How to Use
1. Open the project in your browser.
2. Add a new task by clicking **+** at the top of the table.
3. Edit a task by clicking the ✎ icon.
4. Mark a task as completed by clicking **✓**.
5. Delete a task by clicking **🗑**.

---

## 🖼 Example Interface

| Task                 | Date       | Controls |
|----------------------|------------|----------|
| Morning Exercise     | 10/8/2025  | ✏ ✓ 🗑 |
| Finish JavaScript Course| 10/8/2025| ✏ ✓ 🗑 |

---

## ⚙ How the Code Works
- All tasks are stored in **localStorage** in JSON format.
- On page reload, `fillTable()` is called to reload the data.
- Event handlers (`onclick`) are used to perform add, delete, edit, or check operations.

---

## 📜 Example Stored Data
```json
[
    {
        "title": "Morning Exercise",
        "date": "10/8/2025",
        "isDone": false
    },
    {
        "title": "Finish JavaScript Course",
        "date": "10/8/2025",
        "isDone": false
    }
]
```

---

## 🛠 Suggested Improvements
- Add **search** support within tasks.
- Ability to **categorize tasks** (Work, Study, Personal).
- Better **responsive design** for mobile devices.
- Add **cloud storage** to sync tasks across devices.
