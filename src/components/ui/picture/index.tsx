import { s3Resize } from "@src/core/data/s3";

const S3_IMAGE = /\/(thumbnail|preview|large)\.webp$/;

export interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    sizes: string;
}

export const Picture: React.FC<PictureProps> = ({ src, sizes, loading = "lazy", ...props }) => {
    if (!S3_IMAGE.test(src)) {
        return <img src={src} loading={loading} decoding="async" {...props} />;
    }

    return (
        <picture>
            <source
                type="image/webp"
                srcSet={`${s3Resize(src, "thumbnail")} 400w, ${s3Resize(src, "preview")} 800w, ${s3Resize(src, "large")} 1024w`}
                sizes={sizes}
            />
            <img src={s3Resize(src, "preview")} loading={loading} decoding="async" {...props} />
        </picture>
    );
};
