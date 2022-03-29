import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to MongoDB." });
    return;
  }
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res
        .status(422)
        .json({ message: "Please fill out the form with valid values." });

      client.close();
      return;
    }

    // Store it in a database
    const newMessage = { email, name, message };

    let result;

    try {
      result = await insertDocument(client, "contactmessages", newMessage);
      res.status(201).json({
        message: "Successfully added message to the database",
      });
    } catch (error) {
      res.status(500).json({ message: "Unable to add message." });
    }
  }
}

export default handler;
