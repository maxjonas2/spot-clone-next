"use client";
import Image from "next/image";
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
      <Image
        src={imageSrc}
        className="w-full h-full object-cover object-center rounded-[.5rem]"
        fill={true}
        alt="Something for now"
        loading="lazy"
        onLoad={() => setImageHasLoaded(true)}
      />
      <div className={getPlaceholderClassName()}></div>
    </picture>
  );
};

export default PictureWithLoader;
