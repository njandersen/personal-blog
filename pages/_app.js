import Navbar from "../components/Navbar";
import "../styles/global.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../lib/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </AuthProvider>
    </>
  );
}
