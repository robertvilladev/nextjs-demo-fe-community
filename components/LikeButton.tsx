"use client";

import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <button className="cursor-pointer" onClick={toggleLike}>
      {liked ? "❤️" : "♡"}
    </button>
  );
};

export default LikeButton;
