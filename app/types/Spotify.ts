export type SpotifyAccessTokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type SpotifyArtist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type SpotifyArtistsTopResponse = {
  href: string;
  items: SpotifyArtist[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
};
