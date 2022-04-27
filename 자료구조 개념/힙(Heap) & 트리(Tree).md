## Heap

---

- 힙은 일종의 완전 이진 트리이다.
- 힙은 최대 힙과 최소 힙으로 구분될 수 있다.
- 최대 힙은 모든 부모 노드의 값이 자식 노드의 값보다 큰 힙을 말하고, 최소 힙은 그 반대 이다.
  - 최대 힙 : 부모 노드는 자식 노드보다 작으면 안된다.
  - 최소 힙 : 부모 노드는 자식 노드보다 크면 안된다.
- 배열을 이용해서 힙 구조를 구현할 수 있다.
- 배열의 첫번째 요소가 가지는 index는 0이기 때문에 “1번째"라는게 헷갈리지 않게 하기위해 첫번째 배열의 값을 비워두고 시작한다.
- 실시간으로 정렬이 이루어져야 하는 경우 → 우선순위 큐 or 힙

![heap_array_png](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb94d0a92-de3d-4b70-9961-04ef5c8993b1%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-04-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.22.38.png?table=block&id=d7af8ecd-8203-49e0-b172-e65ce16f4051&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=1470&userId=&cache=v2)

- 왼쪽 자식의 index = 부모 index \* 2
- 오른쪽 자식의 index = (부모 indx \* 2) + 1
- 부모의 index = Math.floor(자식의 인덱스 / 2)

```jsx
class Heap {
  constructor() {
    this.heap = [null];
  }
}
```

### 삽입

- 일단 마지막 노드에 들어온 값을 push하여 삽입한다.
- 반복문을 돌리면서 부모노드를 확인하면서 들어온 값이 부모노드보다 작은지 큰지를 구분하여 위치를 교환을 계속 실행해주며 정렬해준다.
- 최소힙이라는 가정으로!

```jsx
...
swap(a,b) {
	// 구조분해 할당을 이용해 부모와 자식을 swap 한다.
	[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
}

heappush(value) {
	this.heap.push(value);
	let currentIdx = this.heap.length - 1;
	let parentIdx = Math.floor(currentIdx/2);

	// 최소힙이기 때문에 부모노드가 제일 작아야한다. 부모노드가 현재 노드보다 큰지 검사하면서 반복한다.
	while(currentIdx > 1 && this.heap[parentIdx] > this.heap[currentIdx]) {
		this.swap(parentIdx, currentIdx);
		currentIdx = parentIdx;
		parentIdx = Math.floor(currentIdx/2);
	}
}
```

### 삭제

- 힙에서는 최소힙이든 최대힙이든 루트노드가 항상 먼저 배출되어야 한다.
- 배출되고 나서 생기는 빈자리는 가장 마지막 노드, 즉 배열에서 제일 뒤에 있는 값을 가져온다.
- 루트 노드서부터 재정렬을 실행해준다.

```jsx
heappop() {
	const min = this.heap[1] // 배열 첫 원소(root)를 비울테니까 min값을 가져온다.
	if (this.heap.lenth <= 2) this.heap = [null];
	else this.heap[1] = this.heap.pop();

	let currentIdx = 1;
	let leftIdx = currentIdx * 2;
	let rightIdx = currentIdx * 2 + 1;

	// 왼쪽 자식이 없다는 것은 오른쪽 자식도 없는 상태. 딱 루트노드만 있는 것이니까 바로 반환!
	if (!this.heap[leftIdx]) return min;
	if (!this.heap[rightIdx]){ // 오른쪽 자식이 없다면 왼쪽 자식 하나만 있다는것을 의미
		if(this.heap[leftIdx] < this.heap[currentIdx]) {
			this.swap(leftIdx, currentIdx)
		}
		return min;
	}

	/*
		위에 조건에 걸리지 않는 경우 왼쪽과 오른쪽 자식이 모두 있는 경우이다.
		현재 노드가 왼쪽 또는 오른쪽보다 큰지 작은지를 검사하면서 반복한다.
	*/
	while(this.heap[leftIdx] < this.heap[currentIdx] || this.heap[rightIdx] < this.heap[currentIdx]) {
		const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
		this.swap(minIdx, currentIdx)
		currentIdx = minIdx;
		leftIdx = currentIdx * 2;
		rightIdx = currentIdx * 2 + 1;
	}

	return min;
}
```

## Tree

---

![tree](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffee0a457-fe70-41d5-bc9b-38baac74644f%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-04-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.01.23.png?table=block&id=438fc8d2-b384-403a-8e4c-9704b73ccb9a&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=860&userId=&cache=v2)

