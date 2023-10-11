import { AlbumType, AudioBookType } from "./types";

export const mapAlbumsListFromApiToVm = (albums): AlbumType[] =>
  albums.map((album) => ({
    id: album.id,
    title: album.name,
    artistName: album.artists[0].name,
    releaseDate: album.release_date,
    cover: album.images[0].url,
  }));

export const mapAudioBooksListFromApiToVm = (audioBooks): AudioBookType[] =>
  audioBooks.map((audioBook) => ({
    id: audioBook.id,
    name: audioBook.name,
    cover: audioBook.images[0].url,
    url: audioBook.external_urls.spotify,
    authors: audioBook.authors.map((author) => author.name),
  }));
