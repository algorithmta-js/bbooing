# Brouteforce & Backtracking

## Brouteforce

---

**모든 경우의 수를 탐색하면서 요구조건에 충족되는 결과만을 가져온다.**

- 모든 영역을 전체 탐색하는 방법이다.
- 전체 탐색을 하는 방법으로는 선형구조를 전체적으로 탐색하는 **순차탐색**, 비선형 구조를 전체적으로 탐색하는 **깊이 우선 탐색(DFS)**, **너비 우선 탐색(BFS)**이 기본적인 도구 이다.
- 어떤 방식으로든 전체 탐색으로 문제를 해결한다면 브루트 포스 알고리즘으로 푸었다고 할 수 있다.

ex) 4자리의 암호로 구성된 자물쇠를 푼다고 할때, 0000~9999를 하나하나 시도해보는 경우

⇒ 자원의 문제
⇒ 복잡도에 매우 민감
⇒ 가능한 모든 경우를 다 대입하면서 푸는 알고리즘 말 그대로 무식하게 푸는 알고리즘
⇒ 데이터의 범위가 크지 않을 경우 권장...
⇒ 데이터의 범위가 크면 모든 경우의 수를 탐색하는데 시간이 오래걸리기 때문!

## Backtracking

---

- 가능한 모든 방법을 탐색한다.
- 해를 찾아가는 도중, 지금의 경로가 요구조건을 충족하지 않을 것 같으면 그 경로를 더 이상 가지 않고 (가지치기 pruning) 되돌아 간다.
- 해답이 없는 것을 만나는 순간, 검색을 중단하고 부모로 돌아가서 다른 자식을 검색하는 과정
- 해답이 될 가능성이 없는 것 → 유망하지 않다 (nonpromising)
- 해답이 될 가능성이 있는 것 → 유망하다 (promising)
- 가지치기를 잘하는 것에 따라 효율성이 결정
- 주로 문제 풀이에서는 DFS에서 재귀방식으로 모든 경우의 수를 탐색하는 과정에서, 조건문 등을 걸어 답이 절대로 될 수 없는 상황을 정의하고, 탐색을 중지 시킨 뒤 그 이전으로 돌아가서 다른 경우를 탐색하게 끔 구현...

⇒ 백트래킹은 DFS에서 효율적인 방법. 깊이우선탐색이므로 가능한 갈 수 있는 최대 깊이 까지 갔다가 돌아온다.

```jsx
/*
	자연수 N과 M이 있을때, 길이가 M인 수열을 모두 구하기
	1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
*/

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      output.push(i);
      visited[i] = true;
      dfs(cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }
}

let result = '';
const [N, M] = [4, 1];
const visited = Array(N + 1).fill(false);
const output = [];

dfs(0);
console.log(result.trim());
```

💡 DFS와 백트래킹의 차이

DFS는 기본적으로 그래프 형태 자료구조에서 모든 노드를 탐색할 수 있는 알고리즘 중 하나.
깊이를 우선적으로 탐색하며 재귀 혹은 스택 이용

백트래킹은 재귀를 통해 알고리즘을 풀어가는 기법 중 하나로 가지치기(Pruning)을 통해서 탐색을 시도하다가 유망하지 않으면 추가 탐색을 하지 않고 다른 해를 찾는 방법

DFS는 기본적으로 모든 노드를 탐색하는 것이 목적이지만 상황에 따라 백트래킹 기법을 혼용해 불필요한 탐색을 그만두는것이 가능!

- 참고자료
  [알고리즘 - 백트래킹(Backtracking)](https://hongjw1938.tistory.com/88?category=909529)
  [알고리즘 - 백트래킹(Backtracking)의 정의 및 예시문제](https://chanhuiseok.github.io/posts/algo-23/)
  [[Brute Force] 브루트 포스 설명과 간단 코테 풀이](https://go-coding.tistory.com/67)

- 문제
  [N과 M](https://www.acmicpc.net/workbook/view/2052)
  [1182번: 부분수열의 합](https://www.acmicpc.net/problem/1182)
  [14889번: 스타트와 링크](https://www.acmicpc.net/problem/14889)
  [9663번: N-Queen](https://www.acmicpc.net/problem/9663)
