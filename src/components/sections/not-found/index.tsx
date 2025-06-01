import { Button } from "../../ui/button";
import { Block } from "../../ui/block";

import "./not-found.scss";

export const NotFound = () => (
    <Block id="not-found" className="not-found">
        <h1 className="not-found-error not-found-glitch">404</h1>
        <h2 className="not-found-heading">Lost in the JavaScript Galaxy!</h2>
        <div className="not-found-actions">
            <Button variant="primary" className="not-found-button" href="/">
                Fly to Base
            </Button>
            <Button
                variant="secondary"
                className="not-found-button"
                size="md"
                href="https://t.me/tbilisi_js_chat"
                target="_blank"
                rel="noopener noreferrer"
            >
                Fly to Community
            </Button>
        </div>
    </Block>
);
