// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
// 1.
userTaskList.push({ id: 5, task: "Walk the dog" })
//console.log(userTaskList)

// 2.
userTaskList[3].task = "Go to the gym";
//console.log(userTaskList)

// 3.
userTaskList.pop();
//console.log(userTaskList)

// 4.
console.log(`Task id: ${userTaskList[userTaskList.length-1].id}, ${userTaskList[userTaskList.length-1].task}`);
