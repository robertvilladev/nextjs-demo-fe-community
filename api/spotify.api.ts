import {
  mapAlbumsListFromApiToVm,
  mapAudioBooksListFromApiToVm,
  mapFullAlbumFromApiToVm,
} from "./mappers";
import { API_SETTINGS, SPOTIFY_AUDIOBOOKS_IDS } from "./settings";

export const getSpotifyAccessToken = async (): Promise<string> => {
  const {
    clientId,
    clientSecret,
    endpoints: { spotifyToken },
  } = API_SETTINGS;

  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(spotifyToken, { method: "POST", headers, body });
  const data = await response.json();
  return data.access_token;
};

export const getNewReleases = async () => {
  const { spotifyNewReleases } = API_SETTINGS.endpoints;

  try {
    const token = await getSpotifyAccessToken();

    const headers = { Authorization: `Bearer ${token}` };
    const response = await fetch(spotifyNewReleases, { headers });
    const data = await response.json();

    return mapAlbumsListFromApiToVm(data.albums.items);
  } catch (error) {
    console.error(error);
  }
};

export const getAudioBooks = async () => {
  const { audioBooks } = API_SETTINGS.endpoints;

  try {
    const token = await getSpotifyAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    const url = `${audioBooks}?ids=${SPOTIFY_AUDIOBOOKS_IDS.join(
      ","
    )}&market=US`;

    const response = await fetch(url, { headers });
    const data = await response.json();

    return mapAudioBooksListFromApiToVm(data.audiobooks);
  } catch (error) {
    console.error(error);
  }
};

export const getAlbumById = async (albumId: string) => {
  const { spotifyAlbumById } = API_SETTINGS.endpoints;
  try {
    const token = await getSpotifyAccessToken();
    const headers = { Authorization: `Bearer ${token}` };
    const response = await fetch(`${spotifyAlbumById}/${albumId}`, { headers });

    const data = await response.json();
    return mapFullAlbumFromApiToVm(data);
  } catch (error) {
    console.error(error);
  }
};
