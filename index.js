const { log } = require("console");

console.log('-------1------');
function plius_one(a) {
    return ++a;
}
console.log(plius_one(0));
console.log(plius_one(9));
console.log(plius_one(-3));

console.log('-------2------');
function val_sek(valandos){
    return valandos * 3600;
}
console.log(val_sek(2));
console.log(val_sek(10));
console.log(val_sek(24));

console.log('-------3------');
function taskai(a, b, c){
    
    return a + (b*2)  + (c*3);
}
console.log(taskai(5,25,10));
console.log(taskai(1,1,1));
console.log(taskai(10,20,5));

console.log('-------4------');
function simtas(a,b){
    const suma= a+b;
    if(suma<=100){
        return true;
    }else{
        return false;
    }
}
  console.log(simtas(22,15));
  console.log(simtas(83,34));
  console.log(simtas(3,77));

  console.log('-------5------');
function argumentai(a,b){
    if(a===b){
        return true;
    } else{
        return false;
    }
}
console.log(argumentai(4,8));
console.log(argumentai(2,2));
console.log(argumentai(2,"2"));

console.log('-------6------');
function palyginimas(n1,n2){
    if(n1 > n2){
        return n1 + '"yra didesnis skaicius"';
    } else if(n1 < n2){
        return n2+ '"yra didesnis skaicius"';
    } else{
        return  '"abu skaiciai lygus"';
    }
}
console.log(palyginimas(10,20));
console.log(palyginimas(2,-1));
console.log(palyginimas(10,10));

console.log('-------7------');


function daugyba(a){
    let sk = 0;
    let ats = ''
    for(i = 1; i <= 10; i++){
        sk = i * a;
        ats = ats + `${i} * ${a} = ${sk}\n` ;
    }
    return ats;
}
console.log(daugyba(3));