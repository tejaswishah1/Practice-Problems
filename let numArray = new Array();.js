function randomDate() {
    let begDate = new Date("1992-01-01");
    let endDate = new Date("1993-12-31");
    return new Date(begDate.getTime() + Math.random() * (endDate.getTime() - begDate.getTime()));
}

let birthMap = new Map();

for(var i = 0; i < 50; i++) {
    
    let birthday = randomDate();
    let username = "user" + i;
    let month = birthday.getMonth() + 1;

    if(!birthMap.has(month)) {
        let users = [username];
        birthMap.set(month, users);
    }
    else {
        let users = birthMap.get(month);
        users.push(username);
        birthMap.set(month, users);
    }
}

for(let [key, value] of birthMap)
    console.log("Month: " + key + ", Users: " + value.join(", "));
