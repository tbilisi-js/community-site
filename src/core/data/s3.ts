export const CDN = "https://tjs-photo.fra1.cdn.digitaloceanspaces.com";

export type S3Size = "thumbnail" | "preview" | "large";

export const s3Cover = (prefix: string, size: S3Size = "large") => `${CDN}/${prefix}/cover/${size}.webp`;
export const s3GallerySource = (prefix: string) => `${CDN}/${prefix}/struct.json`;
export const s3Speaker = (prefix: string, slug: string, size: S3Size = "large") =>
    `${CDN}/${prefix}/speakers/${slug}/${size}.webp`;
export const s3Talk = (prefix: string, slug: string, size: S3Size = "large") =>
    `${CDN}/${prefix}/talks/${slug}/${size}.webp`;
export const s3Organiser = (id: string, size: S3Size = "large") => `${CDN}/community/organisers/${id}/${size}.webp`;
export const s3Friend = (slug: string, size: S3Size = "large") => `${CDN}/community/friends/${slug}/${size}.webp`;

// Swap the size suffix on an already-built URL, e.g. to get thumbnail from a stored large URL
export const s3Resize = (url: string, size: S3Size) =>
    url.replace(/\/(thumbnail|preview|large)\.webp$/, `/${size}.webp`);
