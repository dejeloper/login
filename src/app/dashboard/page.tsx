"use client";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-slate-200 mb-4">Dashboard</h1>
      <button
        className="bg-blue-500 text-white px-12 py-2 rounded-lg mt-4"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </section>
  );
}
