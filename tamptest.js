// ==UserScript==
// @name         Green Everything
// @namespace    http://tampermonkey.net/
// @version      202504261
// @description  Turn everything green!
// @author       You
// @match        https://www.google.ch/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.ch
// @grant        none
// @updateURL    https://raw.githubusercontent.com/iartan/test/refs/heads/main/tamptest.js
// @downloadURL    https://raw.githubusercontent.com/iartan/test/refs/heads/main/tamptest.js
// ==/UserScript==

(function() {
    'use strict';

    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'black';
})();
