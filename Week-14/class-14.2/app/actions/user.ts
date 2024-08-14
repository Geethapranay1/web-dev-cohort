"use server"
// export function GET() {
//     return Response.json({
//         email: "geethapjdofnoa@gmail.com",
//         name: "pranay"
//     })
// }

import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();

import client from "@/db";

export async function signup(username: string, password: string) {
    //extract the body
    // const body = await req.json();
    //header 
    //console.log(req.headers.get("Authorization"))
    //query params
    //console.log(req.nextUrl.searchParams.get("name"))

    //store the body in the database
    try {
        const user = await client.user.create({
            data: {
                username,
                password
            }
        })
        // console.log(user)
        return {
            msg: true
            
        };
    }catch(e) {
        // console.log(e)
        return {
            msg: false
        };
    }
    // console.log(body)
    // return {
    //     message: "User created"
    // }
}