import React, { useEffect, useRef } from "react";
import useFetch from "./hooks/useFetch";
import URLs from "./utils/URLs";
import useUser from "./hooks/useUser";

const App = () => {
  // const [response, error, loading] = useFetch(URLs.userss);
  const [users, loading] = useUser();
  useEffect(() => {
    if (!loading) console.log(users, loading);
  }, [users, loading]);
  return <div>App</div>;
};

export default App;
