import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function EnterPage({}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/");
        console.log("logged in");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("User Signed Out");
    });
  };

  return (
    <main>
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <button onClick={userSignOut}>Sign Out</button>
      </div>
    </main>
  );
}
