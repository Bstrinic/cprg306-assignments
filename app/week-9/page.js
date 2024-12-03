"use client"

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  // Sign out of Firebase
  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  // Displaying user information
  return (
    <main>
      <div>
        <h1>Shopping List App</h1>
        {!user ? (
          <button onClick={handleSignIn}>Sign in with GitHub</button>
        ) : (
          <div>
            <p>
              Signed in as {user.displayName} ({user.email})
            </p>
            <button onClick={handleSignOut}>Sign Out</button>
            <Link href="/week-9/shopping-list/">Continue to your shopping list</Link>
          </div>
        )}
      </div>
    </main>
  );
}
