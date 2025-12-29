import { preload } from "react-dom";
import { Block } from "../../ui/block";
import tjsPeople from "./img/tjs_people.jpg";

import "./about-community.scss";

export const AboutCommunity = () => {
    preload(tjsPeople.src, { as: "image" });

    return (
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
                <img
                    src={tjsPeople.src}
                    width={433}
                    height={548}
                    alt="Tbilisi JS People"
                    className="about-community-img"
                    loading="lazy"
                />
                <div className="about-community-description">
                    <p className="about-community-text">
                        We are united by our interest in technology and progress, a love for knowledge, and a genuine
                        wish to support each other
                    </p>
                    <div className="about-community-social">
                        <svg
                            width="363"
                            height="51"
                            viewBox="0 0 363 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="about-community-img-bg-top"
                        >
                            <path
                                d="M362.5 50.7485V49.8582C362.5 38.2602 353.098 28.8582 341.5 28.8582L295.938 28.8582C285.812 28.8582 276.062 25.0172 268.656 18.1103L261.298 11.2479C253.893 4.34097 244.143 0.5 234.016 0.5H20.5C9.45431 0.5 0.5 9.45431 0.5 20.5V50.7485"
                                stroke="#FFCE13"
                                strokeWidth="0.7"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>

                        <svg
                            width="363"
                            height="22"
                            viewBox="0 0 363 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="about-community-img-bg-bottom"
                        >
                            <path
                                d="M0.5 0V0.5C0.5 12.098 9.90202 21.5 21.5 21.5H341.5C353.098 21.5 362.5 12.098 362.5 0.5V0"
                                stroke="#FFCE13"
                                strokeWidth="0.7"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
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
};
