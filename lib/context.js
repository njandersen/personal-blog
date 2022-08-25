import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext({
  authUser: null,
  loading: true,
});

export const AuthProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoading(false);
      if (user) {
        setUser({
          email: user.email,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  });

  return (
    <AuthContext.Provider value={{ user, userLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
