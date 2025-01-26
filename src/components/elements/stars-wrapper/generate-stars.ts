export type Star = { x: number; y: number; key: string; type: number | string };

const variants = {
    closest: {
        0: 0.7,
        1: 0.2,
        2: 0.1,
    },
    average: {
        0: 0.1,
        1: 0.2,
        2: 0.3,
        3: 0.2,
        4: 0.2,
    },
    farthest: {
        0: 0.2,
        1: 0.2,
        2: 0.1,
        3: 0.1,
        4: 0.2,
        5: 0.1,
        6: 0.1,
    },
};

const getVariant = (variant: keyof typeof variants, random: number) => {
    const entries = Object.entries(variants[variant]);
    let sumRandom = 0;
    for (const [key, value] of entries) {
        sumRandom += value;
        if (sumRandom > random) return key;
    }

    return 0;
};

export const generateStars = (container: HTMLElement, density: number) => {
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

    const horizontalStarsCount = Math.ceil(container.clientWidth / 200);
    const verticalStarsCount = Math.ceil(container.clientHeight / 200);
    const newStars: Star[] = [];
    for (let x = 0; x < horizontalStarsCount; x++) {
        for (let y = 0; y < verticalStarsCount; y++) {
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
                    newStars.push({
                        x: coordX,
                        y: coordY,
                        key: `${x}_${y}_${z}`,
                        type: getVariant("farthest", Math.random()),
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
                    newStars.push({
                        x: coordX,
                        y: coordY,
                        key: `${x}_${y}_${z}`,
                        type: getVariant("average", Math.random()),
                    });
                } else {
                    newStars.push({
                        x: coordX,
                        y: coordY,
                        key: `${x}_${y}_${z}`,
                        type: getVariant("closest", Math.random()),
                    });
                }
            }
        }
    }
    return newStars;
};
