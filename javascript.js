'use strict';

const rollButton = document.querySelector("#roll-nog-een-keer");
const pogingenOver = document.querySelector("#beurt");
const dices1 =document.querySelector(".mogelijkeEnen") ;
const dices2 =document.querySelector(".mogelijkeTweeën"); 
const dices3 =document.querySelector(".mogelijkeDrieën");
const dices4 =document.querySelector(".mogelijkeVieren");
const dices5 =document.querySelector(".mogelijkeVijfen");
const dices6 =document.querySelector(".mogelijkeZessen");
const tok =document.querySelector(".toak");
const carree=document.querySelector(".careeM");
const fullHouse=document.querySelector(".FHM");
const ks=document.querySelector(".KSM");
const gs=document.querySelector(".GSM");
const yahtzee=document.querySelector(".yahtzeeM");
const chance=document.querySelector(".chanceM");
const totaleScore1=document.querySelector(".definitievePunten1");
const totaleScore2=document.querySelector(".definitievePunten2");
const bonus=document.querySelector(".puntenBonusDefinitief");
const totalescore1wb=document.querySelector(".bestAantalpunten1Definitief");
const Totaal=document.querySelector(".definitievePunten");
const dice1=document.querySelector(".dobbelsteen1");
const dice2=document.querySelector(".dobbelsteen2");
const dice3=document.querySelector(".dobbelsteen3");
const dice4=document.querySelector(".dobbelsteen4");
const dice5=document.querySelector(".dobbelsteen5");

let dices=[0,0,0,0,0];
let holdDices=[0,0,0,0,0];
let rollsLeft= 3;
const diceA = [dice1,dice2,dice3,dice4,dice5];
let opeenvolgendeWaarde;
let sameDices;

let alleEenen=0;
let alleTweeën=0;
let alleDrieën=0;
let alleVieren=0;
let alleVijfen=0;
let alleZessen=0;
let bonusScore=0;
let score1=0;
let toak=0;
let caree=0;
let fullH=0;
let Kstraat=0;
let Gstraat=0;
let yahtzeeS=0;
let chanceS=0;
let totaleScoreS=0;
let score2=0;

let oak3;
let foak;

function countNumbers(number,diceScore){
let count=0; for(let i=0;i<dices.length; i++ ){
  if(dices[i]===number){
    count++;
  }
}
const punten = count * number;
if(diceScore.classList.contains("possible")){
  diceScore.textContent=punten;
}
}

function toakFunction(diceScore){
  const punten = dices[0]+dices[1]+dices[2]+dices[3]+dices[4];
  let oak3 = false;
  for(let i=1; i<=6;i++){
    let sameDices=0;
    for(let j=0; j<5;j++){
      if(i==dices[j]){
        sameDices++;
  
      }
      if(sameDices>=3){
        oak3 = true;
      } 
    }
  }
  if(oak3 && tok.classList.contains('possible')){
    diceScore.textContent=punten;
    diceScore.value=true;
  } else if (!oak3 && tok.classList.contains('possible')){
    diceScore.textContent = '0';
  }
}

function careeFunction(diceScore){
  const punten = dices[0]+dices[1]+dices[2]+dices[3]+dices[4];
  let foak = false;
  for(let i=1; i<=6;i++){
    let sameDices=0;
    for(let j=0; j<5;j++){
      if(i==dices[j]){
        sameDices++;
  
      }
      if(sameDices>=4){
        foak= true;
      }
    }
  }
  if(foak && carree.classList.contains('possible')){
    diceScore.textContent=punten;
    diceScore.value=true;
  } else if (!foak && carree.classList.contains('possible')){
    diceScore.textContent= '0';
  }
}

function fullHouseFunction(diceScore){
  const punten = 25;
  let FullHouse = false;
  let ThreeFH = false;
  let TwoFH = false;
  for(let i = 0;i <= 6; i++){ 
      let sameDices = 0; 
      for(let j = 0; j < 5; j++){ 
          if(i == dices[j]){ 
          sameDices++ 
          } 
         
      }
      if(sameDices == 3){ 
          ThreeFH = true;
      }
  }
  for(let i = 0;i <= 6; i++){ 
      sameDices = 0; 
      for(let j = 0; j < 5; j++){ 
          if(i == dices[j]){ 
              sameDices++ 
          } 
          
      }
      if(sameDices == 2){ 
          TwoFH = true;
      }
  }
  if(ThreeFH && TwoFH){FullHouse = true;}
  if(FullHouse && fullHouse.classList.contains('possible')){
      diceScore.textContent = `${punten}`;
      diceScore.value = true;
  } else if (!FullHouse && fullHouse.classList.contains('possible')) {diceScore.textContent = 0}
};

function KstraatFunction(diceScore){
  const punten=30;
  let Kstraat= false;
  let straat= [6];
  for(let i=0;i<5; i++){
    let value = dices[i];
    straat[value-1] = 1;
    let opeenvolgendeWaarde = 0;
    for(let j=0; j<6; j++){
      if(straat[j]==1){
        opeenvolgendeWaarde++;
        if(opeenvolgendeWaarde>=4){Kstraat=true;
        break;}
      } else {
        opeenvolgendeWaarde = 0;
        Kstraat = false;
      }
    }
  }
  if (Kstraat && ks.classList.contains('possible')){
    diceScore.textContent=punten; 
  } else if (!Kstraat && ks.classList.contains('possible')) {
    diceScore.textContent='0';
}
}

