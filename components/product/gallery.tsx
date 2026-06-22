"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
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

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex =
    imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-ink flex items-center justify-center";

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
          <>
            <div className="absolute bottom-[18%] left-0 right-0 z-10 flex w-full justify-center">
              <div className="mx-auto flex h-11 items-center rounded-none border border-line bg-white/90 text-ink-soft backdrop-blur-sm">
                <button
                  formAction={() => updateImage(previousImageIndex.toString())}
                  aria-label="Previous product image"
                  className={buttonClassName}
                >
                  <ArrowLeftIcon className="h-5" />
                </button>
                <div className="mx-1 h-6 w-px bg-line" />
                <button
                  formAction={() => updateImage(nextImageIndex.toString())}
                  aria-label="Next product image"
                  className={buttonClassName}
                >
                  <ArrowRightIcon className="h-5" />
                </button>
              </div>
            </div>

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
          </>
        ) : null}
      </div>
    </form>
  );
}
