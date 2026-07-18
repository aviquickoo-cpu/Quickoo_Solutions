import Image from "next/image";

type BrandLogoProps = {
  src: string;
  alt: string;
  wrapperClassName: string;
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({
  src,
  alt,
  wrapperClassName,
  className = "object-contain",
  priority = false,
}: BrandLogoProps) {
  return (
    <div className={`relative shrink-0 ${wrapperClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 180px, 240px"
        className={className}
      />
    </div>
  );
}
