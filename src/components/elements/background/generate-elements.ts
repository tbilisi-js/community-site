import { type ElementView, type Element } from "./types";
import { VARIANTS } from "./data";

const getElementView = (options: (ElementView & { weight: number })[], random: number): ElementView => {
    let sumRandom = 0;
    for (const { type, size, weight, addons } of options) {
        sumRandom += weight;
        if (sumRandom > random) return { type, size, addons };
    }

    return { type: "star1", size: 6, addons: [] };
};

const getCurrentEvent = () => {
    const currentEvent = Object.values(VARIANTS).find((data) => {
        const { from, to } = data;
        const now = new Date();
        const currentYear = now.getFullYear();
        const fromDate = new Date(`${currentYear}-${from}T00:00:00.000Z`);
        const toDate = new Date(`${currentYear}-${to}T23:59:59.000Z`);
        const fromMonth = +from.split("-")[0];
        const toMonth = +to.split("-")[0];

        const isCrossYear = fromMonth > toMonth;

        if (isCrossYear) {
            const inAfterFromDate = now >= fromDate;
            const inBeforeToDate = now.getMonth() <= toMonth && now <= toDate;

            return inAfterFromDate || inBeforeToDate;
        }

        return now >= fromDate && now <= toDate;
    });
    return currentEvent;
};

export const generateElements = (container: HTMLElement, density: number): Element[] => {
    const currentEvent = getCurrentEvent();
    const options = currentEvent?.options || VARIANTS.base.options;
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const containerLeft = container.offsetLeft;
    const containerTop = container.offsetTop;
    const containerElements = Array.from(container.querySelectorAll<HTMLElement>("a,img,p,h1,h2,h3,h4,h5,h6,svg")).map(
        (elem) => {
            const rect = elem.getBoundingClientRect();

            return {
                x: scrollX + rect.x,
                y: scrollY + rect.y,
                width: rect.width,
                height: rect.height,
            };
        },
    );

    const horizontalElementsCount = Math.ceil(container.clientWidth / 200);
    const verticalElementsCount = Math.ceil(container.clientHeight / 200);
    const newElements: Element[] = [];
    for (let x = 0; x < horizontalElementsCount; x++) {
        for (let y = 0; y < verticalElementsCount; y++) {
            for (let z = 0; z < Math.random() * density; z++) {
                const coordX = x * 200 + Math.floor(Math.random() * 200);
                const coordY = y * 200 + Math.floor(Math.random() * 200);

                if (
                    window.innerWidth > 767 &&
                    containerElements.every((elem) => {
                        return (
                            coordX + containerLeft < elem.x - 180 ||
                            coordX + containerLeft > elem.x + elem.width + 180 ||
                            coordY + containerTop < elem.y - 180 ||
                            coordY + containerTop > elem.y + elem.height + 180
                        );
                    })
                ) {
                    newElements.push({
                        x: coordX,
                        y: coordY,
                        key: `${x}_${y}_${z}`,
                        view: getElementView(options.farthest, Math.random()),
                        random: Math.ceil(Math.random() * 100),
                    });
                } else if (
                    !containerElements.some((elem) => {
                        return (
                            coordX + containerLeft > elem.x - 30 &&
                            coordX + containerLeft < elem.x + elem.width + 30 &&
                            coordY + containerTop > elem.y - 30 &&
                            coordY + containerTop < elem.y + elem.height + 30
                        );
                    })
                ) {
                    newElements.push({
                        x: coordX,
                        y: coordY,
                        key: `${x}_${y}_${z}`,
                        view: getElementView(options.average, Math.random()),
                        random: Math.ceil(Math.random() * 100),
                    });
                } else {
                    newElements.push({
                        x: coordX,
                        y: coordY,
                        key: `${x}_${y}_${z}`,
                        view: getElementView(options.closest, Math.random()),
                        random: Math.ceil(Math.random() * 100),
                    });
                }
            }
        }
    }
    return newElements;
};
