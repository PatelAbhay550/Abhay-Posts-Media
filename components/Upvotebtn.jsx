"use client";
import React, { useEffect, useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Upvotebtn = ({ postId }) => {
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    const fetchUpvotes = async () => {
      if (!user) return; // Ensure user is available

      const userId = `${user.given_name}-${user.email}`; // Create a unique user ID based on given name and email

      const docRef = doc(db, "Posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const post = docSnap.data();
        setUpvoteCount(post.upVotes || 0);
        setHasUpvoted(post.upvotedIds && post.upvotedIds.includes(userId));
      }
    };

    fetchUpvotes();
  }, [postId, user]);

  const handleUpvote = async () => {
    if (!user || hasUpvoted) return; // Prevent multiple upvotes and ensure user is available

    const userId = `${user.given_name}-${user.email}`; // Create a unique user ID based on given name and email

    const newUpvoteCount = upvoteCount + 1;
    setUpvoteCount(newUpvoteCount);
    setHasUpvoted(true);

    const docRef = doc(db, "Posts", postId);
    const postDoc = await getDoc(docRef);
    const postData = postDoc.data();
    const updatedUpvotedIds = [...(postData.upvotedIds || []), userId];

    await updateDoc(docRef, {
      upVotes: newUpvoteCount,
      upvotedIds: updatedUpvotedIds,
    });
  };

  return (
    <button
      onClick={handleUpvote}
      disabled={hasUpvoted}
      className={`flex items-center space-x-2 ${
        hasUpvoted
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-yellow-500 hover:bg-yellow-600"
      } text-white p-3 rounded-lg shadow-md transition-all transform ${
        hasUpvoted ? "" : "hover:scale-105"
      }`}
    >
      <BiSolidUpvote />
      <span className="font-semibold">{upvoteCount}</span>
      <span className="text-sm text-gray-100">Upvotes</span>
    </button>
  );
};

export default Upvotebtn;
