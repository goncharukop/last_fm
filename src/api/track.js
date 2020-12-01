import { request } from './api';

export async function getTrack(title) {
  const result = await request(`track.search&track=${title}&api_key=`);

  return result.results.trackmatches.track;
}
