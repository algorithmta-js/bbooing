# Sort - Selection & Insertion & Bubble


## 0. 정렬 알고리즘?

---

1. 각종 데이터 목록을 정리하고 싶을 때
2. 분포도의 중위값을 알아내고 싶을 때
3. 데이터에서 중복값을 잡아내고 싶을 때
4. 이진 탐색을 하고 싶을 때

등등등...

- *자바스크립트에 sort()라는 메소드 있는데, 왜 배워야 하나?*
    
    시스템 정렬이 항상 좋은 퍼포먼스를 보장하지 않기 때문! 또한 데이터의 양이나 상황에 따라 어떤 정렬을 사용하는 것이 좋을지 달라지기 때문에 기본적으로 유명한 정렬 알고리즘들은 반드시 알고 있어야 한다!! (열심히 해보자요😁)
    

### 🙄Stable vs Unstable

> *정렬되지 않은 상태에서 같은 키값을 가진 원소의 순서가 정렬 후에도 유지되느냐*
> 

비교 대상의 Key가 여러개 값을 가질때 혹은 같은 값을 가지는 데이터가 여러개 있을 때, 정렬후에 기존의 순서를 유지하는지에 따라 Stable과 Unstable로 나뉜다. 비교 Key가 한 개일때는 나누는 것이 굳이 의미 없지만 여러개일 경우(구조체 함수 데이터) 특정한 데이터를 기준으로 Sorting할 경우 Stable/Unstable 정렬의 종류를 고려하여 적용해야 한다.

