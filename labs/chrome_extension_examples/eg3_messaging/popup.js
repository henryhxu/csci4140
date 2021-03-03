// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function setChildTextNode(elementId, text) {
  document.getElementById(elementId).innerText = text;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#testMessage').addEventListener(
      'click', testMessage);
  document.querySelector('#testConnect').addEventListener(
      'click', testConnect);
});

// Tests the roundtrip time of sendMessage().
function testMessage() {
  setChildTextNode("resultsMessage", "running...");

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var t0 = performance.now();
    var tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, {counter: 1}, function handler(response) {
      if (response.counter < 10) {
        chrome.tabs.sendMessage(tab.id, {counter: response.counter}, handler);
         console.log(tab.id);
      } else {
        var t1 = performance.now();
        var msec = Math.round((t1 - t0));
        setChildTextNode("resultsMessage", msec + "msec");
      }
    });
  });
}

// Tests the roundtrip time of Port.postMessage() after opening a channel.
function testConnect() {
  setChildTextNode("resultsConnect", "running...");

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var t0 = performance.now();

    var port = chrome.tabs.connect(tabs[0].id);
    port.postMessage({counter: 1});
    port.onMessage.addListener(function getResp(response) {
      if (response.counter < 10) {
        port.postMessage({counter: response.counter});
      } else {
        var t1 = performance.now();
        var msec = Math.round((t1 - t0));
        setChildTextNode("resultsConnect", msec + "msec");
      }
    });
  });
}