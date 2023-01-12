// ==UserScript==
// @name         24-hour blaseball schedule
// @namespace    https://github.com/winterhazelly/blaseball-scripts/
// @version      0.1
// @description  changes the hour headers on the betting page to 24-hour format
// @author       Levi @winterhazelly
// @match        https://www.blaseball.com/*
// @match        https://blaseball.com/*
// ==/UserScript==

(function(){

    'use strict';
    function clock24(){
        document.querySelectorAll(".hour__time").forEach(
            element => (element.innerHTML = element.parentNode.parentNode.id.slice(-8,-3))
        );
    };

    const main = document.getElementsByTagName("body")[0];
    const config = { childList: true, subtree: true, attributes: true };

    const callback = function(mutationsList, observer) {

        clock24();

        observer.disconnect();

        observer.observe(main, config);

    }

    const observer = new MutationObserver(callback);
    observer.observe(main, config);

})();
