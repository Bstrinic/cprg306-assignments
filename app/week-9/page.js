import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const userAuth = useUserAuth();
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <div>
        <h1>Shopping List App</h1>
        {!user ? (
          <button onClick={handleSignIn}>Sign in with GitHub</button>
        ) : (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleSignOut}>Sign Out</button>
            <Link to="/shopping-list">Go to Shopping List</Link>
          </div>
        )}
      </div>
    </main>
  );
}
