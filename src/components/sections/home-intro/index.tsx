import { Button } from "../../ui/button";
import { Block } from "../../ui/block";
import logotype from "./img/logotype.png";

import "./home-intro.scss";

export const HomeIntro = () => (
    <Block id="intro">
        <img
            src={logotype.src}
            width={logotype.width}
            height={logotype.height}
            alt="Tbilisi JS People"
            className="home-intro-img"
        />
        <h1 className="home-intro-subtitle">Tbilisi JavaScript and TypeScript RU–EN speaking Community</h1>
        <Button variant="primary" className="home-intro-button" size="lg">
            Learn More
        </Button>
    </Block>
);
