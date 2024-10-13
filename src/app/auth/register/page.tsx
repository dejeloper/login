"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/navigation";

interface FormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    criteriaMode: "all",
  });

  const router = useRouter();

  const onSubmit = async (data: FormInputs) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });

    if (res.ok) {
      router.push("/auth/login");
    } else {
      const json = await res.json();
      console.error({ json });
    }
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/4">
        <h1 className="text-4xl font-bold text-slate-200 mb-4">Register</h1>

        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username:
        </label>
        <input
          id="username"
          type="text"
          autoComplete="username"
          placeholder="pepito"
          aria-invalid={errors.username ? "true" : "false"}
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long",
            },
            maxLength: {
              value: 20,
              message: "Username cannot exceed 20 characters",
            },
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

        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="pepito@email.com"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <ErrorMessage
          errors={errors}
          name="email"
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
          autoComplete="new-password"
          placeholder="********"
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
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

        <label
          htmlFor="confirmPassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password:
        </label>
        <input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="********"
          aria-invalid={errors.confirmPassword ? "true" : "false"}
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value, formValues) =>
              value === formValues?.password || "Passwords do not match",
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <ErrorMessage
          errors={errors}
          name="confirmPassword"
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
          Register
        </button>
      </form>
    </div>
  );
}
