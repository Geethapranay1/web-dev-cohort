import express from "express";
import bodyParse from "body-parser";

const app = express();

app.use(bodyParse({}));

interface Balances {
    [key: string]: number;
}

interface User {
    id: string;
    balances: Balances;
}

interface Order {
    userId: string;
    price: number;
    quantity: number;
}

export const TICKER = "GOOGLE";

const users: User[] = [{
    id: "1",
    balances: {
        "GOOGLE": 10,
        "USD": 50000
    }
    }, {
        id: "2",
    balances: {
        "GOOGLE": 10,
        "USD": 50000
    }
}]

const bids: Order[] = [];
const asks: Order[] = [];


app.post("/order", (req:any, res: any) => {
    const side: string = req.body.side;
    const price: number = req.body.price;
    const quantity: number = req.body.quantity;
    const userId: string = req.body.userId;

    const remainingQty = fillOrders(side, price, quantity, userId);

    if (remainingQty == 0) {
        res.json({
            filledQuantity: quantity
        })
        return;
        
    }
} )