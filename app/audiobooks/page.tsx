import { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";

import { getAudioBooks } from "../../api/spotify.api";

export const metadata: Metadata = {
  title: "AudioBooks",
  description: "AudioBooks - The best AudioBooks in the world",
};

export default async function AudioBooksPage() {
  const audioBooks = await getAudioBooks();

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white mb-12 text-center">
        AudioBooks Page
      </h1>

      <div className="grid grid-cols-2 gap-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {audioBooks.map((audioBook, index) => (
          <div
            key={audioBook.id + index}
            className=" flex flex-row gap-12 cursor-pointer hover:opacity-75 transition ease-in-out duration-150 rounded-lg hover:border-transparent hover:ring-2 hover:ring-offset-2 hover:ring-gray-500 px-4 py-6
          "
          >
            <Image
              width={350}
              height={350}
              src={audioBook.cover}
              alt={audioBook.name}
              className="object-cover"
            />

            <div className="flex flex-col justify-center">
              <p className="text-3xl font-extrabold tracking-tight text-white mb-6">
                {audioBook.name}
              </p>

              <div>
                {audioBook.authors.map((author) => (
                  <p key={author}>{author}</p>
                ))}
              </div>

              <Link
                href={audioBook.url}
                className="text-decoration-underline text-yellow-500
                 text-white"
              >
                Listen on Spotify
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
