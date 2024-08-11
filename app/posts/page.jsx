import React from "react";
import Link from "next/link";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

export const metadata = {
  title: "Posts | Abhay Posts Media",
  description: "All Posts by Users of Abhay Posts Media",
};

const Page = async () => {
  // Create a query to fetch all posts, ordered by 'createdAt' field in descending order
  const q = query(collection(db, "Posts"), orderBy("createdAt", "desc"));

  // Fetch the posts from Firestore
  const querySnapshot = await getDocs(q);
  const posts = [];

  querySnapshot.forEach((doc) => {
    // Push each post data along with its ID into the posts array
    posts.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  // Simulate a delay (if needed for any reason)
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return (
    <>
      <h1 className="text-center font-bold text-4xl mb-3">
        All Posts By Users
      </h1>
      <ul className="list-none p-0">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li className="p-4 border-b" key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(post.createdAt?.toDate()).toLocaleDateString()} by-
                  {post.author}
                </p>
              </Link>
            </li>
          ))
        ) : (
          <li className="p-4">No posts available.</li>
        )}
      </ul>
    </>
  );
};

export default Page;
