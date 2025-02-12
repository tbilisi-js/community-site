import { IconButton } from "@src/components/ui/icon-button";
import { NavLink } from "@src/components/ui/nav-link";

import "./footer.scss";

export const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <NavLink href="/" className="footer-logo">
                TBILISI JS
            </NavLink>
            <nav className="footer-nav">
                <div />
                {/* <div className="footer-nav-links">
                    <NavLink href="/events" className="footer-nav-link" size="small" weight="light">
                        Events
                    </NavLink>
                    <NavLink href="/speakers" className="footer-nav-link" size="small" weight="light">
                        Speakers
                    </NavLink>
                    <NavLink href="/partners" className="footer-nav-link" size="small" weight="light">
                        Partners
                    </NavLink>
                    <NavLink href="/contacts" className="footer-nav-link" size="small" weight="light">
                        Contacts
                    </NavLink>
                </div> */}
                <div className="footer-nav-info">
                    <p>TBILISI, GEORGIA</p>
                    <p>
                        Email:{" "}
                        <NavLink
                            href="mailto:tbilisijs@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            textTransform="none"
                        >
                            tbilisijs@gmail.com
                        </NavLink>
                    </p>
                </div>
                <div className="footer-social">
                    <IconButton
                        href="https://www.linkedin.com/company/tbilisi-js-community/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" height="32" width="32">
                            <title>LinkedIn</title>
                            <path
                                d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                                fill="currentColor"
                            />
                        </svg>
                    </IconButton>
                    <IconButton href="https://t.me/tbilisi_js_chat" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" height="32" width="32">
                            <title>Telegram</title>
                            <path
                                d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z"
                                fill="#000"
                            />
                            <path
                                d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763"
                                fill="#a9c6d8"
                            />
                            <path
                                d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z"
                                fill="currentColor"
                            />
                        </svg>
                    </IconButton>
                </div>
            </nav>
        </div>
        <div className="footer-additional">
            <div className="footer-additional-content">
                <p>Copyright Tbilisi JS Community</p>
                <p>Design by Elona Sarkisova</p>
            </div>
        </div>
    </footer>
);
