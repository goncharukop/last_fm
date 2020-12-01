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
      <table>
        <tbody>
          {
            top.map((track, i) => (
              <tr key={track.url}>
                <td>{`${i + 1})`}</td>
                <td>{track.name}</td>
                <td>{track.artist.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};
