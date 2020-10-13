import React, { useEffect, useState } from "react";
import { H1 } from "@/components/H1";

const Home: React.FC = () => {
  const [userAgent, setUserAgent] = useState(null);
  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);
  return (
    <>
      <H1>Your User Agent</H1>
      <p>{userAgent}</p>
      <style jsx>
        {`
          p {
            padding: 64px 32px;
          }
        `}
      </style>
    </>
  );
};

export default Home;
