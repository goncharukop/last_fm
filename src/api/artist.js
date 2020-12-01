import { request } from './api';

export async function getArtist(name) {
  const result = await request(`artist.getinfo&artist=${name}&api_key=`);

  return result.artist;
}
