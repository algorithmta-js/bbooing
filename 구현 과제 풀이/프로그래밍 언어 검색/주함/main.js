// 버벅임 ... 서버 키고 실행해야 함
// 할 때마다 실행? 닫기?
// 방향키, 보너스 제외 1시간 반

const $ = (selector) => document.querySelector(selector);

const resultContainer = $(".Suggestion");
const resultWrapper = resultContainer.querySelector("ul");
const resultArr = [];

let focusingIdx = 0;

function renderKeyword() {
  const renderingWrapper = $(".SelectedLanguage").querySelector("ul");

  renderingWrapper.innerHTML = "";
  resultArr.map((result) => {
    const li = document.createElement("li");
    li.innerText = result;
    renderingWrapper.appendChild(li);
  });
}

function addRenderingKeyword(result) {
  window.alert(result);

  if (resultArr.includes(result)) return;

  if (resultArr.length >= 5) resultArr.shift();
  resultArr.push(result);

  renderKeyword();
}

function separateResultStr(result, keyword) {
  const _result = (result + "").toLowerCase();
  const _keyword = (keyword + "").toLowerCase();

  const keywordLength = _keyword.length;
  const matchingIdx = _result.indexOf(_keyword);

  const str1 = _result.slice(0, matchingIdx);
  const str2 = _result.slice(matchingIdx, matchingIdx + keywordLength);
  const str3 = _result.slice(matchingIdx + keywordLength);

  return `${str1}<span class="Suggestion__item--matched">${str2}</span>${str3}`;
}

function focusListWithArrowKeyNEnter(e) {
  const maxLength = resultWrapper.childNodes.length;
  const prevFocusingIdx = focusingIdx;

  switch (e.key) {
    case "Enter":
      addRenderingKeyword(resultWrapper.childNodes[focusingIdx].innerText);
      return;
    case "ArrowUp":
      focusingIdx = (focusingIdx - 1) % maxLength;
      break;
    case "ArrowDown":
      focusingIdx = (focusingIdx + 1) % maxLength;
      break;
    default:
      break;
  }

  resultWrapper.childNodes[prevFocusingIdx]?.classList.remove(
    "Suggestion__item--selected"
  );
  resultWrapper.childNodes[focusingIdx]?.classList.add(
    "Suggestion__item--selected"
  );
}

async function handleInputKeyword(keyword, key) {
  if (`${key}` === "ArrowUp" || `${key}` === "ArrowDown") return;

  // 함수로 분리하면 Promise 반환?
  const response = await fetch(
    `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${keyword}`,
    {
      method: "GET",
    }
  );
  const resultData = await response.json();

  if (keyword === "" || resultData.length === 0) {
    resultWrapper.innerHTML = "";
    resultContainer.style.display = "none";
    return;
  } else {
    resultContainer.style.display = "block";
  }

  resultWrapper.innerHTML = "";
  resultData.map((result, idx) => {
    const li = document.createElement("li");

    if (idx === focusingIdx) {
      li.setAttribute("class", "Suggestion__item--selected");
    }

    li.innerHTML = separateResultStr(result, keyword);
    li.addEventListener("click", () => addRenderingKeyword(result));
    resultWrapper.appendChild(li);
  });
}

function init() {
  const form = $("form.SearchInput");
  form.addEventListener("submit", (e) => e.preventDefault());

  resultContainer.style.display = "none";

  const input = $(".SearchInput__input");
  input.addEventListener("keyup", (e) =>
    handleInputKeyword(e.target.value, e.key)
  );
  input.focus();

  document.addEventListener("keyup", focusListWithArrowKeyNEnter);
}

init();

// useEffect 없이 디바운스?
// API 캐싱?
