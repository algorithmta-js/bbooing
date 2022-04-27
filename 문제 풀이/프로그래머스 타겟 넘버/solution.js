function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (sum, idx) => {
        if(idx >= numbers.length){
            sum === target? (answer = answer + 1) : null;
            return;
        };
    
        dfs(sum + numbers[idx], idx+1);
        dfs(sum - numbers[idx], idx+1);
    }   
    
    dfs(0,0);
    
    return answer;
    
}
