import { Picture } from "@src/components/ui/picture";

import { Block } from "@src/components/ui/block";
import { Arrow } from "@src/components/ui/arrow";

import "./person-intro.scss";

export interface PersonIntroProps {
    name: string;
    img?: string;
}

export const PersonIntro: React.FC<PersonIntroProps> = ({ name, img }) => {
    return (
        <Block className="person-intro" id="person-intro" bodyClassName="person-intro-body">
            <div className="person-intro-avatar-wrapper">
                {img ? (
                    <Picture
                        src={img}
                        width={356}
                        height={356}
                        alt="Avatar"
                        loading="eager"
                        sizes="356px"
                        className="person-intro-avatar"
                    />
                ) : (
                    <img src="/logo-rect.png" alt="TJS logo" width={356} height={356} className="person-intro-avatar" />
                )}
            </div>
            <h1 className="person-intro-title">{name}</h1>
            <Arrow className="person-intro-arrow" />
        </Block>
    );
};
