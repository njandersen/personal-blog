import Link from "next/link";
import Layout from "../components/layout";

export default function aboutPantry() {
  return (
    <main className="about-container">
      <h1 className="greeting">Hello There, </h1>
      <p className="bio">
        My name is Nicholas Jordan Andersen, I am a software engineering student
        focusing on full stack web development. I made this site with Next.js
        and firebase.
      </p>
      <h2 className="backBtn">
        <Link href="/">Back Home</Link>
      </h2>
    </main>
  );
}
