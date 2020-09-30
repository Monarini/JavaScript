function compras(trabalho1, trabalh02){
    
    const compraSorvete = trabalho1 || trabalh02
    const compraTv50 = trabalho1 && trabalh02
    //const compraTv32 = !!(trabalho1 ^ trabalh02) - bitwise xor
    const compraTv32 = trabalho1 != trabalh02
    const manterSaudavel = !compraSorvete // operador unário

    return{ compraSorvete, compraTv50, compraTv32, manterSaudavel}

}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))