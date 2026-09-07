"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function PortalLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError("Unable to sign in with those credentials.");
      setIsLoading(false);
      return;
    }

    const next = new URLSearchParams(window.location.search).get("next");

    const destination =
      next && next.startsWith("/") && !next.startsWith("//")
        ? next
        : "/portal";

    router.replace(destination);
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#F8FAFE] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
              DYNAVA CLIENT PORTAL
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Sign in to your account.
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Access your organization, AI readiness assessment, results, and
              documents securely.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-800"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-base text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-[#126BFF]"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-800"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-base text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-[#126BFF]"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="text-sm leading-6 text-red-600"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="group flex w-full items-center justify-between border border-[#126BFF] px-5 py-4 text-sm font-medium text-slate-950 transition-colors hover:border-[#00B889] hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{isLoading ? "Signing in..." : "Sign in"}</span>

              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#126BFF] text-[#126BFF] transition-colors group-hover:border-[#00B889] group-hover:text-[#00B889]"
              >
                →
              </span>
            </button>
          </form>

          <p className="mt-8 text-sm leading-6 text-slate-500">
            Client access is provided by invitation. If you need access to the
            Dynava portal, please contact your Dynava representative.
          </p>
        </div>
      </div>
    </main>
  );
}