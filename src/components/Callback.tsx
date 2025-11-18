import { useEffect, useState } from "react";
import Playlists from "./Playlists";
import Loading from "./Loading/Loading";
import Landing from "./Landing";

export default function Callback() {
  const apiKey = import.meta.env.VITE_FRONTEND_API_KEY;
  const api = import.meta.env.VITE_BACKEND_URL;
  const params = new URLSearchParams(window.location.search);

  const [showLanding, setShowLanding] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [expireSecs, setExpireSecs] = useState(0);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [scope, setScope] = useState("");

  const code = params.get("code");
  const state = params.get("state");

  useEffect(() => {
    if (!code || !state) return;

    (async () => {
      try {
        const res = await fetch(`${api}/api/auth/exchange`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Frontend-Api-Key": apiKey,
          },
          body: JSON.stringify({ code, state }),
        });

        const data = await res.json();
        console.log("Tokens:", data);

        setAccessToken(data.access_token);
        setRefreshToken(data.refresh_token);
        setScope(data.scope);
        setExpireSecs(data.expires_in);

        setProcessed(true);
      } catch {
        console.log("Exchange failed");
      }
    })();
  }, []);

  if (showLanding) {
    return <Landing />;
  }

  return (
    <div>
      {!processed ? (
        <Loading />
      ) : (
        <Playlists
          accessToken={accessToken}
          refreshToken={refreshToken}
          scope={scope}
          expireSecs={expireSecs}
          onGoHome={() => setShowLanding(true)}
        />
      )}
    </div>
  );
}
