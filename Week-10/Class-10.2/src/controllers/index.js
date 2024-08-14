import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function inserUser(username, password, firstName, lastName) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        }
    });
    return res;
}



export async function findUser(email) {
    const res = await prisma.user.findFirst({
        where: {
            email
        }
    })
    return res;
}

export async function createTodo(todo, decription, id) {

    const res = await prisma.todo.create({
        data: {
            todo,
            done: false,
            decription,
            userId:id 
        }
    })
    return res;
}

