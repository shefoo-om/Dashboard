// import "server-only";
// import { SignJWT, jwtVerify } from "jose";
// import { cookies } from "next/headers";

// const secretKey = process.env.SESSION_SECRET;
// const encodedKey = new TextEncoder().encode(secretKey);

// export async function createSession(userId: string) {
//     const expiresAt = new Date(Date.now() +  3000).toISOString(); // 5 minutes
//     const session = await encrypt({ userId, expiresAt });

//     (await cookies()).set("session", session, {
//         httpOnly: true,
//         secure: true,
//         expires: new Date(expiresAt),
//     });
// }
// export async function deleteSession() {
//     (await cookies()).delete("session");
// }

// type SessionPayload = {
//     userId: string;
//     expiresAt: string;
// };

// export async function encrypt(payload: SessionPayload) {
//     const expiresAt = Math.floor(new Date(payload.expiresAt).getTime() / 1000); 

//     return new SignJWT({ userId: payload.userId }) 
//         .setProtectedHeader({ alg: "HS256" })
//         .setIssuedAt()
//         .setExpirationTime(expiresAt) 
//         .sign(encodedKey);
// }


// export async function decrypt(session: string | undefined = ""): Promise<SessionPayload | null> {
//     try {
//         const { payload } = await jwtVerify(session, encodedKey, {
//             algorithms: ["HS256"],
//         });
//         return payload as SessionPayload;
//     } catch (error) {
//         console.log("Failed to verify session: ", error);
//         return null; 
//     }
// }

import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() +  5 * 60 * 1000).toISOString(); // 5 minutes
    const session = await encrypt({ userId, expiresAt });

    (await cookies()).set("session", session, {
        httpOnly: true,
        secure: true,
        expires: new Date(expiresAt),
    });
}

export async function deleteSession() {
    // Clear session cookie
    (await cookies()).delete("session");
}

type SessionPayload = {
    userId: string;
    expiresAt: string;
};

export async function encrypt(payload: SessionPayload) {
    const expiresAt = Math.floor(new Date(payload.expiresAt).getTime() / 1000); // Convert expiration time to seconds

    return new SignJWT({ userId: payload.userId }) // Add userId to JWT payload
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expiresAt) // Set expiration time
        .sign(encodedKey);
}

export async function decrypt(session: string | undefined = ""): Promise<SessionPayload | null> {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload as SessionPayload;
    } catch (error) {
        if (error instanceof Error) { // Check if error is an instance of Error
            if (error.message.includes("JWTExpired")) {
                console.log("Session expired:", error.message);
            } else {
                console.log("Failed to verify session:", error.message);
            }
        } else {
            console.log("Unknown error occurred during session decryption");
        }
        return null;
    }
}
