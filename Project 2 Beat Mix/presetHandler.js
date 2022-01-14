// Use this presets array inside your presetHandler
const presets = require("./presets");

// Complete this function:
const presetHandler = (method, presetIndex, newPresetArray = []) => {
    if (method == "GET") {
        if (presets[presetIndex]) {
            return [200, presets[presetIndex]];
        } else {
            return [404];
        }
    } else if (method == "PUT") {
        if (presets[presetIndex]) {
            presets[presetIndex] = newPresetArray;
            return [200, presets[presetIndex]];
        } else {
            return [404];
        }
    } else {
        return [400];
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
