// interface User {
//     name: string,
//     age: number
// }

// function sumOfAge(user1: User, user2: User) {
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name: "pranay", age: 12}, {name: "raman", age: 14});
// console.log(age);


// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// type UpdateProps = Pick<User, 'name'|'age'|'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// const displayUser = (user: UpdatePropsOptional) => {
//     console.log(`Name : ${user.name}, age: ${user.age}, email: ${user.email}`);
// }

// displayUser("pr")

// const obj = {
//     name: "pranay",
//     age: 12,
    
// }

// obj.name = "raman"

// console.log(obj.name);

// //read-only

// type User = {
//     name: string,
//     age: number

// }

// const user: Readonly<User> = {
//     name: "pranay",
//     age: 12
// }

// user.age = 13;






interface User {
    id: string;
    username: string;
}

type Users = {
    [key: string]: User;
}

type Users1 = Record<string, User>
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

// const users = new Map<string, User>();
// users.set("pranay", {
//     id: "1",
//     username: "pranay"
// })
// users.set("raman", {    
//     id: "2",
//     username: "raman"
// })

// const client = users.get("pranay");
// console.log(client);


//Exclude
// let's you exclude the bunch of keys from the object
// type EventType = 'click' | 'mousemove' | 'scroll';
// type ExcludeType = Exclude<EventType, 'scroll'>;  

// const handleEvent = (event: ExcludeType) => {
//     console.log(event);
// }

// handleEvent('click')//OK

// handleEvent('scroll')//Error


//Type inference in zod
import { z } from "zod";
import express from "express";
const app = express();

//Define the schema to update the user profiles
const userProfileSchema = z.object({
    name: z.string().min(1, {message: "Name cannot by empty"}),
    email: z.string().email({message: "Invalid email format"}),
    age: z.number().min(18, {message: "You must be at least 18 years old"}).optional()
});

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body;
    if (!success) {
        res.status(411).json({})
        return 
    }
    //update database here
    res.json({
        message: "User updated"
    })
})
