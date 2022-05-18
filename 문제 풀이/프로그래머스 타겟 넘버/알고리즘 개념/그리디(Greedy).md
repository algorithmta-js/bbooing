# 그리디(greedy) 알고리즘

# 그리디 알고리즘이란?

---

> 탐욕 알고리즘. 동적 프로그래밍(또는 동적 계획법, Dynmaic Programming) 사용 시 지나치게 많은 일을 한다는 것에서 고안되었다. 선택의 순간마다 당장 눈앞에 보이는 최적의 상황만을 쫓아 최종적인 해답에 도달하는 방법이다!
> 

## 1. 설명

---

### 그리디 알고리즘으로 문제를 해결하는 단계

```
1. 선택 절차(Selection Procedure)
: 현재 상태에서의 최적의 해답을 선택한다.
2. 적절성 검사(Feasibility Check)
: 선택된 해가 문제의 조건을 만족하는지 검사한다.
3. 해답 검사(Solution Check)
: 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 선택 절차로 돌아가 위의 과정을 반복한다.
```

그리디 알고리즘을 적용하려면 해결하려는 문제가 다음의 2가지 조건을 성립하여야 한다.

### 그리디 알고리즘 사용의 조건

1.  탐욕 선택 속성(Greedy Choice Property) 
    
    : 앞의 선택이 이후의 선택에 영향을 주지 않는다.
    
2. 최적 부분 구조(Optimal Substructure) 
    
    : 문제에 대한 최종 해결 방법은 부분 문제에 대한 최적 문제 해결 방법으로 구성된다.
    

그리디 알고리즘은 문제 해결 과정에서 그 순간 순간 최적의 선택이라는, 즉 가장 좋아보이는 선택을 취하며 최종 해답에 도달한다. 즉, 앞으로의 선택이나 최종 결과를 고려하지 않는다. 그러므로 탐욕법으로 도출된 해가 반드시 최적의 해라는 보장은 없다. 대신 계산 속도가 빠르다는 장점이 있다.

그런데 위의 2가지 조건을 완전히 만족하는지, 그래서 해당 문제가 그리디 알고리즘을 사용할 수 있는 경우인지를 증명하는 것은 좀 어렵다.

그래서 우선 테스트 코드를 작성하여 정상 동작하는지를 알아보는 방식으로 시도하는 경우가 많다.

## 2. 예제

---

대표적인 예제는 **활동 선택 문제 (Activity Selection Problem) 😉**

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c7f9486e-399f-4cd1-962c-abca705346fe/%ED%99%9B%EB%8F%99%EB%AC%B8%EC%A0%9C.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220413T123804Z&X-Amz-Expires=86400&X-Amz-Signature=d3e02d88eb640b77f6777db0785067b04d55cc9b8c2b2a91c8e69fb517d6534b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%2599%259B%25EB%258F%2599%25EB%25AC%25B8%25EC%25A0%259C.PNG.png%22&x-id=GetObject">

<br>

다음과 같은 활동들이 있다고 하자. 한 번에 하나의 활동만 할 수 있는 강의실에서 제안된 활동 중 가장 많은 활동을 처리할 수 있도록 시간표를 짜는 문제이며 가장 먼저 끝나는 활동을 택하면, 결과적으로 최대한 많은 활동을 시간표에 넣을 수 있다.

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/07345ab3-89a1-471e-9c35-a99f1e6fa767/%ED%99%9C%EB%8F%99%EC%84%A0%ED%83%9D.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220413T123844Z&X-Amz-Expires=86400&X-Amz-Signature=3a1d50f7a06917c1ab56d3c61b51b43e467e43be86f092b8ee52468036145d6c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%2599%259C%25EB%258F%2599%25EC%2584%25A0%25ED%2583%259D.PNG.png%22&x-id=GetObject">


예시 출처  
[알고리즘 - 그리디 알고리즘(Greedy Algorithm)](https://hongjw1938.tistory.com/172)

## 3. 프로그래머스 연습문제

---

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dcc4c3da-e20b-4ac4-a0bf-ed3609fb532c/%EA%B7%B8%EB%A6%AC%EB%94%94.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220413T123956Z&X-Amz-Expires=86400&X-Amz-Signature=4cc568bb4fce56816f422dfede4b3f6b2e4754423bfe668a7c2dcc2c3aa25e0e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B7%25B8%25EB%25A6%25AC%25EB%2594%2594.PNG.png%22&x-id=GetObject">

[https://programmers.co.kr/learn/courses/30/parts/12244](https://programmers.co.kr/learn/courses/30/parts/12244)

[코딩테스트 연습 - 체육복](https://programmers.co.kr/learn/courses/30/lessons/42862)

[코딩테스트 연습 - 조이스틱](https://programmers.co.kr/learn/courses/30/lessons/42860)

