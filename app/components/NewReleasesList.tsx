import React from "react";
import { getNewReleases } from "../api/spotify.api";
import AlbumCard from "./AlbumCard";

export default async function NewReleasesList() {
  const newReleases = await getNewReleases();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-white mb-6 m-auto">
        New Releases, enjoy!
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {newReleases.map((album) => (
          <AlbumCard key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
}
