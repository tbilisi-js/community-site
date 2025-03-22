import { Block } from "@src/components/ui/block";

import "./what-do-you-get.scss";

export const WhatDoYouGet = () => (
    <Block className="what-do-you-get">
        <h2 className="what-do-you-get-title">What do you get</h2>
        <ul className="what-do-you-get-items">
            <li className="what-do-you-get-item">
                <div>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="what-do-you-get-item-icon"
                    >
                        <path
                            d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4092 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.40915 15.7105 2.71046 16.4092 2.30440 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h3 className="what-do-you-get-item-title">Access to an Active IT Audience</h3>
                    <p className="what-do-you-get-item-description">
                        We connect developers across Georgia, Armenia, Russia, and other countries. Your brand will be
                        seen by thousands of professionals who follow and attend our events.
                    </p>
                </div>
            </li>
            <li className="what-do-you-get-item">
                <div>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="what-do-you-get-item-icon"
                    >
                        <path
                            d="M12 17C8.41015 17 5.5 14.0899 5.5 10.5V4.55556C5.5 4.03739 5.5 3.77831 5.59369 3.57738C5.69305 3.36431 5.86431 3.19305 6.07738 3.09369C6.27831 3 6.53739 3 7.05556 3H16.9444C17.4626 3 17.7217 3 17.9226 3.09369C18.1357 3.19305 18.3069 3.36431 18.4063 3.57738C18.5 3.77831 18.5 4.03739 18.5 4.55556V10.5C18.5 14.0899 15.5899 17 12 17ZM12 17V21M17 21H7M22 5V10M2 5V10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h3 className="what-do-you-get-item-title">Community Support & Branding</h3>
                    <p className="what-do-you-get-item-description">
                        Your company will be recognized as an active participant in the tech community, helping you
                        attract top talent and build a strong employer brand in the IT space.
                    </p>
                </div>
            </li>
            <li className="what-do-you-get-item">
                <div>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="what-do-you-get-item-icon"
                    >
                        <path
                            d="M10.5858 13.4142C9.80474 12.6332 9.80474 11.3668 10.5858 10.5858C11.3668 9.80474 12.6332 9.80474 13.4142 10.5858C14.1953 11.3668 14.1953 12.6332 13.4142 13.4142M7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75736C10.1005 5.41421 13.8995 5.41421 16.2426 7.75736C18.5858 10.1005 18.5858 13.8995 16.2426 16.2426M4.92893 19.0711C1.02369 15.1658 1.02369 8.83418 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h3 className="what-do-you-get-item-title">Promotion Across Our Channels</h3>
                    <p className="what-do-you-get-item-description">
                        We feature our partners in announcements, social media posts, and event publications. Our
                        promotions reach 15-20 developer-focused channels and chats.
                    </p>
                </div>
            </li>
            <li className="what-do-you-get-item">
                <div>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="what-do-you-get-item-icon"
                    >
                        <path
                            d="M12 16V21M18 21L14.0486 17.7072C13.3198 17.0998 12.9554 16.7962 12.5487 16.6801C12.19 16.5778 11.81 16.5778 11.4513 16.6801C11.0446 16.7962 10.6802 17.0998 9.95141 17.7072L6 21M8 11V12M12 9V12M16 7V12M22 3H2M3 3H21V11.2C21 12.8802 21 13.7202 20.673 14.362C20.3854 14.9265 19.9265 15.3854 19.362 15.673C18.7202 16 17.8802 16 16.2 16H7.8C6.11984 16 5.27976 16 4.63803 15.673C4.07354 15.3854 3.6146 14.9265 3.32698 14.362C3 13.7202 3 12.8802 3 11.2V3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h3 className="what-do-you-get-item-title">Brand Visibility at Events</h3>
                    <p className="what-do-you-get-item-description">
                        Partners can enhance their presence through branding on event materials, including banners,
                        slides, badges, and video recordings.
                    </p>
                </div>
            </li>
        </ul>
    </Block>
);
