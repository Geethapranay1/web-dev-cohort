import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string, email:string) {
//     const result = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstName,
//             lastName,
//             email
//         }
//     })
//     console.log(result);
// }

// insertUser("pranay", "asdfad", "sadfasd", "asdfasfd", "fasdf@gmail.com");

// async function createTodo(title: string, description :string, id: number) {
//     const response = await prisma.todo.create({
//         data: {
//             userId: id,
//             title,
//             description
//         }
//     })
//     console.log(response);
// }

// createTodo("go to the gym", "geetha tp", 1);

// async function getTodos(userId: number) {
//     const response = await prisma.todo.findMany({
//         where: {
//             userId
//         }
//     })
//     console.log(response);
// }

// getTodos(1);

async function getTodosAndUsersDetails(userId:number) {
    const response = await prisma.todo.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    })
    console.log(response);
}

getTodosAndUsersDetails(1);