import { AlbumType } from "./types";

export const mapAlbumsListFromApiToVm = (albums): AlbumType[] =>
  albums.map((album) => ({
    id: album.id,
    title: album.name,
    artistName: album.artists[0].name,
    releaseDate: album.release_date,
    cover: album.images[0].url,
  }));
