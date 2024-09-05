import React, { useEffect, useRef } from "react";
import useFetch from "./hooks/useFetch";
import URLs from "./utils/URLs";
import useUser from "./hooks/useUser";
import Home from "./pages/Home";

const App = () => {
  // const [response, error, loading] = useFetch(URLs.userss);
  const [users, loading] = useUser();
  // useEffect(() => {
  //   if (!loading) console.log(users, loading);
  // }, [users, loading]);
  return <Home users={users} loading={loading} />;
};

export default App;
