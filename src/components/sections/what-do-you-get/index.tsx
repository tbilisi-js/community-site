import { Block } from "@src/components/ui/block";
import { PeopleIcon, TrophyIcon, TargetIcon, ChartIcon } from "@src/components/icons";

import "./what-do-you-get.scss";

export const WhatDoYouGet = () => (
    <Block className="what-do-you-get">
        <h2 className="what-do-you-get-title">What do you get</h2>
        <ul className="what-do-you-get-items">
            <li className="what-do-you-get-item">
                <div>
                    <PeopleIcon className="what-do-you-get-item-icon" />
                    <h3 className="what-do-you-get-item-title">Access to an Active IT Audience</h3>
                    <p className="what-do-you-get-item-description">
                        We connect developers across Georgia, Armenia, Russia, and other countries. Your brand will be
                        seen by thousands of professionals who follow and attend our events.
                    </p>
                </div>
            </li>
            <li className="what-do-you-get-item">
                <div>
                    <TrophyIcon className="what-do-you-get-item-icon" />
                    <h3 className="what-do-you-get-item-title">Community Support & Branding</h3>
                    <p className="what-do-you-get-item-description">
                        Your company will be recognized as an active participant in the tech community, helping you
                        attract top talent and build a strong employer brand in the IT space.
                    </p>
                </div>
            </li>
            <li className="what-do-you-get-item">
                <div>
                    <TargetIcon className="what-do-you-get-item-icon" />
                    <h3 className="what-do-you-get-item-title">Promotion Across Our Channels</h3>
                    <p className="what-do-you-get-item-description">
                        We feature our partners in announcements, social media posts, and event publications. Our
                        promotions reach 15-20 developer-focused channels and chats.
                    </p>
                </div>
            </li>
            <li className="what-do-you-get-item">
                <div>
                    <ChartIcon className="what-do-you-get-item-icon" />
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
