/*// background script에 메시지 보내기
chrome.runtime.sendMessage({ message: "Hello from popup script!" });

// background script로부터 메시지 받기
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message from background script:", message);
});
*/
console.log("popup log");

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(
    tabs[0].id,
    {
      type: "popupSend",
      yourData: "data..."
    },
    (response) => {
      console.log(response);
    }
  );
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action == "sendData") {
    const { data } = request;
    sendResponse({ res: data });
  }
});

// 버튼 요소를 가져옵니다.
const checkButton = document.getElementById("checkButton");

// 버튼이 클릭되었을 때 실행될 함수를 정의합니다.
function handleClick() {
    // 이 부분에 실행하고자 하는 JavaScript 코드를 작성합니다.
    alert("버튼이 클릭되어 JavaScript 코드가 실행됩니다.");
    console.log("버튼 눌렸음!");
}

// 버튼 클릭 이벤트에 함수를 연결합니다.
checkButton.addEventListener("click", handleClick);

// content script로부터 메시지 받기
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
/*
chrome.runtime.sendMessage("popup origin");
console.log("hello");*/