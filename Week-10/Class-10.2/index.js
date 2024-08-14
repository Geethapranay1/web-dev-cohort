
import express from "express";
import zod from "zod";
import { inserUser, findUser, createTodo } from "./src/controllers/index.js";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./middleware.js";
const app = express();
const PORT = 3000;

app.use(express.json());

const signUpSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
    firstName: zod.string().max(50),
    lastName: zod.string().max(50),
});

app.post("/signup", async (req, res) => {
    console.log("its reaching here")
    const { email, password, firstName, lastName } = req.body;
    const { success } = signUpSchema.safeParse(req.body);
    console.log(success)
    if (!success) {
        return res.json({
            msg: "send the correct email and password"
        })
    }
    console.log(await findUser(email));
    if (await findUser(email)) {
        return res.json({
            msg: "user aleardy exists"
        })
    }
    const val = await inserUser(email, password, firstName, lastName);
    const token = jwt.sign({id: val.id}, "pranay");

    res.json({
        msg: "user created succefully",
        token
    })

    // Use the email and password variables as needed

})
app.post("/todos", authMiddleware, async (req, res) => {
    const { todo, description} = req.body
    const id = req.userId;
    console.log(id);
    const ans = createTodo(todo, description, id);
    if (ans) {
        res.json({
            msg: "created todo successfully"
        })
    }


})


app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`)
})

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