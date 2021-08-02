import React from "react";

const GalleryItem = ({ src, viewImageHandler, index }) => {
  return (
    <div
      onClick={(e) => viewImageHandler(e, index)}
      className="gallery-item"
      tabIndex="0"
    >
      <div
        className="gallery-image"
        style={{
          backgroundImage: `url(${src})`,
        }}
      ></div>
    </div>
  );
};

export default GalleryItem;
