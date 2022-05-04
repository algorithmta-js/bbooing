# Closure & Lexical Scoping


## 1. lexical scope

---

우선, 이 문제를 풀어봅시다 👀

```jsx
const like = '민초';

function one() {
    console.log('세영이 취향은 ', like);
}

function two() {
    const like = '하와이안 피자';

    one();
}

two();
```

- 답은?!
    
    *세영이 취향은 민초*
    <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/369bb876-9bda-4259-8b23-962912c2880b/%EC%BA%A1%EC%B2%98.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220504T134825Z&X-Amz-Expires=86400&X-Amz-Signature=231479affee88cb46f493b15b43aad92edfad27fb1b2b63e71c9c1524d28b3b9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%25BA%25A1%25EC%25B2%2598.PNG.png%22&x-id=GetObject"/>
    
    ~~취향은 존중해주세요 ,, 근데 하와이안은 좀 에바;;~~
    

혹시 생각한 답과 다른가요? 

자바스크립트가 ‘lexical scope’ 방식을 사용하기 때문입니다!

### 📢lexical scope 란?

---

**스코프**는 함수를 호출할 때가 아니라 **선언**할 때 생김. 정적 스코프라고도 불림

 `호출(x) 선언(o)` 

**반대로 어디서 호출됐는지에 따라 범위가 결정되는 방식은 **Dynamic scoping**

```jsx
function init() {
const name = 'Mozilla'; 

function displayName() { 
alert(name); 
}
displayName();
}

init();
```

init()라는 함수가 호출되면 name이라는 지역변수와 displayName()이라는 함수를 새롭게 생성한다.

여기서 displayName()함수는 init()라는 함수 안에 생성된 함수이기 때문에 init()함수 안에서만 실행가능하다. displayName()함수는 함수 안에 지역변수가 없지만 자신의 부모 함수인 init()함수의 지역변수에 접근할 수가 있다.

그렇기 때문에 위 코드에서 init()를 실행하면 alert창에 'Mozilla'를 띄우게 된다. 그러나 만약에 `displayName()함수 안에 const name = 'Webkit'이 있었다면` alert창에는 Mozilla대신 Webkit이 출력됐을 것이다.

위 예제에서 displayName()은 init()함수 안에서 선언되었기 때문에 displayName의 상위 스코프는 init()이다.

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d20b94d7-59ed-4bb5-9931-c6b41361cb62/%EB%A0%89%EC%8B%9C%EC%BB%AC.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220504T134854Z&X-Amz-Expires=86400&X-Amz-Signature=7ce104b767c81952a1e939907ffa5a9ff1718b94e4026cb5974ba543487a68c7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A0%2589%25EC%258B%259C%25EC%25BB%25AC.jpg%22&x-id=GetObject"/>

정리해보면, 자바스크립트는 Lexical Scope를 사용하며 이는 Scope를 **`선언된 위치를 기준`**으로 정한다. 선언된 위치를 기준으로,  **`자신의 scope -> 자신을 포함하는 외부 함수 scope -> 전역 scope`**
 순으로 변수를 찾게 된다. 이 과정은 **`변수를 찾을 때 까지`**이루어지며 최종적으로 **`전역 Scope까지 찾은 후`** 없을 경우 에러가 발생한다.

그렇다면 마지막으로 예시 한 번만 더 보자!

```jsx
const x = 1;
function foo() {
const x = 20;
bar();
}
function bar() {
console.log(x);
}
foo();
bar();
```

- 답은?!
    
    1이 두번 출력
    
    <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/21f0e7ad-3a2f-4e35-8a78-e2f52860e7fb/%EC%BA%A1%EC%B2%982.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220504T134922Z&X-Amz-Expires=86400&X-Amz-Signature=1a78e0ea2ac323412f40a38259e2f8ba9c81a535362e891c654d005a50816027&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%25BA%25A1%25EC%25B2%25982.PNG.png%22&x-id=GetObject">
    

 만약에 변수의 범위가 함수 호출 시에 결정난다면`(다시 한 번 말하지만 자바스크립트는 함수 선언시에 스코프 결정남)` 처음에 foo 함수를 실행했을 때, foo 함수 안에서 실행하고 있는 bar 함수의 변수 스코프가 함수 foo로 결정되어 20이란 값이 출력될 것이다. 그러나 자바스크립트는 lexical scopre 방식을 따르고 있기 때문에 위 코드에서 함수 bar()는 전역에서 선언되었으므로 `함수 bar의 상위 스코프는 전역`이다. 그러므로 **x는 1을 2번 출력하게 된다.**

그러니까 변수가 섞일 수 있기 때문에 전역변수를 만드는 일은 **지양**하자!  전역변수를 사용하다보면, 우연의 일치로 인해 같은 변수 이름을 사용해서 이전에 있던 변수를 덮어쓰는 불상사가 발생할 수 있다!!

## 2. Closure

---

Closure를 들어가기 전 잠시 정리!

