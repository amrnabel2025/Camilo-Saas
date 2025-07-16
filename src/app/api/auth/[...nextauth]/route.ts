import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest } from "next/server";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export const GET: (req: NextRequest) => ReturnType<typeof handler> = handler;
export const POST: (req: NextRequest) => ReturnType<typeof handler> = handler;
