// --------------------------------------------es1--------------------------------------------------------

// var bici = [
//     {
//         nome : "gian",
//         peso : 10,
//     },
//     {
//         nome : "aranvia",
//         peso : 3,
//     }, 
//     {
//         nome : "iok",
//         peso : 50,
//     },
// ];


// var min = 999990 ;
// var n;
// for(var i=0; i<bici.length ;i++){
//     if(bici[i].peso < min){
//         min = bici[i].peso;
//         n = i; 
//     }
// }

// console.log("la bici più leggera è ",bici[n].nome ," peso : ",max);

// --------------------------------------------es2--------------------------------------------------------

// var pesoTot = 0 ;
// var orto = [];

// var zucchina = {
//     varietà : " ",
//     peso : 0 ,
//     lunghezza : 0,
// };

// for(var i=0 ; i < 10 ; i++){
//    zucchina.varietà = prompt("inserisci varietà : ");
//    zucchina.peso = rand(0,10);
//    zucchina.lunghezza = rand(0,10);
//    orto.push(zucchina);
//    pesoTot += zucchina.peso;
//    console.log("peso zucchina : " , zucchina.peso);
// }
// console.log(pesoTot);



// function rand(min , max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }




// --------------------------------------------es3--------------------------------------------------------
//da non fare quando si lavora con gli oggetti 
//    zucchina.varietà = prompt("inserisci varietà : ");
//    zucchina.peso = rand(0,10);
//    zucchina.lunghezza = rand(10,30);
//     orto.push(zucchina);



var z15 = []; //zucchine con lunghezza >= 15
var peso15 = 0 ;
var z14 = []; //zucchine con lunghezza < 15
var peso14 = 0 ;

var zucchina = {
    varietà : " ",
    peso : 0 ,
    lunghezza : 0,
};


//carico 10 zucchine nel vettore orto
for(var i=0 ; i < 10 ; i++){

    orto.push({varietà : prompt("inserisci : "), peso : rand(0,10) , lunghezza : rand(10,30) });
}
console.log(orto);

//caricamento vettori z14 z15
for(var i=0 ; i < orto.length ; i++){
    if(orto[i].lunghezza >= 15){
        z15.push(orto[i]);
        console.log(z15);
    }
    else{
        z14.push(orto[i]);
        console.log(z14);
    }
}

//calcolo peso totale dei due gruppi di zucchine 
for(var i=0 ; i < z15.length ; i++){
    peso15 += z15[i].peso;
}

for(var i=0 ; i < z14.length ; i++){
    peso14 += z14[i].peso;
}


//output
console.log("peso 15 : ", peso15);
console.log("peso 14 : ", peso14);



//generazione numero random 
function rand(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


