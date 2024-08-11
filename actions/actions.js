"use server";
import { redirect } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase-config";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const CreatePosts = async (formData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const title = formData.get("title") || "Untitled";
  const body = formData.get("body") || "No content";

  // Add the document to the Firestore collection with a timestamp
  const docRef = await addDoc(collection(db, "Posts"), {
    author: user.given_name,
    title: title,
    body: body,
    upVotes: 0,
    createdAt: serverTimestamp(),
    upvotedIds: [],
  });

  const userRef = await addDoc(collection(db, "Users"), {
    username: user.given_name,
    useremail: user.email,
  });

  // Redirect after successful post creation
  redirect("/");
};

export default CreatePosts;
