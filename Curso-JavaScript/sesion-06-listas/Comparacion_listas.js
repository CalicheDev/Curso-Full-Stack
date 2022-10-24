//Cómo podemos comparar listas
// .every()
const array = [4,5,2,5,3,6,9]

const resultado = array.every(valor=>{
    if(valor > 0){
        return true
    }else{
        return false
    }
})
console.log(resultado);


//comparar listas
const arg1 = [1,2,3,4]
const arg2 = [1,2,3,4]

console.log(arg1 === arg2)

const comprarArray = ((array_1,array_2)=>{
    if(array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i)=>valor ==array_2[i])
    return res
})
console.log(comprarArray(arg1,arg2))
const arg3 = [1,2,3,8]

console.log(comprarArray(arg1,arg3))