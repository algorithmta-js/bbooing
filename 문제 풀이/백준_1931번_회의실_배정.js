const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...arr] = input;
let answer = 0;
const schedule = arr.map((num) => num.split(' ').map(Number)) // [시작 시간, 끝나는 시간] 형태의 배열로 회의 시간 표현
                    .sort((a,b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]); // 시작 시간 비교도 중요함

let finish = -1;
schedule.forEach((time) => {
  if(time[0] >= finish) { // 끝나는 동시에 시작할 수 있기 때문에 같은 경우 포함
    answer++;
    finish = time[1];
  }
});

console.log(answer);
