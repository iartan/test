// ==UserScript==
// @name         Green Everything
// @namespace    http://tampermonkey.net/
// @version      2025-04-25
// @description  Turn everything green!
// @author       You
// @match        https://www.google.ch/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.ch
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'red';
})();
