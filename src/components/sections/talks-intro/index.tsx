import { Block } from "@src/components/ui/block";

import "./talks-intro.scss";

export const TalksIntro = () => (
    <Block className="talks-intro" id="intro">
        <h1 className="talks-intro-heading">Tbilisi JS Talks</h1>
        <p className="talks-intro-subheading">
            Leading expert talks covering technologies, trends, and real-world experiences. Discover cutting-edge
            solutions and get inspired by new ideas.
        </p>
        <div className="talks-intro-divider" />
    </Block>
);
