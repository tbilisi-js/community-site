import Image from "next/image";

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

export const CommunityGallery = () => (
    <Block className="community-gallery" id="community-gallery">
        <ul className="community-gallery-list">
            <li className="community-gallery-card community-gallery-card-head">
                <h2>That's&nbsp;All About Community</h2>
            </li>
            <li className="community-gallery-card">
                <Image src={gallery1} alt="" className="community-gallery-card-img" />
            </li>
            <li className="community-gallery-card">
                <Image src={gallery2} alt="" className="community-gallery-card-img" />
            </li>
            <li className="community-gallery-card">
                <Image src={gallery3} alt="" className="community-gallery-card-img" />
            </li>
            <li className="community-gallery-card">
                <Image src={gallery4} alt="" className="community-gallery-card-img" />
            </li>
            <li className="community-gallery-card">
                <Image src={gallery5} alt="" className="community-gallery-card-img" />
            </li>
            <li className="community-gallery-card">
                <Image src={gallery6} alt="" className="community-gallery-card-img" />
            </li>
            <li className="community-gallery-card">
                <Image src={gallery7} alt="" className="community-gallery-card-img" />
            </li>
            <li className="community-gallery-card">
                <Image src={gallery8} alt="" className="community-gallery-card-img" />
            </li>
        </ul>
    </Block>
);
