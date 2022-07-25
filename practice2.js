"use strict"
    function findTheBiggestNum(listNum){

            let biggestnum=listNum[0]

            for(const myNumber of listNum){
                console.log(myNumber)
                if(myNumber<biggestnum){
                    biggestnum=myNumber
                }
            }
            return biggestnum

// const array= [1,2,3,4,5,]
// console.log(array[1])

}
console.log(findTheBiggestNum([10,100,2001,20]))
console.log("hello world")



