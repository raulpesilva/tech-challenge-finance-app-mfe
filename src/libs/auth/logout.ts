import { cookies } from "next/headers";

export async function logout() {
  // Destroy the session
  (await cookies()).set('session', '', { expires: new Date(0) });
}