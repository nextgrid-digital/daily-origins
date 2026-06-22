"use client";

import { GridTileImage } from "components/grid/tile";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const imageIndex = searchParams.has("image")
    ? parseInt(searchParams.get("image")!)
    : 0;

  const updateImage = (index: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("image", index);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <form className="relative h-full min-h-[70dvh] lg:min-h-0 lg:h-full">
      <div className="relative h-full min-h-[70dvh] w-full overflow-hidden bg-stone lg:min-h-0">
        {images[imageIndex] && (
          <Image
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}

        {images.length > 1 ? (
          <ul className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-2 overflow-auto px-4 py-1">
            {images.map((image, index) => {
              const isActive = index === imageIndex;

              return (
                <li key={image.src} className="h-16 w-16 shrink-0">
                  <button
                    formAction={() => updateImage(index.toString())}
                    aria-label="Select product image"
                    className="h-full w-full"
                  >
                    <GridTileImage
                      alt={image.altText}
                      src={image.src}
                      width={64}
                      height={64}
                      active={isActive}
                      isInteractive={false}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </form>
  );
}
