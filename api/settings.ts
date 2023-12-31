const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";

export const API_SETTINGS = {
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI,
  endpoints: {
    spotifyToken: "https://accounts.spotify.com/api/token",
    spotifyNewReleases: `${SPOTIFY_BASE_URL}/browse/new-releases`,
    audioBooks: "https://api.spotify.com/v1/audiobooks",
    spotifyAlbumById: `${SPOTIFY_BASE_URL}/albums`,
  },
};

export const SPOTIFY_AUDIOBOOKS_IDS = [
  "18yVqkdbdRvS24c0Ilj2ci",
  "1HGw3J3NxZO1TP1BTtVhpZ",
  "7iHfbu1YPACw6oZPAFJtqe",
  "18yVqkdbdRvS24c0Ilj2ci",
  "1HGw3J3NxZO1TP1BTtVhpZ",
  "7iHfbu1YPACw6oZPAFJtqe",
];
