
let arr = [1,2,4];

let result = arr.map((item,ind,arr) => {
    return item + 2;
})

Array.prototype.myMap = function(fn) {
    let result = [];

    for(let i = 0; i< this.length; i++){
        result.push(fn(this[i], i, this))
    }

    return result;
}

console.log("result",arr.myMap((item) => {
    return item * 3;
}))