import React, { Component } from 'react';

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
    document.body.style.zoom = 0.8;
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
    document.body.style.zoom = 0.75;
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
    document.body.style.zoom = 1.1;
  }

  return os;
}

export default class DetectOS extends Component {
  render() {
    return <div>{getOS()}</div>;
  }
}
