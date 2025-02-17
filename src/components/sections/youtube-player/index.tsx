import { Block } from "@src/components/ui/block";

import "./youtube-player.scss";

export interface YoutubePlayerProps {
    src: string;
}

export const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ src }) => (
    <Block id="youtube-player" bodyClassName="youtube-player-body">
        <iframe
            width="560"
            height="315"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="youtube-player-frame"
        />
    </Block>
);
