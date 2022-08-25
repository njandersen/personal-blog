import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from "react-hot-toast";

export default function EnterPage({}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Toast notifications
  const notifyLogin = () => toast.success("Success! Logged In.");
  const notifyLogout = () => toast.success("Success! Logged Out");
  const notifyInvalid = () => toast.error("Sorry You Dont Have Access.");

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/");
        console.log("logged in");
        notifyLogin();
      })
      .catch((error) => {
        notifyInvalid();
        console.log(error);
      });
  };

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("User Signed Out");
      router.push("/");
      notifyLogout();
    });
  };

  return (
    <main className="login-page">
      <h1 className="login-greeting">
        Hello, this login page is for the owner of this blog only.
      </h1>
      <div className="card login-card">
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
          <br></br>
          <button className="login-btn signInBtn" type="submit">
            Sign In
          </button>
        </form>
      </div>
      <button className="login-btn signOutBtn" onClick={userSignOut}>
        Sign Out
      </button>
    </main>
  );
}
