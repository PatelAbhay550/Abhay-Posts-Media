import Image from "next/image";
import Link from "next/link";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  return (
    <main className="flex flex-col items-center justify-center text-gray-800">
      <div className="text-center mb-10 pt-10">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Abhay Posts Media
        </h1>
        <p className="text-lg mb-5 mt-6 text-center">
          Discover a world of content. <br /> View user-generated posts or
          create your own by <br /> signing up or logging in.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/posts">
            <p className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md shadow-md transition-all">
              View Posts
            </p>
          </Link>
          {isLoggedIn ? (
            <LogoutLink>
              <p className="px-6 py-3 border-yellow-500 border-2 text-slate-400 hover:bg-yellow-500 hover:text-white font-semibold rounded-md shadow-md transition-all">
                Logout
              </p>
            </LogoutLink>
          ) : (
            <>
              <RegisterLink>
                <p className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-md shadow-md transition-all">
                  Sign Up
                </p>
              </RegisterLink>
              <LoginLink>
                <p className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-md shadow-md transition-all">
                  Log In
                </p>
              </LoginLink>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
