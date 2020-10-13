import { useEffect, useState } from "react";

const IsGoogle = () => {
  const [userAgent, setUserAgent] = useState(null);
  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);
  if (!userAgent) return null;
  return (
    <div>
      {userAgent.includes("Googlebot") ? "Hello Googlebot" : "Hello Human"}
    </div>
  );
};

export default IsGoogle;
