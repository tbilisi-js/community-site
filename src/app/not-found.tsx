import { Background } from "@src/components/elements/background";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { NotFound } from "@src/components/sections/not-found";

const NotFoundPage = () => (
    <>
        <Background density={5}>
            <NotFound />
        </Background>
        <Background>
            <CatsPattern />
        </Background>
    </>
);

export default NotFoundPage;
