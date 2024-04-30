"use client";
import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import Card3 from "../../../assets/images/card3.jpeg";
import Card2 from "../../../assets/images/card2.jpeg";

function GalleryImages() {
  const items = [
    {
      src: Card3.src,
    },
    {
      src: Card2.src,
    },
    {
      src: Card3.src,
    },
    {
      src: Card2.src,
    },
    {
      src: Card3.src,
    },
    {
      src: Card2.src,
    },
    {
      src: Card3.src,
    },
    {
      src: Card2.src,
    },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-8">
      <div
        className="text-5xl font-semibold flex justify-center items-center"
        style={{ backgroundImage: "../../../assets/images/card3.jpeg" }}
      >
        <h1>Our Gallery</h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-center gap-10 ">
        <SlideshowLightbox imgClassName='w-full h-full' className="container lg:grid lg:grid-cols-4 block gap-8 mx-auto py-4">
          {items.map((item, index) => {
            return (
              <img className="w-full rounded lg:pb-0 pb-4" src={item.src} />
            );
          })}
        </SlideshowLightbox>
      </div>
    </div>
  );
}
export default GalleryImages;
