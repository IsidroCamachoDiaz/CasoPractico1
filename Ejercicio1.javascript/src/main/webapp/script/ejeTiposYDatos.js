function cas1(){
let variable1 = 10;
     let variable2 = 5.3;

      document.write(typeof(variable1));
      document.write(typeof variable2);
}

function cas2(){
     let es = true;
     document.write(typeof(es));
     document.write(es);
}

function cas3(){
    let variable1 = 10;
     let variable2 = 5.3;

      document.write(typeof(variable1));
      document.write(typeof variable2);
}

function cas4(){
    let numeroGrande = 4567891324657987654;
     let numeroGrandeCasteado = BigInt(987654321654987654);

     document.write(typeof(numeroGrande));
     document.write(numeroGrande);
     document.write(typeof(numeroGrandeCasteado));
    document.write(numeroGrandeCasteado);
}

function cas5(){
    let texto = "Soy un string";     

    document.write(typeof(texto));

     document.write(texto);
}

function cas6(){
    let variableVacia;
     document.write(variableVacia);

     document.write(typeof(variableVacia));
}
function cas7(){
 let nulo = null;
     let vacio;
     document.write(nulo);
     document.write(typeof(nulo));
}

function cas8(){
let Objeto = new Object();
document.write(Objeto);
}
