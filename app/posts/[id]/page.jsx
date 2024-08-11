import Upvotebtn from "@/components/Upvotebtn";
import { notFound } from "next/navigation";
import React from "react";
import { format } from "date-fns";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

const Page = async ({ params }) => {
  const postId = params.id; // Get the ID from the URL parameters

  // Fetch the single post based on the provided document ID
  const docRef = doc(db, "Posts", postId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return notFound();
  }

  const post = { id: docSnap.id, ...docSnap.data() };

  return (
    <main className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <h2 className="text-sm font-bold mb-4 text-gray-600">
        By: {post.author} At:{" "}
        {format(new Date(post.createdAt.seconds * 1000), "PPP")} at{" "}
        {format(new Date(post.createdAt.seconds * 1000), "p")}
      </h2>

      <p className="text-lg text-gray-700 mb-6">{post.body}</p>
      <Upvotebtn postId={postId} />
    </main>
  );
};

export default Page;

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const postId = params.id;

  // Fetch the single post based on the provided document ID
  const docRef = doc(db, "Posts", postId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return {
      title: "Post Not Found - Abhay Posts Media",
      description: "The post you are looking for does not exist.",
    };
  }

  const post = { id: docSnap.id, ...docSnap.data() };

  return {
    title: `${post.title} - Abhay Posts Media`,
    description: post.body.slice(0, 110) + "...", // Summary of the post content
  };
}
