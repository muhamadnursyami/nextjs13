import { NextRequest, NextResponse } from "next/server";
const data = [
    {
        id :1,
        title :"Sepatu",
        price : 100000,
        image :"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cd5b8e1d-7009-4a05-9747-1197519c010c/AIR+ZOOM+PEGASUS+41+OLY.png"
    },
    {
        id :2,
        title :"T-shirt",
        price : 200000,
        image :"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/511fab04-08fb-4596-8b9d-034afe814f3e/AIR+ZOOM+PEGASUS+41+OLY.png"
    },
    {
        id :3,
        title :"Short",
        price : 5600000,
        image :"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9ec37ba3-7657-4968-af8a-ff8adebf2131/AIR+ZOOM+PEGASUS+41+OLY.png"
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