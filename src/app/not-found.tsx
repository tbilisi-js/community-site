import { StarsWrapper } from "@src/components/elements/stars-wrapper";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { NotFound } from "@src/components/sections/not-found";

const NotFoundPage = () => (
    <>
        <StarsWrapper density={5}>
            <NotFound />
        </StarsWrapper>
        <StarsWrapper>
            <CatsPattern />
        </StarsWrapper>
    </>
);

export default NotFoundPage;
