const BIRD_HOUSE_TIMER={first:0,enter:1800,inside:60000,exit:1800,perch:20000};
const LADYBUG_TIMER={flight:20000,hover:5000,flowerPause:1700,shrubRest:4000,rest:6500,transition:1200};
const FROG_TIMER={first:0,tongue:1600,dive:1090,diveContactMs:780,hidden:60000,rise:2100,between:8000,hop:1600,atPond:9000,outside:60000,splash:1100,manualHop:1020};
const FROG_PHASES=[
 ['sapo_lingua',FROG_TIMER.tongue],['sapo_mergulho',FROG_TIMER.dive],['na_poca',FROG_TIMER.hidden],
 ['sapo_salto_da_poca',FROG_TIMER.rise],['repouso',FROG_TIMER.between],['sapo_salto_ida',FROG_TIMER.hop],
 ['na_lagoa',FROG_TIMER.atPond],['sapo_salto_volta',FROG_TIMER.hop],
];
const FROG_PERIOD=FROG_TIMER.hidden+FROG_TIMER.outside;
FROG_PHASES.push(['repouso',FROG_PERIOD-FROG_PHASES.reduce((sum,[,duration])=>sum+duration,0)]);
const CAT_SHELF_WALK_MS=15000,CAT_SHELF_REST_MS=15000;
const CAT_SHELF_CYCLE_MS=CAT_SHELF_WALK_MS+CAT_SHELF_REST_MS;
const FAUNA_TURN_GAP_MS=450;
const GARDEN_FREQUENCY=1.30;
const GARDEN_FAUNA_TRACKS=[
 {offset:0,turns:[
  ['joao_de_barro',5500,-3000],['coelho',29000],
  ['joao_de_barro',13000,BIRD_HOUSE_TIMER.enter+BIRD_HOUSE_TIMER.inside],['tartaruga',33000],
 ]},
 {offset:2400,turns:[
  ['borboleta',16000],['sapo',5000],['caracol',33000],
  ['sapo',25000,FROG_TIMER.tongue+FROG_TIMER.dive+FROG_TIMER.hidden],
 ]},
 {offset:4800,turns:[
  ['abelha',11400],['joaninha',27000],['libelula',15000],['patinho',21000],
 ]},
].map(track=>({...track,period:track.turns.reduce((sum,[,duration])=>sum+duration+FAUNA_TURN_GAP_MS,0)}));
function gardenFaunaTurn(elapsed,{period,turns}){
 if(elapsed<0)return null;
 const round=Math.floor(elapsed/period);
 let age=elapsed%period;
 for(const [index,[kind,duration,phase=0]] of turns.entries()){
  if(age<duration)return {kind,age,duration,phase,round,index};
  if(age<duration+FAUNA_TURN_GAP_MS)return null;
  age-=duration+FAUNA_TURN_GAP_MS;
 }
 return null;
}
function gardenFaunaTurns(elapsed){
 return GARDEN_FAUNA_TRACKS.map(track=>gardenFaunaTurn(elapsed*GARDEN_FREQUENCY-track.offset,track)).filter(Boolean);
}
const MEADOW_WALKS={
 coelho:{from:-51,to:658,delay:600,leg:12800,wait:2200,stride:36},
 caracol:{from:-34,to:144,delay:900,leg:30500,wait:2300,stride:19},
 tartaruga:{from:-46,to:662,delay:900,leg:30000,wait:1800,stride:54},
};
