import Link from "next/link";
import Image from "next/image";
import { AlbumType } from "@api/types";

type AlbumCardProps = AlbumType;

const AlbumCard = ({
  artistName,
  cover,
  title,
  releaseDate,
  id,
}: AlbumCardProps) => (
  <Link href={`/albums/${id}`} key={`album-${id}`}>
    <div className="cursor-pointer hover:opacity-75 transition ease-in-out duration-150 rounded-lg hover:border-transparent hover:ring-2 hover:ring-offset-2 hover:ring-gray-500 px-4 py-6">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          width={312}
          height={312}
          src={cover}
          alt={title}
          className="h-54 w-54 mx-auto lg:h-78 lg:w-78 object-cover"
        />
      </div>

      <p className="mt-4 text-lg">{title}</p>
      <p className="mt-1 text-xs font-medium">
        {artistName} &middot;{" "}
        <small className="mt-1 text-xs font-medium">
          {releaseDate.substring(0, 4)}
        </small>
      </p>
    </div>
  </Link>
);

export default AlbumCard;
