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
    
![1](https://user-images.githubusercontent.com/67372977/163217182-62c1eb1f-17b5-4657-bd2e-ab3678d4e96a.png)
![2](https://user-images.githubusercontent.com/67372977/163217237-cb86aef8-ab37-4ee7-898e-0ef88eb309ee.png)
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


![3](https://user-images.githubusercontent.com/67372977/163217285-dde2b5ee-b62c-410e-b912-1b2da5144322.png)
![4](https://user-images.githubusercontent.com/67372977/163217296-33736813-87f1-474a-9b77-ba77bc479450.png)


---

### 공통점

- 그래프의 모든 정점을 1번씩 방문할 수 있음
- 시간 복잡도가 동일
    - 인접행렬: O(N제곱)
    - 인접리스트: O(N+E)

### 차이점

**DFS**

- 재귀 호출 이나 스택 사용
- 재귀 호출로 인한 시간 소모 높음
- **지나온 경로를 알아야 할 때 주로 사용**

**BFS**

- 큐 사용
- 다음에 방문할 정점 저장으로 인한 메모리 소모
- **최단 거리를 구할 때 주로 사용**

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

![5](https://user-images.githubusercontent.com/67372977/163217324-a69ff084-0f8a-434c-9d6b-f0ef9e8eef43.png)


**DFS**

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

**BFS**

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
