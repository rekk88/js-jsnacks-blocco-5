var z15 = []; //zucchine con lunghezza >= 15
var peso15 = 0 ;
var z14 = []; //zucchine con lunghezza < 15
var peso14 = 0 ;
// var orto = [];
var orto = new Array();
// Array.prototype.push = function(){ alert('non pushi piuu')};
var test = new Object();
console.log(test);
var zucchina = {
    varietà : " ",
    peso : 0 ,
    lunghezza : 0,
};


//carico 10 zucchine nel vettore orto
for(var i=0 ; i < 10 ; i++){
//    zucchina.varietà = prompt("inserisci varietà : ");
//    zucchina.peso = rand(0,10);
//    zucchina.lunghezza = rand(10,30);

    orto.push({varietà : prompt("inserisci : "), peso : rand(0,10) , lunghezza : rand(10,30) });
//     orto.push(zucchina);
//    console.log("lunghezza zucchina : " , zucchina.lunghezza);
}
console.log(orto);
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
for(var i=0 ; i < z15.length ; i++){
    peso15 += z15[i].peso;
}

for(var i=0 ; i < z14.length ; i++){
    peso14 += z14[i].peso;
}

console.log("peso 15 : ", peso15);
console.log("peso 14 : ", peso14);


function rand(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
