function solution(brown, yellow) {
    var answer = [];
    
    let area = brown+yellow;
    let yellowWidth = 0;
    let yellowHeight = 0;
    
    for(let i=1,j=yellow;i<=j;i++, j=yellow/i){
        
        if(yellow%i === 0 && area === (i+2)*(j+2)){
            yellowWidth = j;
            yellowHeight = i;
        }
        
    }
    
    answer = [yellowWidth+2, yellowHeight+2];
    
    return answer;
}
