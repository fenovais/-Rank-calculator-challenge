//Definindo duas variáveis sendo vitórias e derrotas.
let victories = 100;
let defeats = 30;
let level;
//Definindo uma função que subtrai as vitórias e derrotas do usuário e retorna um saldo
function subtract(victories,defeats){
     return victories - defeats;
       
}
//calculando o saldo de vitórias
let  winningBalance = subtract(victories, defeats);


 if (winningBalance<10){
    level = "Iron";
}
else if (winningBalance>=11 && winningBalance<=20){
    level = "Bronze";
}
else if (winningBalance>=21 && winningBalance<=50){
    level = "Silver";
}
else if (winningBalance>=51 && winningBalance<=80){
    level = "Gold";
}
else if (winningBalance>=81 && winningBalance<=90){
    level = "Diamond";
}
else if (winningBalance>=91 && winningBalance<=100){
     level = "Legendary";
}
else{
     level = "Immortal";
}
console.log("O Herói tem de saldo de "+ winningBalance,"vitórias, e está no nível " + level);