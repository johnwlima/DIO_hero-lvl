let xp = 1;
let nome = "Insira seu nome";
let nivel;

//puxa informações do último save (informações baixo = teste)

xp = 8150;
nome = "Aladin";

//confere e atribui nível de acordo com o xp

if ((xp <= 1000)) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000){
  nivel = "Bronze";
} else if(xp >= 2001 && xp <= 5000){
  nivel = "Prata";
} else if(xp >= 5001 && xp <= 7000){
  nivel = "Ouro";
} else if(xp >= 7001 && xp <= 8000){
  nivel = "Platina";
} else if(xp >= 8001 && xp <= 9000){
  nivel = "Ascendente";
} else if(xp >= 9001 && xp <= 10000){
  nivel = "Imortal";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
