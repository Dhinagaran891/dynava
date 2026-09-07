import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

export async function proxy(request: NextRequest) {
  const supabaseResponse = await updateSession(request);
  const pathname = request.nextUrl.pathname;

  if (pathname === "/portal/login") {
    return supabaseResponse;
  }

  if (pathname === "/portal" || pathname.startsWith("/portal/")) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll() {
            // Session cookies are handled by updateSession().
          },
        },
      }
    );

    const result = await supabase.auth.getClaims();

    if (result.error || !result.data?.claims) {
      const loginUrl = request.nextUrl.clone();

      loginUrl.pathname = "/portal/login";
      loginUrl.searchParams.set("next", pathname);

      return NextResponse.redirect(loginUrl);
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};