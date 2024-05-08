function transform(number){
    result=[];
    for(let index=0;index<=number.length ;index++){
        let oj=  { val: number[index] };
        result.push(oj);
    }
    return result;
}
transform(5);