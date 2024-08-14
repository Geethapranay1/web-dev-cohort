# Points learning in class
- prisma or drizzle
## What are ORMS
- Object Relational Mapping
- It is a technique to convert data between incompatible type systems in databases and object-oriented programming languages.
- ORMS let you easily interact with a database without worrying about the underlying SQL.
1. ## Simpler Syntax
- Converts objects to SQL queries under the hood  
- Abstraction that lets you filp the databases you are using unified api irrespective of db
- Type safety or autocompletion
2. ## Automate migrations
- In case 11:30
- NON ORM syntax looks like this
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
- ORM syntax looks like this
```sql
model User {
    id Int @id @default(autoincrement())
    name String
    email String
    posts Post[]
}

model Post {
    id Int @id @default(autoincrement())
    title String
    body String
    user User @relation(fields: [userId], references: [id])
    userId Int
}
```

- The difference between ORM and prisma is that prisma is a type safe ORM
- Prisma is a type safe ORM

