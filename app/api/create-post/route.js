// pages/api/create-post.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, body } = req.body;

    // Process the data here
    console.log("Title:", title);
    console.log("Body:", body);

    // Respond with success
    res.status(200).json({ message: "Post created successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
