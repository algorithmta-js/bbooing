## π μκ°

λ€λ₯Έ μΈμ΄λ€κ³Ό λ¬λ¦¬, Javascriptμλ λ΄μ₯λ Stack, Queue, Deque κ°μ²΄κ° μλ€.

λ°λΌμΒ `Array`Β κ°μ²΄λ₯Ό μ¬μ©νμ¬ Stack, Queue, Dequeλ₯Ό κ΅¬ννκ² λλ€.

`Array`λ ν¬κΈ°λ₯Ό λμ μΌλ‘ λμλ€ μ€μΌ μ μλ€.

μ¦, C++κ³Ό κ°μ μ μ  μΈμ΄μμμ λ°°μ΄κ³Ό λ¬λ¦¬ μμλ₯Ό μΆκ°νλ©΄ κΈΈμ΄κ° λμ΄λκ³ ,

μμμ μΈλ±μ€μ μμμλ μ κ·Όγ»ν λΉν  μ μλ€.

(`Array`λ νλ‘νΌν° ν€κ° μ«μμ΄μΈ κ°μ²΄)

<br />

---

<br />

## π μ€ν (Stack)

![https://images.velog.io/images/yoonvelog/post/e6da9d20-26ad-42c5-ae43-67e4755e5d30/image.png](https://images.velog.io/images/yoonvelog/post/e6da9d20-26ad-42c5-ae43-67e4755e5d30/image.png)

- λ°μ΄ν°λ₯Ό μ§μ΄λ£μ μ μλ μ ν(linear) μλ£ν
- λμ€μ μ§μ΄λ£μ λ°μ΄ν°κ° λ¨Όμ  λμ€λ, LIFO(Last In First Out) κ΅¬μ‘°μ΄λ€
- λ°μ΄ν°λ₯Ό μ§μ΄λ£λ push, λ°μ΄ν°λ₯Ό μΆμΆνλ pop, λ§¨ λμ€μ μ§μ΄λ£μ λ°μ΄ν°λ₯Ό νμΈνλ peek λ±μ μμμ ν  μ μλ€
- CμΈμ΄μμ peek? index? λ‘ λ§¨ μλ₯Ό κ°λ¦¬ν€λ λ³μλ, length()λ‘ κ°λ¨νκ² μ²λ¦¬νλ€

**μ£Όμ μμ**

`push()`Β : μ€νμ μμ μΆκ°

`pop()`Β : μ€ν λ§¨ μμ μμ μ­μ νλ©° λ°ν

`peek()`Β : μ€ν λ§¨ μμ μμλ₯Ό λ°ν

`size()`Β : μ€νμ μμμ μ΄ κ°―μλ₯Ό λ°ν

`isEmpty()`Β : μ€νμ΄ λΉμλμ§ νμΈ

- μ½λ

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

### μ€μ  μ μ©

[3986λ²: μ’μ λ¨μ΄](https://www.acmicpc.net/problem/3986)

- λ΅

  ```tsx
  function checkGoodWord(str) {
    const stack = [];

    for (let letter of str) {
      if (stack.length === 0) {
        // μ²μ
        stack.push(letter);
      } else {
        if (stack[stack.length - 1] === letter) {
          // κ°μ κΈμ, μ’μ λ¨μ΄
          stack.pop();
        } else {
          // λ€λ₯Έ κΈμ
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

## π ν (Queue)

![https://velog.velcdn.com/images%2Fyoonvelog%2Fpost%2Fb197e698-5869-464e-9fce-c0533c7a9c10%2Fimage.png](https://velog.velcdn.com/images%2Fyoonvelog%2Fpost%2Fb197e698-5869-464e-9fce-c0533c7a9c10%2Fimage.png)

- λ°μ΄ν°λ₯Ό μ§μ΄λ£μ μ μλ μ ν(linear) μλ£ν
- λ¨Όμ  μ§μ΄λ£μ λ°μ΄ν°κ° λ¨Όμ  λμ€λ FIFO(First In First Out) κ΅¬μ‘°μ΄λ€.
- λ°μ΄ν°λ₯Ό μ§μ΄λ£λ enqueue, λ°μ΄ν°λ₯Ό μΆμΆνλ dequeue λ±μ μμμ ν  μ μλ€.

**μ£Όμμμ**

`enqueue()`Β : νμ μλ£λ₯Ό λ£λλ€.

`dequeue()`Β : νμ μλ£λ₯Ό λΊλ€

`front()`Β : νμ κ°μ₯ μμ μλ μλ£λ₯Ό λ³΄λ μ°μ°

`back()`: νμ κ°μ₯ λ€μ μλ μλ£λ₯Ό λ³΄λ μ°μ°

`isEmpty()`Β : νκ° λΉμ΄μλμ§ μλμ§ μμλ³΄λ μ°μ°

`size()`Β : νμ μ μ₯λμ΄ μλ μλ£μ κ°μλ₯Ό μμλ³΄λ μ°μ°

- μ½λ

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

### μ€μ  μ μ©

[](https://www.acmicpc.net/problem/1158)

- λ΅ (λΉ λ₯Έ λ΅ x)

  ```tsx
  const array = [];
  const answer = [];

  for (let i = 1; i <= N; i++) {
    array.push(i);
  }

  let cnt = 1;
  while (array.length) {
    if (cnt !== K) {
      // λλ €λλ €λλ¦Όν
      array.push(array.shift());
      cnt++;
    } else {
      // μ κ±°
      answer.push(array.shift());
      cnt = 1;
    }
  }
  ```

<br />

---

<br />

## π λ± (Deque)

- λ±μ Double-ended Queue μ μ½μ
- μ€νκ³Ό νλ₯Ό ν©μΉ μλ£κ΅¬μ‘°λ‘, **μμͺ½ λμμ μ½μκ³Ό μ­μ κ° λͺ¨λ κ°λ₯ν ν**μ΄λ€

**μ£Όμμμ**

`push_front()`Β : λ±μ μμ μλ£λ₯Ό λ£λ μ°μ°

`push_back()`Β : λ±μ λ€μ μλ£λ₯Ό λ£λ μ°μ°

`pop_front()`Β : λ±μ μμμ μλ£λ₯Ό λΉΌλ μ°μ°

`pop_back()`Β : λ±μ λ€μμ μλ£λ₯Ό λΉΌλ μ°μ°

`front()`Β : λ±μ κ°μ₯ μμ μλ μλ£λ₯Ό λ³΄λ μ°μ°

`back()`Β : λ±μ κ°μ₯ λ€μ μλ μλ£λ₯Ό λ³΄λ μ°μ°

- μ½λ

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

## π **μ°μ μμ ν (priority queue)**

**μ°μ μμ ν**λ νλ²ν νλ μ€νκ³Ό λΉμ·ν μΆμ½ μλ£νμ΄λ€

λ¨, κ°μ₯ λ¨Όμ  νΉμ λμ€μ μλ ₯λ μλ£κ° κ°μ₯ λ¨Όμ  κΊΌλ΄μ§λ κ²μ΄ μλλΌ,

**μ°μ μμκ° κ°μ₯ λμ μλ£κ° κ°μ₯ λ¨Όμ  κΊΌλ΄μ§λ€**

μ΄λ₯Ό κ· ν μ‘ν μ΄μ§ κ²μ νΈλ¦¬λ₯Ό μ¬μ©νλ©΄,

(μ°μ μμκ°) μ΅λμΈ μμλ₯Ό μ°Ύμ μ­μ νλ μΌκ³Ό μ μμλ₯Ό μ½μνλ μΌ λͺ¨λ O(logN) μκ°μ ν  μ μλ€

νμ§λ§ μ΄λ³΄λ€ ν¨μ¬Β **λ¨μν κ΅¬μ‘°**λ‘ κ΅¬νν  μ μλλ°,

κ·Έ μ€Β **λνμ μΈ κ²μ΄ ν(heap)μ΄λΌλ νΈλ¦¬**μ΄λ€

<br />

---

<br />

[μλ£κ΅¬μ‘°(μ€ν, ν, λ±) (easy)](https://www.acmicpc.net/workbook/view/7750)

[0x08κ° - μ€νμ νμ©(μμμ κ΄νΈ μ)](https://www.acmicpc.net/workbook/view/7312)

[0x05κ° - μ€ν](https://www.acmicpc.net/workbook/view/7309)
