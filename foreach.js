let arr = [1,2,3,4,5];



Array.prototype.myForEach = function(fn)   {
   
    for(let i = 0; i < this.length;i++){
      fn(this[i],i,this)
    }

}

let res = arr.myForEach((item,index,arr) =>{
    console.log(item)
})


console.log("result", res)