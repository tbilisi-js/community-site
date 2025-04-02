import { formatDate } from "@src/core/utils/formatDate";

export interface TapeContentProps {
    date: string;
    isLeft?: boolean;
}

export const TapeContent: React.FC<TapeContentProps> = ({ date, isLeft }) => {
    return isLeft ? (
        <>
            {" "}
            <span className="tapes-dot" /> {formatDate(date)} <span className="tapes-dot" /> Online{" "}
            <span className="tapes-dot" /> Tbilisi, Georgia
        </>
    ) : (
        <>
            {formatDate(date)} <span className="tapes-dot" /> Online <span className="tapes-dot" /> Tbilisi, Georgia{" "}
            <span className="tapes-dot" />{" "}
        </>
    );
};
