import Image from "next/image";
import type { Metadata } from "next";
import { getAlbumById } from "@api/spotify.api";
import LikeButton from "@/components/LikeButton";

type Props = {
  params: { albumId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const albumId = params.albumId;
  // API fetch is memoized in the server,
  //so it's not a problem to call it here and then in the component
  const albumData = await getAlbumById(albumId);

  return {
    title: `${albumData.title} - ${albumData.artistName}`,
    description: `Album by ${albumData.artistName}`,
    /*   icons: [
      {
        url: albumData.cover,
        sizes: "312x312",
        type: "image/png",
      },
    ], */
  };
}

const AlbumPage = async ({ params }: Props) => {
  const albumId = params.albumId;
  const albumData = await getAlbumById(albumId);

  return (
    <div>
      <div className="flex items-center justify-center gap-6 mb-12 my-12">
        <Image
          src={albumData.cover}
          alt={albumData.title}
          width={312}
          height={312}
          className="object-cover shadow-lg"
        />

        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white text-center">
            {albumData.title}
          </h1>

          <p className="text-2xl font-light">{albumData.artistName}</p>
          <p>{albumData.releaseDate}</p>
          <p>{albumData.totalTracks} tracks</p>
        </div>
      </div>

      <div className="px-4 py-12 max-w-4xl mx-auto">
        {albumData.tracks.map((track, index) => (
          <div
            key={track.id}
            className="flex justify-between gap-4 text-white text-xl mb-2
            hover:bg-gray-700 p-4 rounded-md transition-colors duration-200 ease-in-out
            "
          >
            <p className="w-1/2">
              <span>
                {index < 9 ? `0${index + 1}` : index + 1}
                {"\u00A0"} -{"\u00A0"}
              </span>

              {track.title}
            </p>

            <div className="flex justify-between items-center gap-6">
              {/*  <LikeButton /> */}

              <p className="w-1/2 text-right">
                {track.duration.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
