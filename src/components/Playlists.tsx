import React, { useEffect } from "react";

interface PlaylistsProps {
  expireSecs: number;
  accessToken: string;
  refreshToken: string;
  scope: string;
}

const Playlists: React.FC<PlaylistsProps> = ({
  expireSecs,
  accessToken,
  refreshToken,
  scope,
}) => {
  const [playlists, setPlaylists] = React.useState<Object[]>([]);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/playlists", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        // items.map((playlist: Object) => {
        //   setPlaylists([...playlists, playlist]);
        // });

        // console.log(playlists);
      });
  }, []);

  return <div>Playlists</div>;
};

export default Playlists;
