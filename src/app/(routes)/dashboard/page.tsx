"use client";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex flex-col items-center justify-center">
      <h1 className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
        Dashboard
      </h1>
      <button
        className="bg-blue-500 text-white px-12 py-2 rounded-lg mt-4"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </section>
  );
}
