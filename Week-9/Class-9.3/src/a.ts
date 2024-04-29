
// type keyInput = "up" | "down" | "left" | "right"

// enum Direction {
//     Up,//0
//     down,//1
//     left,//2
//     right//3
// }
// //Direction.Up
// function doSomething(keyPressed: Direction) {
//     //do something
// }

// console.log(Direction.down)

enum responseStatus {
    Success = 402,
    NotFount = 404,
    Error = 500
}

// app.get("/" ,(req, res) => {
//     if (!req.query.userId) {
//         return res.status(responseStatus.Error).json({})
//     }

//     res.status(responseStatus.Success).json({})
// })