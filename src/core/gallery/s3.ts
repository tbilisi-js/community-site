export interface S3GalleryStruct {
    count: number;
    base_url: string;
    photos_path: string;
    photos: string[];
    sizes: {
        thumbnail: { width: number; format: string };
        preview: { width: number; format: string };
        large: { width: number; format: string };
        full: { width: string | number; formats: string[] };
    };
}

export interface S3Photo {
    thumbnail: string;
    preview: string;
    large: string;
    fullJpg: string;
    filename: string;
    alt: string;
}

export function buildS3PhotoUrls(struct: S3GalleryStruct, id: string, alt: string): S3Photo {
    const base = `${struct.base_url}${struct.photos_path}/${id}/`;
    return {
        thumbnail: `${base}thumbnail.webp`,
        preview: `${base}preview.webp`,
        large: `${base}large.webp`,
        fullJpg: `${base}full.jpg`,
        filename: `${id}.jpg`,
        alt,
    };
}

export function buildAllS3Photos(struct: S3GalleryStruct, eventName: string): S3Photo[] {
    return struct.photos.map((id, index) => buildS3PhotoUrls(struct, id, `Photo from ${eventName} #${index + 1}`));
}
