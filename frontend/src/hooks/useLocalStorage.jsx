import { useEffect, useState } from "react";

function useLocalStorage() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    // console.log(token);
  }, [token]);

  return { token };
}

export default useLocalStorage;
