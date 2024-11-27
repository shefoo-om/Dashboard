// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";
// import { decrypt } from "./app/(Auth)/_Authentication/formLogIn/lib/sesions";

// const protectedRoutes = ["/dashboard"];
// const publicRoutes = ["/sign-in"];

// export default async function middleware(req: NextRequest) {
//     const path = req.nextUrl.pathname;
//     const isProtectedRoute = protectedRoutes.includes(path);
//     const isPublicRoute = publicRoutes.includes(path);

//     const cookie = (await cookies()).get("session")?.value;
//     const session = await decrypt(cookie);

//     if (isProtectedRoute && !session?.userId) {
//         return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
//     }

//     if (isPublicRoute && session?.userId) {
//         return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
//     }

//     return NextResponse.next();
// }

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/(Auth)/_Authentication/formLogIn/lib/sesions";

const protectedRoutes = ["/dashboard","/profile","/tables","/billing"];
const publicRoutes = ["/sign-in"];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = (await cookies()).get("session")?.value;

    if (!cookie) {
        // Redirect to login if no session and trying to access a protected route
        if (isProtectedRoute) {
            return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
        }
        return NextResponse.next();
    }

    const session = await decrypt(cookie);

    if (!session) {
        // Clear invalid session cookie and redirect
        (await cookies()).delete("session");
        if (isProtectedRoute) {
            return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
        }
        return NextResponse.next();
    }

    // Check session expiration
    const sessionExpired = new Date(session.expiresAt) < new Date();
    if (sessionExpired) {
        // Delete the session and redirect to the login page
        (await cookies()).delete("session");
        return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
    }

    // Redirect authenticated users away from public routes
    if (isPublicRoute && session.userId) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }

    return NextResponse.next();
}
