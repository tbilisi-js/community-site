import { Button } from "../../ui/button";
import { Block } from "../../ui/block";

import "./join-us.scss";

export const JoinUs = () => (
    <Block id="join-us" className="join-us">
        <h2 className="join-us-heading">Make tech not war</h2>
        <Button
            variant="primary"
            className="join-us-button"
            size="md"
            href="https://t.me/tbilisi_js_chat"
            target="_blank"
            rel="noopener noreferrer"
        >
            Join Us
        </Button>
    </Block>
);
