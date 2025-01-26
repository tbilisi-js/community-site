export type Star = { x: number; y: number; key: string; size: number };

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

    const horizontalStarsCount = Math.ceil(container.clientWidth / 150);
    const verticalStarsCount = Math.ceil(container.clientHeight / 150);
    const newStars: Star[] = [];
    for (let x = 0; x < horizontalStarsCount; x++) {
        for (let y = 0; y < verticalStarsCount; y++) {
            for (let z = 0; z < Math.random() * density; z++) {
                const coordX = x * 150 + Math.floor(Math.random() * 150);
                const coordY = y * 150 + Math.floor(Math.random() * 150);

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
                        size: Math.random() > 0.2 ? 8 : 16,
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
                        size: Math.random() > 0.6 ? 4 : 8,
                    });
                } else {
                    newStars.push({
                        x: coordX,
                        y: coordY,
                        key: `${x}_${y}_${z}`,
                        size: Math.random() > 0.2 ? 4 : 8,
                    });
                }
            }
        }
    }
    return newStars;
};