![https://velog.velcdn.com/post-images%2Fwan088%2Ffdf34540-c258-11e9-99e9-053d4d60a177%2F1.png](https://velog.velcdn.com/post-images%2Fwan088%2Ffdf34540-c258-11e9-99e9-053d4d60a177%2F1.png)

트럼프카드를 숫자에 대해서 오름차순으로 정렬한다고 가정하자.

위의 `Stable`한 정렬의 경우 같은 숫자인 5에 대하여 문양의 순서가 계속 유지되지만, 아래의 `Unstable`한 정렬의 경우 문양 순서가 뒤바뀔 수 있다.

## 1. **Selection Sort(선택 정렬)**

---

💜해당 순서에 원소를 넣을 위치는 이미 정해져 있고, 어떤 원소를 넣을지 선택하는 알고리즘

ex. 첫 번째 순서에는 첫 번째 위치에 가장 최솟값을 넣는다.
두 번째 순서에는 두 번째 위치에 남은 값 중에서의 최솟값을 넣는다...

### ⏩**방법**

1. 먼저 주어진 리스트 중에 최소값을 찾는다.
2. 그 값을 맨 앞에 위치한 값과 교환한다.
3. 이제 맨 앞을 제외하고 다시 순회하며 최소값을 찾는다.
4. 그 값을 맨 앞 위치 바로 다음 위치와 교체한다. ... 반복

즉, **선택 정렬은 n번째 회전이 끝날 때마다 앞에서 n번째 데이터의 위치가 정해진다!!**

![https://blog.kakaocdn.net/dn/cSAFhj/btqwXd06SNh/kaKR9rl4IGEwH9JFRQSsw0/img.gif](https://blog.kakaocdn.net/dn/cSAFhj/btqwXd06SNh/kaKR9rl4IGEwH9JFRQSsw0/img.gif)

### ⏰시간복잡도

- **Worst Case: O(n^2)**: 정렬이 하나도 안되어있는 경우
    
    **비교 횟수**
    두 개의 for 루프의 실행 횟수
    외부 루프: (n-1)번
    내부 루프(최솟값 찾기): n-1, n-2, … , 2, 1 번
    **교환 횟수**
    외부 루프의 실행 횟수와 동일. 즉, 상수 시간 작업
    한 번 교환하기 위하여 3번의 이동(SWAP 함수의 작업)이 필요하므로 3(n-1)번
    T(n) = (n-1) + (n-2) + … + 2 + 1 = n(n-1)/2 = O(n^2)
    
- **Best Case: O(n^2)**: 이미 정렬이 되어있는 경우
    
    비교하는 것이 상수 시간에 이루어진다는 가정 아래, n개의 주어진 배열을 정렬하는데 O(n^2) 만큼의 시간이 걸린다. 최선, 평균, 최악의 경우 시간복잡도는 **O(n^2)**
     으로 동일하다.
    

### 🏚**공간복잡도**

주어진 배열 안에서 교환(swap)을 통해, 정렬이 수행되므로 **O(n)** 이다.

### 😀**장점**

- Bubble sort와 마찬가지로 알고리즘이 단순하다.
- 정렬을 위한 비교 횟수는 많지만, Bubble Sort에 비해 실제로 교환하는 횟수는 적기 때문에 많은 교환이 일어나야 하는 자료상태에서 비교적 효율적이다.
- Bubble Sort와 마찬가지로 정렬하고자 하는 배열 안에서 교환하는 방식이므로, 다른 메모리 공간을 필요로 하지 않는다.  ⇒ 제자리 정렬(in-place sorting)

### 😥**단점**

- 시간복잡도가 O(n^2)으로, 비효율적이다.
- **불안정 정렬(Unstable Sort)** 이다.

### 🤡**UnStable**

예를 들어, [3(0), 2(0), 3(1), 1(0)]와 같은 배열이 있다 하자. ((0)은 각 원소가 들어온 순서를 의미한다.)이 때의 정렬 과정은 다음과 같다.

- 1번째 원소 3(0)을 1(0)과 자리를 교체한다.[**1(0)**, 2(0), 3(1), **3(0)**]
- 2번째 이후는 자리가 교체되지 않으므로 과정 설명을 생략한다.
- [1(0), 2(0), 3(1), 3(0)]으로 정렬되며 불안정(Unstable)하다.

결과적으로 데이터가 들어온 순서가 유지되지 않으며 불안정(Unstable)하게 된다.

### 🔍코드

```jsx
function selectionSort (array) {
for (let i = 0; i < array.length; i++) {
let minIndex = i;
for (let j = i + 1; j < array.length; j++) {
if (array[minIndex] > array[j]) {
minIndex = j;
}
}
//최소값이 자기 자신이면 교환 안 함. 즉 자기자신이 아닐 때만 실행
if (minIndex !== i) {
let swap = array[minIndex];
array[minIndex] = array[i];
array[i] = swap;
}
console.log(`${i}회전: ${array}`);
}
return array;
}
console.log(selectionSort([5, 4, 3, 2, 1]));
```

항상 첫번째 자리를 기준으로 정렬하므로 i는 0부터 시작하고

첫번째 자리를 가장 작은 값이라고 가정하므로 minIndex 변수에 i를 담아준다.

i + 1번째 자리부터 순회하며 array[i]보다 작은 값이 있는지 검사한다.

검사가 끝나고 minIndex값이 i와 같지 않다면 그 값과 i번째 값을 교환한다.

![실행결과](https://blog.kakaocdn.net/dn/b2Jyg7/btqwWnwCzmZ/bsxfVKvSTSWAYNQtHsJsG0/img.png)

실행결과

1회전만에 정렬이 되었으나 선택 정렬은 데이터가 정렬된 상태에서도 계속해서 순회하며

최소값을 찾는 과정을 하기 때문에 매우 비효율적인 정렬인 것을 확인할 수 있다.

## 2. Inser**tion Sort(삽입 정렬)**

---

💜왼쪽에서 오른쪽으로 가면서 각 요소들을 왼쪽 요소들과 비교하여 알맞은 자리에 삽입하는 형식의 정렬 방법

- 손안의 카드를 정렬하는 방법과 유사(새로운 카드를 기존의 정렬된 카드 사이에 올바른 위치에 삽입)
- 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘
- **매 순서마다 해당 원소를 삽입할 수 있는 위치를 찾아 해당 위치에 삽입**
- key값은 2번째 인덱스부터 시작되며, key값이 자료의 길이만큼 이동되었을 때 정렬이 완성됨

### ⏩**방법**

1. 2번째 위치(index)의 값을 temp에 저장한다.
2. temp와 이전에 있는 원소들과 비교하며 삽입해나간다.
3. '1'번으로 돌아가 다음 위치(index)의 값을 temp에 저장하고, 반복한다.

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f4243f45-29ac-4fd0-88c5-19d400269515/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T134818Z&X-Amz-Expires=86400&X-Amz-Signature=c98324bfc03569b5355f4f300a5f6ae357d59174f7c28e1dd154dd7820983896&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"/>

![https://github.com/GimunLee/tech-refrigerator/raw/master/Algorithm/resources/insertion-sort-001.gif](https://github.com/GimunLee/tech-refrigerator/raw/master/Algorithm/resources/insertion-sort-001.gif)

### ⏰시간복잡도

- **Worst Case: O(n^2)**: 정렬이 하나도 안되어있는 경우
    
    **비교 횟수**
    외부 루프 안의 각 반복마다 i번의 비교 수행
    외부 루프: (n-1) + (n-2) + … + 2 + 1 = n(n-1)/2 = O(n^2)
    **교환 횟수**
    외부 루프의 각 단계마다 (i+2)번의 이동 발생
    n(n-1)/2 + 2(n-1) = (n^2+3n-4)/2 = O(n^2)
    
- **Best Case: O(n)**: 이미 정렬이 되어있는 경우
    
    정렬이 되어있는 경우(Optimal)한 경우, 한번씩 밖에 비교를 안하므로 **O(n)**의 시간복잡도를 가지게 된다. 또한, 이미 정렬되어 있는 배열에 자료를 하나씩 삽입/제거하는 경우에는, 현실적으로 최고의 정렬 알고리즘이 되는데, 탐색을 제외한 오버헤드가 매우 적기 때문이다.
    

### 🏚**공간복잡도**

주어진 배열 안에서 교환(swap)을 통해, 정렬이 수행되므로 **O(n)**이다.

### 😀**장점**

- 안정한 정렬 방법
- 레코드의 수가 적을 경우 알고리즘 자체가 매우 간단하므로 다른 복잡한 정렬 방법보다 유리할 수 있다.
- 대부분의 레코드가 이미 정렬되어 있는 경우에 매우 효율적일 수 있다.

### 😥**단점**

- 비교적 많은 레코드들의 이동을 포함한다.
- 레코드 수가 많고 레코드 크기가 클 경우에 적합하지 않다.

### 🤡**Stable**

삽입 정렬은 중복된 데이터는 위치를 교환하지 않기 때문에 **stable한 정렬**이다.

### 🔍코드

```jsx
function insertionSort (array) {
for (let i = 1; i < array.length; i++) {
let cur = array[i];
let left = i - 1;
while (left >= 0 && array[left] > cur) {
array[left + 1] = array[left];
left--;
}
array[left + 1] = cur;
console.log(`${i}회전: ${array}`);
}
return array;
}
console.log(insertionSort([5, 4, 3, 2, 1]));
```

array[left + 1]에 array[left]값을 넣고 left값을 하나씩 줄여가며 왼쪽과 비교하다가

교환이 다 끝나고 while문을 빠져나오면 맨 앞의 요소에 cur값을 넣는다.

![실행결과](https://blog.kakaocdn.net/dn/bIthlD/btqwXfR9DeV/HPjvFztw2qKk7w2AszpW00/img.png)

실행결과

## 3. Bubble **Sort(삽입 정렬)**

---

💜서로 인접한 두 원소의 대소를 비교하고, 조건에 맞지 않다면 자리를 교환하며 정렬하는 알고리즘

### ⏩**방법**

1. 1회전에 첫 번째 원소와 두 번째 원소를, 두 번째 원소와 세 번째 원소를, 세 번째 원소와 네 번째 원소를, … 이런 식으로 (마지막-1)번째 원소와 마지막 원소를 비교하여 조건에 맞지 않는다면 서로 교환한다.
2. 1회전을 수행하고 나면 가장 큰 원소가 맨 뒤로 이동하므로 2회전에서는 맨 끝에 있는 원소는 정렬에서 제외되고, 2회전을 수행하고 나면 끝에서 두 번째 원소까지는 정렬에서 제외된다. 이렇게 정렬을 1회전 수행할 때마다 정렬에서 제외되는 데이터가 하나씩 늘어난다.

![https://blog.kakaocdn.net/dn/bUgECt/btqwWZBXDYj/jJwP1TnMQL3u1nbzt5Gzb1/img.gif](https://blog.kakaocdn.net/dn/bUgECt/btqwWZBXDYj/jJwP1TnMQL3u1nbzt5Gzb1/img.gif)

### ⏰시간복잡도

- **Worst Case: O(n^2)**: 정렬이 하나도 안되어있는 경우
    
    **비교 횟수**
    최상, 평균, 최악 모두 일정
    n-1, n-2, … , 2, 1 번 = n(n-1)/2
    **교환 횟수**
    입력 자료가 역순으로 정렬되어 있는 최악의 경우, 한 번 교환하기 위하여 3번의 이동(SWAP 함수의 작업)이 필요하므로 (비교 횟수 * 3) 번 = 3n(n-1)/2
    입력 자료가 이미 정렬되어 있는 최상의 경우, 자료의 이동이 발생하지 않는다.
    
- **Best Case: O(n^2)**: 이미 정렬이 되어있는 경우
    
    Bubble Sort는 정렬이 돼있던 안돼있던, 2개의 원소를 비교하기 때문에 최선, 평균, 최악의 경우 모두 시간복잡도가 **O(n^2)**으로 동일하다. *(개선된 Bubble Sort가 존재하긴 하나, 기초를 다지기 위한 학습이므로 넘어가겠음)*
    

### 🏚**공간복잡도**

주어진 배열 안에서 교환(swap)을 통해, 정렬이 수행되므로 **O(n)**이다.

### 😀**장점**

- 구현이 매우 간단하다.

### 😥**단점**

- 순서에 맞지 않은 요소를 인접한 요소와 교환한다.
- 하나의 요소가 가장 왼쪽에서 가장 오른쪽으로 이동하기 위해서는 배열에서 모든 다른 요소들과 교환되어야 한다.
- 특히 특정 요소가 최종 정렬 위치에 이미 있는 경우라도 교환되는 일이 일어난다.
- 일반적으로 자료의 교환 작업(SWAP)이 자료의 이동 작업(MOVE)보다 더 복잡하기 때문에 버블 정렬은 단순성에도 불구하고 거의 쓰이지 않는다.

### 🤡**Stable**

버블 정렬은 중복 데이터가 있을 경우 데이터의 위치를 교환하지 않고 지나가기 때문에 **stable한 정렬**이다. 

### 🔍코드

```jsx
function bubbleSort (array) {
for (let i = 0; i < array.length; i++) {
let swap;
for (let j = 0; j < array.length - 1 - i; j++) {
if (array[j] > array[j + 1]) {
swap = array[j];
array[j] = array[j + 1];
array[j + 1] = swap;
}
}
console.log(`${i}회전: ${array}`);
if (!swap) {
break;
}
}
return array;
}
console.log(bubbleSort([5, 4, 3, 2, 1]));
```

for문으로 i가 0부터 array.length보다 작을 때까지 loop을 돌리고, 그 안에 j가 0부터 array.length - 1 - i보다 작을 때까지 loop을 돌린다.

array.length - 1 - i인 이유는 일단 array[j]와 array[j + 1]을 비교할 예정이기 때문에 배열의 마지막 데이터를 포함하지 않아도 검색 대상에 포함되므로 1을 빼줘야하고 두번째로 각 회전이 끝날 때마다 마지막 데이터의 정렬이 끝나기 때문에 i를 빼줘야한다.

이제 swap이란 변수를 만들어 array[j]와 array[j + 1]을 비교하여 array[j]가 더 크면 자리를 교환한다.

만약에 각 회전을 끝내고 swap 변수가 undefined상태라면 정렬이 다 되어있다는 뜻이므로 바로 for문을 종료시킨다.

![실행결과](https://blog.kakaocdn.net/dn/c5IxBu/btqwWoWwcjL/8tK1hM9lIdCOXFRDh9u0Hk/img.png)

실행결과

## 문제

---

### (level 2) 가장 큰 수

정렬 알고리즘이 막 쓰이는 문제는 아니지만, 자바스크립트 내장함수 연습에 좋을듯!

[코딩테스트 연습 - 가장 큰 수](https://programmers.co.kr/learn/courses/30/lessons/42746)

### (백준 10814번) 나이순 정렬

stable, unstable 정렬에 대해 생각해볼 수 있는 문제

[10814번: 나이순 정렬](https://www.acmicpc.net/problem/10814)

### (백준 1377번) 버블 소트

bubble sort의 개념에 대해 생각해볼 수 있는 문제! (hint. 버블소트를 이용하는 문제는 아닐지도?!)

[1377번: 버블 소트](https://www.acmicpc.net/problem/1377)

### 출처

---

[https://velog.io/@wan088/프로그래머스-고득점Kit-4-정렬-lxjzi4ezhe](https://velog.io/@wan088/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B3%A0%EB%93%9D%EC%A0%90Kit-4-%EC%A0%95%EB%A0%AC-lxjzi4ezhe)

[https://im-developer.tistory.com/133](https://im-developer.tistory.com/133)

[https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html](https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html)

[https://gyoogle.dev/blog/algorithm/Selection Sort.html](https://gyoogle.dev/blog/algorithm/Selection%20Sort.html)

[https://godgod732.tistory.com/10](https://godgod732.tistory.com/10)

[https://rninche01.tistory.com/entry/정렬-알고리즘-01-삽입-정렬](https://rninche01.tistory.com/entry/%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-01-%EC%82%BD%EC%9E%85-%EC%A0%95%EB%A0%AC)

[https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)

[https://gmlwjd9405.github.io/2018/05/06/algorithm-bubble-sort.html](https://gmlwjd9405.github.io/2018/05/06/algorithm-bubble-sort.html)