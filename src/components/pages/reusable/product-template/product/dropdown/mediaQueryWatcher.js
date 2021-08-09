export default function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
    var mql = window.matchMedia(mediaQuery);
    mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
    layoutChangedCallback(mql.matches);
  }