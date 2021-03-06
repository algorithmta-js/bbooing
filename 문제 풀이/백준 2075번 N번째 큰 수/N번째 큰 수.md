[블로그](https://snupi.tistory.com/204)

[2075번: N번째 큰 수 문제](https://www.acmicpc.net/problem/2075)

## 문제

N×N의 표에 수 N2개 채워져 있다. 채워진 수에는 한 가지 특징이 있는데, 모든 수는 자신의 한 칸 위에 있는 수보다 크다는 것이다. N=5일 때의 예를 보자.

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| 12  | 7   | 9   | 15  | 5   |
| 13  | 8   | 11  | 19  | 6   |
| 21  | 10  | 26  | 31  | 16  |
| 48  | 14  | 28  | 35  | 25  |
| 52  | 20  | 32  | 41  | 49  |

이러한 표가 주어졌을 때, N번째 큰 수를 찾는 프로그램을 작성하시오. 표에 채워진 수는 모두 다르다.

## 입력

첫째 줄에 N(1 ≤ N ≤ 1,500)이 주어진다. 다음 N개의 줄에는 각 줄마다 N개의 수가 주어진다. 표에 적힌 수는 -10억보다 크거나 같고, 10억보다 작거나 같은 정수이다.

## 출력

첫째 줄에 N번째 큰 수를 출력한다.

## 예제 입력

```tsx
5
12 7 9 15 5
13 8 11 19 6
21 10 26 31 16
48 14 28 35 25
52 20 32 41 49
```

## 예제 출력

```tsx
35;
```

---

## 풀이

### 주제를 알지 못했을 때의 플로우

1. 말 그대로 **N번째 큰 수**를 찾는 것,
   **각 열이 정렬**되어 있다는 조건

2. 각 열에서 끝 행의 숫자들을 비교해가며 찾는 방식은 어떨까?

3. 이렇게도 저렇게도 각 열마다의 숫자가 뒤죽박죽이기때문에 **전체의 숫자를 탐색**해야 한다

4. 최대 1,500의 N 값이고, **최댓값을 하나씩 뺄 경우에, 다음 최댓값을 알아내는 구조**가 필요함

5. 숫자들을 push하고, 최댓값을 pop 할 수 있는 **우선순위 큐(Heap)**가 적합함을 알 수 있음

### 주제를 알고서의 플로우

1. N번 째 큰 수를 찾으므로, 전체 수를 최대힙(MaxHeap)에 `insert` 하고, N번을 `pop`?

   —> **메모리 초과**

   —> 힙의 `insert`는 힙의 배열 수에 연관된다 (O(N))

   —> 따라서, 힙의 최대 개수를 줄여주는 건 동작에 큰 영향을 미치게 된다

2. **N개의 힙의 개수 제한**을 둔다고 가정하자

   **N번째 큰 수(a)가 힙에 남아**있으려면, **N개가 넘어갈 때, `a보다 작은 수`를 빼**면 된다

   —> 최소힙을 구현하여, size가 N+1 이 넘어갈 때 `pop`을 해준다

   —> 전체 수를 `insert` 하고 나면, a가 최소인 N개의 힙이 남아있게 된다
