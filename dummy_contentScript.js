/*// background script에 메시지 보내기
chrome.runtime.sendMessage({ message: "Hello from content script!" });
*/
console.log("start!");

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.message === "Hello from background") {
      console.log("OK");
    }
  });

console.log("왜 안되지?");
// popup script로 메시지 보내기
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }
//chrome.tabs.sendMessage(tabId, {warn: 'message'});
chrome.runtime.connect({ name: "content-script" });
chrome.runtime.sendMessage({ message: "Hello" }, (response) => {hello});


  

/*chrome.runtime.onMessage.addListener((message,sender,sendResponse) => {
    if(message.a == 'Hi'){ //메시지의 a가 Hi라면 Hello!라고 반응 보내기.
        sendResponse('Hello!');
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'popup origin') {
        sendResponse('popup ok');
    }})

//컨텐츠 스크립트에서 메시지 보내기
chrome.runtime.sendMessage(`Hi!`, response => {
    console.log(response); // Yeah
});

// content.js

// 웹 페이지에서 특정 id 값을 찾고 이를 백그라운드 스크립트로 전달하는 함수
function findElementByIdAndSend(idToFind) {
    chrome.runtime.sendMessage({ action: "findElementById", idToFind });
  }
  
  // 페이지가 로드될 때 실행할 코드
  // 예를 들어, 페이지 로드 후 특정 id 값을 찾으려면 다음과 같이 사용할 수 있습니다:
  document.addEventListener("DOMContentLoaded", function () {
    findElementByIdAndSend("usr_id"); // lms.sungshin login 페이지에서 id 값을 찾아오기..
  });

// 여기는 extension이 동작하는지 확인하고자 만든 코드 (통신과 관련 없음)
// 새로운 div 요소 생성
var testDiv = document.createElement("div");

// 텍스트 설정
testDiv.textContent = "TEST";

// 스타일 설정 (네모 칸 모양을 위해)
testDiv.style.backgroundColor = "red";
testDiv.style.padding = "10px";
testDiv.style.border = "1px solid black";

// 페이지의 body에 삽입
document.body.appendChild(testDiv);

alert("hello");*/