import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-lg opacity-80">
            Sign in to continue using the system
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
