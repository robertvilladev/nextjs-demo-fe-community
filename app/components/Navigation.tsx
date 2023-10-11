import Link from "next/link";
import React from "react";

const sections = [
  { name: "Home", route: "/" },
  { name: "Albums", route: "/albums" },
  { name: "AudioBooks", route: "/audiobooks" },
  { name: "Profile", route: "/profile" }, // example of 404 route
];

export default function Navigation() {
  return (
    <header
      className="
        bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
        text-white
        h-16
        p-4
        flex
        justify-center
        items-center
        gap-8
    "
    >
      {sections.map((item) => (
        <Link
          href={item.route}
          key={item.name}
          className="text-lg font-bold hover:text-gray-200"
        >
          {item.name}
        </Link>
      ))}
    </header>
  );
}
