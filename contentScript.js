console.log("start!");

const data = "익스텐션~~"

    chrome.runtime.sendMessage(
      {
        action: "sendData",
        data
      },
      (response) => {
        console.log(response);
      }
    );

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'popupSend') {
        console.log('message from popup: ' + request.payload.message);
    }

    sendResponse({});
    return true;
});



  

console.log("왜 안되지?");