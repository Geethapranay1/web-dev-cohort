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
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
        });
        try {
            yield client.connect();
            const query = `SELECT *
                        FROM users u
                        JOIN addresses a ON u.id = a.user_id
                        WHERE u.email = $1`;
            const values = [email];
            const result = yield client.query(query, values);
            if (result.rowCount) {
                console.log("User found ", result.rows[0]);
            }
            else {
                console.log("User not found");
            }
        }
        catch (error) {
            console.error("Error while fetching user data ", error);
        }
        finally {
            yield client.end();
        }
    });
}
getUser("pgeethapranay@gmail.com");
