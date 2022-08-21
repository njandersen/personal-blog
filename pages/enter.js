import { async } from "@firebase/util";
import { auth, googleAuthProvider } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function EnterPage({}) {
  const user = null;
  const username = null;

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// Sign in with google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      Sign In With Google
    </button>
  );
}

// Sign out Button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
