import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";

const Lightbox = () => {
  return (
    <div>
      <SlideshowLightbox theme="day" className="grid grid-cols-4 gap-2 px-4">
        <img
          className="rounded-lg h-[300px] object-cover"
          src={"https://source.unsplash.com/pAKCx4y2H6Q/1600x1200"}
          alt=""
        />
        <img
          className="rounded-lg h-[300px] object-cover"
          src={"https://source.unsplash.com/AYS2sSAMyhc/1600x1200"}
          alt=""
        />
        <img
          className="rounded-lg h-[300px] object-cover"
          src={"https://source.unsplash.com/Kk8mEQAoIpI/1600x1200"}
          alt=""
        />
        <img
          className="rounded-lg h-[300px] object-cover"
          src={"https://source.unsplash.com/HF3X2TWv1-w/1600x1200"}
          alt=""
        />
      </SlideshowLightbox>
    </div>
  );
};

export default Lightbox;
