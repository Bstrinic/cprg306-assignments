"use client"

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context"

export default function ProtectedPage() {
    const [user] = useUserAuth();

    if (!user) {
        return(
            <main>
                <h1>You are not logged in</h1>
                <Link href="/week-9/">Go to homepage</Link>
            </main>
        )
    }

    return(
        <main>
            <h1>Restricted Access</h1>
        </main>
    );
}