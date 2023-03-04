const sumArray=(args)=>{
    let sum=0
    for(const values of args){
        sum+=values
    }
    return sum
}
console.log({sumResult: sumArray([12,3,4,1,2,3])})


const countWordSizeCase=(input="")=>{
  const splitInput= input.split(" ").map((input)=> input.toLocaleLowerCase())

 const uniqueInput = splitInput.filter((value, index, self)=> index=== self.findIndex((_self)=>_self===value)&& value!=="")

 const result = uniqueInput.reduce((acc, currItem)=>{
    let countOfCurrentItem =0
    for(const input of splitInput){
        if(input===currItem){
            countOfCurrentItem+=1
        }
    }
    acc[currItem]= countOfCurrentItem
    return acc
 }, {})
 
 return result
}

console.log({wordSizeCaseResult: countWordSizeCase("Hello    tt     tt     hello world      hello hello earth earth")})
