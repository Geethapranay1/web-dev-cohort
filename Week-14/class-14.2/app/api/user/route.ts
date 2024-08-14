
// export function GET() {
//     return Response.json({
//         email: "geethapjdofnoa@gmail.com",
//         name: "pranay"
//     })
// }

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();


export async function POST(req: NextRequest) {
    //extract the body
    const body = await req.json();
    //header 
    //console.log(req.headers.get("Authorization"))
    //query params
    //console.log(req.nextUrl.searchParams.get("name"))

    //store the body in the database
    try {
        const user = await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        })
        console.log(user)
    }catch(e) {
        console.log(e)
        return NextResponse.json({
            message: "User already exists"
        }, {
            status: 400
        })
    }
    console.log(body)
    return NextResponse.json({
        message: "User created"
    })
}