// ==UserScript==
// @name         cntvHTML5
// @version      2.2
// @include      http://tv.cntv.cn/video/*
// @include      http://ent.cntv.cn/*
// @include      http://search.cctv.com/playVideo.php*
// @description  Play Videos with html5 on cntv.cn
// @license      GPLv3
// @author       LiuLang
// @email        gsushzhsosgsu@gmail.com
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// ==/UserScript==

var uw = unsafeWindow,
    log = uw.console.log,
    error = uw.console.error;

