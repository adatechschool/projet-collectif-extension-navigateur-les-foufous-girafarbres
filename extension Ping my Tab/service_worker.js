// update extension's icon color
 function updateIcon() {
  // count tabs
  chrome.tabs.query({}, function (tabs) {
    var tabCount = tabs.length;
    var iconPath;
    var iconUrl;
    var iconTitle;
    var iconMessage;
    // set icon's color depending on number of tabs
   switch (true) {
    case tabCount < 6 : 
      iconPath = 'icons/greenlight.png';      
      break;
      case tabCount === 6 :
      iconPath = 'icons/orangelight.png';
      iconUrl = 'icons/icons8-cloud-32.png';
      iconTitle = 'Tabs alert';
      iconMessage = 'Slow down';
      break; 
      case tabCount > 11 : 
      iconPath = 'icons/redlight.png';
      iconUrl = 'icons/icons8-storm-32.png';
      iconTitle = 'Tabs alert';
      iconMessage = 'Abort mission';
    }
    // set icon's image path
    chrome.action.setIcon({ path: iconPath });
 

  if (iconPath === 'icons/greenlight.png' || iconPath === 'icons/redlight.png' || iconPath === 'icons/orangelight.png'){
    const notificationOptions = {
      type: 'basic',
      iconUrl: iconUrl,
      title: iconTitle,
      message: iconMessage
    }
 
    chrome.notifications.create(notificationOptions)
  };
})
}
// Initial icon update
updateIcon();

// Listen for tab creation and removal events
chrome.tabs.onCreated.addListener(updateIcon);

chrome.tabs.onRemoved.addListener(updateIcon);