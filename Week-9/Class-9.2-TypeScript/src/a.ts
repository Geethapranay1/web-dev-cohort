// let x: number = 1;
// x = "pranay";
// console.log(x);




// function hello(name1: string) {
//     console.log(`hello ${name1}`);
// }
// hello("pranay");

// function sum(a: number, b:number):number {
//     return a + b
// }

// console.log(sum(1, 2));

// function isLegal(age:number):boolean {
//     if (age >= 18) {
//         return true;
//     }else {
//         return false;
//     }
// }
// const ans = isLegal(20);
// console.log(ans);

// function runAfter(callback: () => void) {
//     setTimeout(callback, 3000)
// }

// runAfter(() => {
//     console.log("pranay");
// })

// const greet = (name:string) => `Hello ${name}`
// console.log(greet("pranay"))

// interface user {
//     firstName: string,
//     lastName: string,
//     email?: string,// ? indicates a optional argument it depends on user whether he want to give or not
//     age: number
// }

// function isLegal(user: user) {
//     if (user.age >= 18) {
//         return true
//     }else {
//         return false
//     }
// }

// console.log(isLegal({
//     firstName: "pranay",
//     lastName : "sdfsadf",
//     email:'sdafasdf',
//     age: 18
// }))

//types
// type User = {
//     firstName: string,
//     lastName: string,
//     age:number
// }

// type stringOrNumber = string | number
// function printId(id : stringOrNumber): void {
//     console.log(`hello ${id}`)
// }
// printId("pranay")
// printId(2323)

function maxArray(arr: number[]) {
    let max: number = 0
    for (let i:number = 0; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxArray([3,1,3,1,32,1,2]));

//interfaces can be implemented by classes
//types can be used in union and intersection
//36:00
//1:47:00
//2:05"00