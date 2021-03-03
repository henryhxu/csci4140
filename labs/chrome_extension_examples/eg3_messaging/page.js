// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

console.log("Content script is loaded");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(sender.tab ?
                "from a content script:" + sender.tab :
                "from the extension");
    sendResponse({counter: request.counter+1});
  }
);

chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    console.log(msg);
    port.postMessage({counter: msg.counter+1});
  });
});