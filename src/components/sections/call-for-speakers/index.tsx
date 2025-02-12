import { Button } from "../../ui/button";
import { Block } from "../../ui/block";

import "./call-for-speakers.scss";

export const CallForSpeakers: React.FC = () => (
    <Block id="call-for-speakers" bodyClassName="call-for-speakers-body">
        <div className="call-for-speakers-head">
            <h2 className="call-for-speakers-heading">Call for speakers</h2>
            <p className="call-for-speakers-subheading">Passionate about tech and design</p>
        </div>
        <div className="call-for-speakers-info">
            <p className="call-for-speakers-description">
                If you would like to share your experience and&nbsp;knowledge&nbsp;at our events, please let us know
            </p>
            <Button
                variant="primary"
                className="call-for-speakers-button"
                size="md"
                href="https://forms.gle/5iixksJiThWUNGvh9"
                target="_blank"
                rel="noopener noreferrer"
            >
                Apply to speak
            </Button>
        </div>
    </Block>
);
