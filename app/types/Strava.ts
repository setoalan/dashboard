import { StravaIcon } from '@/public/icons/strava';

export type StravaAccessTokenResponse = {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type: string;
};

export type StravaActivity = {
  id: number;
  name: string;
  type: StravaIcon;
  distance: number;
  moving_time: number;
  suffer_score: number;
};
