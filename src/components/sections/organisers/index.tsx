import Image from "next/image";

import { Block } from "../../ui/block";
import { OrganiserSocial } from "@src/components/elements/organiser-social";
import { organisers } from "@src/core/mock/organisers";

import "./organisers.scss";

export interface OrganiserProps {
    avatarSrc: string;
    name: string;
    id: string;
    description: string;
    socialLink: string;
    maskImage: string;
}

const Organiser: React.FC<OrganiserProps> = ({ avatarSrc, name, id, description, socialLink, maskImage }) => (
    <div className={`organisers-card organisers-${id}`}>
        <Image
            src={avatarSrc}
            width={398}
            height={570}
            alt={`${name} Avatar`}
            className="organisers-card-img"
            loading="lazy"
        />
        <img src={maskImage} alt="" loading="lazy" className="organisers-mask" />
        <div className="organisers-info">
            <p className="organisers-card-heading">{name}</p>
            <p className="organisers-card-description">{description}</p>
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
                    maskImage={organiser.maskImage}
                />
            ))}
        </div>
    </Block>
);
