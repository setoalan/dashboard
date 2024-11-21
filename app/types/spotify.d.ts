export type SpotifyAccessTokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type SpotifyArtist = {
  id: string;
  name: string;
};
