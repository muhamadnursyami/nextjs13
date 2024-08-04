import { NextRequest, NextResponse } from "next/server";
const data = [
    {
        id :1,
        title :"Sepatu",
        price : 100000
    },
    {
        id :2,
        title :"T-shirt",
        price : 200000
    }
]
export async function GET(request: NextRequest){

    // Ngambil id dari request :NextRequest
    const {searchParams}= new URL(request.url);
    const id = searchParams.get("id");
    // Jika ada id yang dikirim
    if(id) {
        const detailProduct = data.find((item) =>item.id === Number(id));
        
        // Jika ada Data
        if(detailProduct){
            return NextResponse.json({
                status: 200,
                message:"Success",
                data :detailProduct
            })
        }
    
        // Jika tidak ada datanya
        return NextResponse.json({
            status:404,
            message :"Not Found",
            data :{}
        })

    }

    return NextResponse.json({ status : 200, message :"Succes",data:data})
}