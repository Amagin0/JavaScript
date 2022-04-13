const userList = [10,20,30,40];

const userIdList = userList.map(value => `user_${value}`);

console.log(userIdList);
console.table(userList);