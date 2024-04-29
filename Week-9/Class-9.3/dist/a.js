"use strict";
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
var responseStatus;
(function (responseStatus) {
    responseStatus[responseStatus["Success"] = 402] = "Success";
    responseStatus[responseStatus["NotFount"] = 404] = "NotFount";
    responseStatus[responseStatus["Error"] = 500] = "Error";
})(responseStatus || (responseStatus = {}));
// app.get("/" ,(req, res) => {
//     if (!req.query.userId) {
//         return res.status(responseStatus.Error).json({})
//     }
//     res.status(responseStatus.Success).json({})
// })
