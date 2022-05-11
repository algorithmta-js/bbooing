# 프로그래머스 게임 맵 최단거리(BFS)



[코딩테스트 연습 - 게임 맵 최단거리](https://programmers.co.kr/learn/courses/30/lessons/1844?language=javascript)

## 문제 설명

---

ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.

게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 **최솟값**을 return 하도록 solution 함수를 완성해주세요. 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.

### 입출력 예

---

[제목 없음](https://www.notion.so/283b1435fe404e9d996813879d917f5c)

입출력 예 #1주어진 데이터는 다음과 같습니다.

<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/6db71f7f-58d3-4623-9fab-7cd99fa863a5/%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%84%85%E1%85%B56_lgjvrb.png">

캐릭터가 적 팀의 진영까지 이동하는 가장 빠른 길은 다음 그림과 같습니다.

<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d223d017-b3e2-4772-9045-a565133d45ff/%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%84%85%E1%85%B52_hnjd3b%20%281%29.png">

따라서 총 11칸을 캐릭터가 지나갔으므로 11을 return 하면 됩니다.

입출력 예 #2문제의 예시와 같으며, 상대 팀 진영에 도달할 방법이 없습니다. 따라서 -1을 return 합니다.

### 제한사항

- maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다.
    - n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
- maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
- 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.

## 설명

---

게임 맵의 상태 maps가 매개변수로 주어질 때, `캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 **최솟값**`을 return 하도록 solution 함수를 완성해주세요. 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.

⇒거리 측정하는 것은 `BFS` 를 이용해야 함!

칸의 개수의 최솟값을 return하라고 했는데, BFS의 원리를 이용하면 자연스럽게 최솟값을 출력할 수 있다! 왜?

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/62a6e9da-a1b4-446e-92a3-a15353cf5df0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220511T085215Z&X-Amz-Expires=86400&X-Amz-Signature=f7463c4a8b120e272bc099fafe106e5ae4e9352e8911eb0237bdf1d2a947c286&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject">

다른 문제의 설명, BUT 문제 설명을 위해 첨부

BFS는 트리 기준, 각 계층의 노드들을 모두 탐색한 후 다음 계층으로 넘어가는 알고리즘!

즉, 이러한 문제를 중심으로 설명하면 현재 칸 상하좌우의 칸들을 모두 QUEUE에 집어넣고, 우선적으로 그 칸들의 거리를 모두 계산해준 뒤 같은 방식으로 뻗어나감!

더 쉽게 설명하면, 거리 0, 거리 1, 거리 2... 의 칸들 순으로 뻗어나감!

이렇게 뻗어나가다보면 자연스럽게 우리가 도달해야 하는 칸 또한 거리 n 으로 측정 가능할 것이고, 측정된 이후에는 queue에 넣지 않으므로 이 탐색과정을 반복하고 종료되면 자연스럽게 최솟값이 나옴!

이 문제에서는 단순히 방문뿐만 아니라, 시작점에서 우리가 도달해야 하는 지점까지의 최소 거리를 return 해줘야 하므로, 사진의 예와 같이 거리 또한 계산해서 각 칸들에 집어넣어주면 return 할 수 있음! 

- BFS, DFS 문제로 보니 헷갈려요!
    
   <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bb63cfeb-2137-45e3-94bb-bf60272daa98/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220511T085244Z&X-Amz-Expires=86400&X-Amz-Signature=920931827574a537995cb4a9e02ff0cbf3f1e8e8cf292b5fcdf0ab937846eb22&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject">
    

## 코드

---

```jsx
function solution(maps) {
    let answer = 0;
    let tx=[0,1,0,-1]; //근처 상하좌우 인덱스 탐색
    let ty=[1,0,-1,0];//근처 상하좌우 인덱스 탐색
    let q = []; // 탐색해야할 배열의 인덱스 
   
    q.push([0,0]);
    while(q.length!==0){
        const cur = q.shift(); 
        for(let i=0;i<4;i++){
            let mX=cur[0]+tx[i]; //상하좌우 인덱스 탐색
            let mY=cur[1]+ty[i]; //상하좌우 인덱스 탐색
        if(mX<0||mX>=maps.length||mY<0||mY>=maps[0].length) continue; //맵 벗어나면 continue
        if(maps[mX][mY]>1||maps[mX][mY]===0) continue; //도달했던 칸이거나 도달할 수 없는 칸
        
        q.push([mX,mY]);
        maps[mX][mY]=maps[cur[0]][cur[1]]+1; //거리하나 늘려주기 -> 시작지점에서 해당 지점까지 
																						//제일 빨리 도착한 거리 
        }
  }
    answer=maps[maps.length-1][maps[0].length-1];
    if(answer===1) answer=-1; //반복문이 종료되었는데도 1이라면 도달 못한 것
    return answer;
}
```

## 참고자료

---

[https://blog.encrypted.gg/941?category=773649](https://blog.encrypted.gg/941?category=773649)

[https://blog.encrypted.gg/942?category=773649](https://blog.encrypted.gg/942?category=773649)