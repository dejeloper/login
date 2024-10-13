"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface FormInputs {
  username: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    criteriaMode: "all",
  });

  const router = useRouter();
  const [error, setError] = useState<string>("");

  const onSubmit = async (data: FormInputs) => {
    setError("");
    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (!res) {
      setError("Failed to login");
      return;
    }

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/4">
        <h1 className="text-4xl font-bold text-slate-200 mb-4 text-center">
          Login
        </h1>

        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username:
        </label>
        <input
          id="username"
          type="text"
          autoComplete="username webauthn"
          placeholder="pepito"
          aria-invalid={errors.username ? "true" : "false"}
          {...register("username", {
            required: "Username is required",
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <span className="text-red-500 text-sm" key={type}>
                {message}
              </span>
            ))
          }
        />

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="********"
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", {
            required: "Password is required",
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <span className="text-red-500 text-sm" key={type}>
                {message}
              </span>
            ))
          }
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
        >
          Login
        </button>

        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mt-8 text-center">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
