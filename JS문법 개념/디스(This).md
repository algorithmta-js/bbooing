# this

![스크린샷 2022-05-11 오후 3.58.01.png](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fec75effc-88c3-4cee-b973-a8fcc08a13b4%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-05-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.58.01.png?table=block&id=45d8b347-2069-48a1-a8c9-40a0a2c1cad4&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=770&userId=&cache=v2)

자바스크립트에서의 this는 다른 언어의 개념과 달라 약간 혼란이 오기도 한다.

다른언어를 사용하다가 넘어온 개발자들은 종종 this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각한다. 자바스크립트에서는 this는 런타임에 결정된다. 메서드가 어디서 정의되었는지 상관없이 **this는 “점 앞의” 객체가 무엇인가에 따라 “자유롭게” 결정**된다.

브라우저 사이드에서는 **window**, 서버 사이드(node)에서는 **global** 객체를 의미한다.

→ 최근에는 globalThis로 통합되었다고 함. (환경에 관계없이 전역객체를 통일된 방법으로 참조할 수 있다.)

![스크린샷 2022-05-11 오후 5.42.32.png](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F069bf1ee-489e-4971-bb6b-113ca236306e%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-05-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.42.32.png?table=block&id=5c5a9c2b-d3d4-4fdf-ba9a-bece27c583f7&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=380&userId=&cache=v2)

![스크린샷 2022-05-11 오후 5.43.13.png](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3450992c-9e43-4256-aed6-c259c8a853b6%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-05-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.43.13.png?table=block&id=350f7c38-5839-487b-9342-e63cd0b4a562&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=480&userId=&cache=v2)

‘use strict’ 모드에서는 undefined가 된다.

👉  **일단, 기본적으로 브라우저 환경에서 this는 window 다. 라고 생각하자!**


### 메서드와 this
---

메서드는 객체에 저장된 정보에 접근 할 수 있어야 제 역할을 할 수 있다.

모든 메서드가 그런 것은 아니지만, 대부분의 메서드가 객체 프로퍼티의 값을 활용한다. 아래에서 obj.sayName()의 내부코드에서 객체 obj에 저장된 이름(name)을 이용해 이름을 알려주는 경우도 이런 경우 에 속한다.

**메서드 내부에서 this 키워드를 사용하면 객체에 접근 할 수 있다!**

👉 **이때, “점 앞"의 this는 객체를 나타낸다. 정확히는 메서드를 호출할 때 사용된 객체를 나타낸다.**

this가 언제 바뀔까?

**this는 호출 될 때 정해진다!**

**함수를 호출할 때 함수가 어떻게 호출 되었는지에 따라 this가 동적으로 결정된다.**

1. 함수 호출 시, 기본적으로 this는 외부함수가 아닌 전역객체를 가리킨다.

```jsx
function foo() {
  console.log("foo's this: ", this); // window
  function bar() {
    console.log("bar's this: ", this); // window
  }
  bar();
}
foo();
```

2. 메서드 호출시 .앞에 객체가 붙는다? this가 그 객체가 된다. (메소드를 소유한 객체, 즉 해당 메소드를 호출한 객체)

```jsx
const obj = {
  name: 'euna',
  sayName() {
    console.log(this.name); // euna
  },
};

obj.sayName();

const sayN = obj.sayName; // 함수 대입
sayN(); // window.name
```

3. 생성자 함수 사용 해서 객체를 생성하는 경우. <br/>
   a. 빈 객체 생성 및 this 바인딩 <br/>
        i. 생성자 함수의 코드가 실행되기 전 빈 객체가 생성되고, 이 빈 객체가 생성자 함수가 새로 생성하는 객체이다. 이후 생성자 함수 내에서 사용되는 this는 이 빈 객체를 가리킨다. <br/>
   b. this를 통한 프로퍼티 생성 <br/>
        i. 생성된 빈 객체에 this를 사용하여 동적으로 프로퍼티나 메소드 생성할 수 있다. this는 새로 생성된 객체를 가리킨다. <br/>
   c. 생성된 객체 반환 <br/>
        i. this에 바인딩된 새로 생성된 객체가 반환된다. <br/>

```jsx
function Human(name) {
  this.name = name;
}

const me = new Human('euna'); // new 해서 생성자함수를 사용하면 this가 그 객체 자기 자신이 된다.
console.log(me.name);
```

4. bind/apply/call 사용해 this를 직접적으로 변경하는 경우

