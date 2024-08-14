import { Hono } from "hono";
const app = new Hono();

//basic thing to know

// app.get("/", (c) => {
//   //body, headers, query parameters, middlewares, connecting to db
//   return c.json({
//     msg: "hi there"
//   });
// })

//getting input from users
app.get("/", async(c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello hono")
})

//1:32:00



//creating a simple auth middleware

async function authMiddleware(c: any, next: any) {
  if (c.req.header("authorization")) {
    //validation checks like jwt or cookies
    await next();
  } else {
    return c.text("you don't have access");
  }
}

app.use(authMiddleware)

export default app;