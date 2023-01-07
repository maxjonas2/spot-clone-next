"use client";
import { useState } from "react";

const PictureWithLoader = ({ imageSrc }: { imageSrc: string }) => {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);

  function getPlaceholderClassName() {
    return `image-placeholder ${
      imageHasLoaded ? "out" : ""
    } | absolute inset-0 bg-red-500 rounded-[.5rem]`;
  }

  return (
    <picture className="block absolute inset-0">
      <img
        onLoad={() => setImageHasLoaded(true)}
        src={imageSrc}
        className="w-full h-full object-cover object-center rounded-[.5rem]"
        alt=""
      />
      <div className={getPlaceholderClassName()}></div>
    </picture>
  );
};

export default PictureWithLoader;