```jsx
function sayName() {
  console.log(this.name);
}

sayName.bind({ name: 'euna' })(); // this를 변경.
sayName.apply({ name: 'euna' });
sayName.call({ name: 'euna' });
```

this를 사용하지 않고 외부 변수를 참조해 객체에 접근하는 것도 가능하다.

이렇게 되면 외부 변수를 사용해 객체를 참조하면 예상치 못한 에러가 발생 할 수 있다!

obj를 복사해 다른 변수에 할당 (user = obj) 하고, obj는 전혀 다른 값으로 덮어써졌다고 가정해보자.

그러면 sayName()은 원치 않는 값(null)을 참조할거다.

```jsx
let obj = {
  name: 'euna',
  sayName() {
    console.log(obj.name); // VM190:4 Uncaught TypeError: Cannot read properties of null (reading 'name')
  },
};

let user = obj;
obj = null;
user.sayName();
```


### 자유로운 this
---

동일한 함수여도 다른 객체에서 호출 되었다면 “this”가 참조하는 값이 달라진다.

규칙은 간단하다. obj.f()를 호출했다면 this는 f를 호출하는 동안의 obj이다.

아래에선 obj가 user 나 admin을 참조한다.

```jsx
let user = { name: 'euna' };
let admin = { name: 'aeuna' };

function sayHi() {
  alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// this 값이 달라짐
user.f(); // euna  (this == user)
admin.f(); // aeuna  (this == admin)
```


### this가 없는 화살표 함수
---

부모 스코프(선언)를 가리킨다.

화살표 함수는 일반 함수와 달리 **“고유한" this를 가지지 않는다**.

화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 **외부 함수에서 this 값을 가져온다**.

별개의 this가 만들어지는 건 원하지 않고, 외부 컨텍스트에 있는 this를 이용하고 싶은 경우에는 화살표 함수가 유용하다.

```jsx
const obj = {
  name: 'euna',
  sayName: () => {
    console.log(this.name); // window 가리킴.
  },
};
obj.sayName();
```

```jsx
const obj = {
  name: 'euna',
  sayName() {
    console.log(this.name); // euna
    function inner() {
      console.log(this.name); // window.name
    }
    inner(); // 함수호출할때 this를 바꿔주는 동작을 하지 않음.
    // inner.call(obj) // euna
  },
};

obj.sayName();

// 아래 예시에서 함수 inner()의 this는 외부 함수 obj.sayName()의 this가 된다.
const obj = {
  name: 'euna',
  sayName() {
    // 이 친구의 this가 obj라고 단정지을 수 없다. 호출할 때 정해진다!!!!!!!!
    console.log(this.name); // euna
    const inner = () => {
      // window를 가져오는게 아니라 부모 함수의 this를 가져온다. 호출할 때 판단한다. sayName은 obj.sayName 이때 this가 obj로 결정됨.
      console.log(this.name); // euna
    };
    inner();
  },
};

obj.sayName();
```

스코프 체인(누가 부모 스코프 누구냐를 파악하는게 중요) inner → sayName → anonymous

함수를 호출 할때 this를 바꿔주는 동작을 했냐 안했냐 파악이 중요하다.

- 객체 프로퍼티에 저장된 함수를 '메서드’라고 부릅니다.
- 메서드는 `this`로 객체를 참조합니다.
- `this` 값은 런타임에 결정됩니다.
- 함수를 선언할 때 `this`를 사용할 수 있습니다. 다만, 함수가 호출되기 전까지 `this`엔 값이 할당되지 않습니다.
- 함수를 복사해 객체 간 전달할 수 있습니다.
- 함수를 객체 프로퍼티에 저장해 `object.method()`같이 ‘메서드’ 형태로 호출하면 `this`는 `object`를 참조합니다.
- 화살표 함수는 자신만의 `this`를 가지지 않는다는 점에서 독특합니다. 화살표 함수 안에서 `this`를 사용하면, 외부에서 `this` 값을 가져옵니다.

    [[인간 JS 엔진 되기 1-6]this는 호출 때 결정된다고!!!](https://www.youtube.com/watch?v=pgo6URFz8tc)

    [메서드와 this](https://ko.javascript.info/object-methods)

    [전역객체와 globalThis](https://hoya-kim.github.io/2021/10/02/globalThis/)

    [this | PoiemaWeb](https://poiemaweb.com/js-this)
