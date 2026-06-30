const CDN = "https://tjs-photo.fra1.cdn.digitaloceanspaces.com";

export const s3Cover = (prefix: string) => `${CDN}/${prefix}/cover/large.webp`;
export const s3Speaker = (prefix: string, slug: string) => `${CDN}/${prefix}/speakers/${slug}/large.webp`;
export const s3Talk = (prefix: string, slug: string) => `${CDN}/${prefix}/talks/${slug}/large.webp`;
export const s3Organiser = (id: string) => `${CDN}/community/organisers/${id}/large.webp`;
export const s3Friend = (slug: string) => `${CDN}/community/friends/${slug}/large.webp`;
