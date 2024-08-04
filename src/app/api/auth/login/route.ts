
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    const req = await request.json();
    console.log(req);
    console.log(request);
    return NextResponse.json({
        status: 200,
        message :"Success",

    })
}