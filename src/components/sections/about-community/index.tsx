import { Block } from "../../ui/block";
import tjsPeople from "./img/tjs_people.jpg";
import socialBg from "./img/social_bg.png";

import "./about-community.scss";

export const AboutCommunity = () => (
    <Block id="about" bodyClassName="about-community-body">
        <h2 className="about-community-heading">About Tbilisi JS Community</h2>
        <svg
            width="490"
            height="633"
            viewBox="0 0 490 633"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="about-community-img-bg"
        >
            <path
                d="M109.5 9.83851C116.743 3.65104 125.956 0.251465 135.482 0.251465L469 0.251465C480.598 0.251465 490 9.65349 490 21.2515V611.251C490 622.849 480.598 632.251 469 632.251H21C9.40203 632.251 0 622.849 0 611.251V121.822C0 110.122 5.12249 99.0085 14.0182 91.4089L109.5 9.83851Z"
                fill="#FFCE13"
            />
        </svg>
        <div className="about-community-info">
            <img src={tjsPeople.src} width={433} height={548} alt="Tbilisi JS People" className="about-community-img" />
            <div className="about-community-description">
                <p className="about-community-text">
                    We are united by our interest in technology and progress, a love for knowledge, and a genuine wish
                    to support each other
                </p>
                <div className="about-community-social">
                    <img
                        width="337"
                        height="359"
                        src={socialBg.src}
                        alt=""
                        loading="lazy"
                        className="about-community-social-bg"
                    />
                    <a
                        href="https://t.me/tbilisi_js_chat"
                        className="about-community-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Telegram Channel
                    </a>
                    <span className="about-community-social-line" />
                    <a
                        href="https://www.linkedin.com/company/tbilisi-js-community/"
                        className="about-community-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <span className="about-community-social-line" />
                    <a
                        href="https://www.youtube.com/@TbilisiJS"
                        className="about-community-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        YouTube
                    </a>
                </div>
            </div>
        </div>
    </Block>
);
