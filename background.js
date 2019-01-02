  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({customCSS: 'h1{color: #fff}', customHTML: '<h1>I am happy, heathly and strong.</h1>'}, function() {
      console.log("Defaults set for new tab page.");
    });
  });
