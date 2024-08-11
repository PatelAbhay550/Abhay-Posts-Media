// pages/api/auth/callback.js

import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
// Adjust import based on your setup

export const GET = handleAuth(async (req, res) => {
  try {
    const user = req.user; // Assumed from Kinde Auth
    console.log("Authenticated user:", user);

    // Proceed with Kinde Auth handling
    return handleAuth(req, res);
  } catch (error) {
    console.error("Error handling auth callback:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
