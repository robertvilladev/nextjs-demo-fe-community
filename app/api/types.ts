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
