import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://mossy82:${process.env.DB_PASS}@cluster0.e79y2.mongodb.net/contactmessages?retryWrites=true&w=majority`
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  return result;
}
