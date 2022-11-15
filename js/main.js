let mat = "matin";
let aprem = "après-midi";
let soir = "soir";
let boisson = 0;

let myHour = prompt("Quelle heure est-il ?");

// if (myHour>=24) {console.log("Allons, un peu de sérieux!");}
// else {if (myHour>12 && myHour<18) {console.log("C'est l'après-midi");}
// else {if (myHour>=18 && myHour<21) {console.log("C'est le soir");}
// else {if (myHour>=7 && myHour<=12) {console.log("C'est le matin");}
// else {console.log("Allez dormir!!!");}}}}

if (myHour>12 && myHour<18) {
    boisson = aprem;
}else if (myHour>=18 && myHour<21) {
    boisson = soir;
}else if (myHour>=7 && myHour<=12) {
    boisson = mat;
}

switch(boisson) {
  case aprem:
    console.log("Thé");
    break;
  case soir:
    console.log("Infusion");
    break;
  case mat:
    console.log("Café");
    break;
  default:
    console.log("Eau");
}

