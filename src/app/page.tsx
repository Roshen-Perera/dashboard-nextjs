// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
// Update the import path to the correct location of authOptions
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Home from "./dashboard/page";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return <Home />;
}
