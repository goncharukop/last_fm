import { request } from './api';

export async function getTopTracks() {
  const result = await request('geo.gettoptracks&country=ukraine&api_key=');

  return result.tracks.track;
}
