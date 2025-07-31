// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
// Update the import path to the correct location of authOptions
import { authOptions } from "@/lib/auth"; // ✅ use alias or relative path
import { redirect } from "next/navigation";
import Home from "./home";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return <Home />;
}
