// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action == "sendData") {
      const { data } = request;
      sendResponse({ res: data });
    }
  });

console.log("hello background");
//backgroundScript log는 대체 어디 찍히는 걸까 ..........
