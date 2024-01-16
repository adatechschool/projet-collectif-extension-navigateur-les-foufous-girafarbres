// update extension's icon color
function updateIcon() {
  // count tabs
  chrome.tabs.query({}, function (tabs) {
    var tabCount = tabs.length;
    var iconPath;
    // set icon's color depending on number of tabs
    if (tabCount < 6) {
      iconPath = 'icons/greenlight.png';
    } else if (tabCount < 12) {
      iconPath = 'icons/orangelight.png';
    } else {
      iconPath = 'icons/redlight.png';
    }
    // set icon's image path
    chrome.action.setIcon({ path: iconPath });
  });
}

// Initial icon update
updateIcon();

// Listen for tab creation and removal events
  chrome.tabs.onCreated.addListener(updateIcon);

  chrome.tabs.onRemoved.addListener(updateIcon);