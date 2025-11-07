"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>Welcome to NextAuth GitHub Demo</h1>
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Welcome, {session.user.name}</h1>
      <img
        src={session.user.image}
        alt="Profile"
        width={80}
        style={{ borderRadius: "50%" }}
      />
      <p>{session.user.email}</p>
      <Link href="/dashboard">Go to Dashboard</Link><br /><br />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
