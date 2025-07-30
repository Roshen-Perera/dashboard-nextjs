// File: app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // ✅ use alias or relative path

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