- JavaScript는 Lexical Scope를 사용하며 이는, runtime에 동적으로 Scope를 정하지 않고 Compile 시점에 변수나 함수가 선언된 위치를 기준으로 Scope를 정한다.
- 함수 내부에 선언된 함수는, 자신을 포함하는 외부 함수와 전역 Scope에 대한 Scope Chain을 가지고 있다.
- ✨스코프체인?
    
    내부 함수에서는 외부 함수의 변수에 접근 가능하지만 외부 함수에서는 내부 함수의 변수에 접근할 수 없다는 것!
    

### 📢클로저란?

---

**: A closure is the combination of a function and the lexical environment within which that function was declared. -MDN-**

클로저는 함수와 그 함수가 선언되었을 때의 Lexical 환경의 조합.

**lexical환경은 클로져가 생성되었을 때, scope내의 모든 지역변수를 포함한다.

**: A closure is a function having access to the parent scope, even after the parent function has closed. -W3Cschools-**

클로저는 부모 함수의 실행이 끝났더라도 상위 스코프에 접근할 수 있는 함수.

정리해보면,

`Closure는 외부 함수 호출이 종료되었음에도 외부함수의 변수 or 인자에 접근 할 수 있는 함수.`

```jsx
var x = 1;

function outer(z) {
    var y = 2;
    return function inner() {
        console.log(x + y + z)
    }
}

var sum = outer(3);
sum();
```

위의 예시는 6을 console 에 출력한다. 이 결과는 **`inner`** 함수에서 **이미 실행이 종료된** **outer** 함수의 변수 y와 인자 z에 접근했다는 말이 된다. 이게 가능한 이유는 **`Scope Chain`** 때문!

 inner 함수는 outer 함수의 y,z를 참조하고 있는 **`Scope Chain`**을 가지고 있고 이 때문에 outer 함수가 종료되었음에도 **변수 y,z는 메모리에서 해제되지 않고 inner 내부에서 참조** 할 수 있다.

위 예시의 inner 처럼 **`외부 함수(outer)가 종료`**되었음에도 **`Scope Chain`**을 이용해 외부 함수의 변수, 인자에 접근 할 수 있는 함수를 **`Closure`**라 부른다.

그러면 이것을 가시적으로 보기 위해 다음의 코드를 입력하고, 개발자 도구🔨를 살펴보자!

```jsx
var x = 1;

function outer(z) {
    var y = 2;
    return function middle(p) { 
        var m = 4;
        return function inner() {
            console.log(x + y + z) // inner에서 middle 함수의 변수와 인자를 사용 x
        }
    }
}

var middle = outer(3);
var inner = middle(5);
console.dir(inner)
```

빨간색 밑줄 부분이 inner 함수의 **Scope Chain** <img src="https://miro.medium.com/max/1350/1*idVc8bTdv1lqiqKKH3_dzw.png">

빨간색 밑줄 부분이 inner 함수의 **Scope Chain** 

**`Scope Chain`**의 첫 번째 요소는 inner에서 가장 가까운 **`middle 함수의 변수, 인자`**정보를 저장하며 두 번째 요소는 **`outer 함수의 변수, 인자`**를 저장하고 있다. 마지막으로 Global 정보를 저장하고 있다.

🤪그렇다면 과연 inner 함수에서 middle 함수의 변수를 사용하지 않는다면 어떻게 나올까?

```jsx
var x = 1;

function outer(z) {
    var y = 2;
    return function middle(p) { 
        var m = 4;
        return function inner() {
            console.log(x + y + z) // inner에서 middle 함수의 변수와 인자를 사용 x
        }
    }
}

var middle = outer(3);
var inner = middle(5);
console.dir(inner)
```

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d7ac6ddf-ea28-4f36-bd36-41a0dbdb422a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220504T135036Z&X-Amz-Expires=86400&X-Amz-Signature=ea794052a2969d0b88dec1aa0dce043d0324d37f450b6ddf783b7097c907d452&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject">

아까와는 다르게, middle 함수의 p와 m을 inner 함수에서 사용하지 않을 때 scope chain을 살펴보자

결과에서 보이듯, inner 함수의 **`Scope Chain`**에서 middle에 대한 정보가 없는 것을 확인할 수 있다. 따라서 **`Scope Chain`**은 **`내부 함수가 사용하는 정보들에 대해서만 유지`**하는 것을 확인할 수 있다.

### ✔그럼, 클로저는 왜, 언제 쓸 수 있을까?

---

1. **`값의 보존하기 위해`** 사용! 

내부 함수에서 외부 함수의 변수나, 인자를 기억하고 있기 때문에 비동기 함수나 이벤트 핸들러의 내부에서 정상적인 값을 참조 할 수 있다.

비동기의 예시를 보기 전에, 일단 쉬운 예시부터 살펴보자!

```jsx
var count = 0;
function addNum() {
var count = 0;
count++;
return count;
}
addNum();
addNum();
addNum();
```

함수 addNum()을 실행할 때마다 count변수가 1씩 증가하는 함수를 만든다고 해보자.

위 함수에서 addNum()함수를 실행하여 addNum()함수 내부의 count 변수를 1 증가시켜도 addNum()함수의 실행이 끝나게 되면 지역변수 count는 사라져버리고 addNum()은 계속해서 1을 return 한다.

