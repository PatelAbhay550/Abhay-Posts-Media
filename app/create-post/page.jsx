import CreatePosts from "@/actions/actions";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import React from "react";

const CreatePost = async () => {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/create-post");
    return null;
  }
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <form action={CreatePosts} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter the title of your post"
            required
          />
        </div>
        <div>
          <label
            htmlFor="body"
            className="block text-gray-700 font-medium mb-2"
          >
            Body
          </label>
          <textarea
            id="body"
            name="body"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Write your post here"
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-md font-semibold shadow-md transition-all"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
