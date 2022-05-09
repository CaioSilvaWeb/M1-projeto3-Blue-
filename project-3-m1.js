const prompt = require("prompt-sync")();
console.clear();

console.log("Para iniciar o game digite seu nome:  ");
let nome = prompt("");

console.log();

console.log(`Olá ${nome} seja bem vindo, você tem 5 dias para 
se desenvolver como programador e alcaçar sua vaga como desenvolvedor
frontend no mercado de trabalho!\nVocê tera 3 indicadores que precisam de atenção
são eles: Energia, fome e Experiência.\n`);

console.log(`Observe que de acordo com o aumento da sua experiência voce recebe algumas observações!\n`)

console.log(`${nome} você tem conhecimento de HTML e CSS, sua missão é dominar
JavaScript e React você precisará passar por alguns obstáculos, mas fazendo as escolhas 
certas você alcançara seus objetivos! Boa sorte!!`);

let status = {//variaveis de valores para serem manipuladas durante o jogo
  Energia: 100,
  Fome: 80,
  Dia: 0,
  Experiencia: 100,
  Horas:0
};


function validar (){//funçao que define o fim de jogo
  if (status.Experiencia <= 0) {
    final1();
    process.exit(1);
  }
  if (status.Energia <= 0) {
    final2();
    process.exit(1);
  }
  if (status.Fome <= 0) {
    final3();
    process.exit(1);
  }
}  


function xp(){//funçao que valida as experiencias
  if(status.Experiencia >= 50 && status.Experiencia <= 59){
    let mestre = '\nMestre da lógica!'
    listaDeExperiencias.push(mestre);
    console.log(mestre);
  }
  else if (status.Experiencia >= 60 && status.Experiencia <= 69) {
    let mestre2 = '\nVocê dominou o Javascript!'
    listaDeExperiencias.push(mestre2);
    console.log(mestre2);
  }
  else if(status.Experiencia >= 70 && status.Experiencia <= 75){
    let mestre3 = '\nVocê já começou bem React!'
    listaDeExperiencias.push(mestre3);
    console.log(mestre3);
  }
  else if(status.Experiencia >= 76 && status.Experiencia <= 85){
    let mestre4 = '\nVocê dominou React e está pronto para se canditar a vagas!'
    listaDeExperiencias.push(mestre4);
    console.log(mestre4);
  }
  else if(status.Experiencia >= 86 && status.Experiencia <= 100){
    let mestre5 = `\nPARABENSSSSSS! ${nome} VOCÊ FOI CHAMADO PARA UMA ENTREVISTA E FOI SELECIONADO PARA A VAGA!!`
    listaDeExperiencias.push(mestre5);
    console.log(mestre5);
    console.log();
    console.log(`
    FIM DE JOGO!!
    Para jogar novamente reinicie o terminal!
    `);
    process.exit(1);
  }
}

function horario (){//funçao que mostra as horas
  console.log(`São examente ${status.Horas} horas!`);
}
function final1() {//funçao que mostra o final 1
  console.log();
  console.log(`        !!GAME OVER!!\n
  Você perdeu porque nao se dedicou aos estudos!
  Para jogar novamente reinicie o terminal!\n`);
}
function final2() {//funçao que mostra o final 2
  console.log();
  console.log(`        !!GAME OVER!!\n
  Você ficou sem energia e perdeu!
  Para jogar novamente reinicie o terminal!\n`);
}
function final3() {//funçao que mostra o final 3
  console.log();
  console.log(`        !!GAME OVER!!\n
  Você ficou com fome e perdeu!
  Para jogar novamente reinicie o terminal!\n`);
}
function avancarDia() {//funcao para 'dormir' e iniciar um novo dia
  status.Dia++;
  console.log(`Um novo dia se inicia, estamos no dia ${status.Dia}\n`);
}
function statusAtualizado() {
  console.log(`
    Fome: ${status.Fome}/80
    Energia: ${status.Energia}/100
    Experiência: ${status.Experiencia}/100`);
}

console.log();

status.Experiencia -= 65;

console.log(
  "____________________________________________________________________________"
);

let listaDeExperiencias = [];

console.log();

