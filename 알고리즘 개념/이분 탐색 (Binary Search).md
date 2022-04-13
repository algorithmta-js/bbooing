# Binary Search

> 👉 혹시.. 업다운 게임을 다들 아시나요? 우리가 대충 뭔가 1~100 사이의 숫자 중 하나를 골라서 맞추는 업다운 게임을 한다고 합시다. 그러면 뭔가 1부터 1, 2, 3, 4, 이런 식으로 맞추기보다는 중간값 50! 를 외치게 되지 않나요..? 우리는 은연중에 이분 탐색을 이해하고 있었던 것입니다….

## Binary Search(이분 탐색)?

![binary_search_gif](https://blog.penjee.com/wp-content/uploads/2015/04/binary-and-linear-search-animations.gif)

**이분 탐색** = **정렬되어 있는 배열**에서 특정 데이터를 찾기 위해 모든 데이터를 순차적으로 확인하는 대신 **탐색 범위를 절반**으로 줄여가며 찾는 탐색 방법
<br/>
<br/>
❓ 왜 정렬된 배열에서만 가능할까? 그것은 동작 방식을 보면 이해할 수 있다!

## 동작 방식

배열의 중간에 있는 값을 선택하여 찾고자하는 target과 비교한다.

1. 배열이 정렬(sort)되어 있어야 한다.
2. low와 high를 배열의 양 끝 인덱스로 설정한다.
3. mid = (low + high) / 2 로 설정한다.
4. mid에 해당하는 값과 찾고자 하는 target과 비교한다.
   1. 중간 값이 target과 같으면 탐색 종료 (a[mid] = target)
   2. 중간 값보다 target이 크다면 중간 값 기준 배열의 오른쪽 구간을 대상으로 탐색한다. (a[mid] < target) (low = mid + 1 로 설정)
   3. 중간 값보다 target이 작다면 중간 값 기준 배열의 왼쪽 구간을 대상으로 탐색한다. (a[mid] > target)
      ( high = mid - 1 로 설정)
5. 탐색을 성공하여 해당 값을 찾을 때까지 반복한다. or 탐색을 실패하여 low > high 될 때까지 반복한다.

<img src="https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff90dff9b-a355-4d19-8869-7a828ac19c50%2FKakaoTalk_Photo_2022-04-13-15-11-41.png?table=block&id=b356c1ed-69af-4680-9b2c-a0df161b72df&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=770&userId=&cache=v2" width="500" height="500">

💡 mid를 중심으로 왼쪽 구간을 대상으로 탐색할지 오른쪽 구간을 대상으로 탐색을 진행할지 결정이된다. 예를 들어 왼쪽 구간을 대상으로 탐색을 진행하게 되면 오른쪽의 데이터는 더 이상 확인 하지 않는다.

## 시간 복잡도

한 번 비교할 때마다 탐색 범위가 절반으로 줄어든다.

주어진 배열의 크기가 N이라고 가정했을 때, 시행 횟수를 k 라고 한다.

시행 횟수를 k번 해서 정답을 찾았다면 남은 배열의 크기가 1로 볼 수 있다.

결론적으로 이진 탐색의 시간 복잡도는 O(N) = logN이다.

![time_complexity](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F42bca09b-e072-43d6-8bbf-69bceff64f81%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-04-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12.48.52.png?table=block&id=d917e10d-585b-421c-b599-f2ebda2b3b07&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=290&userId=&cache=v2)

- 수식이 이해가 안된다면?<br/>
  1번 탐색하고 나면 반이 줄어드니 탐색의 범위가 N/2개 남는다.<br/>
  2번 탐색하고 나면 반이 줄어드니 탐색의 범위가 N/4개 남는다.<br/>
  3번 탐색하고 나면 반이 줄어드니 탐색의 범위가 N/8개 남는다.<br/>
  ....<br/>
  k번 탐색하고 나면 반이 줄어드니 탐색의 범위가 N/2^k 개가 남는다.<br/>
  이 때, 이분탐색을 시도해서 딱 1개만 남았다고 가정을 하면, N/2^k = 1이다.<br/>
  즉 k는 logN (밑이 2) 횟수를 시도하면 정답을 찾을 수 있다.<br/>
  따라서 시간복잡도가 **O(logN)** 만큼 걸린다고 말할 수 있다.<br/>

## 종료 조건

1. 탐색을 성공할 경우 
   1. 배열에서 target과 같은 요소를 발견한 경우 
   2. a[mid] == target
   ![end1](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe279baf3-bb50-409e-bb4a-555ec91561b3%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-04-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.15.41.png?table=block&id=4fab86cf-ddfa-46d5-8ff4-dc49e66116c4&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=2000&userId=&cache=v2)

2. 탐색을 실패한 경우 
   1. 더 이상 탐색할 범위가 없을 경우 
   2. low > high
   ![end2](https://pale-freighter-43a.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3202c4ec-9b37-4922-9bcd-dad83cf971f6%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-04-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.15.51.png?table=block&id=ab1ec081-6154-4891-bd6b-a6dad7980bc7&spaceId=07c9824f-8fb4-4d32-b4e1-f618c474c29f&width=2000&userId=&cache=v2)

## 코드 구현

```javascript
function binarySearch(target, data) {
  let low = 0;
  let high = data.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (data[mid] === target) {
      return data[mid];
    } else if (data[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
```

- 예시
  데이터를 1000개를 가진 배열에서 8999라는 숫자를 찾는 데 걸린 횟수는 **12번**이다.
  만약 이분 탐색이 아닌 선형 탐색으로 8999라는 숫자를 찾았다면 걸린 횟수는 **8999번** 일 것이다.

## 장단점

- 장점
  - 선형 탐색과 비교하여 탐색 시간이 빠르다.
- 단점
  - 정렬된 배열에서만 사용될 수 있다.

## 문제

[프로그래머스-이분탐색](https://programmers.co.kr/learn/courses/30/parts/12486)

- 입국심사
  ```jsx
  function solution(n, times) {
    times.sort();
    let answer = 0;
    let low = 1;
    let high = times[times.length - 1] * n;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let people = 0;
      times.forEach((time) => {
        people += Math.floor(mid / time);
        if (people >= n) {
          return;
        }
      });
      if (people >= n) {
        answer = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return answer;
  }
  ```
  위의 개념 예시들에서는 low, high, mid를 index를 기준으로 선정했지만, 위의 문제는 값을 기준으로 low, high, mid를 선정한다.<br/>
  
  이분 탐색 범위: 심사하는데 걸리는 총 분 (1분 ~ 가장 오래 심사하는데 걸리는 분)<br/>
  
  low는 1분, high는 times에서 가장 오래 심사하는 사람이 모든 사람을 심사하는데 걸리는 분.<br/>
  
  mid는 모든 심사관들에게 주어진 시간.<br/>
  
  people은 모든 심사관들이 mid분 동안 심사한 사람의 수.<br/>
  기준은 mid 분 동안 심사한 사람의 수가<br/>
  - n 보다 많거나 같다면, 시간이 충분했다는 거니까 주어진 시간을 줄인다.<br/>
    (즉, high를 mid - 1)<br/>
  - n 보다 적은 경우에는 시간이 부족했던 것이니까 주어진 시간을 늘린다.<br/>
    (즉, low를 mid + 1)<br/>

## 부록

- 참고 자료<br/>
  [이진 탐색 (Binary search) 개념 및 구현](https://yoongrammer.tistory.com/75#%EC%A2%85%EB%A3%8C_%EC%A1%B0%EA%B1%B4)<br/>
  [[알고리즘] 이분(이진)탐색 (Binary Search)](https://novemberfirst.tistory.com/84)<br/>
  [이진탐색(Binary Search) 알고리즘](https://velog.io/@ssuda/%EC%9D%B4%EC%A7%84%ED%83%90%EC%83%89Binary-Search-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)<br/>

- 추가로 보면 좋을 듯한 자료<br/>
  [이분 탐색(Binary Search) 헷갈리지 않게 구현하기](https://www.acmicpc.net/blog/view/109)<br/>
  [[이분탐색] 파라메트릭 서치(Parametric Search)](https://velog.io/@lake/%EC%9D%B4%EB%B6%84%ED%83%90%EC%83%89-%ED%8C%8C%EB%9D%BC%EB%A9%94%ED%8A%B8%EB%A6%AD-%EC%84%9C%EC%B9%98Parametric-Search)
