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
const carree=document.querySelector(".careeM ");
const fullHouse=document.querySelector(".FHM");
const ks=document.querySelector(".KSM");
const gs=document.querySelector(".GSM");
const yahtzee=document.querySelector(".yahtzeeM");
const chance=document.querySelector(".chanceM");
const totaleScore1=document.querySelector(".definitievePunten1");
const totaleScore2=document.querySelector(".definitievePunten2");
const bonus=document.querySelector(".puntenBonusDefinitief");
const totalescoreTot=document.querySelector("definitievePunten");
const totalescore1wb=document.querySelector('.bestAantalpunten1Definitief');
const dice1=document.querySelector(".dobbelsteen1");
const dice2=document.querySelector(".dobbelsteen2");
const dice3=document.querySelector(".dobbelsteen3");
const dice4=document.querySelector(".dobbelsteen4");
const dice5=document.querySelector(".dobbelsteen5");

let dices=[0,0,0,0,0];
let holdDices=[0,0,0,0,0];
let rollsLeft= 3;
const diceA = [dice1,dice2,dice3,dice4,dice5];

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
  let oak3 = false;
  const punten = dices[0]+dices[1]+dices[2]+dices[3]+dices[4];
  for(let i=1; i<=6;i++){
    let sameDices=0;
    for(let j=0; j<5;j++){
      if(i==dices[j]){
        sameDices++;
  
      }
      if(sameDices>=3){
        oak3= true;
      }
    }
  }
  if(oak3){
    diceScore.textContent=punten;
    diceScore.value=true;
  } else{diceScore.textContent=0}
}

function careeFunction(diceScore){
  let foak = false;
  const punten = dices[0]+dices[1]+dices[2]+dices[3]+dices[4];
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
  if(foak){
    diceScore.textContent=punten;
    diceScore.value=true;
  } else{diceScore.textContent=0}
}

function fullHouseFunction(diceScore){
  const punten=25;
  let fullHouseF=false;
  let threeFH=false;
  let twoFH=false;
 
  for(let i=1; i<=6;i++){
    let sameDices=0;
    for(let j=0; j<5;j++){
      if(i==dices[j]){
        sameDices++;
  
      }
      if(sameDices==3){
        threeFH= true;
      }
    }
  }
  for(let i=1; i<=6;i++){
    let sameDices=0;
    for(let j=0; j<5;j++){
      if(i==dices[j]){
        sameDices++;
  
      }
      if(sameDices==2){
        twoFH= true;
      }
    }
  }


}

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
        
      } else {opeenvolgendeWaarde = 0;}
    } if(opeenvolgendeWaarde>=4){Kstraat=true}
  }
  if (Kstraat){
    diceScore.textContent=punten; 
    diceScore.value = true;
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
        
      } else {opeenvolgendeWaarde = 0;}
    } if(opeenvolgendeWaarde==5){Gstraat=true}
  }
  if (Gstraat){
    diceScore.textContent=punten; 
    diceScore.value = true;
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
  if(yahtzeeF){
    diceScore.textContent=punten;
    diceScore.value=true;
  } else{diceScore.textContent=0}
}


function chanceFunction(diceScore){
  const punten = dices[0]+dices[1]+dices[2]+dices[3]+dices[4];
  diceScore.textContent=punten;
   

}



function deelscore1(score1,score2,score3,score4,score5,score6,tscore1){
  tscore1 = score1+score2+score3+score4+score5+score6;
  totaleScore1.textContent = tscore1;
  return tscore1;
}

function bonuscheck(tscore1,bonus){
  if(tscore1>=63){ bonus=35;
  }
  return bonus;
}

function deelscore2(score1,score2,score3,score4,score5,score6,tscore2){
  tscore2 = score1+score2+score3+score4+score5+score6;
  totaleScore2.textContent = tscore2;
  return tscore2;
}

function deelscore1wb(bonus,tscore1){
  tscore1=tscore1+bonus;
  return tscore1;
}

