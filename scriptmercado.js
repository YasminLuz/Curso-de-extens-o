//javascript supermercado

 const funcao = function(){
    let quantidade = document.getElementByClass("quant");
     if(quantidade.value.length == 0){
       alert("Insira a quantidade desejada!");
         } else {
         
      var str;
      str = quantidade.value(3, str.length);
      let valor = document.getElementClass('preco');
      //botao.addEventListener("click", funcao);
      
      var arrayquantidade = document.querySelectorAll(".quantidade");
      
      for (let x = 0; x < arrayquantidade.length; x++){
          //arrayquantidade[x].value;
         let preco += valor*str;
       } 
               
      alert("Voce comprou no total de R$, "+ preco.value);
       }
 
      
     }
 };
   
      //botao.addEventListener("click", funcao);
  
