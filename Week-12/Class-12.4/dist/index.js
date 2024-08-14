"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: 'postgresql://postgres:mysecretpassword@localhost:5432/postgres',
});
// async function createUsersTable() {
//     await client.connect();
//     const result = await client.query(`
//         CREATE TABLE addresses(
//             id SERIAL PRIMARY KEY,
//             user_id INTEGER NOT NULL,
//             city VARCHAR(100) UNIQUE NOT NULL,
//             country VARCHAR(100) UNIQUE NOT NULL,
//             street VARCHAR(255) NOT NULL,
//             pincode VARCHAR(10),
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//             FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//         );
//     `)
//     console.log(result);
// }
// createUsersTable();
//sql injection
function insertInto(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const values = [username, email, password];
        const result = yield client.query(`
        INSERT INTO users(username, email, password) 
        VALUES($1, $2, $3);
    `, values);
        console.log(result);
    });
}
insertInto('geetha', 'pranay@gmail.com', 'dfs');
