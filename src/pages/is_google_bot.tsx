import { useEffect, useState } from "react";
import useFetch from "use-http";

const IsGoogle = () => {
  const [userAgent, setUserAgent] = useState(null);
  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);
  const { data } = useFetch("/api/ip", {}, []);
  if (!userAgent || !data) return null;
  return (
    <div>
      <p>
        {userAgent.includes("Googlebot")
          ? `User agent ${userAgent} from Googlebot`
          : `User agent ${userAgent} not from Googlebot`}
      </p>
      <p>
        {data.isGoogleIp
          ? `${data.ip} is from Google`
          : `${data.ip} ip is not from Google`}
      </p>
      <p>{`Hostnames: ${data.hostnames}`}</p>
    </div>
  );
};

export default IsGoogle;
