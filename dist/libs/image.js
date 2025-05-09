"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradePosterUrl = upgradePosterUrl;
function upgradePosterUrl(url) {
    return url.replace(/\/s\d+\//, "/s1600/");
}
