import Image from "next/image";

export default function ImageRenderer({
  src = "",
  className = "",
  alt = "Default Image",
  fill = false,
  width,
  height,
}) {
  const isProduction = process.env.NODE_ENV === "production";
  const imageProps = fill ? { fill: true } : { width, height };
  const imageUrl = new URL(src, process.env.NEXT_PUBLIC_CMS_URL).toString();

  return (
    <Image
      src={imageUrl}
      className={className}
      alt={alt}
      {...imageProps}
      unoptimized={!isProduction}
    />
  );
}
