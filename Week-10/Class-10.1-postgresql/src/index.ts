// write a function to create a users table in database
// import { Client } from "pg";

// const client = new Client({
//     connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
// })



// async function createUsersTable() {
//         await client.connect()
//         const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             name VARCHAR(100) UNIQUE NOT NULL,
//             email VARCHAR(100) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )
//         `)
//         console.log(result)

// }

// import { Client } from "pg";

// const client = new Client({
//     connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
// })



// async function createUsersTable() {
//         await client.connect()
//         const result = await client.query(`
//         CREATE TABLE addresses (
//             id SERIAL PRIMARY KEY,
//             user_id INTEGER NOT NULL,
//             city VARCHAR(100) NOT NULL,
//             country VARCHAR(100) NOT NULL,
//             pincode VARCHAR(20) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//             FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//         )
//         `)
//         console.log(result)

// }


// createUsersTable()


// createUsersTable()

// import { Client } from "pg";

// //Async function to insert a data into a table
// async function insertData(){
//     const client = new Client({
//         connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
//     })

//     try {
//         await client.connect()
//         const insertQuery = `INSERT INTO users (name, email, password) VALUES ('pohn','john@gmail.com','john123');`
//         const res = await client.query(insertQuery);
//         console.log("Insertion success ", res);

//     }catch (error) {
//         console.error("Error while inserting data ", error);

//     }finally {
//         await client.end()
//     }


// }

// insertData();

//the better approach than above one due to sql injection
// sql injection is a code injection technique that might destroy your database
// example of sql injection
// const name = "john'; DROP TABLE users; --";
// const insertQuery = `INSERT INTO users (name, email, password) VALUES ('${name}',' ${email}','${password}');`



// import { Client } from "pg";

// //Async function to insert a data into a table
// async function insertData(username: string, email: string, password: string){
//     const client = new Client({
//         connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
//     })

//     try {
//         await client.connect()
//         const insertQuery = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`
//         const values = [username, email, password]
//         const res = await client.query(insertQuery, values);
//         console.log("Insertion success ", res);

//     }catch (error) {
//         console.error("Error while inserting data ", error);

//     }finally {
//         await client.end()
//     }


// }

// insertData("pranay", "pgeethapranay@gmail.com", "pranay123");


//write a function to fetch user data from the database given the email


// import { Client } from "pg";

// async function getUser(email: string) {
//     const client = new Client({
//         // host: "localhost",
//         // port: 5433,
//         // database: "postgres",
//         // user: "postgres",
//         // password: "mysecretpassword"
//         connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
//     });


//     try {
//         await client.connect();
//         const query =  `SELECT * FROM users WHERE email = $1`;
//         const values = [email];
//         const result = await client.query(query, values);

//         if (result.rowCount) {
//             console.log(result)
//             console.log("User found ", result.rows);
//         } else {
//             console.log("User not found");
//         }
//     }
//     catch (error) {
//         console.error("Error while fetching user data ", error);
//     }
//     finally {
//         await client.end();
//     }
// }

// getUser("pgeethapranay@gmail.com");



// import { Client } from "pg";

// //Async function to insert a data into a table
// async function insertData(user_id:number, city: string, country: string, pincode: string){
//     const client = new Client({
//         connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
//     })

//     try {
//         await client.connect()
//         const insertQuery = `INSERT INTO addresses (user_id, city, country, pincode) VALUES ($1, $2, $3, $4);`
//         const values = [user_id, city, country, pincode]
//         const res = await client.query(insertQuery, values);
//         console.log("Insertion success ", res);

//     }catch (error) {
//         console.error("Error while inserting data ", error);

//     }finally {
//         await client.end()
//     }


// }

// insertData(2, "kadapa", "ap", "516002");

// import { Client } from "pg";

// async function getUser(email: string) {
//     const client = new Client({
//         // host: "localhost",
//         // port: 5433,
//         // database: "postgres",
//         // user: "postgres",
//         // password: "mysecretpassword"
//         connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
//     });


//     try {
//         await client.connect();
//         const query =  `SELECT * FROM users WHERE email = $1`;
//         const values = [email];
//         const result = await client.query(query, values);

//         if (result.rowCount) {
//             // console.log(result)
//             //better approach is using joins
//             console.log("User found ", result.rows);
//             const addressQuery = `SELECT * FROM addresses WHERE user_id = $1`;
//             const addressValues = [result.rows[0].id];
//             const addressResult = await client.query(addressQuery, addressValues);
//             console.log("Address found ", addressResult.rows);
//         } else {
//             console.log("User not found");
//         }
//     }
//     catch (error) {
//         console.error("Error while fetching user data ", error);
//     }
//     finally {
//         await client.end();
//     }
// }

// getUser("pgeethapranay@gmail.com");



//joins

import { Client } from "pg";

async function getUser(email: string) {
    const client = new Client({
        // host: "localhost",
        // port: 5433,
        // database: "postgres",
        // user: "postgres",
        // password: "mysecretpassword"
        connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
    });


    try {
        await client.connect();
        const query =  `SELECT *
                        FROM users u
                        JOIN addresses a ON u.id = a.user_id
                        WHERE u.email = $1`
        const values = [email];
        const result = await client.query(query, values);

        if (result.rowCount) {
            // console.log(result)
            //better approach is using joins
            console.log("User found ", result.rows[0]);
            
        } else {
            console.log("User not found");
        }
    }
    catch (error) {
        console.error("Error while fetching user data ", error);
    }
    finally {
        await client.end();
    }
}

getUser("pgeethapranay@gmail.com");
//1:46:30