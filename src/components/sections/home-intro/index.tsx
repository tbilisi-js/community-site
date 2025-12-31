import { Button } from "../../ui/button";
import { Block } from "../../ui/block";
import logotype from "./img/logotype.png";

import "./home-intro.scss";

export const HomeIntro = () => (
    <Block id="intro" className="home-intro">
        <img
            src={logotype.src}
            width={logotype.width}
            height={logotype.height}
            alt="Tbilisi JS People"
            className="home-intro-img"
            fetchPriority="high"
        />
        <h1 className="home-intro-subtitle">
            Tbilisi JavaScript and TypeScript RU&#8288;–&#8288;EN&nbsp;speaking Community
        </h1>
        <Button variant="primary" className="home-intro-button" size="lg" href="#about">
            Learn More
        </Button>
    </Block>
);
