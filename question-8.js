// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let getUserFromServer = async() => {
    return await fetch("https://jsonplaceholder.typicode.com/users");
}
async function getUser() {
    let data = await getUserFromServer();
    let user = await new Promise(resolve => setTimeout(() => resolve(data.json()), 2500));
    
    for (let key in user) {
        let newUser = "";
        newUser += user[key].name;
        console.log(newUser)
    }
}
getUser()
