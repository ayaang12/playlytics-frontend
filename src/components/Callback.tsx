import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Playlists from './Playlists';
import Loading from './Loading/Loading';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  scope: string;
  expireSecs: number;
}

export default function Callback() {
  const apiKey = import.meta.env.VITE_FRONTEND_API_KEY;
  const api = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);

  const [processed, setProcessed] = useState(false);
  const [expireSecs, setExpireSecs] = useState(0);
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [scope, setScope] = useState('');

  const code = params.get('code');
  const state = params.get('state');

  const exchanged = useRef(false);

  useEffect(() => {
    const saved = localStorage.getItem('spotifyTokens');
    const tokens: Tokens | null = saved ? JSON.parse(saved) : null;

    if (tokens?.accessToken) {
      console.log('tokens alr in localstorage:', tokens);
      setAccessToken(tokens.accessToken);
      setRefreshToken(tokens.refreshToken);
      setScope(tokens.scope);
      setExpireSecs(tokens.expireSecs);

      setProcessed(true);

      return;
    }

    if (exchanged.current) return;
    exchanged.current = true;

    if (!code || !state) return;

    // exchange code for auth token and refresh token and time till expiration and scope
    (async () => {
      try {
        const res = await fetch(`${api}/api/auth/exchange`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Frontend-Api-Key': apiKey,
          },
          body: JSON.stringify({ code, state }),
        });

        if (!res.ok) {
          console.error('Exchange failed');
          return;
        }
        const data = await res.json();
        console.log('Tokens:', data);

        const tokens: Tokens = {
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          scope: data.scope,
          expireSecs: data.expires_in,
        };

        console.log('tokens:', tokens);
        localStorage.setItem('spotifyTokens', JSON.stringify(tokens));

        setAccessToken(tokens.accessToken);
        setRefreshToken(tokens.refreshToken);
        setScope(tokens.scope);
        setExpireSecs(tokens.expireSecs);

        setProcessed(true);
      } catch {
        console.log('Exchange failed');
      }
    })();
  }, [api, apiKey, code, state]);

  return (
    <div>
      {!processed ? (
        <Loading />
      ) : (
        <Playlists
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          refreshToken={refreshToken}
          scope={scope}
          expireSecs={expireSecs}
          onGoHome={() => navigate('/')}
        />
      )}
    </div>
  );
}
