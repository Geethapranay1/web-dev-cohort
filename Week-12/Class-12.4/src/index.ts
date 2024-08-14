import { Client } from 'pg';

const client = new Client({
    connectionString: 'postgresql://postgres:mysecretpassword@localhost:5432/postgres',
})

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
async function insertInto(username: string, email: string, password:string) {
    await client.connect();
    const values = [username, email, password];
    const result = await client.query(`
        INSERT INTO users(username, email, password) 
        VALUES($1, $2, $3);
    `, values)
    console.log(result);
}
insertInto('geetha','pranay@gmail.com','dfs m');