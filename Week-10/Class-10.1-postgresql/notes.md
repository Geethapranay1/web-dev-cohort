- elephant db, avoin db, neon db, supabase db
- psql is the command line interface for postgresql
- or we can use pg admin

//42:30

## Things learnt in today's class
### SQL vs NoSQL
- SQL is relational database
- NoSQL is non-relational database
- SQL is table based
- NoSQL is document based, key-value pairs, graph databases or wide-column stores
- SQL is vertically scalable
- NoSQL is horizontally scalable
- SQL is good for complex queries
- NoSQL is not good for complex queries
- SQL is not good for hierarchical data storage
- NoSQL is good for hierarchical data storage
- SQL is good for heavy duty transactional type applications
- NoSQL is not good for heavy duty transactional type applications
- SQL is good for complex queries
- NoSQL is not good for complex queries

---

### postgresql
- psql is the command line interface for postgresql
- or we can use pg admin
- we can use elephant db, avoin db, neon db, supabase db
- difference between psql and pg admin
- psql is command line interface
- pg admin is GUI interface
- we can use both to interact with postgresql
- we can use psql to interact with postgresql from terminal
- we can use pg admin to interact with postgresql from GUI

---
### connection string
- connection string is used to connect to the database
- connection string is used to connect to the database from the application
- The example of connection string look like this `postgres://username:password@localhost:5432/dbname`

---
### Relationships
- Relationships are used to connect two tables
- For example, we have two tables, one is users and another is posts
- We can connect these two tables using relationships
- The code for creating relationships look like this
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    body TEXT,
    user_id INT REFERENCES users(id)
);
```
- FOREIGN KEY is used to create relationships between two tables
- REFERENCES is used to reference the column of another table
- Example of foreign key and references
```sql
user_id INT REFERENCES users(id)
```
- In the above example, user_id is the foreign key and users is the table name and id is the column name of the users table

### Joins
- Joins are used to combine two or more tables
- The example of joins look like this
```sql
SELECT * FROM users JOIN posts ON users.id = posts.user_id;
```