import Link from "next/link";
import Layout from "../components/layout";

export default function aboutPantry() {
  return (
    <>
      <h1 className="greeting">Hello There, </h1>
      <p className="bio">My name is Nicholas Jordan Andersen</p>
      <h2 className="backBtn">
        <Link href="/">Back Home</Link>
      </h2>
    </>
  );
}
