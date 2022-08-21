import Link from "next/link";
import toast from "react-hot-toast";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const user = null;
  const username = null;

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.liFeed}>
          <Link href="/">
            <button
              className={styles.feedBtn}
              onClick={() => toast.success("Feed Clicked!")}
            >
              FEED
            </button>
          </Link>
        </li>
        <li className={styles.liCreate}>
          <Link href="/create">
            <button className={styles.createBtn}>Create Post</button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <button className={styles.aboutBtn}>About</button>
          </Link>
        </li>
        <li>
          <Link href="">
            <button className={styles.contactBtn}>Contact</button>
          </Link>
        </li>
        <li>
          <Link href="/enter">
            <button className={styles.loginBtn}>Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
