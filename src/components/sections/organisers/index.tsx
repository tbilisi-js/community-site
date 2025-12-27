import Image from "next/image";

import { OrganiserSocial } from "@src/components/elements/organiser-social";
import { organisers } from "@src/core/mock/organisers";
import { Icon } from "@src/components/ui/icon";
import { Block } from "@src/components/ui/block";

import "./organisers.scss";

export interface OrganiserProps {
    avatarSrc: string;
    name: string;
    id: string;
    description: string;
    socialLink: string;
}

const Organiser: React.FC<OrganiserProps> = ({ avatarSrc, name, id, description, socialLink }) => (
    <div className={`organisers-card organisers-${id}`}>
        <Image
            src={avatarSrc}
            width={398}
            height={570}
            alt={`${name} Avatar`}
            className="organisers-card-img"
            loading="lazy"
        />
        <div className="organisers-info">
            <p className="organisers-card-heading">
                <Icon name="corner-bottom-left" className="organisers-card-heading-top-corner" width={16} height={16} />
                {name.replace(" ", "\n")}
                <Icon
                    name="corner-bottom-left"
                    className="organisers-card-heading-bottom-corner"
                    width={16}
                    height={16}
                />
            </p>

            <p className="organisers-card-description">
                {description}
                <Icon
                    name="corner-bottom-right"
                    className="organisers-card-description-right-corner"
                    width={16}
                    height={16}
                />
            </p>
        </div>
        <OrganiserSocial socialLink={socialLink} />
    </div>
);

export const Organisers = () => (
    <Block id="organisers" bodyClassName="organisers-body">
        <h2 className="organisers-heading">Meet the organisers</h2>
        <div className="organisers-list">
            {organisers.map((organiser) => (
                <Organiser
                    key={organiser.id}
                    avatarSrc={organiser.avatarSrc}
                    name={organiser.name}
                    id={organiser.id}
                    description={organiser.description}
                    socialLink={organiser.socialLink}
                />
            ))}
        </div>
    </Block>
);
