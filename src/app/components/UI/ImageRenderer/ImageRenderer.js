import Image from "next/image";

export default function ImageRenderer({
  src = "",
  className = "",
  alt = "Default Image",
  fill = false,
  width,
  height,
}) {
  // Decide props based on fill vs width/height
  const isProduction = process.env.NODE_ENV === "production";

  const imageProps = fill
    ? { fill: true, style: { objectFit: "cover" } } // you can customize objectFit
    : { width, height };

  const imageUrl = new URL(src, process.env.NEXT_PUBLIC_CMS_URL).toString();

  return (
    <Image
      src={imageUrl}
      className={className}
      alt={alt}
      {...imageProps}
      unoptimized={isProduction ? false : true}
    />
  );
}
