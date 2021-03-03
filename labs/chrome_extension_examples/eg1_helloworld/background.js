var count = 0;
// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(
function(tab) {
  alert("Hello!");
  count++;
  console.log("Count: " + count);
});