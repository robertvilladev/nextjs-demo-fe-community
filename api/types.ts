export type AlbumType = {
  id: string;
  title: string;
  artistName: string;
  releaseDate: string;
  cover: string;
};

export type AudioBookType = {
  id: string;
  url: string;
  name: string;
  cover: string;
  authors: string[];
};

export type FullAlbumType = AlbumType & {
  totalTracks: number;
  tracks: TrackType[];
};

export type TrackType = {
  id: string;
  title: string;
  duration: number;
};
