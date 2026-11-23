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
const BICHO_TIMERS={
 joao_de_barro:{ciclo:BIRD_HOUSE_TIMER.enter+BIRD_HOUSE_TIMER.inside+BIRD_HOUSE_TIMER.exit+BIRD_HOUSE_TIMER.perch,
  offsetMin:21000,offsetMax:28000,actions:[0,BIRD_HOUSE_TIMER.enter,BIRD_HOUSE_TIMER.enter+BIRD_HOUSE_TIMER.inside]},
 joaninha:{ciclo:LADYBUG_TIMER.flight+LADYBUG_TIMER.flowerPause+LADYBUG_TIMER.shrubRest+LADYBUG_TIMER.rest,offsetMin:1400,offsetMax:6500,actions:[0,LADYBUG_TIMER.hover+LADYBUG_TIMER.flowerPause,(LADYBUG_TIMER.flight+LADYBUG_TIMER.hover)/2+LADYBUG_TIMER.flowerPause+LADYBUG_TIMER.shrubRest]},
 sapo:{ciclo:FROG_PERIOD,offsetMin:6500,offsetMax:8500,
  actions:[FROG_TIMER.tongue,FROG_TIMER.tongue+FROG_TIMER.dive+FROG_TIMER.hidden]},
 coelho:{ciclo:14400,offsetMin:0,offsetMax:1800},
 caracol:{ciclo:162000,offsetMin:0,offsetMax:4000},
 tartaruga:{ciclo:108000,offsetMin:12000,offsetMax:17000},
 borboleta:{offsetMin:0,offsetMax:2500},
 gatinho:{offsetMin:0,offsetMax:1800},
 patinho:{ciclo:108000,offsetMin:4500,offsetMax:9500},
 visitante:{ciclo:11000,offsetMin:1300,offsetMax:4000,jitter:3600},
};
const FAUNA_ACTION_GAP=5000;
function sampleFaunaOffset(rule,random=Math.random){
 return Math.floor(rule.offsetMin+random()*(rule.offsetMax-rule.offsetMin+1));
}
function createFaunaSchedule(random=Math.random){
 const frog=BICHO_TIMERS.sapo,frogStart=sampleFaunaOffset(frog,random);
 const cycles=Object.entries(BICHO_TIMERS).filter(([kind,rule])=>kind!=='sapo'&&rule.actions).map(([kind,rule])=>({
  kind,rule,next:sampleFaunaOffset(rule,random),start:null,
 }));
 let reserved=[];
 function conflict(kind,start,offsets){
  for(const offset of offsets){
   const action=start+offset;
   const other=reserved.find(event=>event.kind!==kind&&Math.abs(event.at-action)<FAUNA_ACTION_GAP);
   if(other)return other.at+FAUNA_ACTION_GAP-offset;
   if(kind!=='sapo'){
    for(const phase of frog.actions){
     const first=frogStart+phase;
     const cycle=Math.max(0,Math.round((action-first)/frog.ciclo));
     const at=first+cycle*frog.ciclo;
     if(Math.abs(at-action)<FAUNA_ACTION_GAP)return at+FAUNA_ACTION_GAP-offset;
    }
   }
  }
  return null;
 }
 function advance(elapsed){
  while(true){
   const cycle=cycles.reduce((first,item)=>item.next<first.next?item:first);
   if(cycle.next>elapsed)break;
   reserved=reserved.filter(event=>event.at>cycle.next-FAUNA_ACTION_GAP);
   const shifted=conflict(cycle.kind,cycle.next,cycle.rule.actions);
   if(shifted!==null){cycle.next=shifted;continue;}
   cycle.start=cycle.next;
   cycle.next+=cycle.rule.ciclo;
   reserved.push(...cycle.rule.actions.map(offset=>({kind:cycle.kind,at:cycle.start+offset})));
  }
 }
 return {
  advance,
  elapsedFor(kind,elapsed){
   if(kind==='sapo')return elapsed<frogStart?-1:(elapsed-frogStart)%frog.ciclo;
   const start=cycles.find(cycle=>cycle.kind===kind)?.start;
   return start===null||start===undefined?-1:elapsed-start;
  },
  reserve(kind,elapsed){
   if(conflict(kind,elapsed,[0])!==null)return false;
   reserved.push({kind,at:elapsed});
   return true;
  },
 };
}

const GARDEN_VISIBILITY={
 limit:6,roundMs:66000,fadeMs:1000,
 rounds:[['coelho','libelula'],['caracol','libelula'],['tartaruga','libelula'],['coelho','tartaruga'],['caracol','coelho']],
};

const MEADOW_WALKS={
 coelho:{from:-51,to:658,delay:600,leg:12800,wait:2200,stride:36},
 caracol:{from:-34,to:144,delay:900,leg:30500,wait:2300,stride:19},
 tartaruga:{from:-46,to:662,delay:900,leg:30000,wait:1800,stride:54},
};
