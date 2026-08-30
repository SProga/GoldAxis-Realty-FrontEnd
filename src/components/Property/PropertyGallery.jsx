"use client";

import ImageGallery from "react-image-gallery";
import classes from "./styles/PropertyGallery.module.css";

export default function PropertyGallery({ property }) {
  const images = property?.images || [];

  if (!images.length) return null;

  const get_image_url = (src) => {
    if (!src) return "";
    return new URL(src, process.env.NEXT_PUBLIC_CMS_URL).toString();
  };

  const gallery_images = images.map((image) => ({
    original: get_image_url(image.url),
    thumbnail: get_image_url(image.url),
    originalAlt: image.alternativeText || property?.title || "Property",
    thumbnailAlt:
      image.alternativeText || property?.title || "Property thumbnail",
  }));

  return (
    <section className={classes.property_gallery}>
      <ImageGallery
        items={gallery_images}
        showPlayButton={false}
        showFullscreenButton
        showNav
        showThumbnails={images.length > 1}
        thumbnailPosition="bottom"
        lazyLoad
        slideDuration={300}
        additionalClass="luxury_property_gallery"
      />
    </section>
  );
}
