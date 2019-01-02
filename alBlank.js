chrome.storage.sync.get('customHTML', function(data) {
  document.body.innerHTML = data.customHTML;
});

chrome.storage.sync.get('customCSS', function(data) {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = data.customCSS;
  document.getElementsByTagName('head')[0].appendChild(style);
})
