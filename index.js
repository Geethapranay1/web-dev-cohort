// Code to fetch data from the server and log the number of todos in the console
const axios = require("axios");

// three ways to fetch data from the server

//get request using fetch and axios
function Main() {
    fetch("https://sum-server.100xdevs.com/todos")
        .then(response => response.json())
        .then(data => console.log(data.todos.map(todo => todo.title + " " + todo.description)))
        .catch(error => console.log(error));
}

function main() {
    fetch("https://sum-server.100xdevs.com/todos")
        .then(async (response) => {
            const data = await response.json();
            console.log(data.todos.map(todo => todo.title + " " + todo.description));
        })
}

async function main1() {
    try {
        const response = await fetch("https://sum-server.100xdevs.com/todos");
        const data = await response.json();
        console.log(data.todos.map(todo => todo.title + " " + todo.description));
    } catch (error) {
        console.log(error);
    }
}
// Main();
// main();
// main1();

// using axios to fetch data from the server and log the number of todos in the console
async function main2() {
    try {
        const response = await axios.get("https://sum-server.100xdevs.com/todos");
        //remember to use response.data to get the data
        console.log(response.data.todos.map(todo => todo.title + " " + todo.description));
    } catch (error) {
        console.log(error);
    }
}
main2();

//post request using fetch and axios

function main() {
    fetch("https://sum-server.100xdevs.com/todos", {
        method: "POST", //POST, PUT, DELETE, GET


    })
        .then(async (response) => {
            const data = await response.json();
            console.log(data.todos.map(todo => todo.title + " " + todo.description));
        })
}

async function main2() {
    try {
        const response = await axios.get("https://sum-server.100xdevs.com/todos");//axios.get, axios.post, axios.put, axios.delete
        //remember to use response.data to get the data
        console.log(response.data.todos.map(todo => todo.title + " " + todo.description));
    } catch (error) {
        console.log(error);
    }
}
main2();
