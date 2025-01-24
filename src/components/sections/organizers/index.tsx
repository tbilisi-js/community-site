import { Block } from "../../ui/block";
import juliaVolkova from "./img/julia_volkova.png";
import antonPavlov from "./img/anton_pavlov.png";

import "./organizers.scss";

export const Organizers = () => (
    <Block id="about" bodyClassName="organizers-body">
        <h2 className="organizers-heading">Meet the organisers</h2>
        <div className="organizers-list">
            <div className="organizers-card organizers-volkova">
                <img
                    src={juliaVolkova.src}
                    width={398}
                    height={570}
                    alt="Julia Volkova Avatar"
                    className="organizers-card-img"
                    loading="lazy"
                />
                <div className="organizers-info">
                    <p className="organizers-card-heading">Julia Volkova</p>
                    <p className="organizers-card-description">
                        Frontend Developer
                        <br />
                        Mentor at Yandex Practicum and HTML Academy
                    </p>
                </div>
                <div className="organizers-social">
                    <a
                        href="https://www.linkedin.com/in/julie-volkova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="organizers-social-item"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" height="20" width="20">
                            <title>LinkedIn</title>
                            <path
                                d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="organizers-card organizers-pavlop">
                <img
                    src={antonPavlov.src}
                    width={398}
                    height={570}
                    alt="Anton Pavlov Avatar"
                    className="organizers-card-img"
                    loading="lazy"
                />
                <div className="organizers-info">
                    <p className="organizers-card-heading">Anton Pavlov</p>
                    <p className="organizers-card-description">DevOPS</p>
                </div>
                <div className="organizers-social">
                    <a
                        href="https://www.linkedin.com/in/antonepavlov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="organizers-social-item"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" height="20" width="20">
                            <title>LinkedIn</title>
                            <path
                                d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </Block>
);
