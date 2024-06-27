let arr = [1,2,3,4,5];



Array.prototype.myReduce = function(fn,initalValue)  {
    let acc = initalValue;

    for(let i = 0; i < this.length;i++){
        acc = acc ? (acc + this[i]): this[i];
    }
    
    return acc;

}

let result = arr.myReduce((acc,item,index,arr) => {
    return acc + item;
},10)

console.log("result", result)