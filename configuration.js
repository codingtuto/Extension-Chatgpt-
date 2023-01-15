"use strict";

// Installation chrome 
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {
        chrome.tabs.create({ url: "https://chat.openai.com/auth/login" });
    }
});
