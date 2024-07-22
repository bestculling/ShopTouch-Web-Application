import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const data = await Product.find();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Error fetching products:", error);
        return NextResponse.json({
            error: error.message || "Unknown error",
            msg: "Something went wrong"
        }, { status: 400 });
    }
}
