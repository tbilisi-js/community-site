import { Block } from "@src/components/ui/block";
import quantoriImg from "./img/quantori.svg";
import annaMoneyImg from "./img/anna-money.svg";
import jettyCloudImg from "./img/jetty-cloud.svg";
import garageItImg from "./img/garage-it.svg";
import lightspeedImg from "./img/lightspeed.svg";
import tabbyImg from "./img/tabby.svg";
import tradingViewImg from "./img/trading-view.svg";
import socialDiscoderyGroup from "./img/social-discovery-group.svg";
import exanteImg from "./img/exante.svg";

import "./our-partners.scss";

const partners = [
    {
        src: quantoriImg.src,
        alt: "Quantori",
        url: "https://quantori.com/",
    },
    {
        src: annaMoneyImg.src,
        alt: "Anna Money",
        url: "https://anna.money/",
    },
    {
        src: jettyCloudImg.src,
        alt: "Jetty Cloud",
        url: "https://www.jettycloud.com/",
    },
    {
        src: garageItImg.src,
        alt: "Garage IT",
        url: "https://gara.ge/",
    },
    {
        src: lightspeedImg.src,
        alt: "Lightspeed",
        url: "https://www.lightspeedhq.com/",
    },
    {
        src: tabbyImg.src,
        alt: "Tabby",
        url: "https://tabby.ai/",
    },
    {
        src: tradingViewImg.src,
        alt: "TradingView",
        url: "https://www.tradingview.com/",
    },
    {
        src: socialDiscoderyGroup.src,
        alt: "Social Discovery Group",
        url: "https://socialdiscoverygroup.com/",
    },
    {
        src: exanteImg.src,
        alt: "Exante",
        url: "https://exante.eu/",
    },
];

export const OurPartners = () => (
    <Block className="our-partners" id="partners">
        <div className="our-partners-carousel">
            <ul className="our-partners-list">
                {partners.map((partner) => (
                    <li className="our-partners-item" key={partner.alt}>
                        <a href={partner.url} target="_blank" rel="noopener noreferrer" className="our-partners-link">
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                loading="lazy"
                                height={40}
                                className="our-partners-img"
                            />
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="our-partners-list">
                {partners.map((partner) => (
                    <li className="our-partners-item" key={partner.alt}>
                        <a href={partner.url} target="_blank" rel="noopener noreferrer" className="our-partners-link">
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                loading="lazy"
                                height={40}
                                className="our-partners-img"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </Block>
);
