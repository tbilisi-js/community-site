"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { GalleryModal } from "@src/components/elements/gallery-modal";
import { useModal } from "@src/components/elements/gallery-modal/use-modal";
import { type S3Photo } from "@src/core/gallery/s3";

import { Block } from "@src/components/ui/block";

import gallery1 from "./img/gallery-1.jpg";
import gallery2 from "./img/gallery-2.jpg";
import gallery3 from "./img/gallery-3.jpg";
import gallery4 from "./img/gallery-4.jpg";
import gallery5 from "./img/gallery-5.jpg";
import gallery6 from "./img/gallery-6.jpg";
import gallery7 from "./img/gallery-7.jpg";
import gallery8 from "./img/gallery-8.jpg";

import "./community-gallery.scss";

const defaultImages = [
    { img: gallery1, alt: "Audience attending a presentation with slides" },
    { img: gallery2, alt: "Community members networking" },
    { img: gallery3, alt: "Woman speaking with a microphone at a community event" },
    { img: gallery4, alt: "Audience members listening attentively" },
    { img: gallery5, alt: "Community members engaged in discussion" },
    { img: gallery6, alt: "Group of people networking after the event" },
    { img: gallery7, alt: "Audience view during a presentation" },
    { img: gallery8, alt: "Speakers on stage discussing JavaScript topics" },
];

export interface CommunityGalleryProps {
    images?: {
        img: StaticImageData | string;
        alt: string;
    }[];
    s3Photos?: S3Photo[];
    galleryUrl?: string;
}

export const CommunityGallery: React.FC<CommunityGalleryProps> = ({ images = defaultImages, s3Photos, galleryUrl }) => {
    const modalImages = s3Photos
        ? s3Photos.map((p) => ({ img: p.large, alt: p.alt }))
        : images.map((i) => ({ img: i.img, alt: i.alt }));

    const { store, handleOpen, handleClose, handlePrev, handleNext } = useModal(modalImages);

    return (
        <Block className="community-gallery" id="community-gallery">
            <ul className="community-gallery-list">
                <li className="community-gallery-card community-gallery-card-head">
                    <h2>
                        That's&nbsp;All About <span className="community-gallery-card-primary">Community</span>
                    </h2>
                </li>
                {s3Photos
                    ? s3Photos.map((photo, index) => (
                          <li
                              className="community-gallery-card"
                              onClick={() => handleOpen(index)}
                              key={photo.preview}
                              tabIndex={0}
                              role="button"
                              onKeyDown={(e) => {
                                  if (e.key === "Enter") handleOpen(index);
                              }}
                          >
                              <picture>
                                  <source
                                      type="image/webp"
                                      srcSet={`${photo.thumbnail} 400w, ${photo.preview} 800w, ${photo.large} 1600w`}
                                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                  />
                                  <img
                                      src={photo.preview}
                                      alt={photo.alt}
                                      className="community-gallery-card-img"
                                      loading="lazy"
                                      decoding="async"
                                  />
                              </picture>
                          </li>
                      ))
                    : images.map((image, index) => (
                          <li
                              className="community-gallery-card"
                              onClick={() => handleOpen(index)}
                              key={typeof image.img === "string" ? image.img : image.img.src}
                              tabIndex={0}
                              role="button"
                              onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                      handleOpen(index);
                                  }
                              }}
                          >
                              <Image
                                  width={960}
                                  height={960}
                                  src={image.img}
                                  alt={image.alt}
                                  className="community-gallery-card-img"
                              />
                          </li>
                      ))}
                {galleryUrl && (
                    <li className="community-gallery-card">
                        <Link href={galleryUrl} className="community-gallery-card-view-all">
                            View all photos
                        </Link>
                    </li>
                )}
            </ul>
            {store !== null && (
                <GalleryModal
                    images={modalImages}
                    store={store}
                    handleClose={handleClose}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            )}
        </Block>
    );
};
