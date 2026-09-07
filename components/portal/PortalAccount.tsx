"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface PortalAccountProps {
  email: string;
}

export default function PortalAccount({
  email,
}: PortalAccountProps) {
  const router = useRouter();
  const supabase = createClient();

  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleSignOut() {
    setIsSigningOut(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      setIsSigningOut(false);
      return;
    }

    router.replace("/portal/login");
    router.refresh();
  }

  return (
    <div className="border-t border-slate-200 pt-6">
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
        Account
      </p>

      <p className="truncate px-3 text-sm text-slate-600" title={email}>
        {email}
      </p>

      <button
        type="button"
        onClick={handleSignOut}
        disabled={isSigningOut}
        className="
          mt-4
          flex
          w-full
          items-center
          justify-between
          px-3
          py-2.5
          text-sm
          font-medium
          text-slate-600
          transition-colors
          hover:bg-slate-50
          hover:text-slate-950
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <span>{isSigningOut ? "Signing out..." : "Sign out"}</span>

        <span
          aria-hidden="true"
          className="text-slate-400 transition-transform"
        >
          →
        </span>
      </button>
    </div>
  );
}