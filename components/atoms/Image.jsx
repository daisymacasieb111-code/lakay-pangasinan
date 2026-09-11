import NextImage from "next/image";

export default function Image({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
}) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}