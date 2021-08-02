import React, { useState, useEffect } from "react";

import GalleryItem from "../components/gallery-item";
import "./galerija_style.scss";

import { v4 as uuidv4 } from "uuid";
import BigPicture from "bigpicture";

const Galerija = () => {
  const AllItems = [
    {
      srcThumbnail:
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop",
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint voluptas illum deserunt eius quae incidunt sit nisi dolores iure quos eaque quibusdam magnam enim tempora esse pariatur, minus dignissimos.",
    },
    {
      srcThumbnail:
        "https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=400&h=300&fit=crop",
      src: "https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=800&h=600&fit=crop",
    },
    {
      srcThumbnail:
        "https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=400&h=300&fit=crop",
      src: "https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=800&h=600&fit=crop",
    },
    {
      srcThumbnail:
        "https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=400&h=300&fit=crop",
      src: "https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=800&h=600&fit=crop",
      caption:
        "Lorem ipsum dolor, sit amet consecxplicabo asperiores soluatur!",
    },
    {
      srcThumbnail:
        "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=400&h=300&fit=crop",
      src: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=800&h=600&fit=crop",
      caption:
        "Lorem ipsum dolor, sit amet consecxplicabo asperiores soluatur!",
    },
    {
      srcThumbnail:
        "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=400&h=300&fit=crop",
      src: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&h=600&fit=crop",
    },
  ];

  const [currentItem, setCurrentItem] = useState({ index: 0, e: null });

  useEffect(() => {
    if (currentItem.e != null) {
      BigPicture({
        el: currentItem.e.target,
        gallery: AllItems,
        position: currentItem.index,
        loop: true,
      });
    }
  }, [currentItem]);

  const viewImageHandler = (e, index) => {
    setCurrentItem({ index, e });
  };

  return (
    <div className="base">
      <h1>Galerija</h1>
      <div className="container">
        <div className="gallery">
          {AllItems.map((item, index) => (
            <GalleryItem
              viewImageHandler={viewImageHandler}
              index={index}
              key={uuidv4()}
              src={item.srcThumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galerija;
