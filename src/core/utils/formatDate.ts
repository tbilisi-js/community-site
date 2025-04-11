const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const formatDate = (date: Date | string, withYear = false) => {
    const dateTarget = new Date(date);

    return `${MONTHS[dateTarget.getUTCMonth()]} ${dateTarget.getUTCDate()}${withYear ? `, ${dateTarget.getUTCFullYear()}` : ""}`;
};

export const formatLeadingZero = (num: number) => {
    return num > 9 ? num : `0${num}`;
};
