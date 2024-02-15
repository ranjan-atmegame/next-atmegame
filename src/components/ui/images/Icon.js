"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Icon({
  src,
  title,
  width,
  height,
  iconClass = "",
  priority = false,
  fallBackImg = "/img/noGameImage.png",
  unoptimized = true,
  lazy = "eager",
  lazyImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==",
}) {
  width = width ? width : 55;
  height = height ? height : 55;

  const [imgSrc, setImgSrc] = useState(src);
  let imgTitle = title ? title : "atmegame-fallback";

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  function fallBack(e) {
    setImgSrc(fallBackImg);
  }

  return (
    <Image
      src={imgSrc}
      alt={imgTitle}
      title={imgTitle}
      width={width}
      height={height}
      className={iconClass}
      priority={priority}
      unoptimized={unoptimized}
      onError={(e) => fallBack(e)}
      loading={lazy}
      placeholder="empty"
      data-name="icon-component"
      // blurDataURL={lazyImg}
    />
  );
}
