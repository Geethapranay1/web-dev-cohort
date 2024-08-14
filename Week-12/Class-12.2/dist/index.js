"use strict";
// interface User {
//     name: string,
//     age: number
// }
// const users = {
//     "pranay" : {
//         id: "1",
//         username: "pranay",
//     },
//     "raman" : {
//         id: "2",
//         username: "raman"
//     }
// }
const users = new Map();
users.set("pranay", {
    id: "1",
    username: "pranay"
});
users.set("raman", {
    id: "2",
    username: "raman"
});
const client = users.get("pranay");
console.log(client);
