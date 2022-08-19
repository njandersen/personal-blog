import Link from "next/link";
import toast from "react-hot-toast";

export default function Navbar() {
  const user = null;
  const username = null;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button
              className="btn feedBtn"
              onClick={() => toast.success("Feed Clicked!")}
            >
              FEED
            </button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <button className="btn aboutBtn">About</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
