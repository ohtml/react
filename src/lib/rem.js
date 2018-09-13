(function (doc, win) {
    var docEl = doc.documentElement;
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    let recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}(document,window));

