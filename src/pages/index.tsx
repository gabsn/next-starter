import React, { useEffect, useState } from "react";
import { H1 } from "@/components/H1";
import useFetch from "use-http";

const Home: React.FC = () => {
  const [userAgent, setUserAgent] = useState(null);
  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  const { data } = useFetch("/api/ip", {}, []);

  return (
    <>
      <H1>Welcome</H1>
      <h2>Your user agent:</h2>
      <p>{userAgent}</p>
      <h2>Your ip:</h2>
      <p>{data?.ip}</p>
      <style jsx>
        {`
          h2 {
            padding: 32px;
          }
          p {
            padding: 16px;
          }
        `}
      </style>
    </>
  );
};

export default Home;
