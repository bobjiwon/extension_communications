// background.js

var selectWord;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    if(request.text === 'Hello'){
      sendResponse({word:selectedWord});
    }
    else {
      selectWord = request.text;
    }
    return true;
  }
)
console.log(selectedWord);




// content script와 통신을 위한 포트 생성
chrome.runtime.onConnect.addListener((port) => {
    if (port.name === "content-script") {
      console.log("Content script connected");
    }
  });
  
  chrome.runtime.onConnect.addListener((port) => {
    if (port.name === "content-script") {
      port.onMessage.addListener((message) => {
        console.log("Message from content script:", message);
      }, {return: true});
    }
    else {
      console.log("bad");
    }
  });

  // content script와 popup script로부터 메시지 받기
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message from content or popup script:", message);
  });
  
  // popup script로 메시지 보내기
  chrome.browserAction.onClicked.addListener(() => {
    chrome.runtime.sendMessage({ message: "Hello from background script!" });
  });
  
/*chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'popup origin') {
        sendResponse('popup ok');
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message === `Hi`) {
                sendResponse(`Yeah`);
            }
        })
    }})
*/
/*
//Background 메시지 보내기
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {a: 'Hi'}, data =>{    //a에 Hi를 넣어 보내고 콜백
       console.log(data); // Hello!
   });
});
*/
//백그라운드에서 메시지 받기 
/*chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message === `Hi`) {
        sendResponse(`Yeah`);
    }
})
*/