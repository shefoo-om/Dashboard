// src/lib/sessions.ts
import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 300 * 600 * 10000).toISOString(); // 30 minutes
    const session = await encrypt({ userId, expiresAt });

    (await cookies()).set("session", session, {
        httpOnly: true,
        secure: true,
        expires: new Date(expiresAt),
    });
}

export async function deleteSession() {
    (await cookies()).delete("session");
}

type SessionPayload = {
    userId: string;
    expiresAt: string;
};

export async function encrypt(payload: SessionPayload) {
    const expiresAt = Math.floor(new Date(payload.expiresAt).getTime() / 1000); // Convert expiration time to seconds

    return new SignJWT({ userId: payload.userId })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expiresAt)
        .sign(encodedKey);
}

export async function decrypt(session: string | undefined = ""): Promise<SessionPayload | null> {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload as SessionPayload;
    } catch (error) {
        console.error("Failed to verify session:", error);
        return null;
    }
}
