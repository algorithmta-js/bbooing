## 주제 선정 배경

Storybook 공부 → bind 메소드 → call & apply 먼저 .. → this 개념 부실 ....

### **this**

전역 스크립트가 실행되거나 함수가 호출될 때,

JS 내부 규칙에 따라 동적으로 결정된다

1. new 키워드

   → `this`는 새로 생긴 객체에 묶임

2. `obj.function()` 형태로 메소드로 호출하는 경우

   → `this`는 function을 프로퍼티로 가지는 객체

3. call / apply / bind 사용하는 경우

   → `this`는 인수로 전달된 객체

4. ES6 화살표 함수인 경우

   → `this`는 상위 스코프의 `this`

5. addEventListener 안에서 호출하는 경우

   → `this`는 event.currentTarget 의 (이벤트 리스너가 부착된) HTML 요소

6. 나머지의 경우

   → `this`는 window 객체 / 엄격 모드일 경우 undefined

7. ... 이 외의 경우 ...

예외 경우가 많기 때문에, 헷갈릴 가능성이 크다

이노믜 this를 특정시키기 위한 메소드에는 3번 경우의 call & apply 메소드가 있다

<br />
<br />

## 1. call

call 메소드는 모든 함수에서 사용할 수 있으며,

**this 값 및 인수를 전달**해 특정 값으로 지정하여 함수를 호출한다

```javascript
const jh = {
  name: "주함",
};

const dh = {
  name: "다헤",
};

function showThisName() {
  console.log(this.name);
  // 여기서 this는 window
}

showThisName(); // 아무것도 안 나옴
showThisName.call(jh); // 주함
showThisName.call(dh); // 다헤
```

함수를 호출하면서 call을 사용하고, this로 사용할 객체를 넘기면

해당 함수가 괄호 안에 있는 객체의 method인 것처럼 사용할 수 있다

즉, 새 객체를 위한 메소드를 재작성할 필요 없이 call()을 이용해 **다른 객체에 상속**할 수 있다

- 공식문서 예시

  ```tsx
  function Product(name, price) {
    this.name = name;
    this.price = price;

    if (price < 0) {
      throw RangeError(
        "Cannot create product " + this.name + " with a negative price"
      );
    }
  }

  function Food(name, price) {
    Product.call(this, name, price);
    this.category = "food";
  }

  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = "toy";
  }

  const cheese = new Food("feta", 5);
  const fun = new Toy("robot", 40);
  ```

`func.call(thisArg[, arg1[, arg2[, …]]])`

call의 첫 번째 매개변수는 this로 사용할 값이고,

매개변수가 더 있으면 호출하는 함수의 인자(argument)로 전달된다.

즉, 두 번째 매개변수부터는 함수가 사용할 매개변수(parameter)를 순서대로 적은 것이다

```javascript
// update 함수는 생일과 직업을 받아서 객체의 정보를 업데이트 한다.
function update(birthday, job) {
  this.birthday = birthday;
  this.job = job;
}

update.call(jh, 0226, "student");
console.log(jh); // {name: 'jh', birthday: 0226, job: 'student'}

update.call(dh, 1234, "teacher");
console.log(dh); // {name: 'dh', birthday: 1234, job: 'sister'}
```

<br />
<br />

## 2. apply

매개변수를 처리하는 방법을 제외하면 call과 완전히 똑같다!!

`func.apply(thisArg, [argsArray])`

call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.

```javascript
function update(birthday, job) {
  this.birthday = birthday;
  this.job = job;
}

update.apply(jh, [990101, "student"]);
console.log(jh); // {name: '주함', birthday: 0226, job: 'student'}

update.apply(dh, [890202, "teacher"]);
console.log(dh); // {name: 'Tom', birthday: 1234, job: 'sister'}
```

apply는 배열 요소를 함수 매개변수로 사용할 때 유용하다.

apply는 두 번째 매개변수로 배열을 전달하면, 그 요소들을 차례대로 인수로 사용한다.

```javascript
const nums = [3, 10, 1, 6, 4];

// 1. spread 연산자
const minNum = Math.min(...nums);
const maxNum = Math.max(...nums);

// 2. apply
// null은 this로 사용될 값인데, min과 max는 this가 필요하지 않아서 아무 값이나 넣은 것
const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.apply(null, nums);
// = Math.max.apply(null, [3, 10, 1, 6, 4]);
// = Math.max.call(null, ...nums);

console.log(minNum);
console.log(maxNum);
```

배열에 배열을 붙이는 기능도 가능하다!

```tsx
const array = ['a', 'b'];
const elements = [0, 1, 2];

**array**.push.apply(**array**, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

`push`는 배열에 단일 요소만 추가하고,

`concat`은 새 배열을 만들어 반환한다

기존 배열에 추가하고 싶다면? `push.apply` !

<br />
<br />

## 정리

### call과 apply의 공통점과 차이점[](https://frontendinterviewhandbook.com/kr/javascript-questions/#call%EA%B3%BC-apply%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94)

- 공통점
  call과 apply는 모두 함수를 호출하는데 사용되며,
  **첫 번째 매개변수는** 함수 내에서 **this**의 값으로 사용된다
- 차이점
  **call**은 **쉼표**로 구분된 인수를 두 번째 인수로 취하고,
  **apply**는 인수의 **배열**을 두 번째 인수로 취한다
  (call은 comma, apply는 배열 array를 받는다고 기억하면 쉽다)

<br />
<br />

---

<br />
<br />

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

[Function.prototype.apply() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

[The Simple Rules to 'this' in Javascript](https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3)

[this를 변경하는 call(), apply(), bind()](https://leehwarang.github.io/docs/tech/call_apply_bind.html)

다음은 bind 박살~.~
