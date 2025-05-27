import { MongoClient } from 'mongodb';

// Replace these with your actual environment variable names or hardcoded strings (for now)
const uri = process.env.MONGODB_URI;
const dbName = 'Blogs'; // Your database name

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function GET(request, { params }) {
  try {
    const { blog } = params; // e.g. 'prat'
    console.log('Fetching blog:', blog);

    const { db } = await connectToDatabase();

    const data = await db.collection('Blog').findOne({ title: blog });

    if (!data) {
      return new Response(JSON.stringify({ error: 'Blog not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    data._id = data._id.toString(); // convert ObjectId to string if needed

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
