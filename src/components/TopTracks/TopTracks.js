import React, { useState } from 'react';
import { getTopTracks } from '../../api/tracks';
import './TopTracks.scss';

export const TopTracks = () => {
  const [top, setTop] = useState([]);

  const topTracks = async() => {
    setTop(await getTopTracks());

    // eslint-disable-next-line no-console
    console.log(top);
  };

  return (
    <>
      <button
        type="button"
        onClick={topTracks}
      >
        Show top tracks
      </button>
      <ul>
        {
          top.map(track => (
            <tr key={track.url}>
              <td>{track.name}</td>
              <td>{track.artist.name}</td>
            </tr>
          ))
        }
      </ul>
    </>
  );
};