//inicio
//manha
for (let i = 1; i < 6; i++) {
  status.Fome = 40;
  avancarDia();
  console.log(`${nome}, pressione ENTER para acordar!`);
  prompt();
  status.Horas = 8;
  console.log(
    `Bom dia ${nome}, são ${status.Horas} horas da manhã, mais um dia está começando e você precisa se levantar...\n\n(a) Levantar e tomar café\n(b) Ficar mais um tempo na cama\n`
  );
  console.log();
  let respostaDiaUm = prompt().toLowerCase();
  console.log();
  while (respostaDiaUm != "a" && respostaDiaUm != "b") {
    console.log("INSIRA UMA RESPOSTA VÁLIDA!! [a/b]");
    respostaDiaUm = prompt().toleLowerCase();
  }

  if (respostaDiaUm == "a") {
    console.log(
      `Ótima escolha, você se alimentou e agora está pronto pra mais um dia`
    );
    status.Fome += 10;
    status.Energia -= 10;
    validar();
    xp();
  } else if (respostaDiaUm == "b") {
    console.log(
      `Hmmmmm... Voce precisa focar, dormir de mais não é saudável e sua vaga de dev não vai cair do ceu.`
    );
    status.Fome -= 10;
    status.Energia -= 10;
    validar();
    xp();
  }

  statusAtualizado();
  console.log(
    "____________________________________________________________________________\n"
  );
  //manha parte 2
  status.Horas = 10;
  horario();
  console.log();
  console.log(
    `O que voce gostaria de fazer agora ${nome}?\n\n(a) Vamos estudar programaçao\n(b) Vamos jogar FIFA\n`
  );
  console.log();
  let respostaDiaDois = prompt().toLowerCase();

  console.log(
    "____________________________________________________________________________\n"
  );

  while (respostaDiaDois != "a" && respostaDiaDois != "b") {
    console.log("INSIRA UMA RESPOSTA VÁLIDA!! [a/b]");
    respostaDiaDois = prompt().toLowerCase();
  }
  if (respostaDiaDois == "a") {
    console.log(`Muito bom! Com foco e dedicaçao essa vaga ta no papo`);
    status.Fome -= 5;
    status.Energia -= 10;
    status.Experiencia += 5;
    validar();
    xp();
  } else if (respostaDiaDois == "b") {
    console.log(
      `Pessima escolha ${nome}, procrastinaçao nao vai te levar a lugar algum!`
    );
    status.Fome -= 5;
    status.Energia -= 10;
    validar();
    xp();
  }

  statusAtualizado();

  console.log(
    "____________________________________________________________________________\n"
  );
  //almoco
  status.Horas = 12;
  horario();
  console.log();
  console.log(
    `Está na hora do almoço, o que você vai fazer?\n\n(a) Almoçar\n(b) Continuar ou começar a jogar FIFA `
  );
  console.log();
  let respostaAlmoco = prompt().toLowerCase();

  console.log(
    "____________________________________________________________________________\n"
  );

  while (respostaAlmoco != "a" && respostaAlmoco != "b") {
    console.log("INSIRA UMA RESPOSTA VÁLIDA!! [a/b]");
    respostaAlmoco = prompt().toLowerCase();
  }

  if (respostaAlmoco == "a") {
    console.log(
      `Ok, você se alimentou e agora esta pronto pra continuar seu dia!`
    );
    status.Fome += 10;
    status.Energia += 5;
    validar();
    xp();
  } else if (respostaAlmoco == "b") {
    console.log(
      `Pessima escolha ${nome}, procrastinaçao nao vai te levar a lugar algum!`
    );
    status.Fome -= 10;
    status.Energia -= 10;

    validar();
    xp();
  }

  statusAtualizado();

  console.log(
    "____________________________________________________________________________\n"
  );
  //tarde
  status.Horas = 14;
  horario();
  console.log();
  console.log(
    `O que você gostaria de fazer agora\n\n(a) Estudar JavaScript\n(b) Relaxar e assistir um filme `
  );
  console.log();
  let respostaTarde = prompt().toLowerCase();

  console.log(
    "____________________________________________________________________________\n"
  );

  while (respostaTarde != "a" && respostaTarde != "b") {
    console.log("INSIRA UMA RESPOSTA VÁLIDA!! [a/b]");
    respostaTarde = prompt().toLowerCase();
  }

  if (respostaTarde == "a") {
    console.log(`Parabens, você vai ser um excelente desenvolvedor ${nome}!`);
    status.Experiencia += 5;
    status.Fome -= 5;
    status.Energia -= 10;
    validar();
    xp();
  } else if (respostaTarde == "b") {
    console.log(
      `Relaxar e assistir um bom filme é muito bom ${nome}, mas na hora certa!`
    );
    status.Fome -= 5;
    status.Energia -= 10;
    validar();
    xp();
  }

  statusAtualizado();
  console.log(
    "____________________________________________________________________________\n"
  );
  //noite
  status.Horas = 18;
  horario();
  console.log();
  console.log(
    `Anoiteceu ${nome}, o que você gostaria de fazer\n\n(a) Jantar\n(b) Estudar mais um pouco`
  );
  console.log();
  let respostaNoite = prompt().toLowerCase();

  console.log(
    "____________________________________________________________________________\n"
  );

  while (respostaNoite != "a" && respostaNoite != "b") {
    console.log("INSIRA UMA RESPOSTA VÁLIDA!! [a/b]");
    respostaNoite = prompt().toLowerCase();
  }

  if (respostaNoite == "a") {
    console.log(`Boa escolha ${nome}!`);
    status.Fome += 10;
    status.Energia -= 10;
    validar();
    xp();
  } else if (respostaNoite == "b") {
    console.log(
      `Excelente ${nome}, logo logo você será contrado!`
    );
    status.Fome -= 5;
    status.Energia -= 5;
    status.Experiencia += 5;
    validar();
    xp();
  }

  statusAtualizado();
  console.log(
    "____________________________________________________________________________\n"
  );
  console.log();
  //noite parte 2
  status.Horas = 21;
  horario();
  console.log();
  console.log(`Já esta bem tarde!\n\n(a) Dormir\n(b) Continuar acordado`);
  console.log();
  let respostaNoite2 = prompt().toLowerCase();

  console.log(
    "____________________________________________________________________________\n"
  );

  while (respostaNoite2 != "a" && respostaNoite2 != "b") {
    console.log("INSIRA UMA RESPOSTA VÁLIDA!! [a/b]");
    respostaNoite = prompt().toLowerCase();
  }

  if (respostaNoite2 == "a") {
    console.log(`Boa escolha, bom descanso! ${nome}!`);
    status.Fome += 10;
    status.Energia = 100;
    validar();
    xp();
  } else if (respostaNoite2 == "b") {
    console.log(`Mandou mal ${nome}, você precisa descansar`);
    status.Fome -= 5;
    status.Energia -= 30;
    validar();
    xp();
  }

  statusAtualizado();

  console.log(
    "____________________________________________________________________________\n"
  );
  console.log();
}

console.log(`Infelizmente você não foi conseguiu a vaga dentro do prazo
mas você pode tentar novamente, basta reiniciar o terminal!\n`);

