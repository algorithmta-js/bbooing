## 🌑 소개

다른 언어들과 달리, Javascript에는 내장된 Stack, Queue, Deque 객체가 없다.

따라서 `Array` 객체를 사용하여 Stack, Queue, Deque를 구현하게 된다.

`Array`는 크기를 동적으로 늘였다 줄일 수 있다.

즉, C++과 같은 정적 언어에서의 배열과 달리 원소를 추가하면 길이가 늘어나고,

임의의 인덱스의 요소에도 접근・할당할 수 있다.

(`Array`는 프로퍼티 키가 숫자열인 객체)

<br />

---

<br />

## 🌒 스택 (Stack)

![https://images.velog.io/images/yoonvelog/post/e6da9d20-26ad-42c5-ae43-67e4755e5d30/image.png](https://images.velog.io/images/yoonvelog/post/e6da9d20-26ad-42c5-ae43-67e4755e5d30/image.png)

- 데이터를 집어넣을 수 있는 선형(linear) 자료형
- 나중에 집어넣은 데이터가 먼저 나오는, LIFO(Last In First Out) 구조이다
- 데이터를 집어넣는 push, 데이터를 추출하는 pop, 맨 나중에 집어넣은 데이터를 확인하는 peek 등의 작업을 할 수 있다
- C언어에서 peek? index? 로 맨 위를 가리키던 변수는, length()로 간단하게 처리한다

**주요 작업**

`push()` : 스택에 원소 추가

`pop()` : 스택 맨 위의 원소 삭제하며 반환

`peek()` : 스택 맨 위의 원소를 반환

`size()` : 스택의 원소의 총 갯수를 반환

`isEmpty()` : 스택이 비었는지 확인

- 코드

  ```tsx
  class Stack {
    constructor() {
      this.arr = [];
    }
    push(item) {
      this.arr.push(item);
    }
    pop() {
      return this.arr.pop();
    }
    peek() {
      return this.arr[this.arr.length - 1];
    }
    size() {
      return this.arr.length;
    }
    isEmpty() {
      return this.arr.length === 0;
    }
  }

  const stack = new Stack();
  stack.push(1); // [1]
  stack.push(2); // [1, 2]
  stack.pop(); // [1]
  ```

### 실전 적용

[3986번: 좋은 단어](https://www.acmicpc.net/problem/3986)

- 답

  ```tsx
  function checkGoodWord(str) {
    const stack = [];

    for (let letter of str) {
      if (stack.length === 0) {
        // 처음
        stack.push(letter);
      } else {
        if (stack[stack.length - 1] === letter) {
          // 같은 글자, 좋은 단어
          stack.pop();
        } else {
          // 다른 글자
          stack.push(letter);
        }
      }
    }

    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  ```

<br />

---

<br />

## 🌓 큐 (Queue)

![https://velog.velcdn.com/images%2Fyoonvelog%2Fpost%2Fb197e698-5869-464e-9fce-c0533c7a9c10%2Fimage.png](https://velog.velcdn.com/images%2Fyoonvelog%2Fpost%2Fb197e698-5869-464e-9fce-c0533c7a9c10%2Fimage.png)

- 데이터를 집어넣을 수 있는 선형(linear) 자료형
- 먼저 집어넣은 데이터가 먼저 나오는 FIFO(First In First Out) 구조이다.
- 데이터를 집어넣는 enqueue, 데이터를 추출하는 dequeue 등의 작업을 할 수 있다.

**주요작업**

`enqueue()` : 큐에 자료를 넣는다.

`dequeue()` : 큐의 자료를 뺀다

`front()` : 큐의 가장 앞에 있는 자료를 보는 연산

`back()`: 큐의 가장 뒤에 있는 자료를 보는 연산

`isEmpty()` : 큐가 비어있는지 아닌지 알아보는 연산

`size()` : 큐에 저장되어 있는 자료의 개수를 알아보는 연산

- 코드

  ```tsx
  class Queue {
    constructor() {
      this.arr = [];
    }
    enqueue(value) {
      this.arr.push(value);
    }
    dequeue() {
      return this.arr.**shift()**;
    }
    size() {
      return this.arr.length;
    }
    peek() {
      return this.arr[0];
    }
    isEmpty() {
      return this.arr.length === 0;
    }
  }

  const queue = new Queue();
  queue.enqueue(1); // [1]
  queue.enqueue(2); // [1, 2]
  queue.enqueue(3); // [1, 2, 3]

  queue.dequeue(); // [2, 3]
  queue.size(); // 2

  console.log(queue);
  ```

### 실전 적용

[](https://www.acmicpc.net/problem/1158)

- 답 (빠른 답 x)

  ```tsx
  const array = [];
  const answer = [];

  for (let i = 1; i <= N; i++) {
    array.push(i);
  }

  let cnt = 1;
  while (array.length) {
    if (cnt !== K) {
      // 돌려돌려돌림판
      array.push(array.shift());
      cnt++;
    } else {
      // 제거
      answer.push(array.shift());
      cnt = 1;
    }
  }
  ```

<br />

---

<br />

## 🌔 덱 (Deque)

- 덱은 Double-ended Queue 의 약자
- 스택과 큐를 합친 자료구조로, **양쪽 끝에서 삽입과 삭제가 모두 가능한 큐**이다

**주요작업**

`push_front()` : 덱의 앞에 자료를 넣는 연산

`push_back()` : 덱의 뒤에 자료를 넣는 연산

`pop_front()` : 덱의 앞에서 자료를 빼는 연산

`pop_back()` : 덱의 뒤에서 자료를 빼는 연산

`front()` : 덱의 가장 앞에 있는 자료를 보는 연산

`back()` : 덱의 가장 뒤에 있는 자료를 보는 연산

- 코드

  ```tsx
  class Deque {
    constructor() {
      this.data = [];
    }

    push_front(element) {
      this.data.**unshift(element)**;
    }

    push_back(element) {
      this.data[this.rear] = element;
    }

    pop_front() {
      if (this.isEmpty() === false) {
        return this.data.shift();
      }
      return false;
    }

    pop_back() {
      if (this.isEmpty() === false) {
        return this.data.pop();
      }
      return false;
    }

    isEmpty() {
      return this.data.length === 0;
    }

    const deque = new Deque();
    deque.push_back(1); // [1]
    deque.push_back(3); // [1, 3]
    deque.push_front(0); // [0, 1, 3]
    deque.pop_back(); // [0, 1]
  }
  ```

<br />

---

<br />

## 🌕 **우선순위 큐 (priority queue)**

**우선순위 큐**는 평범한 큐나 스택과 비슷한 축약 자료형이다

단, 가장 먼저 혹은 나중에 입력된 자료가 가장 먼저 꺼내지는 것이 아니라,

**우선순위가 가장 높은 자료가 가장 먼저 꺼내진다**

이를 균형 잡힌 이진 검색 트리를 사용하면,

(우선순위가) 최대인 원소를 찾아 삭제하는 일과 새 원소를 삽입하는 일 모두 O(logN) 시간에 할 수 있다

하지만 이보다 훨씬 **단순한 구조**로 구현할 수 있는데,

그 중 **대표적인 것이 힙(heap)이라는 트리**이다

<br />

---

<br />

[자료구조(스택, 큐, 덱) (easy)](https://www.acmicpc.net/workbook/view/7750)

[0x08강 - 스택의 활용(수식의 괄호 쌍)](https://www.acmicpc.net/workbook/view/7312)

[0x05강 - 스택](https://www.acmicpc.net/workbook/view/7309)
