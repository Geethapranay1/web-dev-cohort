import Image from "next/image";
import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

import client from "@/db";
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();

async function getUsersDetails() {
  // await new Promise(r => setTimeout(r, 2000))
  // try{
  //   const response  = await axios.get("http://localhost:3000/api/user");
  // return response.data
  // }catch(e){
  //   console.log(e)
  // }
  const user = await client.user.findFirst();
  if (!user) {
    return {
      username: "Unknown",
      password: "Unknown",
    };
  }
  return {
    username: user.username,
    password: user.password,
  };  
  }




//async component
export default async function Home() {
  const userDetails = await getUsersDetails();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col border-2 p-4 bg-orange-200 rounded">
        <div>Name :{userDetails.username}</div>
        <div>{userDetails.password}</div>
      </div>
    </div>
  
  );
}
