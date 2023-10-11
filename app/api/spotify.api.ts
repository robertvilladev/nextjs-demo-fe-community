import {
  mapAlbumsListFromApiToVm,
  mapAudioBooksListFromApiToVm,
} from "./mappers";
import { API_SETTINGS } from "./settings";

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

    const market = "US";
    const ids = [
      "18yVqkdbdRvS24c0Ilj2ci",
      "1HGw3J3NxZO1TP1BTtVhpZ",
      "7iHfbu1YPACw6oZPAFJtqe",
      "18yVqkdbdRvS24c0Ilj2ci",
      "1HGw3J3NxZO1TP1BTtVhpZ",
      "7iHfbu1YPACw6oZPAFJtqe",
    ];

    const url = `${audioBooks}?ids=${ids.join(",")}&market=${market}`;

    const response = await fetch(url, { headers });
    const data = await response.json();

    return mapAudioBooksListFromApiToVm(data.audiobooks);
  } catch (error) {
    console.error(error);
  }
};
