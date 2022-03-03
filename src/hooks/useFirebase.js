import { useState } from "react";
import initializeFirebase from "../pages/Firebase/firebaseInitialize";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});

  return {};
};

export default useFirebase;
