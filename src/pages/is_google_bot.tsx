import { useEffect, useState } from "react";
import useFetch from "use-http";

const IsGoogle = () => {
  const { isGoogle, reason } = useGoogleBot();
  return (
    <div>
      <p>{isGoogle ? "You are Google." : "You are not Google."}</p>
      <p>Verification method: {reason}</p>
    </div>
  );
};

export default IsGoogle;

const useGoogleBot = () => {
  const [userAgent, setUserAgent] = useState(null);

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  const { loading, data } = useFetch("/api/ip", {}, []);

  if (!userAgent) {
    return { isGoogle: false, reason: "No User-Agent" };
  }

  if (loading || !data) {
    return {
      isGoogle: userAgent.includes("Googlebot"),
      reason: "User-Agent",
    };
  }

  return { isGoogle: data.isGoogleIp, reason: "Reverse DNS lookup" };
};
