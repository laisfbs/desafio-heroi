/*   O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

   ## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

   ## Saída
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**/

let nomeHeroi = "SuperGirl";
let qtdXP = 10002;
let nivel = "";

if (qtdXP < 1000) {
  console.log(nivel = "Ferro");
} else if (qtdXP >= 1001 && qtdXP <= 2000) {
  console.log(nivel = "Bronze");
} else if (qtdXP >= 2001 && qtdXP <= 5000) {
  console.log(nivel = "Prata");
} else if (qtdXP >= 5001 && qtdXP <= 7000) {
  console.log(nivel = "Ouro");
} else if (qtdXP >= 7001 && qtdXP <= 8000) {
  console.log(nivel = "Platina");
} else if (qtdXP >= 8001 && qtdXP <= 9000) {
  console.log(nivel = "Ascendente");
} else if (qtdXP >= 9001 && qtdXP <= 10000) {
  console.log(nivel = "Imortal");
} else {
  console.log(nivel = "Radiante");
}

console.log("O Herói de nome", nomeHeroi, "está no nível de", nivel);
