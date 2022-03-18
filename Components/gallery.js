import React from "react";
import Image from "next/image";

export default function GalleryIndex(props) {
  const { src } = props;
  return (
    <div className="col-12 col-md-3 mt-3">
      <Image
        className="shadow img-galery"
        layout="responsive"
        width={180}
        height={200}
        src={`/image/${src}`}
        alt=""
      ></Image>
    </div>
  );
}
