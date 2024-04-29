"use strict";
// type Input = string | number;
// function firstElem(arr : (type)[]) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// }
// function identity<T>(arg: T) {
//     return arg;
// }
// const value1 = identity<string>("myStirng")
// const value2 = identity<number>(100)
// function firstElem<T>(arr: T[]) {
//     return arr[0];
// }
// let val1 = firstElem<string>(["pranay", "geetha"]);
// console.log(val1.toUpperCase());
// function getFirstElement<df>(arr: df[]) {//anything it may be either <T> or <anyThing>
//     return arr[0]; 
// }
// const el = getFirstElement<string>(["harkiratSingh", "2"]);
// console.log(el.toUpperCase())
// function swap<T, U>(arg1: T, arg2: U) {
//     let temp = arg1
//     arg1 = arg2
//     arg2 = temp
//     console.log(arg1, arg2)
// }
// swap<number>(1, 3);
// swap<string>("prnay", "geetha")
//type updateTodo = Partial<Todo>
//@ts-ignore
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const router = express_1.default.router();
let titleInputProps = zod_1.z.object({
    title: zod_1.z.string().min(1).email(),
    description: zod_1.z.string().min(1),
});
router.post("/tods", (req, res) => {
    const parsedInp = titleInputProps.safeParse(req.body);
    if (!parsedInp.success) {
        return res.status(411).json({
            msg: parsedInp.error
        });
    }
    let tilte = parsedInp.data.title;
    let description = parsedInp.data.description;
});
//process managers => if there is an exception somewhere we can't figure out someone can take our backend down so that we use "forever" or "pm2". This makes keep running the backend if someone tries to take our backend down.
//zod => .safeParse, .success, .data, .error  
