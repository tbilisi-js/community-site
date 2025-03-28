import Image from "next/image";

import { Block } from "../../ui/block";
import juliaVolkova from "./img/julia_volkova.png";
import antonPavlov from "./img/anton_pavlov.jpg";
import alexSavelyev from "./img/alex_savelyev.png";
import anastasiaPalamarchuk from "./img/anastasia_palamarchuk.png";

import "./organisers.scss";

export const Organisers = () => (
    <Block id="organisers" bodyClassName="organisers-body">
        <h2 className="organisers-heading">Meet the organisers</h2>
        <div className="organisers-list">
            <div className="organisers-card organisers-volkova">
                <Image
                    src={juliaVolkova.src}
                    width={398}
                    height={570}
                    alt="Julia Volkova Avatar"
                    className="organisers-card-img"
                    loading="lazy"
                />
                <div className="organisers-info">
                    <p className="organisers-card-heading">Julia Volkova</p>
                    <p className="organisers-card-description">
                        Frontend Expert at Hyperskill and Mentor at HTML Academy
                    </p>
                </div>
                <div className="organisers-social">
                    <a
                        href="https://www.linkedin.com/in/julie-volkova/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="organisers-social-item"
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
            <div className="organisers-card organisers-pavlop">
                <Image
                    src={antonPavlov.src}
                    width={398}
                    height={570}
                    alt="Anton Pavlov Avatar"
                    className="organisers-card-img"
                    loading="lazy"
                />
                <div className="organisers-info">
                    <p className="organisers-card-heading">Anton Pavlov</p>
                    <p className="organisers-card-description">DevOPS</p>
                </div>
                <div className="organisers-social">
                    <a
                        href="https://www.linkedin.com/in/antonepavlov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="organisers-social-item"
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
            <div className="organisers-card organisers-savelyev">
                <Image
                    src={alexSavelyev.src}
                    width={398}
                    height={570}
                    alt="Alex Savelyev Avatar"
                    className="organisers-card-img"
                    loading="lazy"
                />
                <div className="organisers-info">
                    <p className="organisers-card-heading">Alex Savelyev</p>
                    <p className="organisers-card-description">Frontend Developer</p>
                </div>
                <div className="organisers-social">
                    <a
                        href="https://www.linkedin.com/in/vordgi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="organisers-social-item"
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
            <div className="organisers-card organisers-palamarchuk">
                <Image
                    src={anastasiaPalamarchuk.src}
                    width={398}
                    height={570}
                    alt="Anastasia Palamarchuk Avatar"
                    className="organisers-card-img"
                    loading="lazy"
                />
                <div className="organisers-info">
                    <p className="organisers-card-heading">Anastasia Palamarchuk</p>
                    <p className="organisers-card-description">Tech Recruiter</p>
                </div>
                <div className="organisers-social">
                    <a
                        href="https://www.linkedin.com/in/palamarchelo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="organisers-social-item"
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
