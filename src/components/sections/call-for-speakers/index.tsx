import { Button } from "../../ui/button";
import { Block } from "../../ui/block";

import "./call-for-speakers.scss";

export const CallForSpeakers = () => (
    <Block id="call-for-speakers" bodyClassName="call-for-speakers-body">
        <div className="call-for-speakers-head">
            <h2 className="call-for-speakers-heading">Call for speakers</h2>
            <p className="call-for-speakers-subheading">Passionate about tech and design</p>
        </div>
        <div className="call-for-speakers-info">
            <p className="call-for-speakers-description">
                If you want to share your experience and&nbsp;knowledge&nbsp;in upcoming Tbilisi JS Meetup, let us know
                till 01.16.25
            </p>
            <Button variant="primary" className="call-for-speakers-button" size="md">
                Apply to speak
            </Button>
        </div>
    </Block>
);
