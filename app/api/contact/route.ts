import { cookies } from 'next/headers';
import axios from '../../_lib/api';
import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: Request) {
  // Do whatever you want
  return NextResponse.json({ message: "Welcome to Danol Partners" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(req: Request) {
try{
  const data = await req.json();
  

  return axios.post('/api/contacts', {data})
  .then(() => {
    return NextResponse.json({
        message: `Submitted successfully!`
      }, { status:200 });

  })
    .catch((error: { response: { data: { error: { message: any; }; }; }; }) => {
      console.log(error);
      if (!error.response.data.error.message) {
          return NextResponse.json({ message: 'Internal server error' }, { status:500 });
      } else {
        const messages = 'Failed to submit' || error.response.data.error.message;
        console.log(error.response.data.error.message)
          return NextResponse.json({ message: messages }, { status:400 });
      }
    });
  }
catch (e) {
  console.log(e)
    return NextResponse.json({ message: 'Internal server error' }, { status:500 });
  }
}