사실 이 코드에선 지역변수 count를 없애고, 전역변수 count를 사용하면 그만 아닌가? 라고 생각할 수 있지만,, count변수가 전역변수이기 때문에 다른 코드를 사용하여 count변수의 값을 바꿀 수 있음! 즉, 프로그램이 복잡해져 다른 코드에서 count변수를 사용하는 경우에 에러가 발생할 수 있기 때문에 우리는 count변수의 값을 오로지 addNum함수를 통해서만 바꾸길 원한다고 가정하자!

그럴 때 바로 필요한 것이 **closure**와 **self-invoking function**(or Immediate-invoking function 자기실행함수, 즉시실행함수)이다

- **즉시실행함수 더 알아보기**
    
    [Javascript에서 즉시 실행 함수 사용하기](https://cocoder16.tistory.com/44)
    

```jsx
var addNum = (function() {
var count = 0;
return function() {
count += 1;
return count;
}
})();
addNum();
addNum();
console.log(addNum()); // 3
```

`즉시실행함수`는 **정의되자마자 즉각적으로 실행되는 자바스크립트 함수(Function) 중 하나**이다.

위 즉시실행함수가 리턴하는 함수는 count 변수의 값을 기억하고 계속 유지하는 클로저다.

즉, 위 코드에서 즉시 실행함수를 addNum이란 변수에 대입하여 함수를 호출했다.

그러면 addNum함수가 실행되면서 함수 내부의 클로저 실행을 통해 count변수에 1을 증가시키는 데

이 증가된 값을 계속 가지고 있다가 addNum()을 또 실행시키면 이미 1증가된 count를 또 1증가시켜 반환한다.

즉, count변수를 함수 외부에 선언하지 않고 addNum()의 실행을 통해서만 1씩 증가시킬 수 있다.

그럼, 이제 비동기의 경우를 살펴보자!

```jsx
function a(){
	for(var i =0; i< 5;i++){
		setTimeout(()=>{
				console.log(i);
		}, i* 1000); // 여기는 0, 1000, 2000, 3000, 4000, 잘 실행됨
}
a(); //5, 5, 5 ,5, 5 

//function a 스코프는 1개고, for문의 스코프는 5개
//a 스코프에서 i는 0->5가 되는 거고, for문의 스코프 5개에서 i는 
//각각 0,1,2,3,4
```

- 왜 5가 나오나?
    
    [https://www.youtube.com/watch?v=4hhlfq3Uy6U](https://www.youtube.com/watch?v=4hhlfq3Uy6U)
    

```jsx
function a(){
	for(var i =0; i< 5;i++){
		(function(j){ //var j =i;
		setTimeout(()=>{
				console.log(i);
		}, i* 1000); 
		})(i);
}
a(); //0, 1, 2, 3, 4
```

⇒사실.. let을.. 쓰면 해결 ssap 가능.. 쓰레기 같은 var 쓰지말고 우리 let 써요^^,, 

1. `private 변수, 메소드`를 흉내낼 수 있음!

위에 적었던 코드를 다시 들고 와보자

```jsx
var addNum = (function() {
var count = 0;
return function() {
count += 1;
return count;
}
})();
addNum();
addNum();
console.log(addNum()); // 3
```

이 상황에서 addNum 내부에 있는 count에 직접 접근할 수 있는가? 

이런 경우처럼, 클로저는 특정 함수나 변수를 private 한 성격을 가지도록 사용할 수 있다! 조금 더 유의미한 예시를 보자.

```jsx
var count = (function () {
    var _count = 0;
    
    return {
        get : function () {
            return _count;
        },
        set: function(val) {
            _count = val;
        }

    }
})();

count.set(3)
console.log(count.get()); // 3
```

위의 예시를 조금 변형하였다. 여기에서는 _count에 직접 접근하지 못하도록 만들었다.

return 되는 내부함수, 즉 클로저를 get과 set의 형태로 만들어놓고 set 으로 _count를 설정, get으로 _count값을 얻어온다.

Closure를 통해 Private한 변수와 함수를 사용함으로써 OOP의 **`캡슐화`**와 **`정보 은닉`**의 이점을 제공한다. 아래와 같은 경우로 사용도 가능하다.

```jsx
var count = (function () {
    var _count = 0;
    function changeVal(val) {
        _count += val;
    } 
    
    return {
        get : function () {
            return _count;
        },
        inc: function(val) {
            changeVal(1);
        },
        dec: function(val) {
            changeVal(-1);
        }
    }
})();

count.inc()
count.inc()
count.inc()
console.log(count.get()); // 3
```

## 참고자료

---

[https://im-developer.tistory.com/63](https://im-developer.tistory.com/63)

[https://medium.com/sjk5766/lexical-scope-closure-정리-41f5d1c928e4](https://medium.com/sjk5766/lexical-scope-closure-%EC%A0%95%EB%A6%AC-41f5d1c928e4)

[https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e](https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

[https://medium.com/@coadams9/lexical-scoping-let-const-and-var-4a8c4271eb82](https://medium.com/@coadams9/lexical-scoping-let-const-and-var-4a8c4271eb82)