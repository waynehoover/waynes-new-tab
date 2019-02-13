let css = `
  h1{
    text-align: center;
    margin-top: 112px;
    color:#fff;
    font-family: SF Pro Display;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 2px;
  }`
let html = `
  <h1>I am strong, happy and healthy</h1>
`

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({customCSS: css, customHTML: html});
});
