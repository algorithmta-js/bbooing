### 그래프 탐색?

- 그래프의 한 정점으로부터 출발해서 모든 정점을 1번씩 방문하여 그래프에 대한 정보를 얻는 것
- 정점 방문 순서에 따라 크게 두 방식으로 나뉨
- 깊이 우선 탐색 / 너비 우선 탐색

---

### 깊이 우선 탐색 (DFS - Depth First Search)

- 다음 분기로 넘어가기 전에 현재 분기를 완전히 탐색하는 방법
- 재귀 함수 or 스택으로 구현

### 깊이 우선 탐색 방법

1. 정점 1개를 선택한다.
2. 현재 정점과 이웃한 정점 중 아직 방문하지 않은 정점 중 하나를 방문한다.
3. 더 이상 방문할 수 있는 정점이 없는 경우, 현재 정점의 이전 정점으로 돌아간다.
4. 모든 정점을 방문할 때까지 2~3을 반복한다.
    
    

![스크린샷 2022-04-12 오후 4.11.08.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d83dd3d-016d-47fd-b154-70dec4cc7c30/스크린샷_2022-04-12_오후_4.11.08.png)

![스크린샷 2022-04-12 오후 4.10.26.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/90be3175-721e-4348-bb67-7bf9ac272c81/스크린샷_2022-04-12_오후_4.10.26.png)

---

### 너비 우선 탐색 (BFS - Breadth First Search)

- 인접한 정점들을 먼저 탐색하는 방법
- 가까운 정점 먼저, 먼 정점 나중에
- 큐(queue) 로 구현

### 너비 우선 탐색 방법

1. 정점 1개를 선택한다.
2. 현재 정점(u)과 이웃한 정점(v) 중 방문하지 않은 정점을 모두 방문한다.
3. v 중 가장 먼저 방문한 이웃한 정점으로 이동한다.
4. 모든 정점을 방문할 때까지 2~3을 반복한다.

![스크린샷 2022-04-12 오후 5.07.01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eedcdb75-b932-42d2-86e3-8929ed9e50be/스크린샷_2022-04-12_오후_5.07.01.png)

![스크린샷 2022-04-12 오후 5.13.35.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0398c237-1912-4be1-b283-abf03e4e2e8d/스크린샷_2022-04-12_오후_5.13.35.png)

---

### 공통점

- 그래프의 모든 정점을 1번씩 방문할 수 있음
- 시간 복잡도가 동일
    - 인접행렬: O(N제곱)
    - 인접리스트: O(N+E)

### 차이점

<DFS>

- 재귀 호출 이나 스택 사용
- 재귀 호출로 인한 시간 소모 높음
- **지나온 경로를 알아야 할 때 주로 사용**

### 예시 코드

```jsx
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I']
};
```

![스크린샷 2022-04-13 오후 5.42.23.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2abee40-6ce6-46bf-b49f-b477692b22ea/스크린샷_2022-04-13_오후_5.42.23.png)

**<DFS>**

```jsx
let visited = [];

const dfs = (graph, node) => {
		if(visited.includes(node)){
        return;
    }

    visited.push(node);
    graph[node].forEach((vertex)=>{
        if(!visited.includes(vertex)){
            dfs(vertex);
        }
    });
};
```

```jsx
const dfs = (graph, startNode) => {
  let visitStack = [];
  let visited = [];

  visitStack.push(startNode);

  while (visitStack.length !== 0) {
    const node = visitStack.pop();
		//pop은 배열의 맨 마지막 요소를 제거하고 그 값을 return 함! shift와 반대 개념
    if (!visited.includes(node)) {
      visited.push(node);
      visitStack = [...visitStack, ...graph[node]];
    }
  }

  return visited;
};
```

**<BFS>**

```jsx
const bfs = (graph, startNode) => {
  let visited = [];
  let visitQueue = [];

  visitQueue.push(startNode);

  while (visitQueue.length !== 0) {
    const node = visitQueue.shift(); 
		//shift는 c++ pop이랑 같은것, 맨 앞 요소를 제거하고 제거된 요소를 반환함
    if (!visited.includes(node)) { 
      visited.push(node); 
      visitQueue = [...visitQueue, ...graph[node]];
    }
  }
  return visited;
};
```

---

[[프로그래머스](https://programmers.co.kr/learn/courses/30/parts/12421)](https://programmers.co.kr/learn/courses/30/parts/12421)