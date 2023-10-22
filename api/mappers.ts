import { AlbumType, AudioBookType, FullAlbumType } from "@api/types";
import { parseDuration } from "@api/utils";

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

export const mapFullAlbumFromApiToVm = (album): FullAlbumType => ({
  id: album.id,
  title: album.name,
  artistName: album.artists[0].name,
  releaseDate: album.release_date,
  cover: album.images[0].url || album.images[1].url,
  totalTracks: album.total_tracks,
  tracks: album.tracks.items.map((track) => ({
    id: track.id,
    title: track.name,
    duration: parseDuration(track.duration_ms),
  })),
});