function totaleScore(tscore1,tscore2,scoretot){
scoretot = tscore1+tscore2;
return scoretot;
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
  countNumbers(2,dices2);
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
  deelscore1(alleEenen,alleTweeën,alleDrieën,alleVieren,alleVijfen,alleZessen,score1);
  bonuscheck(score1,bonusScore);
  deelscore2(toak,caree,fullH,Kstraat,Gstraat,yahtzeeS,chanceS,score2);
  deelscore1wb(bonusScore,score1);
  totaleScore(score1,score2,totaleScoreS);
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
  score2P1.classList.remove('possible'); 
  score2P1.classList.add('confirm'); 
  score2P1.classList.remove('mogelijkeTweeën'); 
  document.querySelector('.dobbelsteenpunten2').classList.remove('dobbelsteenpunten2'); 
  turnfunction();
 
  }); 
  document.querySelector('.dobbelsteenpunten3').addEventListener('click', function(){ 
  score3P1.classList.remove('possible'); 
  score3P1.classList.add('confirm'); 
  score3P1.classList.remove('mogelijkeDrieën'); 
  document.querySelector('.dobbelsteenpunten3').classList.remove('dobbelsteenpunten3'); 
  turnfunction();
 
  }); 
  document.querySelector('.dobbelsteenpunten4').addEventListener('click', function(){ 
  score4P1.classList.remove('possible'); 
  score4P1.classList.add('confirm'); 
  score4P1.classList.remove('mogelijkeVieren'); 
  document.querySelector('.dobbelsteenpunten4').classList.remove('dobbelsteenpunten4'); 
  turnfunction();
 
  
  }); 
  document.querySelector('.dobbelsteenpunten5').addEventListener('click', function(){ 
  score5P1.classList.remove('possible'); 
  score5P1.classList.add('confirm'); 
  score5P1.classList.remove('mogelijkeVijfen'); 
  document.querySelector('.dobbelsteenpunten5').classList.remove('dobbelsteenpunten5'); 
  turnfunction();
 
  }); 
  document.querySelector('.dobbelsteenpunten6').addEventListener('click', function(){ 
  score6P1.classList.remove('possible'); 
  score6P1.classList.add('confirm'); 
  score6P1.classList.remove('mogelijkeZessen'); 
  document.querySelector('.dobbelsteenpunten6').classList.remove('dobbelsteenpunten6'); 
  turnfunction();
 
  }); 
  document.querySelector('.toakPunten').addEventListener('click', function(){ 
  tok.classList.remove('possible');  
  tok.classList.add('confirm'); 
  tok.classList.remove('tok'); 
  document.querySelector('.toakPunten').classList.remove('toakPunten'); 
  turnfunction();
 // if(tok){ toak.textContent Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]};
 
  }); 
  document.querySelector('.CareePunten').addEventListener('click', function(){ 
  p1CareeP.classList.remove('possible');  
  p1CareeP.classList.add('confirm'); 
  p1CareeP.classList.remove('careeM'); 
  document.querySelector('.CareePunten').classList.remove('CareePunten'); 
  turnfunction();
  //if(p1CareeP){Player1Scores[7] = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]}; 
 
  }); 
 

  document.querySelector('.FullHousePunten').addEventListener('click', function(){ 
    p1KStraatP.classList.remove('possible'); 
    p1KStraatP.classList.add('confirm'); 
    p1KStraatP.classList.remove('FHM'); 
    document.querySelector('.FullHousePunten').classList.remove('.FullHousePunten');
    turnfunction(); 
 // if(p1FullHouseP){Player1Scores[8] = 25;} 

 
  }); 
 
  document.querySelector('.KleineStraatPunten').addEventListener('click', function(){ 
    p1FullHouseP.classList.remove('possible'); 
    p1FullHouseP.classList.add('confirm'); 
    p1FullHouseP.classList.remove('KSM') 
    document.querySelector('.KleineStraatPunten').classList.remove('.KleineStraatPunten'); 
    turnfunction();
//  if(p1KStraatP){Player1Scores[9] = 30;} 
 
  }); 
  document.querySelector('.GroteStraatPunten').addEventListener('click', function(){ 
  p1GStraatP.classList.remove('possible'); 
  p1GStraatP.classList.add('confirm'); 
  p1GStraatP.classList.remove('GSM'); 
  document.querySelector('.GroteStraatPunten').classList.remove('GroteStraatPunten'); 
  turnfunction();
 // if(p1GStraatP){Player1Scores[10] = 40;} 
 
  }); 
  document.querySelector('.YahtzeePunten').addEventListener('click', function(){ 
  p1YahtzeeP.classList.remove('possible');  
  p1YahtzeeP.classList.add('confirm'); 
  p1YahtzeeP.classList.remove('yahtzeeM'); 
  document.querySelector('.YahtzeePunten').classList.remove('YahtzeePunten'); 
  turnfunction();
//  if(p1YahtzeeP){Player1Scores[11] = 50};
 
  }); 
  document.querySelector('.ChancePunten').addEventListener('click', function(){    
  p1ChanceP.classList.remove('possible');  
  p1ChanceP.classList.add('confirm'); 
  p1ChanceP.classList.remove('chanceM'); 
  document.querySelector('.ChancePunten').classList.remove('.ChancePunten'); 
    turnfunction();
 // Player1Scores[12] = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]; 
 
  }); 












