import type { StravaAccessTokenResponse, StravaActivity } from '@/app/types/strava';

const NUM_STRAVA_ACTIVITIES = 5;

export const fetchStravaData = async (): Promise<StravaActivity[]> => {
  try {
    const { access_token: accessToken } = await fetchStravaAccessToken();

    const params = new URLSearchParams({
      access_token: accessToken,
      per_page: NUM_STRAVA_ACTIVITIES.toString(),
    });

    const response = await fetch(`https://www.strava.com/api/v3/athlete/activities?${params.toString()}`);

    return await response.json();
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch Strava data.');
  }
};

const fetchStravaAccessToken = async (): Promise<StravaAccessTokenResponse> => {
  try {
    const body = JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    });

    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body,
    });

    return await response.json();
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch Strava access token.');
  }
};
