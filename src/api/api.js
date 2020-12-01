const BASE_URL = 'http://ws.audioscrobbler.com/2.0/?method=';
const key = '269e56f769966f443e473d44204a9c98';

export async function request(url, options) {
  const response = await fetch(`${BASE_URL}${url}${key}&format=json`, options);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const result = await response.json();

  return result;
}
