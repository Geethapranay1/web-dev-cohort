"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function inserUser(username, password, firstName, lastName) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        }
    });
    console.log(res);
}
inserUser("vani@gmail.com", "vishnu124", "vishny", "swarrop");
// import { PrismaClient, Prisma } from '@prisma/client'
// const client = new PrismaClient()
// async function createUser() {
//   try {
//     await client.user.create({ data: { email: 'alreadyexisting@mail.com', password: "SDafdsa", firstName: "dfsad", lastName: "dafd"} })
//   } catch (e) {
//     if (e instanceof Prisma.PrismaClientKnownRequestError) {
//       // The .code property can be accessed in a type-safe manner
//       if (e.code === 'P2002') {
//         console.log(
//           'There is a unique constraint violation, a new user cannot be created with this email'
//         )
//       }
//     }
//     throw e
//   }
// }
// createUser();
// interface updateParams{
//     firstName: string;
//     lastName: string;
// }
// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: updateParams) {
//    const res =  await prisma.user.update({
//         where: {
//             email: username
//         },
//         data: {
//             firstName,
//             lastName
//         }
//     })
//     console.log(res)
// }
// updateUser("pgeetha", {
//     firstName: "geetha",
//     lastName: "pranay"
// })
// async function getUsers() {
//     const res = await prisma.user.findMany({
//     })
//     console.log(res)
// }
// getUsers();
// 1:25:00
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// async function createTodo(userId: number, title: string, description: string) {
//     const res = await prisma.todo.create({
//       data: {
//         userId,
//         todo: title,
//         decription: description,
//         done: false
//       }
//     })
//     console.log(res);
// }
// createTodo(1, "study", "at evening")
// async function getTodo(userId: number) {
//   const res = await prisma.todo.findMany({
//     where: {
//       userId
//     }
//   })
//   console.log(res);
// }
// getTodo(1)
//get todos and users details
//bad solution
// async function getTodosAndUsersDetails(userId: number) {
//     const res1 = await prisma.todo.findMany({
//       where: {
//         userId
//       }
//     })
//     const res2 = await prisma.user.findUnique({
//       where: {
//         id: userId
//       }
//     })
//     console.log(res1, res2);
// }
// getTodosAndUsersDetails(1);
// async function getTodosAndUsersDetails(userId: number) {
//   const res = await prisma.todo.findMany({
//     where: {
//       userId
//     },
//     select: {
//       user: true,
//       todo: true,
//       decription: true,
//       done: true,
//     }
//   })
//   console.log(res);
// }
// getTodosAndUsersDetails(1);
