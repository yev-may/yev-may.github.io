const TIME_UNITS_MULTIPLIERS = {
    m: 1,
    h: 60,
    d: 60 * 24,
};

export const DEFAULT_SETTINGS = {
    0: "1h",
    1: "1d",
    2: "2d",
    3: "4d",
    4: "7d",
    5: "15d",
    6: "30d",
    7: "60d"
}

export function saveSettings(settings) {
    localStorage.setItem("settings", JSON.stringify(settings));
}

export function getDelayForLevel(level) {
    return deserializeToMinutes(getSettings()[level]);
}

export function getSettings() {
    const settings = localStorage.getItem("settings")
    return settings ? JSON.parse(settings) : DEFAULT_SETTINGS;
}

function deserializeToMinutes(serializedValues) {
    return serializedValues.split(" ")
        .map(serializedValue => {
            const timeUnit = serializedValue.slice(serializedValue.length - 1);
            const value = + serializedValue.slice(0, serializedValue.length - 1);
            return value * TIME_UNITS_MULTIPLIERS[timeUnit];
        }).reduce((a, b) => a + b, 0);
}
