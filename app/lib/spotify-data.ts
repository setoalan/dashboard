import queryString from 'query-string';
import type { SpotifyAccessTokenResponse, SpotifyArtist } from '@/app/types/spotify';

const NUM_SPOTIFY_ARTISTS = 5;

export const fetchSpotifyData = async (): Promise<SpotifyArtist[]> => {
  try {
    const { access_token: accessToken } = await fetchSpotifyRefreshToken();

    const params = queryString.stringify({
      limit: NUM_SPOTIFY_ARTISTS.toString(),
    });

    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?${params}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch Spotify data.');
  }
};

const fetchSpotifyRefreshToken = async (): Promise<SpotifyAccessTokenResponse> => {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

    const params = queryString.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    });

    const response = await fetch(`https://accounts.spotify.com/api/token?${params}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
      },
    });

    return await response.json();
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch Spotify refresh token.');
  }
};
