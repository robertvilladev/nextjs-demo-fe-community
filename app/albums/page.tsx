import AlbumCard from "../components/AlbumCard";
import { getNewReleases } from "../../api/spotify.api";

const AlbumsPage = async () => {
  const newReleases = await getNewReleases();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-12 text-center">
        New Releases, enjoy!
      </h1>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {newReleases.map((album) => (
          <AlbumCard key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
};

export default AlbumsPage;
