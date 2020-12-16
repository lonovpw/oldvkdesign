// ==UserScript==
// @name         VkKalFixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ok
// @match        *://*.vk.com/*
// @grant        none
// ==/UserScript==

new MutationObserver(function(mutations) {
   document.body.classList.remove('new_header_design');
}).observe(document, {childList: true, subtree: true});