function GstraatFunction(diceScore){
  const punten=40;
  let Gstraat= false;
  let straat= [6];
  for(let i=0;i<5; i++){
    let value = dices[i];
    straat[value-1] = 1;
    let opeenvolgendeWaarde = 0;
    for(let j=0; j<6; j++){
      if(straat[j]==1){
        opeenvolgendeWaarde++;
        if(opeenvolgendeWaarde==5){Gstraat=true;
        break;}
      } else {
        opeenvolgendeWaarde = 0;
        Gstraat = false;
      }
    } 
  }
  if (Gstraat && gs.classList.contains('possible')){
    diceScore.textContent=punten; 
  } else if(!Gstraat && gs.classList.contains('possible')) { 
    diceScore.textContent ='0';
  }
}

function yahtzeeFunction(diceScore){
  let yahtzeeF = false;
  const punten =50;
  for(let i=1; i<=6;i++){
    let sameDices=0;
    for(let j=0; j<5;j++){
      if(i==dices[j]){
        sameDices++;
  
      }
      if(sameDices==5){
        yahtzeeF= true;
      }
    }
  }
  if(yahtzeeF && yahtzee.classList.contains('possible')){
    diceScore.textContent=punten;
    diceScore.value=true;
  } else if (!yahtzeeF && yahtzee.classList.contains('possible')){diceScore.textContent=0}
}

function chanceFunction(diceScore){
  const punten = dices[0]+dices[1]+dices[2]+dices[3]+dices[4];
  if (chance.classList.contains('possible')){
  diceScore.textContent=punten;
  } 

}

function turnfunction(){
  rollsLeft = 3; 
pogingenOver.textContent = `Pogingen over: ${rollsLeft}`; 
rollButton.classList.remove('hidden'); 
dice1.src = 'Dobbelsteen0.png'; 
dice2.src = 'Dobbelsteen0.png'; 
dice3.src = 'Dobbelsteen0.png'; 
dice4.src = 'Dobbelsteen0.png'; 
dice5.src = 'Dobbelsteen0.png'; 
for(let z = 0; z < 5; z++){ 
diceA[z].classList.add('notSelected'); 
holdDices[z] = 0; 
}
}

