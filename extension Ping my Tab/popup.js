// check total amount of tabs
function countingTabs() {
    chrome.tabs.query({}, function (tabs) {
      var tabCount = tabs.length;
      //writes number of tabs
      document.getElementById('tabCounter').innerText = 'Tabs: ' + tabCount;
    });
  }
  countingTabs();
