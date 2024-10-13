"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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
    <div className="h-[calc(100vh-7rem)] w-full flex flex-col items-center justify-center">
      <section className="bg-gray-50 dark:bg-gray-900 w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h2 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Register
          </h2>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                Create an account
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
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
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email format",
                      },
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                        value === formValues?.password ||
                        "Passwords do not match",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                </div>

                <Button
                  variant={"primary"}
                  type="submit"
                  className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Register
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