rollButton.addEventListener('click',function(){
  rollsLeft--;
  pogingenOver.textContent= `Pogingen over: ${rollsLeft}`;
  if(rollsLeft===0){
    rollButton.classList.add("hidden");
  }
  for(let i=0; i <5; i++){
    if(holdDices[i] == 0){
      dices[i] = Math.floor(Math.random() * 6) +1;
      diceA[i].src = `Dobbelsteen${dices[i]}.png`;
    }
  }


  countNumbers(1, dices1);
  countNumbers(2, dices2);
  countNumbers(3, dices3);
  countNumbers(4, dices4);
  countNumbers(5, dices5);
  countNumbers(6, dices6);
  toakFunction(tok);
  careeFunction(carree);
  fullHouseFunction(fullHouse);
  KstraatFunction(ks);
  GstraatFunction(gs);
  yahtzeeFunction(yahtzee);
  chanceFunction(chance);
 totaleScore1.textContent = Number(dices1.textContent) + Number(dices2.textContent) + Number(dices3.textContent) + Number(dices4.textContent) + Number(dices5.textContent) + Number(dices6.textContent);
  totaleScore2.textContent = Number(tok.textContent) + Number(carree.textContent) + Number(fullHouse.textContent) + Number(ks.textContent) + Number(gs.textContent) + Number(yahtzee.textContent) + Number(chance.textContent);
  
  if(Number(totaleScore1.textContent) >= 63){bonus.textContent = '35'} else {bonus.textContent = '0';}
  totalescore1wb.textContent = Number(totaleScore1.textContent) + Number(bonus.textContent);
  Totaal.textContent = Number(totalescore1wb.textContent) + Number(totaleScore2.textContent);
 
  
 

});

 dice1.addEventListener('click', () => {
  if(dice1.classList.contains('notSelected')){
    dice1.classList.remove('notSelected');
    holdDices[0] = dices[0];
  } else {
    dice1.classList.add('notSelected');
    holdDices[0] = 0;
  }
 })

 dice2.addEventListener('click', () => {
  if(dice2.classList.contains('notSelected')){
    dice2.classList.remove('notSelected');
    holdDices[1] = dices[1];
  } else {
    dice2.classList.add('notSelected');
    holdDices[1] = 0;
  }
 })

 dice3.addEventListener('click', () => {
  if(dice3.classList.contains('notSelected')){
    dice3.classList.remove('notSelected');
    holdDices[2] = dices[2];
  } else {
    dice3.classList.add('notSelected');
    holdDices[2] = 0;
  }
 })

 dice4.addEventListener('click', () => {
  if(dice4.classList.contains('notSelected')){
    dice4.classList.remove('notSelected');
    holdDices[3] = dices[3];
  } else {
    dice4.classList.add('notSelected');
    holdDices[3] = 0;
  }
 })

 dice5.addEventListener('click', () => {
  if(dice5.classList.contains('notSelected')){
    dice5.classList.remove('notSelected');
    holdDices[4] = dices[4];
  } else {
    dice5.classList.add('notSelected');
    holdDices[4] = 0;
  }
 })


 document.querySelector('.dobbelsteenpunten1').addEventListener('click', function(){ 
  dices1.classList.remove('possible'); 
  dices1.classList.add('confirm'); 
  dices1.classList.remove('mogelijkeEnen'); 
  document.querySelector('.dobbelsteenpunten1').classList.remove('dobbelsteenpunten1'); 
  turnfunction();
  
 
  }); 
  document.querySelector('.dobbelsteenpunten2').addEventListener('click', function(){ 
  dices2.classList.remove('possible'); 
  dices2.classList.add('confirm'); 
  dices2.classList.remove('mogelijkeTweeën'); 
  document.querySelector('.dobbelsteenpunten2').classList.remove('dobbelsteenpunten2'); 
  turnfunction();
 
  }); 
  document.querySelector('.dobbelsteenpunten3').addEventListener('click', function(){ 
  dices3.classList.remove('possible'); 
  dices3.classList.add('confirm'); 
  dices3.classList.remove('mogelijkeDrieën'); 
  document.querySelector('.dobbelsteenpunten3').classList.remove('dobbelsteenpunten3'); 
  turnfunction();
 
  }); 
  document.querySelector('.dobbelsteenpunten4').addEventListener('click', function(){ 
  dices4.classList.remove('possible'); 
  dices4.classList.add('confirm'); 
  dices4.classList.remove('mogelijkeVieren'); 
  document.querySelector('.dobbelsteenpunten4').classList.remove('dobbelsteenpunten4'); 
  turnfunction();
 
  
  }); 
  document.querySelector('.dobbelsteenpunten5').addEventListener('click', function(){ 
  dices5.classList.remove('possible'); 
  dices5.classList.add('confirm'); 
  dices5.classList.remove('mogelijkeVijfen'); 
  document.querySelector('.dobbelsteenpunten5').classList.remove('dobbelsteenpunten5');
  turnfunction();
 
  }); 
  document.querySelector('.dobbelsteenpunten6').addEventListener('click', function(){ 
 dices6.classList.remove('possible'); 
 dices6.classList.add('confirm'); 
 dices6.classList.remove('mogelijkeZessen'); 
  document.querySelector('.dobbelsteenpunten6').classList.remove('dobbelsteenpunten6'); 
  turnfunction();
 
  }); 
  document.querySelector('.toakPunten').addEventListener('click', function(){ 
  tok.classList.remove('possible');  
  tok.classList.add('confirm'); 
  tok.classList.remove('toak'); 
  document.querySelector('.toakPunten').classList.remove('toakPunten'); 
  turnfunction();
  }); 
  document.querySelector('.CareePunten').addEventListener('click', function(){ 
  carree.classList.remove('possible');  
  carree.classList.add('confirm'); 
  carree.classList.remove('careeM'); 
  document.querySelector('.CareePunten').classList.remove('CareePunten'); 
  turnfunction();

 
  }); 
 

  document.querySelector('.FullHousePunten').addEventListener('click', function(){ 
    fullHouse.classList.remove('possible'); 
    fullHouse.classList.add('confirm'); 
    fullHouse.classList.remove('FHM'); 
    document.querySelector('.FullHousePunten').classList.remove('FullHousePunten');
    turnfunction(); 


 
  }); 
 
  document.querySelector('.KleineStraatPunten').addEventListener('click', function(){ 
  ks.classList.remove('possible'); 
   ks.classList.add('confirm'); 
   ks.classList.remove('KSM');
    document.querySelector('.KleineStraatPunten').classList.remove('KleineStraatPunten'); 
    turnfunction();

 
  }); 
  document.querySelector('.GroteStraatPunten').addEventListener('click', function(){ 
  gs.classList.remove('possible'); 
  gs.classList.add('confirm'); 
  gs.classList.remove('GSM'); 
  document.querySelector('.GroteStraatPunten').classList.remove('GroteStraatPunten'); 
  turnfunction();

 
  }); 
  document.querySelector('.YahtzeePunten').addEventListener('click', function(){ 
  yahtzee.classList.remove('possible');  
  yahtzee.classList.add('confirm'); 
  yahtzee.classList.remove('yahtzeeM'); 
  document.querySelector('.YahtzeePunten').classList.remove('YahtzeePunten'); 
  turnfunction();

 
  }); 
  document.querySelector('.ChancePunten').addEventListener('click', function(){    
  chance.classList.remove('possible');  
  chance.classList.add('confirm'); 
  chance.classList.remove('chanceM'); 
  document.querySelector('.ChancePunten').classList.remove('ChancePunten'); 
    turnfunction();

 
  });  