let currentHTMLEl = document.getElementById('currentHTML');
let currentCSSEl = document.getElementById('currentCSS');

// Set current state
chrome.storage.sync.get('customCSS', function(data) {
  currentCSSEl.textContent = data.customCSS;
});

chrome.storage.sync.get('customHTML', function(data) {
  currentHTMLEl.textContent = data.customHTML;
});

// Update on change
currentHTMLEl.addEventListener('change', function(){
  chrome.storage.sync.set({customHTML: currentHTMLEl.value})
})

currentCSSEl.addEventListener('change', function(){
  chrome.storage.sync.set({customCSS: currentCSSEl.value})
})