- 관계 기반의 자료구조로, 계층형 구조를 나타낸다.
- 루트(root)로부터 시작되어 가지가 여러 구조로 뻗어있는 자료구조를 말한다.
- 대상 정보의 각 항목들을 계층적으로 구조화할 때 사용하는 비선형 자료구조이다.
- ‘데이터 저장'의 의미보다는 ‘저장된 데이터를 더 효과적으로 탐색'하기 위해 사용
- 리스트 처럼 단순히 데이터가 나열되는 구조가 아닌, 부모(parent)와 자식(child)의 계층적인 관계로 표현된다.
- 사이클이 없다.
- 루트 노드를 제외한 모든 노드는 단 하나의 부모 노드를 가진다.

### 트리 용어 정리

![tree](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb6239bec-3455-4f07-b2f6-6019f0e0bffa%2FKakaoTalk_Photo_2022-04-27-17-32-46.png?table=block&id=9a9b1127-f308-4373-8961-e3fdc2679a1c&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=860&userId=&cache=v2)

- 노드(Node) : 트리 구조를 이루는 모든 개별 데이터
- 루트(Root) : 트리 구조의 시작점이 되는 노드
- 부모노드(Parent node) : 두 노드가 상하관계로 연결되어 있을 때 상대적으로 루트에서 가까운 노드
- 자식노드(Child node) : 두 노드가 상하관계로 연결되어 있을 때 상대적으로 루트에서 먼 노드
- 형제노드(Sibling node) : 동일한 부모를 갖는 형제 노드
- 리프(Leaf) : 트리 구조의 끝 지점이고, 자식 노드가 없는 노드

### 구현 코드

```jsx
class Tree {
  constructor(value) {
    //constructor로 만든 객체는 트리의 Node가 된다.
    this.value = value;
    this.children = [];
  }

  insert(value) {
    // 트리의 삽입 메서드
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  contains(value) {
    // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드
    if (this.value === value) {
      // 값이 포함되어 있다면 true 반환
      return true;
    }

    for (let i = 0; i < this.children.lenth; i++) {
      // children배열을 순회하며 childNode를 탐색
      const childNode = this.children[i];
      if (childNode.contains(value)) {
        return true;
      }
    }
    return false;
  }
}
```

### 이진 트리

- 자식노드가 두개 이하인 트리를 뜻한다. (자식노드가 없거나 1개의 자식 노드만 가지는 것도 가능!)
- 왼쪽의 노드를 Left Node라고 하고, 오른쪽 노드를 Right Node라고 한다.
- full binary tree, complete binary tree, perfect binary tree로 나뉜다.
  - full binary tree
    ![full_binary_tree](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb1358026-0bcd-4d28-83d7-b5ad422a804d%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-04-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.31.59.png?table=block&id=211470d8-97b0-420d-bbc4-2c31ffdb75ea&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=580&userId=&cache=v2)
    - 각 노드가 0개 or 2개의 자식 노드를 갖는 경우
  - complete binary tree
    ![complete_binary_tree](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb1358026-0bcd-4d28-83d7-b5ad422a804d%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-04-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.31.59.png?table=block&id=211470d8-97b0-420d-bbc4-2c31ffdb75ea&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=580&userId=&cache=v2)
    - 마지막 레벨을 제외하고 모든 노드가 가득 차있는 경우
    - 마지막 레벨에서는 가장 왼쪽부터 채워지는 형태
    - **힙(Heap)은 완전 이진 트리의 일종이다.**
  - perfect binary tree
    ![full_binary_tree](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F291fdf5d-a3e3-4a6f-848e-2bd1492c4ed9%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-04-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.34.45.png?table=block&id=8a2483c1-864c-498f-97e7-bd3a1d4a68e8&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=580&userId=&cache=v2)
    - full binary tree 이면서 complete binary tree인 경우
    - 모든 리프 노드의 레벨이 동일하고, 모든 레벨이 가득 채워져 있어야 한다.

```jsx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

- 참고자료
  [Binary Tree 종류 - Heap 구현 사전지식](https://yaboong.github.io/data-structures/2018/02/10/1_binary-tree-1/)
  [https://velog.io/@porupit0122/JavaScript-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-4-%ED%8A%B8%EB%A6%AC](https://velog.io/@porupit0122/JavaScript-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-4-%ED%8A%B8%EB%A6%AC)
  [[javascript] tree , 트리의 탐색 (2)](https://hokeydokey.tistory.com/69)
  [https://velog.io/@longroadhome/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-JS%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-HEAP](https://velog.io/@longroadhome/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-JS%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-HEAP)
- 문제
  [1927번: 최소 힙](https://www.acmicpc.net/problem/1927)
  [11279번: 최대 힙](https://www.acmicpc.net/problem/11279)
  [11286번: 절댓값 힙](https://www.acmicpc.net/problem/11286)
