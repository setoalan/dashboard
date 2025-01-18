export type LastfmArtist = {
  '@attr': {
    rank: string;
  };
  image: LastfmImage[];
  mbid: string;
  name: string;
  playcount: string;
  streamable: string;
  url: string;
};

export type LastfmImage = {
  '#text': string;
  size: string;
};
