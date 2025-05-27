import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("Blogs");
  const collection = db.collection("Blog");

  const doc = await collection.findOne({ title: body.title });

  if (doc) {
    return NextResponse.json({
      success: false,
      error: true,
      message: 'This Title already exists',
      result: null
    });
  }

  const result = await collection.insertOne(body);

  return NextResponse.json({
    success: true,
    error: false,
    message: 'Your Blog has been Published',
    result: result
  });
}

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db("Blogs");
  const collection = db.collection("Blog");

  const blogs = await collection.find().toArray();

  // console.log(blogs);
  
  return NextResponse.json(blogs);
}