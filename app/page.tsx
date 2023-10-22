import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppPage = () => (
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h1 className=" text-4xl font-extrabold tracking-tight text-white mb-12 text-center">
      Home Page - Music App
    </h1>

    <div className="flex flex-row gap-6 justify-center items-center my-48">
      <Image
        src="next.svg"
        alt="Next.js logo"
        width={250}
        height={250}
        color="white"
      />
      <Image
        src="/spotify-icon.jpeg"
        alt="Spotify logo"
        width={220}
        height={220}
      />
    </div>

    <p className="text-white text-center text-xl">
      A music app built with{" "}
      <Link className="underline" href="https://nextjs.org/">
        Next.js 13
      </Link>
      {" and "}
      <Link
        className="underline"
        href="https://developer.spotify.com/documentation/web-api"
      >
        Spotify API
      </Link>
    </p>
  </div>
);

export default AppPage;
