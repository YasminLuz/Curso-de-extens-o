//NODE JS

console.log("Olá mundo!");
document.write("Olá mundo!");
alert("Olá mundo!");

const primo = function (a){
 for (let i = 2; i<=a; i++){
     if (a==i)
         return true;
     else if (a%i ==0)
         return false;
     
     }
    return false;
}

primo(13); //true
primo(9) //false


const div = (a) =>{ //arrowfunction
    
    
}

var arr = [1,2,4, 5,6]

arr.map(elemento => { return elemento * 2; });  // 

mapeado.filter ((elemento) => { return elemento <10})  //filtra

mapeado.reduce((elemento,c) => { return elemento +c;}); //faz soma de um array
