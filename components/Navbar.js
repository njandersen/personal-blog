import Link from "next/link";
import toast from "react-hot-toast";

export default function Navbar() {
  const user = null;
  const username = null;

  return (
    <nav className="navbar">
      <ul>
        <li className="liFeed">
          <Link href="/">
            <button
              className="btn feedBtn"
              onClick={() => toast.success("Feed Clicked!")}
            >
              FEED
            </button>
          </Link>
        </li>
        <li className="liRight liAbout">
          <Link href="/about">
            <button className="btn aboutBtn">About</button>
          </Link>
        </li>
        <li className="liRight liContact">
          <Link href="">
            <button className="btn contactBtn">Contact</button>
          </Link>
        </li>
        <li className="liRight liLogin">
          <Link href="/enter">
            <button className="btn loginBtn">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
