import queryString from 'query-string';
import type { LastfmArtist } from '@/app/types/lastfm';

export const fetchLastfmData = async (): Promise<LastfmArtist[]> => {
  try {
    const params = queryString.stringify({
      method: 'user.getTopArtists',
      user: process.env.LASTFM_USER,
      api_key: process.env.LASTFM_KEY,
      period: '1month',
      format: 'json',
    });

    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?${params}`);

    const data = await response.json();

    return data.topartists.artist.splice(0, 5);
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch Last.fm data.');
  }
};
