
export function getSettings() {
    const settings = localStorage.getItem("settings")
    return settings ? settings : defaultSettings;
}

const defaultSettings = {
// [Level]: [Delay in minutes]
    0: 1,
    1: 2,
    2: 3,
    3: 4
}