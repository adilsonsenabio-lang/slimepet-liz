
'use strict';
const MODEL={"layers":[{"name":"nuvem_direita","x":487,"y":17,"w":161,"h":98,"ms":320,"frames":10,"src":"../assets/nuvem_direita.png"},{"name":"nuvem_esquerda","x":247,"y":43,"w":161,"h":81,"ms":320,"frames":10,"src":"../assets/nuvem_esquerda.png"},{"name":"arvore_grande","x":13,"y":65,"w":238,"h":200,"ms":235,"frames":10,"src":"../assets/arvore_grande.png"},{"name":"arvore_pequena","x":543,"y":112,"w":145,"h":148,"ms":235,"frames":10,"src":"../assets/arvore_pequena.png"},{"name":"arbustos","x":10,"y":267,"w":575,"h":86,"ms":200,"frames":10,"src":"../assets/arbustos.png"},{"name":"flor_rosa_esquerda","x":30,"y":298,"w":45,"h":85,"ms":210,"frames":10,"src":"../assets/flor_rosa_esquerda.png"},{"name":"flor_amarela_esquerda","x":198,"y":318,"w":45,"h":60,"ms":210,"frames":10,"src":"../assets/flor_amarela_esquerda.png"},{"name":"flor_branca","x":242,"y":316,"w":45,"h":60,"ms":210,"frames":10,"src":"../assets/flor_branca.png"},{"name":"flor_rosa_centro","x":429,"y":286,"w":45,"h":73,"ms":210,"frames":10,"src":"../assets/flor_rosa_centro.png"},{"name":"flor_amarela_direita","x":633,"y":297,"w":45,"h":70,"ms":210,"frames":10,"src":"../assets/flor_amarela_direita.png"},{"name":"flor_rosa_direita","x":674,"y":286,"w":45,"h":75,"ms":210,"frames":10,"src":"../assets/flor_rosa_direita.png"},{"name":"flor_amarela_colina","x":191,"y":246,"w":45,"h":42,"ms":210,"frames":10,"src":"../assets/flor_amarela_colina.png"},{"name":"rocha","x":435,"y":308,"w":108,"h":67,"ms":200,"frames":10,"src":"../assets/rocha.png"},{"name":"poca_agua","x":533,"y":368,"w":179,"h":72,"ms":180,"frames":10,"src":"../assets/poca_agua.png"},{"name":"borboleta","x":381,"y":103,"w":155,"h":101,"ms":155,"frames":10,"src":"../assets/borboleta.png"}],"actors":[{"name":"apaixonado","src":"../assets/apaixonado.png"},{"name":"banho","src":"../assets/banho.png"},{"name":"beber","src":"../assets/beber.png"},{"name":"bravo","src":"../assets/bravo.png"},{"name":"comer","src":"../assets/comer.png"},{"name":"comeu_demais","src":"../assets/comeu_demais.png"},{"name":"confuso","src":"../assets/confuso.png"},{"name":"curioso","src":"../assets/curioso.png"},{"name":"desesperado","src":"../assets/desesperado.png"},{"name":"doente_v28","src":"../assets/doente_v28.png"},{"name":"doente_v29","src":"../assets/doente_v29.png"},{"name":"dormir","src":"../assets/dormir.png"},{"name":"enjoado","src":"../assets/enjoado.png"},{"name":"enjoado_v28","src":"../assets/enjoado_v28.png"},{"name":"feliz","src":"../assets/feliz.png"},{"name":"idle","src":"../assets/idle.png"},{"name":"injecao_v28","src":"../assets/injecao_v28.png"},{"name":"injecao_v29","src":"../assets/injecao_v29.png"},{"name":"orgulhoso","src":"../assets/orgulhoso.png"},{"name":"pedir_ajuda_v28","src":"../assets/pedir_ajuda_v28.png"},{"name":"pulo","src":"../assets/pulo.png"},{"name":"recuperacao_v28","src":"../assets/recuperacao_v28.png"},{"name":"recuperacao_v29","src":"../assets/recuperacao_v29.png"},{"name":"recusar_comida","src":"../assets/recusar_comida.png"},{"name":"repouso_energia","src":"../assets/repouso_energia.png"},{"name":"repouso_enjoado","src":"../assets/repouso_enjoado.png"},{"name":"repouso_felicidade","src":"../assets/repouso_felicidade.png"},{"name":"repouso_fome","src":"../assets/repouso_fome.png"},{"name":"repouso_higiene","src":"../assets/repouso_higiene.png"},{"name":"repouso_saude","src":"../assets/repouso_saude.png"},{"name":"repouso_sede","src":"../assets/repouso_sede.png"},{"name":"surpreso","src":"../assets/surpreso.png"},{"name":"timido","src":"../assets/timido.png"},{"name":"triste","src":"../assets/triste.png"},{"name":"walk_direita","src":"../assets/walk_direita.png"},{"name":"walk_esquerda","src":"../assets/walk_esquerda.png"}],"effects":[{"name":"arvore","w":120,"h":100,"frames":10,"src":"../assets/arvore.png"},{"name":"flores","w":120,"h":100,"frames":10,"src":"../assets/flores.png"},{"name":"rocha","w":120,"h":100,"frames":10,"src":"../assets/rocha_2.png"},{"name":"poca","w":120,"h":100,"frames":10,"src":"../assets/poca.png"},{"name":"borboleta","w":120,"h":100,"frames":10,"src":"../assets/borboleta_2.png"}]};
const SUN_SPRITE='../assets/sol_jardim.png';
const BG="../assets/bg_gramado_verdes.png";
const TUB="../assets/tub.png";
const GARDEN_EXTRA="../assets/garden_extra.png";
const VOID_BG="../assets/void_bg.png";
const VOID_PULSE="../assets/void_pulse.png";
const TRANS_HOME_GARDEN="../assets/trans_home_garden.png";
const TRANS_GARDEN_HOME="../assets/trans_garden_home.png";
const LIMBO_VIVO_V25="../assets/limbo_vivo_v25.png";
const ARVORE_DIREITA_V26="../assets/arvore_direita_v26.png";
const FRAME_MS=205; // v34: animacoes ligeiramente mais lentas, dez quadros por sequencia.
const W=724,H=543,SUN_HALF_SWEEP=600000;
const STORE='slime_pet_liz_v36';
const V33_STORE='slime_pet_liz_v33';
const V32_STORE='slime_pet_virtual_v32';
const V31_STORE='slime_pet_virtual_v31';
const PREVIOUS_STORE='slime_pet_virtual_v30';
const PREVIOUS_V19_STORE='slime_pet_virtual_v19';
const LEGACY_STORE='patch_guardiao_mobile_0_4';
const $=x=>document.getElementById(x);
// V41-R1: contrato de relógios; jamais aplicar tempo de animação ao metabolismo.
const GAME_CLOCK=Object.freeze({
 wallNow:()=>Date.now(),
 // monotonicNow is for gameplay needs; animationNow is for rendering/scene effects.
 // Both derive from the browser's monotonic source but are consumed independently.
 monotonicNow:()=>performance.now(),
 animationNow:()=>performance.now(),
 frameDelta:(now,last)=>last?Math.min(70,now-last):0
});
const SCENES=Object.freeze(['care','garden','evolve']);
const STAGES=[
 {id:'bebe',name:'Bebê',xp:0,scale:{care:2.04,garden:1.58,evolve:2.48},prefix:'bebe_',phrase:'Seu slime chegou!',unlocks:[],aura:null},
 {id:'jovem',name:'Jovem',xp:60,scale:{care:2.20,garden:1.72,evolve:2.57},prefix:'jovem_',phrase:'Seu slime evoluiu para Jovem!',unlocks:[],aura:'#91EBD7'},
 {id:'adulto',name:'Adulto',xp:180,scale:{care:2.38,garden:1.88,evolve:2.68},prefix:'adulto_',phrase:'Seu slime evoluiu para Adulto!',unlocks:[],aura:'#FFDB86'}
];
const STAGE_SPRITE_MANIFEST={bebe:{},jovem:{},adulto:{}};
const FRIEND_REACTIONS={
 coelho:{anim:'feliz',happiness:3,text:'🐇 O slime brincou com o coelhinho!'},
 passarinho:{anim:'curioso',happiness:2,text:'🐦 O slime ouviu o passarinho cantar!'},
 sapo:{anim:'pulo',happiness:4,text:'🐸 O slime pulou junto com o sapinho!'},
 abelha:{anim:'curioso',happiness:2,text:'🐝 O slime acompanhou a curva da abelhinha!'},
 beijaflor:{anim:'curioso',happiness:2,text:'👀 O slime acompanhou o voo do beija-flor!'}
};
const FRIEND_DAILY_LIMIT=8,FRIEND_SPECIES_COOLDOWN=10*60000;
const MAX_BOND_UNITS=Number.MAX_SAFE_INTEGER;

// V30: offline sound synthesis. AudioContext is created only after a real user gesture (Android autoplay rule).
// Slime Pet v31: original, layered Web Audio sound design. Offline and child-friendly.
// Audio only starts after a real user gesture, as required by Android browsers.
const SOUND=(()=>{
 let ac=null,master=null,effectBus=null,ambBus=null,limiter=null,noiseBuffer=null;
  let enabled=true,softAudio=true,lastFX=0,lastAmbient=0,lastScene='',lastIndividual={},resumeRequest=null,resumeOnShow=false;
 const rand=(a,b)=>a+Math.random()*(b-a);
 function ensure(){
   if(!enabled||document.hidden)return null;
  if(!ac){try{
   const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;
   ac=new A();master=ac.createGain();master.gain.value=softAudio?.30:.56;
   limiter=ac.createDynamicsCompressor();limiter.threshold.value=-20;limiter.knee.value=18;limiter.ratio.value=3;limiter.attack.value=.01;limiter.release.value=.22;
   effectBus=ac.createGain();effectBus.gain.value=.76;ambBus=ac.createGain();ambBus.gain.value=.34;
   effectBus.connect(limiter);ambBus.connect(limiter);limiter.connect(master);master.connect(ac.destination);
   noiseBuffer=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate);
   let d=noiseBuffer.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  }catch(e){ac=null;return null;}}
   if(ac.state==='suspended'&&!resumeRequest){
    try{resumeRequest=ac.resume().catch(()=>{}).finally(()=>{resumeRequest=null;});}catch(e){}
   }
  return ac;
 }
 function wire(g,ambient=false,pan=0){
  if(!ac)return;
  if(typeof ac.createStereoPanner==='function'){
   const p=ac.createStereoPanner();p.pan.value=Math.max(-.7,Math.min(.7,pan));g.connect(p);p.connect(ambient?ambBus:effectBus);
  }else g.connect(ambient?ambBus:effectBus);
 }
 function tone(f0,f1,dur=.12,wave='sine',volume=.045,delay=0,pan=0,ambient=false,attack=.014){
  if(!ac||!enabled||ac.state!=='running')return;
  const st=ac.currentTime+Math.max(0,delay),end=st+Math.max(.04,dur);
  const o=ac.createOscillator(),g=ac.createGain();o.type=wave;
  o.frequency.setValueAtTime(Math.max(25,f0),st);o.frequency.exponentialRampToValueAtTime(Math.max(25,f1),end);
  g.gain.setValueAtTime(.0001,st);
  g.gain.exponentialRampToValueAtTime(Math.max(.0002,volume),st+Math.min(attack,dur*.35));
  g.gain.setTargetAtTime(.0001,st+Math.min(dur*.45,attack+.035),Math.max(.02,dur*.18));
  wire(g,ambient,pan);o.connect(g);o.start(st);o.stop(end+.08);
 }
 function noise(dur=.18,volume=.025,center=1100,delay=0,pan=0,filterType='lowpass',ambient=false){
  if(!ac||!enabled||ac.state!=='running'||!noiseBuffer)return;
  const st=ac.currentTime+Math.max(0,delay),end=st+Math.max(.07,dur);
  let src=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();src.buffer=noiseBuffer;
  f.type=filterType;f.frequency.setValueAtTime(center,st);
  f.frequency.exponentialRampToValueAtTime(Math.max(70,center*.7),end);
  if(filterType==='bandpass')f.Q.value=.65;
  g.gain.setValueAtTime(.0001,st);g.gain.linearRampToValueAtTime(Math.max(.0003,volume),st+Math.min(.055,dur*.27));g.gain.setTargetAtTime(.0001,st+dur*.48,Math.max(.02,dur*.20));
  src.connect(f);f.connect(g);wire(g,ambient,pan);src.start(st);src.stop(end+.1);
 }
 function seq(notes,spacing=.10,volume=.027,wave='sine',pan=0){
  notes.forEach(([f,interval,d=.16],i)=>tone(f,f*interval,d,wave,volume,i*spacing,pan));
 }
 function sparkle(delay=0,pan=0){
  [880,1175,1480].forEach((f,i)=>tone(f,f*1.03,.25,'sine',.012,delay+i*.09,pan));
 }
 function birdsong(base=1000,pan=0,delay=0,volume=.019){
  for(let i=0;i<3;i++){
   const f=base+[0,155,-80][i];tone(f,f*rand(1.18,1.36),.11,'sine',volume,delay+i*.13,pan,true);
   tone(f*1.5,f*1.68,.07,'triangle',volume*.32,delay+i*.13+.035,pan,true);
  }
 }
 const FX={
  click(){tone(570,710,.055,'sine',.022);tone(850,730,.055,'triangle',.009,.038)},
  switch(){seq([[440,1.15,.14],[620,1.13,.17],[800,1.03,.22]],.095,.021,'sine');noise(.13,.006,1250,.06)},
  evolution(){seq([[392,1,.35],[523,1,.42],[659,1,.46],[784,1,.6]],.14,.032);tone(1047,1047,.5,'sine',.013,.56);},
  comer(){noise(.13,.042,2200,0,-.1,'bandpass');tone(330,250,.12,'triangle',.031,0,-.1);
    noise(.15,.026,1700,.18,.15,'bandpass');tone(400,290,.11,'triangle',.024,.19,.12);sparkle(.37)},
  beber(){for(let i=0;i<3;i++){tone(530+i*78,390+i*62,.16,'sine',.027,.12*i,(i-1)*.2);noise(.15,.009,1000+i*200,i*.12,0,'bandpass');}tone(470,670,.14,'sine',.013,.45)},
  banho(){noise(.85,.032,1500,0,-.1,'bandpass');for(let i=0;i<6;i++)tone(420+i*66,280+i*70,.15,'sine',.019,.1+i*.125,(i%3-1)*.2);sparkle(.65)},
  dormir(){tone(480,290,.60,'sine',.023);tone(360,250,.65,'sine',.018,.37);noise(.8,.006,400,.22,0,'lowpass')},
  carinho(){seq([[610,1.10,.24],[770,1.09,.26],[890,1.01,.29]],.115,.030,'sine');sparkle(.30)},
  brincar(){tone(285,870,.26,'triangle',.039);tone(840,380,.20,'sine',.024,.29);sparkle(.38)},
  pulo(){tone(260,740,.27,'triangle',.034);noise(.09,.022,550,.43,0,'lowpass');tone(340,220,.14,'sine',.019,.43)},
  andar(){noise(.075,.019,550,.0,-.22);noise(.075,.015,520,.18,.22);tone(240,210,.11,'sine',.012,.025)},
  curioso(){seq([[650,1.15,.18],[760,1.2,.18],[930,1.04,.26]],.16,.024,'sine')},
  recusa(){tone(490,290,.29,'triangle',.029);tone(270,245,.23,'sine',.016,.2)},
  doente(){tone(330,215,.51,'sine',.029);tone(290,225,.48,'triangle',.013,.24);noise(.33,.008,420,.19,0,'lowpass')},
  injecao(){noise(.11,.009,1500,0,.3,'bandpass');sparkle(.20,.13);seq([[680,1.12,.27],[900,1.14,.28],[1090,1.05,.35]],.16,.017,'sine',.1)},
  recuperacao(){seq([[525,1.18,.31],[705,1.12,.34],[860,1.08,.38]],.21,.027,'sine');sparkle(.5)},
  arvore(){noise(.65,.023,780,0,-.4,'lowpass');noise(.36,.010,1900,.22,.15,'bandpass')},
  flores(){seq([[860,1.09,.21],[1130,.98,.19]],.16,.022,'sine');noise(.31,.011,2700,.21)},
  rocha(){seq([[530,1.46,.25],[980,1.10,.32]],.13,.027,'triangle');sparkle(.18)},
  poca(){noise(.56,.043,1250,0,.25,'bandpass');tone(530,300,.22,'sine',.022,.17,-.1);tone(760,580,.16,'sine',.017,.33,.1)},
  borboleta(){seq([[1020,1.16,.14],[1260,.94,.17]],.14,.019,'sine')},
  passarinho(){birdsong(1050,rand(-.5,.5),0,.025)},
  sapo(){tone(265,148,.30,'triangle',.034);tone(230,161,.28,'sine',.025,.2)},
  coelho(){noise(.11,.018,650,0,-.2);tone(540,760,.16,'sine',.024,.11)},
  beijaflor(){birdsong(1340,.24,0,.019);noise(.14,.012,2100,.03,.2,'bandpass')},
  abelha(){tone(190,202,.35,'sawtooth',.010,0,.25);noise(.36,.009,500,.06,.28,'bandpass')},
  formiga(){noise(.06,.013,450,0,-.4);tone(690,600,.10,'sine',.013,.06,-.3)},
  gatinho(){tone(440,290,.31,'triangle',.020);tone(310,255,.22,'sine',.013,.18)},
  patinho(){tone(410,335,.13,'triangle',.025);tone(390,320,.14,'triangle',.022,.17)},
  tartaruga(){tone(320,270,.17,'sine',.016);noise(.12,.007,490,.1,0)},
  caracol(){tone(580,490,.18,'sine',.012);tone(710,620,.10,'sine',.010,.19)},
  libelula(){noise(.22,.013,2300,0,.3,'bandpass');tone(690,880,.21,'sine',.012,.10)},
  joaninha(){tone(630,740,.15,'sine',.015);noise(.20,.007,1800,.08,.2)},
  joao_de_barro(){birdsong(930,.2,0,.020)}
 };
 function play(type){if(!ensure())return;const t=GAME_CLOCK.animationNow();const last=lastIndividual[type]||0;
  if(t-last<({click:70,andar:130,passarinho:550,abelha:500}[type]||130))return;lastIndividual[type]=t;
  try{(FX[type]||FX.click)()}catch(e){}
 }
 function ambient(scene,now){
  if(!enabled||!ac||ac.state!=='running'||document.hidden)return;
  if(scene!==lastScene){lastScene=scene;lastAmbient=0;}
  const interval=scene==='garden'?3600:scene==='care'?5100:5400;
  if(now-lastAmbient<interval)return;lastAmbient=now+rand(0,1500);
  if(scene==='garden'){
   noise(2.1,.011,460,0,rand(-.35,.35),'lowpass',true);
   if(Math.random()<.9)birdsong(rand(900,1210),rand(-.6,.6),.24,.015);
   if(Math.random()<.4){noise(.9,.011,1200,.9,.4,'bandpass',true);}
  }else if(scene==='care'){
   noise(1.1,.006,380,0,-.4,'lowpass',true);
   if(Math.random()<.7)birdsong(rand(1060,1280),-.4,.4,.009);
   tone(440,436,1.15,'sine',.006,.5,0,true);
  }else{
   tone(134,141,1.5,'sine',.017,0,0,true);tone(224,201,1.0,'sine',.010,.3,.32,true);
  }
 }
  function suspend(){if(ac&&(ac.state==='running'||resumeRequest))ac.suspend().catch(()=>{});}
  function visibility(){
   if(document.hidden){resumeOnShow=enabled&&Boolean(ac&&(ac.state==='running'||resumeRequest));suspend();}
   else if(resumeOnShow){resumeOnShow=false;ensure();}
  }
  function setEnabled(value){enabled=!!value;if(!enabled){resumeOnShow=false;suspend();}else ensure();
  const b=$('soundToggle');b.textContent=enabled?'🔊':'🔇';b.classList.toggle('off',!enabled);b.setAttribute('aria-label',enabled?'Desativar sons':'Ativar sons');}
 function setSoftAudio(value){softAudio=!!value;if(master)master.gain.value=softAudio?.30:.56;}
 function scene(){lastAmbient=0;lastScene='';play('switch')}
 function ui(){if(!ensure())return;const now=GAME_CLOCK.animationNow();if(now-lastFX<90)return;lastFX=now;FX.click()}
  return {unlock:ensure,play,ui,ambient,setEnabled,setSoftAudio,scene,visibility,get softAudio(){return softAudio},get enabled(){return enabled},get active(){return !!(ac&&ac.state==='running')}};
})();
// Automatically unlock audio on the first touch, but keep a single unobtrusive mute button.
document.addEventListener('pointerdown',()=>SOUND.unlock(),{capture:true});
document.addEventListener('click',(event)=>{if(event.target.closest('button'))SOUND.ui();},{capture:true});
$('soundToggle').addEventListener('click',()=>SOUND.setEnabled(!SOUND.enabled));
document.addEventListener('visibilitychange',SOUND.visibility);

const clamp=(x,a=0,b=100)=>Math.max(a,Math.min(b,x));
const ease=x=>{x=clamp(x,0,1);return x*x*(3-2*x)};
const canvas=$('gameCanvas'),ctx=canvas.getContext('2d',{alpha:false});ctx.imageSmoothingEnabled=false;
const keys=[['fome','🍎','Saciedade'],['sede','💧','Sede'],['energia','⚡','Energia'],['higiene','🫧','Higiene'],['felicidade','💗','Felicidade'],['saude','❤️','Saúde']];
const DEFAULT={fome:78,sede:82,energia:90,higiene:92,felicidade:88,saude:100};
function safeLoad(key){try{return JSON.parse(localStorage.getItem(key))}catch(e){return null}}
const SAVE_RECOVERY_KEY=STORE+'.recovery';
let lastReadSave,unreadableSave=false;
function hasSavedStats(save){
 return Boolean(save?.stats&&typeof save.stats==='object'&&!Array.isArray(save.stats));
}
function readCurrentSave(){
 lastReadSave=undefined;unreadableSave=false;
 try{
  lastReadSave=localStorage.getItem(STORE);
  if(lastReadSave===null)return null;
  const data=JSON.parse(lastReadSave);
  if(hasSavedStats(data))return data;
 }catch(error){
  if(lastReadSave===undefined)return null;
 }
 unreadableSave=true;
 return null;
}
function stageIndex(id){return STAGES.findIndex(stage=>stage.id===id);}
function stageForXp(xp){
 let stage=STAGES[0];
 for(const candidate of STAGES){if(xp>=candidate.xp)stage=candidate;}
 return stage;
}
function localDay(now){
 const day=new Date(now);
 return [day.getFullYear(),String(day.getMonth()+1).padStart(2,'0'),String(day.getDate()).padStart(2,'0')].join('-');
}
function normalizeFauna(raw){
 const day=typeof raw?.rewardDay==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(raw.rewardDay)?raw.rewardDay:localDay(GAME_CLOCK.wallNow());
 const speciesRewardAt={};
 for(const kind of Object.keys(FRIEND_REACTIONS)){
  const time=raw?.speciesRewardAt?.[kind];
  if(Number.isFinite(time)&&time>0)speciesRewardAt[kind]=time;
 }
 const presentes=Object.fromEntries(Object.entries(raw?.presentes??{}).filter(([,present])=>present===false));
 return {presentes,rewardDay:day,dailyHappiness:Number.isFinite(raw?.dailyHappiness)?clamp(raw.dailyHappiness,0,FRIEND_DAILY_LIMIT):0,speciesRewardAt};
}
function normalizeEvolution(raw){
 const savedIndex=Math.max(0,stageIndex(raw?.stage));
 const rawXp=Number(raw?.xp),rawDaily=Number(raw?.dailyXp);
 const xp=clamp(Number.isFinite(rawXp)?rawXp:0,STAGES[savedIndex].xp,MAX_BOND_UNITS/3);
 const stage=stageForXp(xp);
 const seen=new Set(Array.isArray(raw?.evolutionSeen)?raw.evolutionSeen:[]);
 const cooldowns={};
 for(const key of Object.keys(raw?.cooldowns||{})){
  const until=raw.cooldowns[key];
  if(/^(garden|visitor):[a-z_]+$/.test(key)&&Number.isFinite(until)&&until>GAME_CLOCK.wallNow())cooldowns[key]=until;
 }
 return {xp,stage:stage.id,evolutionSeen:STAGES.filter(s=>s.xp<=stage.xp&&(s.xp===0||seen.has(s.id))).map(s=>s.id),
  dailyXp:Number.isFinite(rawDaily)?clamp(rawDaily,0,MAX_BOND_UNITS/3):0,
  lastDay:typeof raw?.lastDay==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(raw.lastDay)?raw.lastDay:localDay(GAME_CLOCK.wallNow()),cooldowns};
}
function writeCurrentSave(value){
 try{
  const existing=localStorage.getItem(STORE);
  if(existing!==(lastReadSave??null))return false;
  if(unreadableSave){
   const recovery=localStorage.getItem(SAVE_RECOVERY_KEY);
   if(recovery!==null&&recovery!==existing)return false;
   if(recovery===null)localStorage.setItem(SAVE_RECOVERY_KEY,existing);
  }
  const next=JSON.stringify(value);
  if(next!==existing)localStorage.setItem(STORE,next);
  lastReadSave=next;unreadableSave=false;
  return true;
 }catch(error){return false;}
}

// v29 deterministic rules: all care events are processed in the same game state.
const TREATMENT_COOLDOWN_MS=5*60*1000;
const TREATMENT_DURATION_MS=30*1000;
const CARE_WINDOW_MS=120*1000;
// V41-R4: multi-touch spam is never counted as deliberate excess. Gentil
// tolerates more distinct refusals than the active modes.
const MISUSE_COOLDOWN_MS={gentil:3400,tranquilo:2000,ativo:1600};
const MISUSE_THRESHOLDS={gentil:{food:4,care:7},tranquilo:{food:3,care:5},ativo:{food:3,care:5}};
function misusePolicy(){const mode=needsDifficulty(state.needsMode);return {gap:MISUSE_COOLDOWN_MS[mode],...MISUSE_THRESHOLDS[mode]};}

const CARE_COOLDOWN_MS={comer:2400,beber:2200,banho:3000,dormir:4200,carinho:1700,brincar:2400};
const CARE_THRESHOLD={comer:100,beber:92,banho:92,dormir:96,carinho:96,brincar:96};
const HEALTH_DEFAULT={status:'healthy',nausea:0,excessFeedTimestamps:[],careMisuseTimestamps:[],sickSince:null,
 lastTreatmentAt:null,recoveryStartAt:null,recoveryUntil:null,recoveryStartHealth:null,recoveryTargetHealth:null,
 lastCareActionAt:{},lastCareAttemptAt:{},lastCareGlobalAt:0,lastFullFeedAt:null};
function normalizeHealth(raw){
 // Clone nested maps/arrays: no save or new pet may mutate the frozen template.
 const h={...HEALTH_DEFAULT,...(raw||{}),lastCareActionAt:{...(raw?.lastCareActionAt||{})},lastCareAttemptAt:{...(raw?.lastCareAttemptAt||{})}};
 if(!['healthy','overfed','sick','recovering'].includes(h.status))h.status='healthy';
 for(const k of ['excessFeedTimestamps','careMisuseTimestamps'])
  h[k]=Array.isArray(h[k])?h[k].filter(v=>Number.isFinite(v)&&v>0).slice(-15):[];
 for(const k of ['lastCareActionAt','lastCareAttemptAt'])
  if(!h[k]||typeof h[k]!=='object')h[k]={};
 h.nausea=clamp(Number(h.nausea)||0);
 // Pre-v29 recovery gave health instantly. Keep its value without granting a second instant bonus.
 if(h.status==='recovering'&&(!Number.isFinite(h.recoveryStartAt)||!Number.isFinite(h.recoveryTargetHealth))){
   h.status='healthy';h.recoveryStartAt=null;h.recoveryUntil=null;
 }
 return h;
}
function loadSave(){
 const v34=readCurrentSave();
 const v33=!v34?safeLoad(V33_STORE):null;
 const v32=!v34&&!v33?safeLoad(V32_STORE):null;
 const v31=!v34&&!v33&&!v32?safeLoad(V31_STORE):null;
 const current=v34||(hasSavedStats(v33)?v33:null)||(hasSavedStats(v32)?v32:null)||(hasSavedStats(v31)?v31:null);
 if(current){
  const v={...current,version:36,stats:{...DEFAULT,...current.stats},healthSystem:normalizeHealth(current.healthSystem),
   evolution:normalizeEvolution(current?.evolution),fauna:normalizeFauna(current?.fauna)};
  if(!v34)v.migratedFromV33=Boolean(v33);
  if(!v34&&!v33)v.migratedFromV32=Boolean(v32);
  if(!v34&&!v33&&!v32)v.migratedFromV31=true;
  for(const k of Object.keys(DEFAULT)){
   const value=Number(v.stats[k]);
   v.stats[k]=Number.isFinite(value)?clamp(value):DEFAULT[k];
  }
  return v;
 }
 const v30=safeLoad(PREVIOUS_STORE);
 if(hasSavedStats(v30)){
  const stats={...DEFAULT};
  for(const k of Object.keys(DEFAULT))if(Number.isFinite(Number(v30.stats[k])))stats[k]=clamp(Number(v30.stats[k]));
  const h=normalizeHealth(v30.healthSystem);
  if(h.status==='healthy'&&stats.saude<40)stats.saude=70; // old passive-damage migration
  return {stats,x:v30.x??355,sunEpoch:v30.sunEpoch||GAME_CLOCK.wallNow(),time:GAME_CLOCK.wallNow(),visits:v30.visits||0,healthSystem:h,version:36,evolution:normalizeEvolution(),fauna:normalizeFauna(),migratedFromV30:true};
 }
 const v19=safeLoad(PREVIOUS_V19_STORE);
 const old=hasSavedStats(v19)?v19:safeLoad(LEGACY_STORE);
 if(hasSavedStats(old)){
  const stats={...DEFAULT};for(const k of Object.keys(DEFAULT))if(Number.isFinite(Number(old.stats[k])))stats[k]=clamp(Number(old.stats[k]));
  stats.saude=Math.max(75,stats.saude);
  return {stats,x:old.x??355,sunEpoch:old.sunEpoch||GAME_CLOCK.wallNow(),time:GAME_CLOCK.wallNow(),visits:old.visits||0,healthSystem:normalizeHealth(null),version:36,evolution:normalizeEvolution(),fauna:normalizeFauna(),migratedFromV19:true};
 }
 return {stats:{...DEFAULT},x:355,sunEpoch:GAME_CLOCK.wallNow(),time:GAME_CLOCK.wallNow(),visits:0,healthSystem:normalizeHealth(null),version:36,evolution:normalizeEvolution(),fauna:normalizeFauna()};
}

// V41-R3 — tabela de dificuldade centralizada, em pontos por MINUTO.
// Mude as taxas somente após playtests infantis; energia permanece sem decaimento passivo.
const NEEDS_DIFFICULTIES=Object.freeze({
 gentil:Object.freeze({fome:1.04,sede:1.30,higiene:0.65,felicidade:0.78}),
 tranquilo:Object.freeze({fome:1.56,sede:1.95,higiene:1.04,felicidade:1.17}),
 ativo:Object.freeze({fome:2.60,sede:2.99,higiene:1.69,felicidade:1.95})
});
const DEFAULT_NEEDS_MODE='gentil';
const MAX_OFFLINE_NEEDS_MS=10*60*1000; // Até 10 minutos de desgaste por retorno, mesmo após dias.
const MAX_ACTIVE_NEEDS_STEP_MS=60*1000; // Protege contra abas congeladas sem evento de suspensão.
const MAX_OFFLINE_SICK_HEALTH_LOSS=10;  // Não castigar a criança pela ausência durante doença.
function needsDifficulty(mode){return Object.hasOwn(NEEDS_DIFFICULTIES,mode)?mode:DEFAULT_NEEDS_MODE;}
function currentNeedsRates(){return NEEDS_DIFFICULTIES[needsDifficulty(state.needsMode)];}
let state=loadSave(),lastUserAction=GAME_CLOCK.wallNow(),currentScreen='care';
// Saves V41-R2 and older need no migration or destructive rewrite.
state.needsMode=needsDifficulty(state.needsMode);
state.accessibility={reducedMotion:state.accessibility?.reducedMotion===true,softAudio:state.accessibility?.softAudio!==false};
function currentStage(){return stageForXp(state.evolution.xp);}
let pet={x:clamp(Number.isFinite(Number(state.x??NaN))?Number(state.x):355,80,644),ground:440,act:'idle',frame:0,frameTime:0,moveStart:355,moveEnd:355,pending:null};
const assets={actors:{},visitors:{},layers:[],effects:{},bg:null,gardenOcclusion:null,tub:null,casa_sala:null,casa_quarto:null,casa_cozinha:null,gardenExtra:null,voidBg:null,voidPulse:null,transHG:null,transGH:null,voidV25:null,rightTreeV26:null,ready:false};
let sceneTime=0,lastAnimation=0,fx=null,task=null,moodText='😊 Contente',voidPulseStart=-1;
let sun={x:636,y:76,p:.0},sunEpoch=Number.isFinite(state.sunEpoch)?state.sunEpoch:GAME_CLOCK.wallNow();
// Metabolism runs on real time (also after closing the game). Energy has NO passive decay.
// Fast real-time decay: food and water reach low values in 4-5 min; offline decay capped at five minutes. Energy remains action-only.
// Um relógio monotônico governa sessões ativas; o relógio civil só mede ausências.
// Nunca acumule simultaneamente delta monotônico e delta civil para a mesma janela.
const needsClock={mono:null,wall:null,suspended:false,lastElapsedMs:0,lastSource:'initial'};
function suspendNeedsClock(){needsClock.suspended=true;}
function advanceNeeds(now=GAME_CLOCK.wallNow(),mono=GAME_CLOCK.monotonicNow()){
 const h=state.healthSystem;
 let elapsed=0,source='active';
 if(needsClock.mono===null){
  const saved=Number(state.time);
  elapsed=Number.isFinite(saved)&&saved>0?clamp(now-saved,0,MAX_OFFLINE_NEEDS_MS):0;
  source='return';
 }else if(needsClock.suspended){
  elapsed=clamp(now-needsClock.wall,0,MAX_OFFLINE_NEEDS_MS);
  source='return';
 }else{
  // Date.now() adjustments during play do not affect needs. The monotonic clock
  // advances at most 60 seconds per tick after a stalled/throttled browser.
  elapsed=clamp(mono-needsClock.mono,0,MAX_ACTIVE_NEEDS_STEP_MS);
 }
 needsClock.mono=mono;needsClock.wall=now;needsClock.suspended=false;
 needsClock.lastElapsedMs=elapsed;needsClock.lastSource=source;
 state.time=now;
 const mins=elapsed/60000;
 for(const [key,rate] of Object.entries(currentNeedsRates()))
  state.stats[key]=clamp(Number(state.stats[key])-mins*rate);
 // No passive energy loss: only actions debit energy; resting restores it.
 if(h.status==='sick'){
  const loss=source==='return'?Math.min(MAX_OFFLINE_SICK_HEALTH_LOSS,mins*6):mins*6;
  state.stats.saude=clamp(state.stats.saude-loss);
  state.stats.felicidade=clamp(state.stats.felicidade-Math.min(source==='return'?5:Infinity,mins*2));
 }
 // Keep the original 30-second recovery interpolation (wall timestamp based)
 // without granting any instantaneous bonus upon reopening.
 if(h.status==='recovering'){
  const from=Number(h.recoveryStartAt),until=Number(h.recoveryUntil),start=Number(h.recoveryStartHealth),target=Number(h.recoveryTargetHealth);
  if(Number.isFinite(from)&&Number.isFinite(until)&&until>from&&Number.isFinite(start)&&Number.isFinite(target)){
   const f=clamp((now-from)/(until-from),0,1);
   state.stats.saude=clamp(start+(target-start)*f);
   if(f>=1){h.status='healthy';h.recoveryStartAt=null;h.recoveryUntil=null;h.recoveryStartHealth=null;h.recoveryTargetHealth=null;h.nausea=0;}
  }else{h.status='healthy';}
 }
 for(const key of ['excessFeedTimestamps','careMisuseTimestamps'])h[key]=h[key].filter(t=>t>now-CARE_WINDOW_MS);
 if(h.status==='overfed'&&h.excessFeedTimestamps.length===0&&h.careMisuseTimestamps.length===0){h.status='healthy';h.nausea=0;}
}
advanceNeeds();
function save(){state.x=pet.x;state.sunEpoch=sunEpoch;const ok=writeCurrentSave(state);$('saving').textContent=ok?'● Salvo':'● Somente nesta sessão';return ok;}
function setFeedback(t){$('feedback').textContent=t;}

function healthTreatmentNeeded(){const h=state.healthSystem;return h.status!=='recovering'&&(h.status==='sick'||state.stats.saude<70);}
function remainingTreatmentMs(now=GAME_CLOCK.wallNow()){const t=Number(state.healthSystem.lastTreatmentAt)||0;return t?Math.max(0,TREATMENT_COOLDOWN_MS-(now-t)):0;}
function formatWait(ms){const sec=Math.ceil(Math.max(0,ms)/1000);return String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');}
const MOOD_LABELS={
 sick:'🤒 Doentinho',recovering:'💚 Melhorando',overfed:'🤢 Enjoado',saude:'💉 Precisa de cuidados',
 sede:'💧 Com sede',fome:'🍎 Com fome',energia:'💤 Com sono',higiene:'🫧 Precisa de banho',
 felicidade:'🥺 Quer carinho',content:'😊 Contente'
};
function petMood(){const s=state.stats,h=state.healthSystem;
 if(h.status!=='healthy')return h.status;
 if(s.saude<35)return 'saude';
 if(s.sede<28)return 'sede';
 if(s.fome<28)return 'fome';
 if(s.energia<28)return 'energia';
 if(s.higiene<28)return 'higiene';
 if(s.felicidade<32)return 'felicidade';
 return 'content';
}
function mood(){return MOOD_LABELS[petMood()];}

let transition=null;
const NEED_ACTION={fome:'comer',sede:'beber',energia:'dormir',higiene:'banho',felicidade:'carinho',saude:'cuidar_saude'};
const CARE_NEED={comer:'fome',beber:'sede',banho:'higiene',dormir:'energia',carinho:'felicidade',brincar:'felicidade',cuidar_saude:'saude'};
const CARE_ART={
 fome:['....g...','...gg...','..rr.rr.','.rrrrrrr','.rprrrrr','.rrrrrrr','..rrrrr.','...r.r..'],
 sede:['......b.','.....b..','.wwwwbw.','.wbwbbw.','..bbbb..','..bpbb..','..bbbb..','...ww...'],
 higiene:['...bb...','..bppb..','..bppb.b','...bb.bw','.bb...wb','bwpb.b..','bppb....','.bb.....'],
 felicidade:['.rr..rr.','rprrrprr','rrrrrrrr','rrrrrrrr','.rrrrrr.','..rrrr..','...rr...','........'],
 energia:['...yy...','..yy....','.yy....w','.yy.....','.yyy....','.yyyy..y','..yyyyy.','...yyy..'],
 saude:['........','..yyy...','.yyryy..','yywwryy.','yywwryy.','.yyryy..','..yyy...','........'],
 brincar:['..gggg..','.gwwwgg.','ggwggggg','ggwggggg','gggggwgg','gggggwgg','.ggwwwg.','..gggg..']
};
const CARE_PALETTE={g:'#478746',r:'#D84462',p:'#FFE3ED',w:'#F5FFF6',b:'#207EAD',y:'#E2A64E'};
const careIcons={};
function careIcon(key){
 if(careIcons[key])return careIcons[key];
 const tile=document.createElement('canvas');
 tile.width=tile.height=8;
 const painter=tile.getContext('2d');
 CARE_ART[key].forEach((row,y)=>[...row].forEach((ink,x)=>{
  if(ink!=='.'){painter.fillStyle=CARE_PALETTE[ink];painter.fillRect(x,y,1,1);}
 }));
 return careIcons[key]={tile,src:tile.toDataURL()};
}
function careIconMarkup(key){
 return '<img class="careIcon" alt="" src="'+careIcon(key).src+'">';
}
const CARE_STATUS={want:'!',well:'✓',wait:'⌛',accepted:'+'};
const NEED_REQUESTS=[['sede','Quero beber!'],['fome','Quero uma maçã!'],['energia','Quero dormir!'],['higiene','Quero um banho!'],['felicidade','Quero carinho!']];
function careStatus(key,value=state.stats[key]){
 if(key==='saude'){
  if(state.healthSystem.status==='recovering'||(healthTreatmentNeeded()&&remainingTreatmentMs()>0))return 'wait';
  return healthTreatmentNeeded()?'want':'well';
 }
 return value<40?'want':'well';
}
let activeCareCue=null;
function showCareCue(key,status){
 const need=CARE_NEED[key];
 if(!need||currentScreen==='evolve'||typeof Element==='undefined'||!Element.prototype.animate)return;
 const root=$('view-'+currentScreen);
 const target=root.querySelector('[data-need="'+need+'"]')?.getBoundingClientRect();
 const stage=canvas.getBoundingClientRect();
 const visible=rect=>rect&&rect.bottom>0&&rect.top<window.innerHeight&&rect.width>0;
 const anchor=visible(stage)?stage:target;
 if(!visible(anchor))return;
 const startX=anchor===stage?anchor.left+(pet.x+155)/W*anchor.width:anchor.left+anchor.width/2;
 const startY=anchor===stage?anchor.top+(currentGround()-230)/H*anchor.height:anchor.top+anchor.height/2;
 const x=clamp(startX,24,window.innerWidth-48),y=clamp(startY,20,window.innerHeight-90);
 const cue=document.createElement('span');
 cue.className='careCue';cue.setAttribute('aria-hidden','true');
 cue.innerHTML=careIconMarkup(need)+'<span class="careState">'+CARE_STATUS[status]+'</span>';
 cue.style.left=x+'px';cue.style.top=y+'px';
 activeCareCue?.remove();activeCareCue=cue;document.body.appendChild(cue);
 const travel=status==='accepted'&&visible(target)&&visible(stage)&&!reducedMotion?.matches;
 const dx=travel?target.left+target.width/2-x-22:0,dy=travel?target.top+target.height/2-y-22:0;
 const animation=cue.animate([{opacity:1,offset:0},{opacity:1,offset:.42},{opacity:0,transform:'translate('+dx+'px,'+dy+'px)'}],{duration:750,easing:'ease-out'});
 animation.onfinish=()=>{cue.remove();if(activeCareCue===cue)activeCareCue=null;};
}

function priorityNeed(){
 const s=state.stats,h=state.healthSystem;
 if(h.status==='recovering')return {text:'Estou melhorando!',key:'saude',status:'wait'};
 if(healthTreatmentNeeded()){
  const wait=remainingTreatmentMs();
  return {text:wait?'Vamos esperar um pouquinho. '+formatWait(wait):'Pode cuidar de mim?',key:'saude',status:wait?'wait':'want'};
 }
 if(h.status==='overfed')return {text:'Por agora, está bom!',key:'fome',status:'well'};
 let candidate=null,lowest=40;
 for(const request of NEED_REQUESTS){
  const value=s[request[0]];
  if(value<lowest){lowest=value;candidate=request;}
 }
 return candidate?{key:candidate[0],text:candidate[1],status:'want'}:null;
}
// Quatro expressões progressivas reconhecíveis mesmo sem leitura.
function needFace(key,value){
 if(key==='saude'&&healthTreatmentNeeded())return '🤒';
 if(value>=75)return '😊';
 if(value>=50)return '🙂';
 if(value>=30)return '😟';
 return '😢';
}
const NEED_ACTION_LABEL={fome:'Comer',sede:'Beber',energia:'Dormir',higiene:'Tomar banho',felicidade:'Dar carinho',saude:'Cuidar'};
function renderNeeds(){
 const root=currentScreen==='evolve'?null:$(currentScreen==='garden'?'needs-garden':'needs-care');
 if(root)for(const [k,,n] of keys){
   const v=clamp(Number(state.stats[k])||0),alert=k==='saude'&&healthTreatmentNeeded(),status=careStatus(k,v);
   let card=root.querySelector('[data-need="'+k+'"]');
   if(!card){
    card=document.createElement('button');card.type='button';
    card.className='need needButton';card.dataset.need=k;card.dataset.careAction=NEED_ACTION[k];
    card.innerHTML='<span class="needHeader"><span class="needIcon">'+careIconMarkup(k)+'</span><span class="needName"></span><strong></strong></span><span class="track"><span class="fill"></span></span><span class="needAction">'+NEED_ACTION_LABEL[k]+'</span>';
    root.appendChild(card);
   }
   const reading=v.toFixed(0),percent=reading+'%',name=n;
   const label=card.querySelector('.needName'),value=card.querySelector('strong'),bar=card.querySelector('.fill');
   const expression=needFace(k,v);
   if(label.textContent!==name)label.textContent=name;
   if(value.textContent!==percent)value.textContent=percent;
   if(bar.style.width!==percent)bar.style.width=percent;
   bar.classList.toggle('low',v<30);bar.classList.toggle('medium',v>=30&&v<55);
   const isUrgent=k!=='saude'&&v<30;
   card.classList.toggle('urgent',isUrgent);card.classList.toggle('attention',k!=='saude'&&v>=30&&v<55);
   card.classList.toggle('sick',alert);
   card.setAttribute('aria-label',n+': '+reading+' por cento. Expressão '+expression+'. '+(k==='saude'?(alert?(remainingTreatmentMs()?'Tratamento disponível em '+formatWait(remainingTreatmentMs()):'Toque para tratamento mágico.'):'Slime saudável; toque para avaliar saúde.'):'Toque para '+({fome:'comer',sede:'beber',energia:'dormir',higiene:'tomar banho',felicidade:'receber carinho'}[k])+'.'));
 }
 const m=mood();if(m!==moodText){moodText=m;$('mood').textContent=m;}
}
function applyStats(delta){for(const k in delta)if(k in state.stats)state.stats[k]=clamp(state.stats[k]+delta[k]);renderNeeds();save();}

const actionInfo={
 comer:{anim:'comer',delta:{fome:26,felicidade:3,energia:-4},text:'🍎 Buscou a maçã, comeu e gastou um pouco de energia.'},
 beber:{anim:'beber',delta:{sede:30,energia:-3},text:'🥤 Que refrescante!'},
 banho:{anim:'banho',delta:{higiene:100,felicidade:3,energia:-6},text:'🫧 Que banho gostoso!'},
 dormir:{anim:'dormir',delta:{energia:35,fome:-2},text:'💤 Soneca gostosa!'},
 carinho:{anim:'feliz',delta:{felicidade:19,energia:-1},text:'💗 Adorei o carinho!'},
 brincar:{anim:'pulo',delta:{felicidade:18,energia:-10,sede:-3,higiene:-2},text:'🎾 Que brincadeira boa!'},
 pulo:{anim:'pulo',delta:{energia:-4,felicidade:2},text:'⬆️ Pulou e gastou um pouco de energia.'},
 walk_direita:{anim:'walk_direita',delta:{energia:-2},text:'➡️ Caminhou para a direita e gastou energia.'},
 walk_esquerda:{anim:'walk_esquerda',delta:{energia:-2},text:'⬅️ Caminhou para a esquerda e gastou energia.'},
 curioso:{anim:'curioso',delta:{felicidade:2,energia:-1},text:'👀 Foi observar algo interessante!'},
  cuidar_saude:{anim:'injecao_v29',delta:{},text:'💉 Tratamento mágico de cuidado!'}
};
function playAnim(a,manual=true){if(activeCareSequence&&manual&&!careAnimationOwner){setFeedback('💗 Um cuidado de cada vez!');return false;}if(!assets.actors[a]){setFeedback('Preparando as sprites...');return false;}
 petVisual.reaction=null;
 pet.act=a;pet.frame=0;pet.frameTime=0;pet.moveStart=pet.x;
 pet.moveEnd=clamp(pet.x+(a==='walk_direita'?63:a==='walk_esquerda'?-63:0),80,644);
 if(manual){lastUserAction=GAME_CLOCK.wallNow();task=null;}
 PersonalityMachine.onAnimation(a,manual);
 return true;}

// One shared care pipeline for Casa and Jardim; non-needed tapping can make the slime sick.
function becomeSick(now){
 const h=state.healthSystem;if(h.status==='sick'||h.status==='recovering')return;
 h.status='sick';h.sickSince=now;h.nausea=100;
 h.recoveryStartAt=null;h.recoveryUntil=null;h.recoveryStartHealth=null;h.recoveryTargetHealth=null;
 state.stats.saude=clamp(state.stats.saude-25);
 playAnim('doente_v29',true);
 setFeedback('💚 Um carinho mágico vai me ajudar!');
}
function registerOvercare(key,now=GAME_CLOCK.wallNow()){
 const h=state.healthSystem;
 if(h.status==='sick'||h.status==='recovering'){
   if(h.status==='sick')playAnim('doente_v29',true);
   setFeedback(h.status==='sick'?'🩹 Pode cuidar de mim?':'💚 Estou melhorando!');
   showCareCue('cuidar_saude',h.status==='recovering'||remainingTreatmentMs()?'wait':'want');
   return;
 }
 const old=Number(h.lastCareAttemptAt[key])||0;
 const policy=misusePolicy();
 // Never penalize rapid accidental taps, even if synthetic tests spam 100 times.
 if(old&&(now<old||now-old<policy.gap)){
  setFeedback('😊 Barriguinha feliz! Vamos esperar um pouquinho.');showCareCue(key,'wait');return;
 }
 h.lastCareAttemptAt[key]=now;
 h.careMisuseTimestamps=h.careMisuseTimestamps.filter(t=>now-t<CARE_WINDOW_MS);h.careMisuseTimestamps.push(now);
 if(key==='comer'){
   h.excessFeedTimestamps=h.excessFeedTimestamps.filter(t=>now-t<CARE_WINDOW_MS);
   h.excessFeedTimestamps.push(now);
 }
 const foodCount=h.excessFeedTimestamps.length,count=h.careMisuseTimestamps.length;
 h.nausea=clamp(h.nausea+(key==='comer'?35:23));
 // Recusar não gasta energia; um toque acidental não pune a criança.
 if(foodCount>=policy.food||count>=policy.care){SOUND.play('doente');becomeSick(now);}
 else if((key==='comer'&&foodCount===1)||count===1){
   h.status='overfed';SOUND.play('recusa');playAnim('recusar_comida',true);
   setFeedback('Por agora, está bom!');
 }else{
   h.status='overfed';SOUND.play('recusa');playAnim('enjoado_v28',true);
   setFeedback('Por agora, está bom!');
 }
 renderNeeds();save();
 if(h.status==='sick')showCareCue('cuidar_saude',remainingTreatmentMs()?'wait':'want');
 else showCareCue(key,'well');
}
function tooSoon(key,now,forceMessage=true){
 const h=state.healthSystem;
 const last=Number(h.lastCareActionAt[key])||0;
 const globalLast=Number(h.lastCareGlobalAt)||0;
 const local=CARE_COOLDOWN_MS[key]||1500;
 if(last&&now-last<local||globalLast&&now-globalLast<700){
  if(forceMessage){setFeedback('Vamos esperar um pouquinho.');showCareCue(key,'wait');}
  return true;
 }
 return false;
}
function recordCare(key,now){state.healthSystem.lastCareActionAt[key]=now;state.healthSystem.lastCareGlobalAt=now;}
function feedSlime(){
 const now=GAME_CLOCK.wallNow(),h=state.healthSystem,sat=state.stats.fome;
 if(h.status==='sick'){playAnim('doente_v29',true);setFeedback('🩹 Pode cuidar de mim primeiro?');showCareCue('cuidar_saude',remainingTreatmentMs()?'wait':'want');return;}
 // Permit filling from 88–99%, but preserve overfeeding after a *recent* full meal.
 // Real-time hunger decay can move 100% to 99.9% in 250 ms: without the history,
 // repeated excess taps would bypass nausea/illness after the first refusal.
 // 99.99+ is visually 100%: don't let a subsecond metabolic tick defeat a full-belly refusal.
 const lastFull=Number(h.lastFullFeedAt)||0;
 const recentlyFull=lastFull>0&&now>=lastFull&&now-lastFull<CARE_WINDOW_MS;
 const recentRefusal=h.excessFeedTimestamps.some(t=>now>=t&&now-t<CARE_WINDOW_MS);
 if(sat>=CARE_THRESHOLD.comer-0.01||(sat>=88&&(recentlyFull||recentRefusal))){registerOvercare('comer',now);return;}
 if(tooSoon('comer',now))return;
 if(!canAct(4))return;
 if(!playAnim('comer',true))return;
 beginCareSequence('comer',now);
 petVisual.reaction='comer';
 SOUND.play('comer');recordCare('comer',now);
 const gain=Math.min(46,100-sat); // e.g., 78 + 46 = 100, unlike v28's unreachable ceiling.
 // Set before applyStats(), which persists the complete health state to the old save key.
 if(sat+gain>=100)h.lastFullFeedAt=now;
 applyStats({fome:gain,felicidade:2,energia:-4});
 setFeedback(state.stats.fome>=99.9?'🍎 Barriguinha cheia!':'🍎 Que gostoso!');
 showCareCue('comer','accepted');
}
function normalCare(key,now){
 const info=actionInfo[key];if(!info)return;
 const meter={beber:'sede',banho:'higiene',dormir:'energia',carinho:'felicidade',brincar:'felicidade'}[key];
 if(meter&&state.stats[meter]>=CARE_THRESHOLD[key]){registerOvercare(key,now);return;}
 if(tooSoon(key,now))return;
 if(!canAct(Math.max(0,-(info.delta.energia||0))))return;
 if(key==='dormir'||key==='banho'){
  if(!beginCareSequence(key,now))return;
  SOUND.play(key);recordCare(key,now);
  // Bath and sleep commit their effects at the visually appropriate phase.
  setFeedback(key==='dormir'?'🌙 Boa soneca! 💤':'🫧 Hora de ficar limpinho!');
  showCareCue(key,'accepted');return;
 }
 if(!playAnim(info.anim,true))return;
 petVisual.reaction=key;
 SOUND.play(key);recordCare(key,now);
 applyStats(info.delta);setFeedback(info.text);
 showCareCue(key,'accepted');
}
function treatSlime(){
 const now=GAME_CLOCK.wallNow(),h=state.healthSystem;
 if(!healthTreatmentNeeded()){
  setFeedback(h.status==='recovering'?'💚 Estou melhorando!':'💚 Estou bem!');
  showCareCue('cuidar_saude',h.status==='recovering'?'wait':'well');return;
 }
 const wait=remainingTreatmentMs(now);
 if(wait>0){setFeedback('Vamos esperar um pouquinho. '+formatWait(wait));showCareCue('cuidar_saude','wait');return;}
 if(!playAnim('injecao_v29',true))return;
 SOUND.play('injecao');const start=state.stats.saude;
 h.status='recovering';h.nausea=0;h.sickSince=null;
 h.excessFeedTimestamps=[];h.careMisuseTimestamps=[];
 h.lastTreatmentAt=now;h.recoveryStartAt=now;h.recoveryUntil=now+TREATMENT_DURATION_MS;
 h.recoveryStartHealth=start;h.recoveryTargetHealth=clamp(start+55);
 // NO instantaneous healing; the 30-second tween in advanceNeeds owns health changes.
 state.stats.energia=clamp(state.stats.energia-2);
 petVisual.reaction='cuidar_saude';
 renderNeeds();save();setFeedback('💚 Estou melhorando!');
 showCareCue('cuidar_saude','accepted');
}
function canAct(cost=0){
 if(transition)return false;
 if(activeCareSequence){setFeedback('💗 Um cuidado de cada vez!');return false;}
 if(pet.act==='injecao_v29'){
  setFeedback('💚 Aguarde o slime terminar a injeção.');
  return false;
 }
 if(state.stats.energia<cost){
  setFeedback('💤 Energia insuficiente. Deixe o slime dormir!');
  showCareCue('dormir','want');
  return false;
 }
 return true;
}
function doAction(key){
 if(PersonalityMachine.automatic)PersonalityMachine.interrupt('action:'+key);
 // Sleep may be interrupted by a new intention. Other care animations are atomic.
 if(activeCareSequence){
  if(activeCareSequence.key==='dormir'&&key!=='dormir')cancelCareSequence('action');
  else {setFeedback(key==='dormir'?'💤 Estou descansando!':'💗 Só mais um instantinho!');return;}
 }
 if(!canAct())return;
 advanceNeeds();
 if(key==='cuidar_saude'||key==='injecao'){treatSlime();return;}
 if(key==='comer'){if(!assets.actors.comer)return;feedSlime();return;}
 if(['beber','banho','dormir','carinho','brincar'].includes(key)){
   normalCare(key,GAME_CLOCK.wallNow());return;
 }
 if(key==='curioso'&&currentScreen==='garden'){inspectMode=true;playAnim('curioso',true);SOUND.play('curioso');setFeedback('👀 Toque em uma árvore, flor, rocha, poça ou animal para observar!');return;}
 const info=actionInfo[key];if(!info||!canAct(Math.max(0,-(info.delta.energia||0))))return;
 if(!playAnim(info.anim,true))return;
 SOUND.play(key.startsWith('walk_')?'andar':key);applyStats(info.delta);setFeedback(info.text);
}

// V41-R4: a single care director, driven by the existing animation loop.
// Do not store images, timeouts, wall-clock callbacks or DOM nodes in the save.
const CARE_DURATIONS=Object.freeze({comer:2300,banho:3000,dormir:6200});
let careAnimationOwner=false;
function validSavedCare(raw){
 if(!raw||typeof raw!=='object'||!Object.hasOwn(CARE_DURATIONS,raw.key))return null;
 const elapsed=Number(raw.elapsed),fromX=Number(raw.fromX),toX=Number(raw.toX);
 if(!Number.isFinite(elapsed)||elapsed<0||elapsed>=CARE_DURATIONS[raw.key]||!Number.isFinite(fromX)||!Number.isFinite(toX))return null;
 return {key:raw.key,elapsed,fromX:clamp(fromX,80,644),toX:clamp(toX,80,644),
  startEnergy:clamp(Number(raw.startEnergy)||0),earned:clamp(Number(raw.earned)||0,0,35),
  committed:!!raw.committed,room:raw.room==='quarto'?'quarto':null,scene:raw.scene==='garden'?'garden':'care'};
}
let activeCareSequence=validSavedCare(state.pendingCare);
if(state.pendingCare&&!activeCareSequence)state.pendingCare=null;
function saveCareSnapshot(){state.pendingCare=activeCareSequence?{...activeCareSequence}:null;save();}
function setCarePose(name,beat){
 pet.act=name;pet.frame=clamp(Math.floor(beat),0,9);pet.frameTime=(beat%1)*FRAME_MS;
}
function beginCareSequence(key,now=GAME_CLOCK.wallNow()){
 if(activeCareSequence||!Object.hasOwn(CARE_DURATIONS,key))return false;
 const room=key==='dormir'&&currentScreen==='care'?'quarto':null;
 const fromX=pet.x;
 if(room){setCasaRoom('quarto',false);Casa.trigger('rest');}
 const toX=key==='dormir'&&currentScreen==='care'?clamp(105,80,644):fromX;
 activeCareSequence={key,elapsed:0,fromX,toX,startEnergy:state.stats.energia,earned:0,committed:false,room,scene:currentScreen};
 PersonalityMachine.onCareStart(key);
 if(key!=='comer'){
  careAnimationOwner=true;playAnim(key==='dormir'?'walk_esquerda':key,true);careAnimationOwner=false;
 }
 saveCareSnapshot();return true;
}
function cancelCareSequence(reason='interrupted'){
 const a=activeCareSequence;if(!a)return false;
 // Sleep has earned energy over time; do not rollback legitimate progress.
 if(a.key!=='dormir')return false;
 activeCareSequence=null;state.pendingCare=null;
 pet.act='idle';pet.frame=0;pet.frameTime=0;petVisual.reaction=null;
 PersonalityMachine.onCareEnd('care-cancelled:'+reason);
 save();return true;
}
function finishCareSequence(){
 const a=activeCareSequence;if(!a)return;
 if(a.key==='banho'&&!a.committed){
  a.committed=true;state.pendingCare={...a};applyStats(actionInfo.banho.delta);
  setFeedback('✨ Limpinho e cheiroso!');
 }
 if(a.key==='dormir'){
  // Final energy portion is granted once; hunger debit is committed once.
  const due=Math.max(0,Math.min(35,100-a.startEnergy)-a.earned);
  a.earned+=due;if(due)state.stats.energia=clamp(state.stats.energia+due);
  if(!a.committed){a.committed=true;state.stats.fome=clamp(state.stats.fome-2);}
  setFeedback('💤 Descansou e acordou feliz!');
 }
 activeCareSequence=null;state.pendingCare=null;
 pet.act='idle';pet.frame=0;pet.frameTime=0;petVisual.reaction=null;
 PersonalityMachine.onCareEnd();
 renderNeeds();save();
}
function advanceCareSequence(deltaMs=0){
 const a=activeCareSequence;if(!a)return null;
 const duration=CARE_DURATIONS[a.key];
 const dt=clamp(Number(deltaMs)||0,0,250); // monotonic frame, throttling-safe
 a.elapsed=Math.min(duration,a.elapsed+dt);
 const p=a.elapsed/duration;
 if(a.key==='dormir'){
  if(a.elapsed<1050){
   pet.x=a.fromX+(a.toX-a.fromX)*ease(a.elapsed/1050);
   setCarePose(a.toX<a.fromX?'walk_esquerda':'walk_direita',Math.min(9,a.elapsed/1050*9));
  }else if(a.elapsed<1700){pet.x=a.toX;setCarePose('dormir',(a.elapsed-1050)/650*2);}
  else if(a.elapsed<5150){pet.x=a.toX;setCarePose('dormir',5+Math.min(1.45,(a.elapsed-1700)/3450*1.45));}
  else{pet.x=a.toX;setCarePose('dormir',8+Math.min(1,(a.elapsed-5150)/1050));}
  const target=Math.min(35,100-a.startEnergy)*clamp((a.elapsed-1050)/(5150-1050),0,1);
  const gain=Math.max(0,target-a.earned);
  if(gain){state.stats.energia=clamp(state.stats.energia+gain);a.earned+=gain;}
 }else if(a.key==='banho'){
  setCarePose('banho',p*9.8);petVisual.reaction='banho';
  if(a.elapsed>=2550&&!a.committed){
   a.committed=true;state.pendingCare={...a};applyStats(actionInfo.banho.delta);
   setFeedback('🫧 Limpinho!');
  }
 }else{
  setCarePose('comer',p*9.8);petVisual.reaction='comer';
 }
 // Save in the established 1-second needs tick, not on every animation frame.
 state.pendingCare={...a};
 if(a.elapsed>=duration)finishCareSequence();
 return {key:a.key,phase:carePhase(a),progress:p,elapsed:a.elapsed};
}
function carePhase(a){if(!a)return 'idle';
 if(a.key==='dormir')return a.elapsed<1050?'approach':a.elapsed<1700?'lie':a.elapsed<5150?'sleep':'wake';
 if(a.key==='banho')return a.elapsed<700?'water':a.elapsed<2550?'wash':'clean';
 return a.elapsed<520?'approach':a.elapsed<1700?'chew':'full';
}
function careSnapshot(){return activeCareSequence?{...activeCareSequence,phase:carePhase(activeCareSequence)}:null;}
// Boot resumes a previous in-progress care in place instead of replaying rewards.
function restoreCareScene(){
 if(!activeCareSequence)return;
 if(activeCareSequence.room)setCasaRoom(activeCareSequence.room,false);
 if(activeCareSequence.key==='dormir')pet.x=activeCareSequence.fromX;
}
// V41-R5: personality state-machine. Deliberately ephemeral: no motion state is saved.
// Uses the original 20-frame spritesheets; never changes need/health/evolution meters.
const PERSONALITY_STATES=Object.freeze({
 idle:0,observando:10,procurando:10,andando:12,brincando:15,
 comendo:70,bebendo:70,banho:70,sono:80,sonolento:20,triste:20,
 feliz:20,enjoado:85,doente:95,recuperando:90,
 interagindo_com_animal:25,evoluindo:100
});
const PERSONALITY_ANIM=Object.freeze({
 idle:'idle',curioso:'observando',surpreso:'observando',
 walk_direita:'andando',walk_esquerda:'andando',pulo:'brincando',
 feliz:'feliz',orgulhoso:'feliz',timido:'observando',
 comer:'comendo',beber:'bebendo',banho:'banho',dormir:'sono',
 recusar_comida:'enjoado',enjoado:'enjoado',enjoado_v28:'enjoado',
 doente_v29:'doente',injecao_v29:'recuperando',recuperacao_v29:'recuperando'
});
const PersonalityMachine=(()=>{
 const HISTORY_LIMIT=160, BASE_MIN_PAUSE_MS=6500, BASE_MAX_PAUSE_MS=14500;
 let name='idle',origin='boot',since=0,nextAt=0,sequence=0,auto=null,internal=false;
 let random=Math.random,quietUntil=0;
 const history=[];
 const now=()=>GAME_CLOCK.monotonicNow();
 function report(){return {state:name,origin,since,priority:PERSONALITY_STATES[name],automatic:!!auto,phase:auto?.phase||null,returnX:auto?.startX??null,nextInMs:Math.max(0,nextAt-sceneTime),quietUntil,logCount:history.length};}
 function changeState(next,reason,options={}){
  if(!Object.hasOwn(PERSONALITY_STATES,next))return false;
  const priority=PERSONALITY_STATES[next];
  if(!options.force && priority<PERSONALITY_STATES[name] && name!=='idle')return false;
  if(next===name&&reason===origin)return true;
  history.push({seq:++sequence,at:Math.round(now()),scene:currentScreen,from:name,to:next,reason,priority});
  if(history.length>HISTORY_LIMIT)history.shift();
  name=next;origin=reason;since=now();return true;
 }
 const schedule=(t=sceneTime)=>{nextAt=t+BASE_MIN_PAUSE_MS+random()*(BASE_MAX_PAUSE_MS-BASE_MIN_PAUSE_MS);};
 function interrupt(reason='manual'){
  if(!auto)return false;
  auto=null;
  if(pet.act!=='idle'){pet.act='idle';pet.frame=0;pet.frameTime=0;pet.moveStart=pet.x;pet.moveEnd=pet.x;}
  changeState('idle','autonomy-interrupted:'+reason,{force:true});
  schedule();return true;
 }
 function startAnim(anim){internal=true;try{return playAnim(anim,false);}finally{internal=false;}}
 function moodState(){
  if(currentScreen==='evolve')return 'evoluindo';
  if(state.healthSystem.status==='sick')return 'doente';
  if(state.healthSystem.status==='recovering')return 'recuperando';
  if(state.healthSystem.status==='overfed')return 'enjoado';
  if(state.stats.energia<28)return 'sonolento';
  if(state.stats.fome<28)return 'procurando';
  if(state.stats.felicidade<28)return 'triste';
  return 'idle';
 }
 function behaviorAllowed(){return !gameSuspended&&!document.hidden&&!transition&&!activeCareSequence&&!task&&pet.act==='idle'&&currentScreen!=='evolve'&&!inspectMode&&state.healthSystem.status==='healthy'&&now()>quietUntil;}
 function autoVisit(){
  if(!behaviorAllowed()||reducedMotion.matches)return false;
  // A spontaneous adventure is only one short original walk clip, then a look, then a return.
  // A tired pet stays in place. This prevents energy loss and keeps care buttons responsive.
  const tired=state.stats.energia<35;
  const nearby=visitors.filter(v=>v.visible&&v.screen===currentScreen&&Math.abs(v.x-pet.x)<195);
  const chooseAnimal=nearby.length>0&&random()<.36;
  if(chooseAnimal){
   const v=nearby[Math.floor(random()*nearby.length)];
   lookAt={id:v.id,kind:v.kind,x:v.x,y:v.drawY,until:GAME_CLOCK.wallNow()+2100};
   auto={phase:'look',startX:pet.x,animal:v.kind};
   if(startAnim('curioso')){changeState('interagindo_com_animal','auto-animal',{force:true});return true;}
   auto=null;return false;
  }
  const wander=!tired&&random()<.56;
  if(wander){
   const startX=pet.x;
   // Approach a real scene object, never an invented prop or random non-interactive spot.
   const options=currentScreen==='garden'
    ? THINGS.map(item=>({x:item.target,lookX:item.x,lookY:item.y,label:item.id}))
    : homeThings().map(item=>({x:item.x,lookX:item.x,lookY:item.y,label:item.label}));
   const reachable=options.filter(o=>Math.abs(o.x-startX)>=19&&Math.abs(o.x-startX)<=62&&o.x>=80&&o.x<=644);
   const interest=reachable.length?reachable[Math.floor(random()*reachable.length)]:null;
   if(interest){
    const target=interest.x;
    auto={phase:'outbound',startX,targetX:target,interest};
    if(startAnim(target<startX?'walk_esquerda':'walk_direita')){
     pet.moveEnd=target;changeState('procurando','auto-curiosity',{force:true});
     changeState('andando','auto-approach:'+interest.label,{force:true});return true;
    }
    auto=null;
   }
  }
  auto={phase:'look',startX:pet.x};
  const dice=random(),anim=dice<.18?'pulo':dice<.72?'curioso':'feliz';
  if(startAnim(anim)){
   changeState(anim==='pulo'?'brincando':anim==='feliz'?'feliz':'observando','auto-expression',{force:true});return true;
  }
  auto=null;return false;
 }
 function onClipEnd(){
  if(!auto){
   const m=moodState();changeState(m,m==='idle'?'clip-finished':'needs',{force:true});
   schedule();return false;
  }
  if(auto.phase==='outbound'){
   if(auto.interest)lookAt={id:null,kind:'cenario',x:auto.interest.lookX,y:auto.interest.lookY,until:GAME_CLOCK.wallNow()+2100};
   auto.phase='look';
   if(startAnim('curioso')){changeState('observando','auto-found',{force:true});return true;}
  }else if(auto.phase==='look'&&Math.abs(pet.x-auto.startX)>5){
   auto.phase='return';
   const target=auto.startX;
   if(startAnim(target<pet.x?'walk_esquerda':'walk_direita')){
    pet.moveEnd=target;changeState('andando','auto-return',{force:true});return true;
   }
  }
  auto=null;
  changeState(moodState(),'auto-finished',{force:true});schedule();return false;
 }
 function onAnimation(anim,manual){
  if(internal||careAnimationOwner)return;
  if(auto)interrupt(manual?'command':'external-animation');
  const next=PERSONALITY_ANIM[anim]||'observando';
  changeState(next,manual?'manual-animation':'scene-animation',{force:true});
  if(manual){quietUntil=now()+3200;schedule(sceneTime+1600);}
 }
 function onCareStart(key){
  if(auto)interrupt('care');
  changeState(({dormir:'sono',banho:'banho',comer:'comendo'})[key]||'idle','care-start',{force:true});
  quietUntil=now()+3500;
 }
 function onCareEnd(reason='care-finished'){
  if(auto)interrupt('care-complete');
  changeState(moodState(),reason,{force:true});schedule(sceneTime+2600);
 }
 function onVisitor(manual,kind){
  if(!manual)return;
  if(auto)interrupt('animal-touch');
  changeState('interagindo_com_animal','animal:'+kind,{force:true});
  quietUntil=now()+2800;
 }
 function tick(){
  if(transition||currentScreen==='evolve'){
   if(auto)interrupt('scene');
   const desired=currentScreen==='evolve'?'evoluindo':name;
   if(desired!==name)changeState(desired,'scene',{force:true});
   return;
  }
  if(activeCareSequence){
   const desired=({comer:'comendo',dormir:'sono',banho:'banho'})[activeCareSequence.key];
   if(desired&&name!==desired)changeState(desired,'care',{force:true});return;
  }
  if(auto){if(state.healthSystem.status!=='healthy'||reducedMotion.matches)interrupt('priority');return;}
  if(pet.act!=='idle'||task)return;
  const mood=moodState();
  if(mood!==name)changeState(mood,'mood',{force:true});
  if(!nextAt)schedule();
  if(sceneTime<nextAt)return;
  schedule();
  if(!behaviorAllowed())return;
  // Health and energy affect behavior; mood does not prevent interactions.
  if(mood==='doente'||mood==='recuperando'||mood==='enjoado')return;
  autoVisit();
 }
 return Object.freeze({tick,transition:changeState,onAnimation,onClipEnd,onCareStart,onCareEnd,onVisitor,interrupt,
  get state(){return name},get automatic(){return !!auto},
  snapshot:report,logs:()=>history.map(v=>({...v})),
  // Deterministic test adapter; no new game buttons or timers.
  test:Object.freeze({setNextAt:(t)=>{nextAt=t;},setRandom:(fn)=>{random=fn;},reset:()=>{if(auto)interrupt('test');name='idle';origin='test';nextAt=0;quietUntil=0;history.length=0;}})});
})();
// Máquina de estados explícita: guardas e andamento desacoplados dos efeitos visuais.
// O estado público `currentScreen` continua igual à V41 para preservar os saves.
const SceneMachine=(()=>{
 let current='care',phase='stable',target=null;
 return Object.freeze({
  allows:(screen)=>SCENES.includes(screen),
  begin:(screen,mode)=>{if(!SCENES.includes(screen))return false;target=screen;phase=mode;return true;},
  enter:(screen)=>{current=screen;if(phase!=='transition'){phase='stable';target=null;}},
  finish:()=>{phase='stable';target=null;},
  snapshot:()=>({current,phase,target})
 });
})();
const parkedScenes=new Map();
let enteredScene=false,sceneryOrigin=0;
const VISITOR_CLOCK_FIELDS=[
 'started','landingStart','cycleStart','nextIdleReaction','reactionAt','nextReaction','nextManualReaction',
 'manualPoseAt','singAt','pondHopAt','pairedHopAt',
];
const SCENE_PET_FIELDS=['x','act','frame','frameTime','moveStart','moveEnd','pending'];
function sceneryTime(){return sceneTime-sceneryOrigin;}
function gardenArrivalTime(){return sceneryTime()/.90;}
function parkCurrentScene(){
 parkedScenes.set(currentScreen,{
  visitors,fx,task,inspectMode,voidPulseStart,sceneryOrigin,
  parkedAt:sceneTime,
  pet:Object.fromEntries(SCENE_PET_FIELDS.map(key=>[key,pet[key]])),
 });
}
function enterScene(screen){
 const saved=parkedScenes.get(screen);
 if(!saved){
  if(enteredScene)Object.assign(pet,{x:362,act:'idle',frame:0,frameTime:0,moveStart:362,moveEnd:362,pending:null});
  visitors=[];fx=null;task=null;inspectMode=false;
  sceneryOrigin=sceneTime;
  spawnResidentVisitors(screen);
  return;
 }
 parkedScenes.delete(screen);
 const away=sceneTime-saved.parkedAt;
 visitors=saved.visitors.filter(v=>faunaPresent(v.kind));
 for(const v of visitors){
  for(const key of VISITOR_CLOCK_FIELDS){
   if(Number.isFinite(v[key]))v[key]+=away;
  }
 }
 fx=saved.fx;task=saved.task;inspectMode=saved.inspectMode;
 sceneryOrigin=saved.sceneryOrigin+away;
 voidPulseStart=saved.voidPulseStart+away;
 Object.assign(pet,saved.pet);
 for(const [kind,loc] of Object.entries(FIXED_VISITORS)){
  if(loc.screen===screen&&faunaPresent(kind)&&!visitors.some(v=>v.kind===kind))spawnResidentVisitors(screen,kind);
 }
}
function applyScreen(screen){
 if(!SceneMachine.allows(screen))return;
 if(!enteredScene||screen!==currentScreen){
  PersonalityMachine.interrupt('navigation');
  if(enteredScene){parkCurrentScene();SOUND.scene(screen);}
  currentScreen=screen;
  enterScene(screen);
  enteredScene=true;
  if(screen==='evolve'&&voidPulseStart<0)voidPulseStart=sceneTime;
  resetPetVisual();
  lookAt=null;visitorReach=null;
 }
 SceneMachine.enter(screen);
 pet.ground=screen==='care'?442:screenGround(screen);
 document.querySelector('.stage').classList.toggle('void-theme',screen==='evolve');
 document.querySelectorAll('.tabcontent').forEach(p=>p.classList.toggle('active',p.id==='view-'+screen));
 document.querySelectorAll('.nav').forEach(b=>{const active=b.dataset.screen===screen;b.classList.toggle('selected',active);b.setAttribute('aria-current',active?'page':'false')});
 if(screen==='garden')setFeedback(reducedMotion?.matches?'🌿 Pouco movimento ativo: os bichinhos se movimentam mais devagar.':'🌿 Toque nos elementos do jardim para brincar ou cuidar do slime.');
 else if(screen==='care')setFeedback('🏠 O slime está esperando seus cuidados em casa.');
 else{voidPulseStart=sceneTime;setFeedback('😱 O slime está flutuando num buraco negro! Toque no vórtice.');}
 renderNeeds();}
const prefersReducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)');
const reducedMotion={get matches(){return Boolean(state.accessibility?.reducedMotion||prefersReducedMotion?.matches);}};
const DOORWAY_TRANSITION_MS=180;
let screenRequest=0;
async function setScreen(screen,instant=false){if(!SceneMachine.allows(screen))return;
 if(!instant&&activeCareSequence?.key==='dormir'&&screen!==currentScreen)cancelCareSequence('navigation');
 if(!instant&&!canAct())return;
 PersonalityMachine.interrupt('scene-request');
 const request=++screenRequest;
 if(screen===currentScreen&&!instant)return;
 if(instant){SceneMachine.finish();applyScreen(screen);await loadScene(screen);return;}
 if(!sceneReady.has(screen)){
  SceneMachine.begin(screen,'loading');
  setFeedback('⏳ Preparando o cenário...');
  const loaded=await loadScene(screen);
  if(request!==screenRequest)return;
  if(!canAct()){SceneMachine.finish();return;}
  if(!loaded){applyScreen(screen);setFeedback('⚠️ Alguns desenhos do cenário não carregaram.');return;}
 }
 if(reducedMotion?.matches){SceneMachine.finish();applyScreen(screen);return;}
 const msg=screen==='garden'?'🚪 Abrindo a porta do jardim...':screen==='care'?'🚪 Entrando em casa...':'🕳️ Entrando no Limbo...';
 SceneMachine.begin(screen,'transition');
 const throughDoor=(currentScreen==='care'&&screen==='garden')||(currentScreen==='garden'&&screen==='care');
 const duration=throughDoor?DOORWAY_TRANSITION_MS:10*FRAME_MS;
 transition={from:currentScreen,to:screen,start:GAME_CLOCK.animationNow(),duration,mid:false,startX:pet.x};SOUND.play('switch');
 setFeedback(msg);}
const THINGS=[
 {id:'arvore',label:'🌳 Árvore',x:178,y:270,r:80,target:223,anim:'curioso',text:'🌳 Folhas dançando no vento!'},
 {id:'flores',label:'🌸 Flores',x:448,y:326,r:47,target:406,anim:'feliz',text:'🌸 O slime cheirou as flores.'},
 {id:'rocha',label:'🪨 Rocha',x:492,y:342,r:50,target:463,anim:'surpreso',text:'🪨 A rocha reluziu ao sol!'},
 {id:'poca',label:'💦 Poça',x:620,y:400,r:71,target:598,anim:'pulo',text:'💦 Splash! A água ganhou ondas.'},
 {id:'borboleta',label:'🦋 Borboleta',x:450,y:165,r:89,target:515,anim:'feliz',text:'🦋 Que borboleta bonita!'}];
// ===== CASA V41: sala, quarto e cozinha (substitui a casa antiga) =====
const CASA_ART={"sala": "../assets/casa_sala.png", "quarto": "../assets/casa_quarto.png", "cozinha": "../assets/casa_cozinha.png"};
const CASA_HEMS_SRC={"sala": [[9, 149, 48, 21, "../assets/casa_barra_sala.png"], [219, 149, 48, 21, "../assets/casa_barra_sala_2.png"]], "quarto": [[40, 132, 38, 23, "../assets/casa_barra_quarto.png"], [201, 132, 37, 23, "../assets/casa_barra_quarto_2.png"]], "cozinha": [[32, 123, 39, 25, "../assets/casa_barra_cozinha.png"], [207, 123, 39, 25, "../assets/casa_barra_cozinha_2.png"]]};
const CASA_TOP_SRC="../assets/casa_top_src.png";
const CASA_ROOMS=['sala','quarto','cozinha'];
const CASA_NAMES={sala:'Sala',quarto:'Quarto',cozinha:'Cozinha'};
const CASA_ICONS={sala:'🛋️',quarto:'🛏️',cozinha:'🍳'};
const CASA_ROOM_KEY='slime_pet_liz_v41_comodo';
const Casa=(()=>{
 const cv=document.createElement('canvas');cv.width=480;cv.height=360;
 const g=cv.getContext('2d');
 let room='sala',time=0,lastKey='',roomEnteredAt=0;
 const roomState=Object.fromEntries(CASA_ROOMS.map(name=>[name,{timers:{},topOffset:0,elapsed:0}]));
 try{const s=localStorage.getItem(CASA_ROOM_KEY);if(CASA_ROOMS.includes(s))room=s;}catch(e){}
 const clockFmt=new Intl.DateTimeFormat('pt-BR',{hour:'2-digit',minute:'2-digit'});
 const sprite=src=>{const i=new Image();i.src=src;return i};
 const hems={};
 for(const [r,pair] of Object.entries(CASA_HEMS_SRC))hems[r]=pair.map(([x,y,w,h,src])=>[x,y,w,h,sprite(src)]);
 const topSheet=sprite(CASA_TOP_SRC);
 function rect(x,y,w,h,c){g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),w,h)}
 function oval(x,y,rx,ry,c){g.fillStyle=c;g.beginPath();g.ellipse(x,y,rx,ry,0,0,7);g.fill()}
 function poly(p,c){g.fillStyle=c;g.beginPath();p.forEach(([x,y],i)=>i?g.lineTo(Math.round(x),Math.round(y)):g.moveTo(Math.round(x),Math.round(y)));g.closePath();g.fill()}
 function line(x,y,X,Y,c,w=1){g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(x,y);g.lineTo(X,Y);g.stroke()}
 function elapsed(){
  const parked=parkedScenes.get('care');
  const clock=parked?parked.parkedAt-parked.sceneryOrigin:sceneryTime();
  return roomState[room].elapsed+clock-roomEnteredAt;
 }
 function age(id){return time-(roomState[room].timers[id]??-1000)}
 function spinBoost(){return 26*(1-Math.exp(-age('top')));}
 function trigger(id){
  if(!id)return;
  const state=roomState[room],{timers}=state;
  if(id==='top'&&timers.top!==undefined)state.topOffset=(state.topOffset+spinBoost())%12;
  timers[id]=time;
 }
 function clock(){let x=427,y=40,d=new Date(),s=d.getSeconds()+d.getMilliseconds()/1000,m=d.getMinutes()+s/60,h=d.getHours()%12+m/60;oval(x+1,y+2,18,18,'#46544866');oval(x,y,18,18,'#734833');oval(x,y-1,17,17,'#e6ad59');oval(x,y,14.7,14.7,'#fff1c6');for(let i=0;i<12;i++){let a=i*Math.PI/6;rect(x+12*Math.sin(a),y-12*Math.cos(a),1,2,'#916c4d')}for(let [v,period,len,c,w] of [[h,12,7,'#593e34',2],[m,60,10,'#593e34',1.6],[s,60,12,'#c47c4e',.8]]){let a=v*2*Math.PI/period;line(x,y,x+len*Math.sin(a),y-len*Math.cos(a),c,w)}oval(x,y,2,2,'#b18143')}
 function curtains(){const tick=Math.floor(time*9+Math.min(4,age('wind'))*2)%16;
  for(const [x,y,w,h,img] of (hems[room]||[]))if(img.complete&&img.naturalWidth)g.drawImage(img,tick*w,0,w,h,x,y,w,h)}
 function picture(w){
  g.save();g.translate(334,14);g.rotate(w*.045);line(0,0,-12,9,'#86603e');line(0,0,12,9,'#86603e');rect(-1,0,2,2,'#bf9151');
  rect(-29,9,59,49,'#52453155');rect(-30,7,59,49,'#744332');rect(-29,8,57,46,'#bc7845');rect(-28,9,55,2,'#ffe1a2');rect(-28,11,2,41,'#e4a968');rect(-26,11,51,40,'#85553f');rect(-25,12,49,38,'#f3ddb0');
  g.save();g.beginPath();g.rect(-22,15,43,31);g.clip();
  const dusk=room==='quarto';rect(-22,15,43,31,dusk?'#7985b2':'#8ac8cd');rect(-22,28,43,8,dusk?'#d9abb5':'#f8d69e');rect(8,18,6,6,'#ffdfa0');rect(9,17,4,8,'#ffe9ad');
  for(let i=-22;i<21;i++){let ridge=Math.floor(26+Math.abs(Math.sin(i*.09))*6);rect(i,ridge,1,13,dusk?'#827299':'#87a594');let hill=Math.floor(35+Math.sin(i*.12)*3);rect(i,hill,1,12,dusk?'#536b80':'#587f68')}
  for(const [x,y,h] of [[-19,27,10],[-13,31,8],[16,30,9]]){for(let j=0;j<h;j+=2)rect(x-Math.floor(j/3),y+j,1+2*Math.floor(j/3),2,'#395c58');rect(x,y+h,1,3,'#654b3a')}
  if(room==='cozinha'){rect(-2,32,9,7,'#f4cc91');for(let j=0;j<5;j++)rect(2-j,28+j,1+j*2,1,'#a55b46');rect(0,35,2,4,'#795444');rect(4,34,2,2,'#ffec9f')}
  for(let i=0;i<19;i++){let x=-22+(i*17)%43,y=40+(i*7)%6;rect(x,y,2,1,i%3?'#f4cb8d':'#e6a2a3')}
  g.restore();g.restore()
 }
 function pottery(w){
  g.save();g.translate(436,242);
  oval(1,12,20,3,'#4d493c44');
  for(let i=0;i<13;i++){let dx=((i*13)%29)-14,dy=-24-(i*7)%23;
   let x=Math.round(dx+w*(2+i%3)),y=dy+Math.round(Math.sin(time*1.1+i)*.7);
   line(0,-5,x,y,'#557043',1);let sign=x<0?-1:1;
   g.save();g.translate(x,y);g.scale(sign,1);
   for(const [j,offset,width] of [[0,5,4],[1,2,8],[3,0,10],[5,-1,9],[7,-1,6],[9,-1,3]])rect(offset,j-7,width,2,'#395e4b');
   rect(2,-4,6,3,i%2?'#78a55e':'#96b770');rect(0,-1,6,2,'#659453');rect(3,-3,4,1,'#c3d585');
   if(i%4===0){rect(5,-9,4,5,'#de9792');rect(4,-8,6,2,'#f6c0a6');rect(6,-8,2,2,'#ffe29a')}g.restore()}
  const rows=[[-10,16],[-8,17],[-5,16],[-2,15],[2,14],[6,12],[9,10]];
  rows.forEach(([y,r],i)=>{let h=(rows[i+1]?.[0]??12)-y;rect(-r,y,2*r,h,'#455f59');rect(-r+2,y,2*r-5,h,'#6a9c91');rect(-r+4,y,r+2,h,'#91bbaa');rect(-r+5,y,2,h,'#bad5bb')});
  rect(-17,-11,34,4,'#547b72');rect(-16,-11,30,2,'#dfdbb2');rect(-13,-6,25,1,'#e3d7ad');
  for(let i=-1;i<=1;i++){let x=i*8;rect(x-1,-2,2,5,'#dfdbb2');rect(x-3,0,6,1,'#fff0c8')}
  rect(-9,10,18,2,'#638278');g.restore()
 }
 function ornaments(w){
  g.save();g.translate(281,31);g.rotate(.045*Math.sin(time*1.7)+w*.11+Math.sin(age('chime')*8)*Math.exp(-age('chime')));
  rect(-1,0,2,8,'#755239');for(let j=0;j<4;j++)rect(-2*j,8+j,1+4*j,1,j%2?'#b57945':'#d09b56');
  for(let i=-1;i<=1;i++){let x=i*5+Math.round(Math.sin(time*2+i)*.8);rect(x,12,1,6,'#856645');rect(x-1,17,3,9-i*2,'#996337');rect(x-1,17,1,8-i*2,'#ffe0a1')}rect(0,27,1,5,'#766042');rect(-1,32,3,4,'#b97a53');g.restore();
  const {topOffset,timers}=roomState[room];
  const frame=Math.floor(time*5+topOffset+(timers.top===undefined?0:spinBoost()))%12;
  oval(427,311,9,2,'#62483148');
  if(topSheet.complete&&topSheet.naturalWidth)g.drawImage(topSheet,frame*29,0,29,26,412,287,29,26)
 }
 let seed=7331;
 function rnd(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296}
 const motes=Array.from({length:146},(_,i)=>({x:rnd()*480,y:rnd()*360,phase:rnd()*6.28,speed:2+rnd()*5,pollen:i%5===0}));
 function dust(w){for(const m of motes){
  const a=time*.64+m.phase,k=m.pollen?1.5:1;
  const x=(480+m.x+time*m.speed*k+Math.sin(a)*4+w*2)%480;
  const y=(360+m.y+time*m.speed*.28+Math.cos(a*.81+m.phase)*5)%360;
  g.globalAlpha=(m.pollen?.61:.32)+.17*Math.sin(a);
  if(m.pollen){rect(x,y,2,2,'#d9a547');rect(x,y,1,1,'#fff2a8');if(Math.cos(a)>.3)rect(x+2,y,1,1,'#ecd185')}
  else rect(x,y,1,1,'#fff8e7')
 }g.globalAlpha=1}
 // Desenha o cômodo atual no canvas interno de 480x360 (só redesenha a cada 1/16 s).
 function render(bg,force){
  const tick=Math.floor(elapsed()*16/1000),key=room+':'+tick+':'+faunaPresent('formiga')+':'+Boolean(assets.visitors.formiga)+':'+reducedMotion.matches;
  if(!force&&key===lastKey)return;lastKey=key;time=tick/16;
  g.imageSmoothingEnabled=false;g.clearRect(0,0,480,360);
  if(bg)g.drawImage(bg,0,0,480,360);
  const breeze=Math.sin(time*1.5)*(.15+.65*Math.max(0,Math.sin(time*.48))**6)+Math.sin(age('wind')*6)*Math.exp(-age('wind')*.65);
  curtains();
  const drift=Math.sin(time*.19)*7;
  for(let k=0;k<3;k++){let x=70+23*k;poly([[x,146],[x+7,146],[x+105+drift,344],[x+75+drift,344]],'rgba(255,237,171,'+(.026+.015*Math.sin(time+k))+')')}
  drawHomeAnts(g,room,time*1000);
  picture(breeze);clock();pottery(breeze);ornaments(breeze);dust(breeze);
  const effects=[['chime',281,59,'♫','#b08451'],['water',435,188,'•','#76c3da'],['rug',240,287,'✦','#d9993b'],['rest',80,207,room==='quarto'?'z':'♥','#cf6981'],['tea',177,166,'∿','#fff6df'],['pans',52,170,'♪','#95593d'],['clock',428,58,'♪','#89693d']];
  for(const [id,x,y,ch,c] of effects){const a=age(id);if(a>=3)continue;g.save();g.fillStyle=c;g.font='bold 9px Georgia';for(let i=0;i<4;i++){const p=(a*.7+i*.25)%1;g.globalAlpha=Math.sin(Math.PI*p);g.fillText(ch,x+(i-1.5)*4+Math.sin(p*5+i)*2,y+(id==='water'?1:-1)*p*18)}g.restore()}
  if(age('sink')<3){for(let i=0;i<7;i++)rect(126,171+(i*3+time*20)%16,1,2,'#b8e4e2')}
 }
 // Áreas de toque, em porcentagem do cenário (x, y, largura, altura). O último da lista fica por cima.
 function spots(){
  const L=[
   {id:'janela',label:'🪟 Janela',x:3,y:7,w:52,h:35,fx:'wind',text:'🪟 A brisa entrou pela janela e balançou a cortina.'},
   {id:'quadro',label:'🖼️ Quadro',x:62,y:4,w:15,h:21,fx:'wind',text:'🖼️ A brisa balançou o quadro e as folhas.'},
   {id:'relogio',label:'🕒 Relógio',x:83,y:6,w:12,h:14,fx:'clock',text:()=>'🕒 O relógio marca '+clockFmt.format(new Date())+'.'},
   {id:'planta',label:'🪴 Plantinha',x:82,y:51,w:17,h:23,fx:'water',text:'🪴 Gotinhas de água para a planta!'},
   {id:'sino',label:'🎐 Sino de vento',x:56,y:8,w:6,h:11,fx:'chime',text:'🎐 Os tubinhos do sino dançam com o vento.'},
   {id:'tapete',label:'🟢 Tapete',x:17,y:72,w:65,h:22,fx:'rug',text:'⭐ Uma estrela se escondeu na trama do tapete!'},
   {id:'piao',label:'🪀 Pião',x:85,y:78,w:8,h:10,fx:'top',text:'🪀 O pião ganhou impulso!',care:'brincar'}
  ];
  if(room==='cozinha'){
   L.push({id:'torneira',label:'🚰 Torneira',x:16,y:44,w:15,h:13,fx:'sink',text:'🚰 A água corre na pia.'});
   L.push({id:'chaleira',label:'🫖 Chaleira',x:31,y:44,w:10,h:9,fx:'tea',text:'🫖 O chá está soltando vapor.'});
   L.push({id:'panelinhas',label:'🍳 Panelinhas',x:3,y:43,w:13,h:10,fx:'pans',text:'🎵 As panelinhas tocam uma melodia.'});
   L.push({id:'armario',label:'🗄️ Armário',x:2,y:58,w:40,h:11,fx:null,text:'🗄️ Na gaveta há uma colher de pau, um pano xadrez e a receita favorita do slime: chá de maçã.'});
  }else if(room==='quarto'){
   L.push({id:'cama',label:'🛏️ Cama',x:2,y:50,w:29,h:20,fx:'rest',text:'😴 Hora de uma soneca tranquila.',care:'dormir'});
  }else{
   L.push({id:'sofa',label:'🛋️ Sofá',x:2,y:50,w:29,h:20,fx:'rest',text:'😴 Hora de uma soneca tranquila.',care:'dormir'});
  }
  return L;
 }
 return{canvas:cv,render,spots,trigger,elapsed,
  getRoom:()=>room,
  setRoom(r){if(!CASA_ROOMS.includes(r))return false;if(r===room)return false;
   roomState[room].elapsed=elapsed();roomEnteredAt=sceneryTime();room=r;
   time=roomState[room].elapsed/1000;
   try{localStorage.setItem(CASA_ROOM_KEY,r)}catch(e){}return true;}};
})();
function casaBg(){return assets['casa_'+Casa.getRoom()]||null}
// Pinta o cômodo atual no palco principal (suavizado: a arte original tem 480x360, o palco 724x543).
function paintCasa(){
 const bg=casaBg();
 if(!bg){pixel(0,0,W,398,'#A3D6B8');pixel(0,398,W,145,'#C09A70');return;}
 Casa.render(bg,false);
 ctx.save();ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
 ctx.drawImage(Casa.canvas,0,0,W,H);ctx.restore();
}
function homeThings(){return Casa.spots().map(s=>({label:s.label,x:(s.x+s.w/2)*W/100,y:(s.y+s.h/2)*H/100,r:Math.max(s.w*W/100,s.h*H/100)/2}));}
function casaSpotAt(x,y){
 const list=Casa.spots();
 for(let i=list.length-1;i>=0;i--){const s=list[i];
  const l=s.x*W/100,t=s.y*H/100,w=s.w*W/100,h=s.h*H/100;
  if(x>=l&&x<=l+w&&y>=t&&y<=t+h)return s;}
 return null;
}
function interactCasaSpot(s){
 lastUserAction=GAME_CLOCK.wallNow();
 Casa.trigger(s.fx);
 if(s.care){doAction(s.care);return;}
 const cx=(s.x+s.w/2)*W/100,cy=(s.y+s.h/2)*H/100;
 if(!canAct(1))return;
 lookAt={id:null,x:cx,y:cy,kind:'casa',until:GAME_CLOCK.wallNow()+3200};
 SOUND.play('curioso');playAnim('curioso',false);applyStats({felicidade:1,energia:-1});
 setFeedback(typeof s.text==='function'?s.text():s.text);save();
}
function syncCasaButtons(){
 document.querySelectorAll('.roomBtn').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.room===Casa.getRoom())));
}
function setCasaRoom(r,announce=true){
 if(activeCareSequence?.key==='dormir'&&r!==Casa.getRoom())cancelCareSequence('room');
 // Changing rooms does not stop a short, already-running meal or bath.
 const changed=Casa.setRoom(r);
 syncCasaButtons();
 if(changed&&announce)setFeedback(CASA_ICONS[r]+' '+CASA_NAMES[r]+': toque nos objetos para brincar.');
 return changed;
}
document.querySelectorAll('.roomBtn').forEach(b=>b.addEventListener('click',()=>setCasaRoom(b.dataset.room)));
syncCasaButtons();
function nearestThing(list,x,y){return list.map(o=>({o,d:Math.hypot((x-o.x)/o.r,(y-o.y)/o.r)})).sort((a,b)=>a.d-b.d)[0];}
function startInteraction(id){if(currentScreen!=='garden'||!canAct(3))return;const item=THINGS.find(t=>t.id===id);if(!item)return;
 lastUserAction=GAME_CLOCK.wallNow();advanceNeeds();task={...item};setFeedback('🌿 Indo até: '+item.label);
 continueTask();}
function continueTask(){if(!task)return;
 if(Math.abs(pet.x-task.target)<=44){const o=task;task=null;
  if(!canAct(3)||!playAnim(o.anim,false))return;
  if(o.id!=='local'){
   fx={name:o.id,x:o.x,y:o.y,time:0};SOUND.play(o.id);
  }
  applyStats({felicidade:6,energia:-3});setFeedback(o.text);return;
 }
 if(!playAnim(pet.x<task.target?'walk_direita':'walk_esquerda',false))task=null;
}
const SLIME_STRIDE=[0,0,.10,.24,.44,.68,.86,1,1,1];
function updateSlimeStride(){
 const at=SLIME_STRIDE[pet.frame],next=SLIME_STRIDE[Math.min(9,pet.frame+1)];
 const progress=at+(next-at)*clamp(pet.frameTime/FRAME_MS,0,1);
 pet.x=limitSlimeWalk(pet.moveStart+(pet.moveEnd-pet.moveStart)*progress);
}
function nextFrame(){pet.frame++;
 if(pet.frame>=10){if(pet.act.startsWith('walk_')){
  const stopped=limitSlimeWalk(pet.moveEnd);
  if(task&&Math.abs(stopped-pet.moveStart)<1)task=null;
  pet.x=stopped;
 }pet.frame=0;pet.frameTime=0;pet.act='idle';const resumed=PersonalityMachine.onClipEnd();if(task&&!resumed)continueTask();}}

// Scene coordinates are shared by movement, drawing and touch.
// Visible glass under the curtains, measured in the 480x360 room art.
const CASA_GLASS={
 sala:[[84,32],[188,32],[221,76],[221,154],[54,154],[54,76]],
 quarto:[[87,27],[181,27],[219,78],[219,151],[59,151],[59,78]],
 cozinha:[[84,29],[190,29],[220,82],[220,141],[57,141],[57,82]]
};
function windowGlass(){
 const path=new Path2D();
 CASA_GLASS[Casa.getRoom()].forEach(([x,y],i)=>path[i?'lineTo':'moveTo'](x*W/480,y*H/360));
 path.closePath();
 return path;
}
const VISITOR_WINDOW={x:81,y:41,w:253,h:192};
const GARDEN_DUCK_Y=448;
const VISITOR_SPEC={
 sapo:{label:'sapinho',mode:'hop',scale:1.28,y:369,min:521,max:635,duration:14500,ms:220,rx:29,ry:24,hop:13,sound:'sapo'},
 coelho:{label:'coelhinho',scenes:['garden'],mode:'hop',scale:1.29,y:448,min:280,max:400,duration:Infinity,ms:185,rx:36,ry:32,hop:17,sound:'coelho',useSupplied:true},
 abelha:{label:'abelhinha',mode:'arc',scale:.55,y:159,min:153,max:290,duration:11400,ms:165,rx:20,ry:18,sound:'abelha'},
 formiga:{label:'formiguinha',mode:'walk',scale:.78,y:466,min:165,max:540,duration:14500,ms:195,rx:25,ry:17,sound:'formiga',useSupplied:false,anchor:{x:36,y:49}},
 borboleta:{label:'borboleta',mode:'flutter',scale:1.2,y:260,min:376,max:530,duration:12500,ms:190,rx:24,ry:21,sound:'borboleta'},
 vagalume:{label:'vaga-lume',mode:'glow',scale:1.5,y:191,min:362,max:540,duration:13700,ms:175,rx:24,ry:21},
 joaninha:{label:'joaninha',scenes:['garden'],row:0,rarity:.80,mode:'flutter',scale:.5904,y:300,min:390,max:525,duration:13800,ms:175,rx:18,ry:16,sound:'joaninha'},
 caracol:{label:'caracol',scenes:['garden'],row:0,rarity:.68,mode:'creep',scale:.85,y:401,min:186,max:257,duration:Infinity,ms:750,rx:25,ry:20,sound:'caracol'},
 tartaruga:{label:'tartaruga',scenes:['garden'],row:0,rarity:.65,mode:'creep',scale:1.1,y:452,min:84,max:644,duration:Infinity,ms:940,rx:29,ry:21,sound:'tartaruga'},
 libelula:{label:'libélula',scenes:['garden'],row:0,rarity:.88,mode:'dart',scale:.5695,y:185,min:370,max:620,duration:16700,ms:185,rx:22,ry:17,sound:'libelula'},
 patinho:{label:'patinho',scenes:['garden'],row:0,rarity:.75,mode:'paddle',scale:1.13,y:GARDEN_DUCK_Y,min:582,max:647,duration:21000,ms:270,rx:28,ry:23,sound:'patinho'},
 gatinho:{label:'gatinho',scenes:['care'],row:0,rarity:.88,mode:'walk',scale:1.20,y:463,min:290,max:510,duration:16500,ms:190,rx:31,ry:27,sound:'gatinho'},
 joao_de_barro:{label:'joão-de-barro',scenes:['garden'],row:0,rarity:.63,mode:'perch',scale:.9265,y:178,min:134,max:272,duration:11900,ms:205,rx:28,ry:23,sound:'joao_de_barro'}
};
// Animais residentes: permanecem no mesmo lugar, com movimento de dez quadros e reacoes locais.
// Os valores sao coordenadas do palco logico 724x543, calibrados no Jardim Vivo e na estante da Casa.
const FIXED_VISITORS={
  gatinho:{screen:'care',x:645,y:230,facing:-1,label:'ponta da prateleira'},
  borboleta:{screen:'garden',x:416,y:190,facing:1,label:'flores do jardim',flutter:true},
  libelula:{screen:'garden',x:553,y:107,facing:1,label:'voo pelo jardim'},
  joaninha:{screen:'garden',x:448,y:310,facing:1,label:'canteiro de flores',flight:true},
  caracol:{screen:'garden',x:-34,y:371,facing:1,label:'entre a borda e a arvore esquerda',cycle:'slug'},
  sapo:{screen:'garden',x:618,y:403,facing:-1,label:'beira da poça',pond:true},
  joao_de_barro:{screen:'garden',x:612,y:267,facing:1,label:'galho da arvore direita'},
  coelho:{screen:'garden',x:68,y:526,facing:1,label:'trilha inferior do gramado',rabbit:true},
  tartaruga:{screen:'garden',x:65,y:497,facing:1,label:'trilha central do gramado',cycle:'turtle'}
};
// O sapo e o patinho so cruzam a faixa proxima da agua, nunca a area inteira do jardim.
const VISITOR_LOCAL_ZONES={sapo:{left:493,right:724},patinho:{left:520,right:724}};
const gardenAnimals=['sapo','abelha','borboleta'];
const homeAnimals=['abelha','formiga'];
// Grade de vinte células de 72 × 56, com fundo transparente.
const FAUNA_SHEETS={"abelha":"../assets/abelha.png","borboleta":"../assets/borboleta_3.png","caracol":"../assets/caracol.png","coelho":"../assets/coelho.png","formiga":"../assets/formiga.png","gatinho":"../assets/gatinho.png","gatinho_reacao":"../assets/gatinho_reacao.png","joaninha":"../assets/joaninha.png","joao_de_barro":"../assets/joao_de_barro.png","libelula":"../assets/libelula_voando.png","patinho":"../assets/patinho.png","sapo":"../assets/sapo.png","sapo_salto":"../assets/sapo_salto.png","tartaruga":"../assets/tartaruga.png","vagalume":"../assets/vagalume.png"};
const FAUNA_REACTIONS={"caracol":"../assets/reacao_caracol.png","formiga":"../assets/reacao_formiga.png","joaninha":"../assets/reacao_joaninha.png","joao_de_barro":"../assets/reacao_joao_de_barro.png","libelula":"../assets/reacao_libelula.png","patinho":"../assets/reacao_patinho.png","tartaruga":"../assets/reacao_tartaruga.png"};
// V41-R7 — Coelhinho A: cinco ciclos aprovados, 6 quadros de 72x56, PNG em base64 offline.
const RABBIT_ACTION_SHEETS={"idle":"../assets/coelho_idle.png","andar":"../assets/coelho_andar.png","saltar":"../assets/coelho_saltar.png","descansar":"../assets/coelho_descansar.png","feliz":"../assets/coelho_feliz.png"};
const BIRD_HOUSE={x:637,y:221,doorX:651,doorY:253,doorRx:10,doorRy:11,frontX:643,insideX:675,flightLift:8,doorScale:.43,shrinkUntil:.61};
const BIRD_HOUSE_SRC='../assets/casinha_joao_de_barro.png';
const BIRD_HOUSE_ACTIONS={
 joao_de_barro_entrando:'../assets/joao_de_barro_entra_na_casa.png',
 joao_de_barro_saindo:'../assets/joao_de_barro_saindo.png',
};
const FAUNA_FRAME_W=72,FAUNA_FRAME_H=56,FAUNA_FRAMES=20;
const FAUNA_ANCHORS={abelha:34,borboleta:28,vagalume:28,sapo:48,gatinho:47};
const FAUNA_FRAME_MS={abelha:95,borboleta:105,libelula:90,joaninha:100,caracol:155,
 gatinho:220,joao_de_barro:185,formiga:120,patinho:130,sapo:145,tartaruga:145};
for(const [kind,spec] of Object.entries(VISITOR_SPEC)){
 spec.anchor={x:36,y:FAUNA_ANCHORS[kind]??49};
 if(spec.scenes?.includes('garden')&&kind!=='patinho')gardenAnimals.push(kind);
 if(spec.scenes?.includes('care'))homeAnimals.push(kind);
}
function visitorArt(kind){return FAUNA_SHEETS[kind];}
function faunaFrame(v,time,reduced){
 const cadence=(FAUNA_FRAME_MS[v.kind]??v.spec.ms)*(reduced?1.6:1);
 return Math.floor(Math.max(0,time-v.started)*2/cadence)%FAUNA_FRAMES;
}
let visitors=[],lookAt=null,visitorIndex=0,visitCount=0,inspectMode=false,visitorReach=null;
function pickWindowStop(kind,spec){
 const center=VISITOR_WINDOW.x+VISITOR_WINDOW.w/2;
 const gap=kind==='beijaflor'?26:22;
 const leftMin=spec.min,leftMax=Math.min(spec.max,Math.floor(center-gap));
 const rightMin=Math.max(spec.min,Math.ceil(center+gap)),rightMax=spec.max;
 const useLeft=(Math.random()<.5&&leftMax>leftMin)||rightMax<=rightMin;
 const a=useLeft?leftMin:rightMin,b=useLeft?leftMax:rightMax;
 return Math.round(a+Math.random()*Math.max(0,b-a));
}
const HOME_ANT_SCALE=.90;
function visitorScale(kind,screen){
 const base=VISITOR_SPEC[kind].scale;
 if(kind==='abelha'&&screen==='garden')return base*1.20;
 if(kind==='formiga'&&screen==='care')return base*HOME_ANT_SCALE*(Casa.getRoom()==='sala'?.85:1);
 return base;
}
// V41-R6: voo suave da borboleta residente no Jardim.
// Caminho fechado e deterministico: mesma posicao e tangente em cada volta.
// Nao consome necessidades, nao cria intervalos e reutiliza os 20 quadros originais.
const BUTTERFLY_FLIGHT={
  points:[
    {x:57,y:332,flower:true},{x:120,y:232},{x:214,y:163},{x:377,y:147},
    {x:543,y:173},{x:676,y:192},{x:694,y:310,flower:true},{x:684,y:201},
    {x:515,y:164},{x:369,y:204},{x:289,y:259},{x:225,y:344,flower:true},
    {x:172,y:286},{x:96,y:270},
  ],
  segmentMs:2450, perchMs:4500, turnResponseMs:180,
};
function butterflyFlightPosition(elapsedMs){
  const {points,segmentMs,perchMs}=BUTTERFLY_FLIGHT;
  const count=points.length;
  const total=count*segmentMs+points.filter(point=>point.flower).length*perchMs;
  let clock=((elapsedMs%total)+total)%total;
  for(let index=0;index<count;index++){
    const b=points[index],c=points[(index+1)%count];
    const pause=b.flower?perchMs:0;
    if(clock<pause)return {x:b.x,y:b.y,perched:true};
    clock-=pause;
    if(clock>=segmentMs){clock-=segmentMs;continue;}
    const a=points[(index+count-1)%count],d=points[(index+2)%count];
    const u=clock/segmentMs,u2=u*u,u3=u2*u;
    function curve(axis){
      const m0=b.flower?0:(c[axis]-a[axis])*.43;
      const m1=c.flower?0:(d[axis]-b[axis])*.43;
      return (2*u3-3*u2+1)*b[axis]+(u3-2*u2+u)*m0+(-2*u3+3*u2)*c[axis]+(u3-u2)*m1;
    }
    return {x:curve('x'),y:curve('y'),perched:false};
  }
  return {x:points[0].x,y:points[0].y,perched:true};
}
function updateResidentButterfly(v,time,dt,reduced){
  v.phase='voar';v.visible=true;
  if(v.flightClock===undefined)v.flightClock=(time-v.started)*(reduced?.38:1);
  else v.flightClock+=Math.max(0,time-v.flightLastTime)*(reduced?.38:1);
  v.flightLastTime=time;
  const elapsed=v.flightClock;
  const p=butterflyFlightPosition(elapsed);
  v.x=p.x;v.drawY=p.y;v.laneY=p.y;
  if(p.perched){
    v.phase='pousada';v.turnScale=1;v.frame=0;return;
  }
  // A direcao deriva da trajetoria, nao de um seno diferente que vira de repente.
  const ahead=butterflyFlightPosition(elapsed+70);
  const behind=butterflyFlightPosition(elapsed-70);
  const velocityX=(ahead.x-behind.x)/.14;
  if(Math.abs(velocityX)>6)v.wantedFacing=velocityX>0?1:-1;
  if(!v.wantedFacing)v.wantedFacing=v.residentFacing;
  if(!Number.isFinite(v.facingBlend))v.facingBlend=v.residentFacing;
  const gain=1-Math.exp(-Math.max(0,Math.min(dt,90))/BUTTERFLY_FLIGHT.turnResponseMs);
  v.facingBlend+=(v.wantedFacing-v.facingBlend)*gain;
  // Virada de perfil: o corpo fica estreito antes de espelhar, sem corte brusco.
  v.turnScale=Math.max(.035,Math.min(1,Math.abs(v.facingBlend)));
  v.facing=v.facingBlend>=0?1:-1;
  v.frame=faunaFrame(v,sceneTime,reduced);
}
const RABBIT_WALK_FRAMES=6;
function rabbitWalkFrame(distance){
 return Math.floor((distance%MEADOW_WALKS.coelho.stride)/MEADOW_WALKS.coelho.stride*RABBIT_WALK_FRAMES);
}
function meadowPosition(kind,elapsed){
 const rule=MEADOW_WALKS[kind];
 const t=elapsed-rule.delay;
 const returnAt=rule.leg+rule.wait;
 const returning=t>=returnAt;
 const progress=clamp((returning?t-returnAt:t)/rule.leg,0,1);
 const r=.13;
 let travel;
 if(progress<r)travel=progress*progress/(2*r*(1-r));
 else if(progress>1-r)travel=1-(1-progress)**2/(2*r*(1-r));
 else travel=(progress-r/2)/(1-r);
 const moving=t>=0&&progress<1;
 const distance=Math.abs(rule.to-rule.from)*(returning?1+travel:travel);
 return {x:v41Mix(rule.from,rule.to,returning?1-travel:travel),moving,distance,
  facing:(returning?-1:1)*Math.sign(rule.to-rule.from)};
}
function updateMeadowWalker(v,elapsed,time,reduced){
 const pose=meadowPosition(v.kind,elapsed),rule=MEADOW_WALKS[v.kind];
 v.x=pose.x;v.y=v.laneY=v.residentY;v.drawY=v.residentY;
 v.facing=pose.facing;
 v.sideArrival=true;
 const spriteHalf=FAUNA_FRAME_W*v.scale/2;
 v.visible=pose.x+spriteHalf>0&&pose.x-spriteHalf<W;
 v.walking=pose.moving;
 v.phase=pose.moving?'caminhar':'repouso';
 if(v.residentRabbit){
  v.rabbitAction=pose.moving?'andar':'idle';
  v.rabbitFrame=pose.moving?rabbitWalkFrame(pose.distance):Math.floor(time/(reduced?510:310))%RABBIT_WALK_FRAMES;
  v.frame=v.rabbitFrame;
 }else{
  v.frame=pose.moving?Math.floor((pose.distance%rule.stride)/rule.stride*FAUNA_FRAMES):0;
 }
 v.near=Math.abs(v.x-pet.x)<145;
}
function newVisitor(kind,screen=currentScreen){
 const spec=VISITOR_SPEC[kind];
 if(!spec)return null;
 const fromLeft=Math.random()<.5;
 const clipped=screen==='care'&&(spec.window||kind==='abelha');
  const zone=VISITOR_LOCAL_ZONES[kind];
  const left=zone?.left??(clipped?VISITOR_WINDOW.x:0),right=zone?.right??(clipped?VISITOR_WINDOW.x+VISITOR_WINDOW.w:W);
 const renderScale=visitorScale(kind,screen);
 const margin=72*renderScale/2+8;
 const min=kind==='abelha'&&!clipped?400:spec.min;
 const max=kind==='abelha'&&!clipped?491:spec.max;
 const stop=clipped&&(kind==='beijaflor'||kind==='abelha')?pickWindowStop(kind,spec):Math.round(min+Math.random()*(max-min));
 const y=clipped&&kind==='beijaflor'?146:clipped&&kind==='abelha'?145:kind==='abelha'&&!clipped?53:spec.y;
 const x0=fromLeft?left-margin:right+margin;
 return {id:++visitorIndex,kind,spec,screen,clipped,left,right,fromLeft,x0,
  x1:fromLeft?right+margin:left-margin,min,max,stop,y,started:sceneTime,duration:spec.duration,
  x:x0,drawY:y,laneY:y,scale:renderScale,progress:0,visible:false,phase:'entrar',
  facing:fromLeft?1:-1,near:false,greeted:false,nextReaction:0,reactionAt:-Infinity,frame:0,separation:0,lift:0};
}
function spawnResidentVisitors(screen,onlyKind){
 for(const [kind,loc] of Object.entries(FIXED_VISITORS)){
  if(loc.screen!==screen||(onlyKind&&kind!==onlyKind)||!faunaPresent(kind))continue;
  const v=newVisitor(kind,screen);
  if(loc.landing){
   Object.assign(v,{stationary:false,residentLanding:true,residentX:loc.x,residentY:loc.y,residentFacing:loc.facing,
    x:loc.startX??-72,x0:loc.startX??-72,x1:loc.x,stop:loc.x,y:loc.startY??loc.y,laneY:loc.y,drawY:loc.y,
    left:0,right:W,phase:'entrar',visible:true,progress:0,duration:Infinity,fromLeft:true,facing:1,
    landingStart:sceneTime,landingDuration:1550,nextIdleReaction:sceneTime+5200+Math.random()*2600});
  }else{
   Object.assign(v,{stationary:true,residentX:loc.x,residentY:loc.y,residentFacing:loc.facing,
    residentWalk:!!loc.wander,residentCycle:loc.cycle||null,cycleStart:sceneTime,residentFlight:!!loc.flight,residentFlutter:!!loc.flutter,residentPond:!!loc.pond,residentRabbit:!!loc.rabbit,
    walkMin:loc.minX??loc.x,walkMax:loc.maxX??loc.x,walkSpeed:loc.speed??0,
    walkStart:(loc.x-(loc.minX??loc.x)),walkTurnPause:loc.turnPause??1300,walkDistance:0,walking:false,
    x:loc.x,x0:loc.x,x1:loc.x,stop:loc.x,y:loc.y,laneY:loc.y,drawY:loc.y,
    left:0,right:W,phase:'repouso',visible:true,progress:.5,
    duration:Infinity,fromLeft:false,facing:loc.facing,
    nextIdleReaction:sceneTime+2700+Math.random()*2300});
  }
  if(screen==='garden')v.visible=false;
  visitors.push(v);
 }
}
function petAvailableForVisitor(){
 return pet.act==='idle'&&!task&&state.healthSystem.status==='healthy'&&!transition;
}
function visitorHappiness(v,amount,now){
 if(v.happinessAwarded||document.hidden||gameSuspended)return 0;
 const fauna=state.fauna,day=localDay(now);
 if(day>fauna.rewardDay){fauna.rewardDay=day;fauna.dailyHappiness=0;}
 if(now<(fauna.speciesRewardAt[v.kind]??-Infinity)+FRIEND_SPECIES_COOLDOWN)return 0;
 const gained=Math.min(amount,FRIEND_DAILY_LIMIT-fauna.dailyHappiness,100-state.stats.felicidade);
 if(gained<=0)return 0;
 v.happinessAwarded=true;
 fauna.dailyHappiness+=gained;
 fauna.speciesRewardAt[v.kind]=now;
 return gained;
}
function watchVisitor(v,manual=false){
 if(!v||transition||!v.visible)return;
 if(manual&&PersonalityMachine.automatic)PersonalityMachine.interrupt('animal-touch');
 const reactionReady=sceneTime>=(manual?(v.nextManualReaction??0):v.nextReaction);
 const friend=manual&&reactionReady?FRIEND_REACTIONS[v.kind]:null;
 if(reactionReady){
  v.reactionAt=sceneTime;
  if(manual){
   v.manualPoseAt=sceneTime;
   if(v.kind==='gatinho')v.started=sceneTime;
  }
  v.nextReaction=sceneTime+(manual?1250:5200);
  if(manual)v.nextManualReaction=sceneTime+1250;
  if(manual&&v.kind==='passarinho'&&v.phase==='entrar')v.perchCallPending=true;
  else if(v.spec.sound&&!v.perchCallPending){
   if(manual&&v.kind==='passarinho'&&v.phase==='repouso')v.singAt=sceneTime;
   SOUND.play(v.spec.sound);
  }
 }
 if(!petAvailableForVisitor())return;
 if(!manual&&!reactionReady)return;
 const now=GAME_CLOCK.wallNow();
 lookAt={id:v.id,kind:v.kind,x:v.x,y:v.drawY,until:now+(manual?3400:2400)};
 const playful=v.kind==='coelho'||v.kind==='borboleta';
 if(!playAnim(friend?.anim||(playful?'feliz':'curioso'),false))return;
 if(manual)PersonalityMachine.onVisitor(true,v.kind);
 lastUserAction=now;
 if(friend&&v.kind==='sapo'&&v.phase==='repouso'&&!reducedMotion.matches)v.pondHopAt=sceneTime;
 const happiness=friend?visitorHappiness(v,friend.happiness,now):0;
 if(happiness)applyStats({felicidade:happiness});
 setFeedback(v.perchCallPending&&friend?'🐦 O slime está acompanhando o passarinho.':friend?.text||'👀 O slime viu '+v.spec.label+'!');
}
function observeScene(x,y,label){lookAt={id:null,x,y,kind:'cenario',until:GAME_CLOCK.wallNow()+3400};SOUND.play('curioso');playAnim('curioso',false);setFeedback('👀 O slime está olhando para '+label+'!');}
function visitPose(v,time,dt,paused){
 const moving=v.phase!=='repouso';
 const reacting=time-v.reactionAt<850;
 let lift=0,side=0;
 if(!paused){
  const angle=time/260+v.id;
  switch(v.spec.mode){
   case 'hop':{
    if(v.stationary){lift=reacting?-Math.sin((time-v.reactionAt)/850*Math.PI)*Math.min(4,v.spec.hop):0;break;}
    const paired=time-(v.pairedHopAt??-Infinity);
    if(paired<8*FRAME_MS)lift=-Math.sin(paired/(8*FRAME_MS)*Math.PI)*v.spec.hop;
    else if(reacting)lift=-Math.sin((time-v.reactionAt)/850*Math.PI)*v.spec.hop;
    else if(moving)lift=-Math.max(0,Math.sin(time/(v.kind==='sapo'?173:129)))*v.spec.hop;
    break;
   }
   case 'perch':lift=moving?-19+4*Math.sin(angle):0;side=reacting?Math.sin(angle)*3:0;break;
   case 'hover':{const clip=v.clipped;lift=Math.sin(time/(clip?150:117)+v.id)*(clip?3:4);side=reacting?-v.facing*(clip?5:8)*Math.sin(clamp((time-v.reactionAt)/850,0,1)*Math.PI):(clip?Math.sin(time/430+v.id)*2:0);break;}
   case 'arc':{const clip=v.clipped;const floatTime=time/(clip?455:510)+v.id;lift=(clip?2.5:3.5)*Math.cos(floatTime);side=reacting?Math.sin(floatTime*1.25)*(clip?3.5:5):Math.sin(floatTime)*(clip?1.5:2.5);break;}
   case 'walk':side=moving?Math.sin(angle)*2:0;break;
   case 'creep':break;
   case 'dart':{const glide=time/420+v.id;lift=Math.sin(glide)*4;side=Math.sin(time/530+v.id)*(reacting?6:2.5);break;}
   case 'paddle':lift=moving?Math.sin(time/290+v.id)*.6:0;side=reacting?Math.sin(angle)*1.5:0;break;
   case 'flutter':{const floatTime=time/415+v.id;lift=5*Math.sin(floatTime);side=reacting?Math.sin(floatTime)*8:Math.sin(floatTime)*3.5;break;}
   case 'glow':lift=6*Math.sin(angle*.7);side=reacting?Math.sin(angle)*7:0;break;
  }
 }
 v.frame=faunaFrame(v,time,paused);
 v.lift=paused?0:v.lift+(lift-v.lift)*clamp(dt/75,0,1);
 v.drawY=v.laneY+v.lift;
 return side;
}
// V41: independent scene-resident lifecycles. These animals never become lottery visitors.
// sceneTime progresses at 0.90x real elapsed time; each cycle period below is wall-clock aligned.
function v41Mix(a,b,p){return a+(b-a)*clamp(p,0,1);}
const LADYBUG_SHRUB={x:548,y:319};
function ladybugWingFrame(air,duration,transition){
 if(air<transition)return Math.floor(air/transition*10);
 if(duration-air<transition)return 10+Math.floor((air-duration+transition)/transition*10);
 return 6+Math.floor(air/65)%10;
}
function updateFlowerFlight(v,elapsed,reduced){
 const {flight,hover,flowerPause,shrubRest,transition}=LADYBUG_TIMER;
 const leg=(flight-hover)/2;
 const departure=hover+flowerPause,arrival=departure+leg,returnAt=arrival+shrubRest;
 v.x=v.residentX;v.drawY=v.laneY=v.residentY;v.facing=v.residentFacing;
 v.phase='repouso';v.frame=0;v.visible=true;
 if(reduced||elapsed<0||elapsed>=returnAt+leg)return;
 if(elapsed<hover){
  v.phase='pairando';
  v.drawY-=31*Math.sin(Math.PI*elapsed/hover)**2;
  v.frame=ladybugWingFrame(elapsed,hover,transition);
  return;
 }
 if(elapsed<departure)return;
 if(elapsed>=arrival&&elapsed<returnAt){
  v.x=LADYBUG_SHRUB.x;v.drawY=v.laneY=LADYBUG_SHRUB.y;
  v.phase='no_arbusto';return;
 }
 const outbound=elapsed<arrival;
 const air=elapsed-(outbound?departure:returnAt);
 const progress=air/leg,travel=ease(outbound?progress:1-progress);
 v.x=v41Mix(v.residentX,LADYBUG_SHRUB.x,travel);
 v.laneY=v41Mix(v.residentY,LADYBUG_SHRUB.y,travel);
 v.drawY=v.laneY-42*Math.sin(Math.PI*progress)**2;
 v.phase='voar';v.facing=outbound?1:-1;
 v.frame=ladybugWingFrame(air,leg,transition);
}
const DRAGONFLY_FLIGHT={
 minMs:310,maxMs:700,speedFactor:.9,pauseMin:45,pauseMax:170,wingFrameMs:3.1,minHop:72,
 zones:[
  [55,189,94,151],[183,334,91,152],[318,506,92,142],[496,675,91,149],
  [76,323,168,212],[356,584,157,207],[584,675,164,217],
 ],
};
function pickDragonflyTarget(leg,random){
 const {zones,minHop}=DRAGONFLY_FLIGHT;
 const choices=zones.map(([left,right,top,bottom],zone)=>({
  zone,x:v41Mix(left,right,random()),y:v41Mix(top,bottom,random()),
 })).filter(target=>target.zone!==leg.zone&&Math.hypot(target.x-leg.x,target.y-leg.y)>=minHop);
 return choices[Math.floor(random()*choices.length)];
}
function updateDragonfly(v,time,reduced,random=Math.random){
 const rule=DRAGONFLY_FLIGHT;
 v.visible=true;
 v.phase='repouso';
 const delta=time-(v.dartLastTime??time);
 v.dartLastTime=time;
 v.dartClock=(v.dartClock??0)+delta*(reduced?.32:1);
 time=v.dartClock;
 if(!v.dart)v.dart={end:time,x:v.residentX,y:v.residentY};
 let leg=v.dart;
 while(time>=leg.end){
  const x=leg.x,y=leg.y;
  const target=pickDragonflyTarget(leg,random);
  const wait=v41Mix(rule.pauseMin,rule.pauseMax,random());
  const duration=v41Mix(rule.minMs,rule.maxMs,random())/rule.speedFactor;
  const start=leg.end+wait;
  leg=v.dart={fromX:x,fromY:y,...target,start,end:start+duration};
 }
 const p=clamp((time-leg.start)/(leg.end-leg.start),0,1);
 const travel=ease(p);
 v.x=v41Mix(leg.fromX,leg.x,travel);
 v.drawY=v.laneY=v41Mix(leg.fromY,leg.y,travel)-(reduced?3:14)*Math.sin(p*Math.PI);
 v.facing=leg.x>=leg.fromX?1:-1;
 v.phase=p===0?'repouso':'voar';
 v.frame=Math.floor(time/rule.wingFrameMs)%FAUNA_FRAMES;
}
const CAT_SHELF={sala:{y:154,bookX:550},quarto:{y:153,bookX:548},cozinha:{y:151,bookX:543}};
const CAT_WALK_SRC='../assets/gatinho_caminhando.png',CAT_STRIDE_PX=19;
const CAT_COAT={
 sala:{shadow:[70,59,69],mid:[140,130,139],highlight:[223,213,214]},
 quarto:{shadow:[83,60,45],highlight:[255,240,208]},
 cozinha:{shadow:[88,50,40],mid:[170,104,68],highlight:[242,195,141]},
};
const catCoatSheets=new WeakMap();
function catCoatSheet(image,room){
 let sheets=catCoatSheets.get(image);
 if(!sheets){sheets=new Map();catCoatSheets.set(image,sheets);}
 if(sheets.has(room))return sheets.get(room);
 const sheet=document.createElement('canvas');
 sheet.width=image.width;sheet.height=image.height;
 const ctx=sheet.getContext('2d');
 ctx.drawImage(image,0,0);
 const pixels=ctx.getImageData(0,0,sheet.width,sheet.height);
 const {data}=pixels;
 const {shadow,mid,highlight}=CAT_COAT[room];
 for(let i=0;i<data.length;i+=4){
  const r=data[i],g=data[i+1],b=data[i+2];
  if(!data[i+3]||g<b)continue; // Preserve os detalhes rosados do focinho e das orelhas.
  const light=clamp((.2126*r+.7152*g+.0722*b-48)/185,0,1);
  for(let channel=0;channel<3;channel++){
   const middle=mid?.[channel]??(shadow[channel]+highlight[channel])/2;
   data[i+channel]=light<.5
    ?shadow[channel]+(middle-shadow[channel])*light*2
    :middle+(highlight[channel]-middle)*(light*2-1);
  }
 }
 ctx.putImageData(pixels,0,0);
 sheets.set(room,sheet);
 return sheet;
}
function updateCat(v,time,reduced){
 const room=Casa.getRoom();
 const shelf=CAT_SHELF[room];
 const elapsed=Casa.elapsed()/.90%CAT_SHELF_CYCLE_MS;
 const walking=elapsed<CAT_SHELF_WALK_MS;
 const leg=elapsed/(CAT_SHELF_WALK_MS/2);
 const returning=leg>=1;
 const progress=ease(leg%1);
 const distance=progress*(v.residentX-shelf.bookX);
 v.x=walking?(returning?shelf.bookX+distance:v.residentX-distance):v.residentX;
 v.drawY=v.laneY=shelf.y*H/360;
 v.facing=walking&&returning?-v.residentFacing:v.residentFacing;
 v.walking=walking;
 v.visible=true;
 const strideFrame=Math.floor(distance/CAT_STRIDE_PX*FAUNA_FRAMES);
 v.frame=walking?(reduced?strideFrame-strideFrame%2:strideFrame)%FAUNA_FRAMES:faunaFrame(v,time,reduced);
}
const FROG_WATER={puddle:{x:618,y:403},pond:{x:665,y:398}};
const FROG_SPLASH={
 frames:20,width:96,height:68,anchorY:53,scale:1.24,
 layers:[
  {key:'ondas',src:'../assets/sapo_agua_ondas.png',until:1,alpha:.85},
  {key:'coroa',src:'../assets/sapo_agua_coroa.png',until:.45,alpha:1},
  {key:'gotas',src:'../assets/sapo_agua_gotas.png',until:1,alpha:1},
 ],
};
const FROG_ACTIONS={
 sapo_lingua:'../assets/sapo_lingua.png',
 sapo_mergulho:'../assets/sapo_mergulho_lago.png',
 sapo_salto_da_poca:'../assets/sapo_surgindo_poca.png',
 sapo_salto_ida:'../assets/sapo_salto_ida.png',
 sapo_salto_volta:'../assets/sapo_salto_volta.png',
};
function updatePondFrog(v,time,reduced,elapsed=time-v.started){
 const r=FROG_TIMER;
 let t=elapsed;
 v.x=v.residentX;v.drawY=v.laneY=v.residentY;v.facing=v.residentFacing;
 v.visible=true;v.phase='repouso';v.activity=null;v.frogJumpFrame=null;v.splash=0;v.puddleClip=false;v.puddleSplash=null;v.opacity=1;
 v.frame=reduced?0:faunaFrame(v,time,false);
 const phase=FROG_PHASES.find(([,duration])=>{
  if(t<duration)return true;
  t-=duration;return false;
 });
 if(t>=0&&phase&&phase[0]!=='repouso'){
  const [action,duration]=phase;
  v.phase=action;
  if(action==='na_poca'){
   v.visible=false;
   const impact=r.dive-r.diveContactMs+t;
   if(impact<r.splash)v.puddleSplash=impact/r.splash;
   return;
  }
  const p=t/duration;
  if(action==='sapo_mergulho'){
   const water=FROG_WATER.puddle;
   const contact=r.diveContactMs/duration;
   const sinking=clamp((p-contact)/(1-contact),0,1);
   const jump=p<contact&&!reduced?24*Math.sin(Math.PI*p/contact):0;
   v.x=water.x;v.laneY=water.y;
   v.drawY=water.y-jump+(v.spec.anchor.y+2)*v.scale*ease(sinking);
   v.puddleClip=t>=r.diveContactMs;
   const impact=t-r.diveContactMs;
   if(impact>=0&&impact<r.splash)v.puddleSplash=impact/r.splash;
   v.activity=action;
   v.frame=wildlifeFrame(p);
   return;
  }
  if(action==='sapo_salto_da_poca'){
   const water=FROG_WATER.puddle;
   const jump=clamp((p-.48)/.52,0,1);
   const surfacing=ease(p/.37);
   v.x=water.x;v.laneY=water.y;
   v.drawY=v.laneY+47*(1-surfacing)-(reduced?8:33)*Math.sin(Math.PI*jump);
   v.facing=-1;
   v.puddleClip=p<.48;
   v.visible=p>=1/FAUNA_FRAMES;
   if(p>=.18&&p<.67)v.puddleSplash=(p-.18)/.49;
  }
  if(action==='sapo_salto_ida'||action==='sapo_salto_volta'||action==='na_lagoa'){
   const towards=action==='sapo_salto_ida',inPond=action==='na_lagoa';
   const travel=inPond?1:ease(towards?p:1-p);
   const shore=FROG_WATER.puddle;
   v.x=v41Mix(shore.x,FROG_WATER.pond.x,travel);
   v.laneY=v41Mix(shore.y,FROG_WATER.pond.y,travel);
   v.drawY=v.laneY-(inPond?0:Math.sin(p*Math.PI)*(reduced?9:35));
   v.facing=towards||inPond?1:-1;
   if(inPond)return;
  }
  v.activity=action;v.frame=wildlifeFrame(p);return;
 }
 if(reduced)return;
 const manual=(time-(v.pondHopAt??-Infinity))/r.manualHop;
 if(manual>=0&&manual<1){
  v.drawY-=Math.sin(manual*Math.PI)*21;
  v.frogJumpFrame=wildlifeFrame(manual);
  v.splash=clamp((manual-.79)/.21,0,1);
 }
}
function wildlifeFrame(progress){return Math.min(FAUNA_FRAMES-1,Math.floor(progress*FAUNA_FRAMES));}
function updateBirdHouse(v,time,elapsed,reduced){
 const rule=BIRD_HOUSE_TIMER;
 const exitAt=rule.enter+rule.inside,perchAt=exitAt+rule.exit;
 const t=elapsed;
 v.x=v.residentX;v.drawY=v.laneY=v.residentY;v.scale=v.spec.scale;
 v.facing=v.residentFacing;
 v.frame=reduced?0:faunaFrame(v,time,false);
 v.visible=true;v.phase='repouso';v.activity=null;v.birdHouseClip=false;v.opacity=1;
 if(t<0)return;
 if(t>=perchAt){
  if(!reduced)v.facing=-v.residentFacing;
  return;
 }
 if(t>=rule.enter&&t<exitAt){
  v.visible=false;v.phase='na_casinha';return;
 }
 const entering=t<rule.enter;
 const progress=entering?t/rule.enter:(t-exitAt)/rule.exit;
 const path=ease(entering?progress:1-progress);
 v.x=v41Mix(v.residentX,BIRD_HOUSE.insideX,path);
 const shrink=ease(path/BIRD_HOUSE.shrinkUntil);
 v.scale=v.spec.scale*v41Mix(1,BIRD_HOUSE.doorScale,shrink);
 const doorAnchorY=BIRD_HOUSE.doorY+15*v.scale;
 v.drawY=v41Mix(v.residentY,doorAnchorY,path)-Math.sin(path*Math.PI)*(reduced?2:BIRD_HOUSE.flightLift);
 v.opacity=1-ease((path-.78)/.22);
 v.facing=entering?1:-1;
 v.phase=entering?'entrando_na_casinha':'saindo_da_casinha';
 v.activity=entering?'joao_de_barro_entrando':'joao_de_barro_saindo';
 v.frame=wildlifeFrame(progress);
 v.birdHouseClip=true;
}
function reactToResidentIdle(v){
 if(sceneTime<v.nextIdleReaction)return;
 v.reactionAt=sceneTime;v.nextIdleReaction=sceneTime+9700+Math.random()*4500;
 if(v.spec.sound&&Math.random()<.4)SOUND.play(v.spec.sound);
 if(GAME_CLOCK.wallNow()-lastUserAction>5000&&petAvailableForVisitor()&&Math.random()<.6)watchVisitor(v);
}
function updateVisitors(dt){
 if(currentScreen==='evolve'){visitors=[];return;}
 if(transition)return; // preservar moradores durante a passagem Casa/Jardim
 const garden=currentScreen==='garden';
 const turn=garden?gardenFaunaTurn(gardenArrivalTime()):homeFaunaTurn(Casa.elapsed()/.90);
 const turnKey=turn&&(garden?turn.round+':'+turn.index:Casa.getRoom()+':'+turn.round);
 const guest=turn?.kind;
 if((guest==='abelha'||guest==='patinho')&&faunaPresent(guest)&&assets.visitors[guest]&&
    turn.age<VISITOR_SPEC[guest].duration&&!visitors.some(v=>v.kind===guest&&v.turnKey===turnKey)){
  const v=newVisitor(guest);
  v.turnKey=turnKey;
  if(!garden)v.homeRoom=Casa.getRoom();
  if(guest==='patinho'){
   const edge=W+FAUNA_FRAME_W*v.scale/2+12;
   Object.assign(v,{fromLeft:false,x0:edge,x1:edge,x:edge,stop:616+Math.random()*26,
    visible:false,facing:-1,y:GARDEN_DUCK_Y,laneY:GARDEN_DUCK_Y,drawY:GARDEN_DUCK_Y});
  }
  visitors.push(v);visitCount++;
 }
 const reduced=reducedMotion?.matches;
 const ground=currentGround();
 for(let i=visitors.length-1;i>=0;i--){
  const v=visitors[i];
  if(v.screen!==currentScreen){visitors.splice(i,1);continue;}
  if(v.homeRoom&&v.homeRoom!==Casa.getRoom()){v.visible=false;continue;}
  if(v.kind==='gatinho'){updateCat(v,sceneTime,reduced);continue;}
  if(v.kind!==guest||!faunaPresent(v.kind)){
   if(!FIXED_VISITORS[v.kind]){visitors.splice(i,1);continue;}
   v.visible=false;v.phase='fora_do_turno';v.puddleSplash=null;continue;
  }
  if(!FIXED_VISITORS[v.kind]&&v.turnKey!==turnKey){visitors.splice(i,1);continue;}
  const age=turn.age;
  v.crowdAlpha=ease(Math.min(age,turn.duration-age)/450);
  if(v.residentRabbit||v.residentCycle){
   const secondLeg=v.residentCycle&&turn.round%2?turn.duration:0;
   updateMeadowWalker(v,age+secondLeg,sceneTime,reduced);continue;
  }
  if(v.kind==='libelula'){
   updateDragonfly(v,(turn.round*turn.duration+age)*.90,reduced);continue;
  }
  if(v.kind==='joao_de_barro'){
   updateBirdHouse(v,sceneTime,age+turn.phase,reduced);
   if(v.phase==='repouso')reactToResidentIdle(v);
   continue;
  }
  if(v.residentPond){updatePondFrog(v,sceneTime,reduced,age+turn.phase);continue;}
  if(v.kind==='formiga')v.scale=visitorScale(v.kind,v.screen);
  if(v.residentLanding&&!v.stationary){
   const lt=clamp((sceneTime-v.landingStart)/v.landingDuration,0,1);
   v.phase=lt<1?'entrar':'repouso';
   v.progress=lt;
   const eased=ease(lt);
   v.x=v.x0+(v.stop-v.x0)*eased;
   v.laneY=v.residentY+(1-eased)*10;
   v.drawY=v.residentY-18*(1-eased)+Math.sin(sceneTime/180+v.id)*2*(1-lt);
   visitPose(v,sceneTime,dt,reduced);
   v.visible=true;
   v.facing=1;
   if(lt>=1){
    v.stationary=true;v.phase='repouso';v.x=v.residentX;v.drawY=v.residentY;v.laneY=v.residentY;
    v.nextIdleReaction=sceneTime+6500+Math.random()*3500;
   }
   continue;
  }
  if(v.residentFlight){updateFlowerFlight(v,age,reduced);continue;}
  if(v.residentFlutter){
   v.flightClock??=0;
   const flightTime=(turn.round*turn.duration+age)*.90;
   v.flightLastTime??=flightTime;
   updateResidentButterfly(v,flightTime,dt,reduced);
   continue;
  }
  if(v.stationary){
   // Animacao no proprio lugar, sem atravessar o ambiente.
   v.phase='repouso';v.y=v.residentY;v.laneY=v.residentY;
   if(v.residentWalk){
    // Movement follows the ground: 10-step cadence is tied to actual distance.
    // The turn pause removes the abrupt reversal of V39.
    const span=Math.max(1,v.walkMax-v.walkMin);
    const speed=Math.max(.02,v.walkSpeed);
    const leg=span/speed*1000,hold=v.walkTurnPause;
    const clock=(sceneTime-v.started)+(v.walkStart/speed*1000);
    const cycle=2*(leg+hold),phase=((clock%cycle)+cycle)%cycle;
    const forward=phase<leg,atRight=phase>=leg&&phase<leg+hold;
    const backward=phase>=leg+hold&&phase<2*leg+hold;
    v.walking=forward||backward;
    if(forward){v.x=v.walkMin+phase*speed/1000;v.facing=1;}
    else if(atRight){v.x=v.walkMax;v.facing=phase<leg+hold*.5?1:-1;}
    else if(backward){v.x=v.walkMax-(phase-leg-hold)*speed/1000;v.facing=-1;}
    else {v.x=v.walkMin;v.facing=phase<2*leg+hold*1.5?-1:1;}
    if(v.kind==='tartaruga'){
     const q=(v.x-v.walkMin)/span;
     // The path traverses the lawn, not a straight floating horizontal line.
     v.residentY=425+23*q+2*Math.sin(q*Math.PI*2);
    }
    if(v.walking)v.walkDistance+=speed*dt*.90/1000;
   }else{v.x=v.residentX;v.facing=v.residentFacing;v.walking=false;}
   v.separation=0;v.visible=true;v.progress=.5;
   visitPose(v,sceneTime,dt,reduced);
   if(v.kind==='tartaruga'){
    v.frame=v.walking?Math.floor(v.walkDistance/.29)%FAUNA_FRAMES:0;
    v.drawY=Math.round(v.residentY+(v.walking?Math.sin(v.walkDistance*3.1)*.45:0));
   }else v.drawY=v.residentY;
   if(v.kind!=='gatinho')reactToResidentIdle(v);
   continue;
  }
  if(age>=v.duration*1.02){visitors.splice(i,1);continue;}
  const t=clamp(age/v.duration,0,1);
  v.progress=t;
  v.sideArrival=currentScreen==='garden';
  const enter=t<.32,rest=t>=.32&&t<.64;
  v.phase=enter?'entrar':rest?'repouso':'sair';
  if(rest&&v.perchCallPending){
   v.perchCallPending=false;v.reactionAt=v.singAt=sceneTime;
   v.nextReaction=Math.max(v.nextReaction,sceneTime+5200);
   SOUND.play(v.spec.sound);
  }
  const base=enter?v.x0+(v.stop-v.x0)*ease(t/.32):
   rest?v.stop:v.stop+(v.x1-v.stop)*ease((t-.64)/.36);
  const previousX=v.x;
  const groundAnimal=v.spec.mode==='hop'||v.spec.mode==='walk'||v.spec.mode==='creep';
  // Approach the edge of the pet's space at rest. Use a different depth lane when passing it.
  const close=Math.abs(base-pet.x)<115;
  const lane=groundAnimal&&close?Math.max(v.y,ground+24):v.y;
  v.laneY+=(lane-v.laneY)*clamp(dt/210,0,1);
  const another=visitors.find(other=>other!==v&&other.id<v.id&&other.visible&&Math.abs(other.drawY-v.laneY)<32);
  let separation=0;
  if(rest&&groundAnimal&&Math.abs(base-pet.x)<95)separation=(base<pet.x?-1:1)*(95-Math.abs(base-pet.x));
  if(rest&&another&&Math.abs(base-another.x)<58)separation+=(base<another.x?-1:1)*(58-Math.abs(base-another.x));
  v.separation+=(separation-v.separation)*clamp(dt/250,0,1);
  const side=visitPose(v,sceneTime,dt,reduced);
  const edgeFade=v.spec.scenes?clamp(Math.min(t,1-t)/(v.kind==='patinho'?.22:.12),0,1):1;
  const position=base+(v.separation+side)*edgeFade;
  v.x=rest?clamp(position,v.left+v.spec.rx,v.right-v.spec.rx):position;
  if(v.kind==='patinho')v.facing=enter?-1:1;
  else if(!(v.kind==='coelho'&&rest)&&Math.abs(v.x-previousX)>1)v.facing=v.x>previousX?1:-1;
  v.visible=v.x+v.spec.rx>=v.left&&v.x-v.spec.rx<=v.right;
  const inView=v.clipped||v.spec.mode==='glow'||Math.abs(v.drawY-(ground-74))<155;
  const near=v.visible&&Math.abs(v.x-pet.x)<153&&inView;
  if(near&&!v.greeted&&GAME_CLOCK.wallNow()-lastUserAction>2200&&petAvailableForVisitor()){
   v.greeted=true;watchVisitor(v);
  }
  v.near=near;
 }
 if(lookAt&&(GAME_CLOCK.wallNow()>lookAt.until||(lookAt.id!==null&&!visitors.some(v=>v.id===lookAt.id&&v.visible))))lookAt=null;
}
const GARDEN_PROPS={
 gardenMushrooms:{src:'../assets/jardim_cogumelos.png',spots:[[27,506],[367,538],[696,533]]},
 gardenLog:{src:'../assets/jardim_tronco.png',spots:[[219,536]]},
 gardenRedMushroom:{src:'../assets/jardim_cogumelo_vermelho_duplo.png',spots:[[115,537]]},
};
function drawGardenProps(ctx){
 for(const [key,{spots}] of Object.entries(GARDEN_PROPS)){
  const sprite=assets[key];
  if(!sprite)continue;
  for(const [x,y] of spots)ctx.drawImage(sprite,x-Math.floor(sprite.width/2),y-sprite.height);
 }
}
const GARDEN_FLOWERS={
 src:'../assets/jardim_flores_pequenas.png',frameMs:115,
 spots:[[29,470,2],[141,472,0],[295,501,1],[503,474,0],[654,484,2],[45,538,1],[585,537,0]],
};
function drawGardenFlowers(ctx){
 const sprite=assets.gardenFlowers;
 if(!sprite)return;
 const reduced=reducedMotion.matches;
 const tick=Math.floor(sceneryTime()/GARDEN_FLOWERS.frameMs);
 for(const [i,[x,y,row]] of GARDEN_FLOWERS.spots.entries()){
  const frame=reduced?0:(tick+i*3)%FAUNA_FRAMES;
  ctx.drawImage(sprite,frame*FAUNA_FRAME_W,row*FAUNA_FRAME_H,FAUNA_FRAME_W,FAUNA_FRAME_H,
   x-36,y-49,FAUNA_FRAME_W,FAUNA_FRAME_H);
 }
}
const WIND_GRASS_SRC='../assets/grama_jardim_padrao.png';
const WIND_GRASS_PLACES=[
 [20,388],[55,437],[77,421],[104,397],[117,421],[151,406],[186,412],[202,442],
 [247,424],[267,371],[294,424],[315,390],[358,422],[389,388],[428,415],[473,439],
 [491,394],[519,432],[543,442],[565,427],[616,364],[650,434],[677,438],[701,424],
 [19,474],[53,487],[86,468],[112,506],[140,488],[166,522],[195,476],[219,501],
 [248,480],[273,523],[291,500],[323,476],[347,512],[373,489],[402,529],[430,502],
 [458,474],[483,520],[509,491],[536,507],[560,476],[591,525],[617,492],[641,510],
 [669,479],[700,504],[710,529],
];
const WIND_GRASS_FRAME_MS=105;
function drawWindGrass(ctx){
 const img=assets.windGrass;
 if(!img)return;
 const tick=reducedMotion.matches?0:Math.floor(sceneryTime()/WIND_GRASS_FRAME_MS);
 for(const [i,[x,y]] of WIND_GRASS_PLACES.entries()){
  const frame=reducedMotion.matches?0:(tick+i*7)%FAUNA_FRAMES;
  ctx.drawImage(img,frame*FAUNA_FRAME_W,0,FAUNA_FRAME_W,FAUNA_FRAME_H,x-36,y-49,FAUNA_FRAME_W,FAUNA_FRAME_H);
 }
}
function drawFrogPuddle(){
 const {x,y}=FROG_WATER.puddle;
 ctx.save();
 const frog=visitors.find(v=>v.kind==='sapo');
 const splash=frog?.puddleSplash;
 if(splash!=null){
  const {width,height,anchorY,frames,layers}=FROG_SPLASH;
  const reduced=reducedMotion.matches;
  const scale=reduced?1.10:FROG_SPLASH.scale;
  const dx=Math.round(x-width*scale/2),dy=Math.round(y-anchorY*scale);
  for(const {key,until,alpha} of layers){
   const image=assets.frogSplash?.[key];
   if(!image||splash>=until)continue;
   const frame=reduced?4:Math.floor(splash/until*frames);
   ctx.globalAlpha=alpha*(reduced?.85:1)*(1-ease((splash/until-.68)/.32));
   ctx.drawImage(image,frame*width,0,width,height,dx,dy,Math.round(width*scale),Math.round(height*scale));
  }
  ctx.globalAlpha=1;
 }
 if(!reducedMotion.matches&&frog?.phase==='na_poca'){
  const p=(sceneryTime()%1450)/1450;
  ctx.globalAlpha=(1-p)*.7;ctx.strokeStyle='#d2f1ce';
  ctx.beginPath();ctx.ellipse(x,y,3+p*15,1+p*3,0,0,Math.PI*2);ctx.stroke();
 }
 ctx.restore();
}
function drawVisitors(ctx,accept){
 for(const v of visitors){
  if(accept&&!accept(v))continue;
  const base=assets.visitors[v.kind];
  if(!base||!v.visible)continue;
  let img=base,frame=v.frame;
  const anchor=v.spec.anchor.y;
  const activitySprite=v.activity&&assets[v.activity];
  if(v.kind==='coelho'&&v.residentRabbit&&assets.rabbitActions?.[v.rabbitAction]){
   img=assets.rabbitActions[v.rabbitAction];frame=v.rabbitFrame??0;
  }else if(v.kind==='gatinho'&&v.walking&&assets.catWalk){
   img=assets.catWalk;
  }else if(activitySprite)img=activitySprite;
  else if(v.kind==='sapo'&&Number.isInteger(v.frogJumpFrame)&&assets.frogHop){
   img=assets.frogHop;frame=v.frogJumpFrame;
  }else{
   const age=sceneTime-(v.manualPoseAt??-Infinity);
   const reaction=assets.faunaReactions?.[v.kind];
   if(v.phase==='repouso'&&reaction&&age>=0&&age<1400&&(!reducedMotion.matches||v.kind!=='joao_de_barro')){
    img=reaction;frame=Math.floor(age/70);
   }
  }
  const fw=FAUNA_FRAME_W,fh=FAUNA_FRAME_H,w=fw*v.scale,h=fh*v.scale;
  ctx.save();
  const opacity=(v.opacity??1)*(v.crowdAlpha??1);
  ctx.globalAlpha=opacity;
  if(v.puddleClip){
   ctx.beginPath();
   ctx.rect(0,0,W,FROG_WATER.puddle.y);
   ctx.clip();
  }
  if(v.birdHouseClip){
   ctx.beginPath();
   const {frontX,doorX,doorY,doorRx,doorRy}=BIRD_HOUSE;
   ctx.rect(0,0,frontX,H);
   ctx.moveTo(doorX+doorRx,doorY);
   ctx.ellipse(doorX,doorY,doorRx,doorRy,0,0,Math.PI*2);
   ctx.clip();
  }
  if(v.clipped){
   ctx.clip(windowGlass());
  }
  if((v.spec.mode==='hop'||v.spec.mode==='walk'||v.spec.mode==='creep'||v.kind==='patinho')&&(!v.stationary||v.residentWalk||v.residentCycle||v.residentRabbit)){
   const contact=v.laneY+(v.kind==='sapo'?10*v.scale:2);
   const lift=Math.max(0,v.laneY-v.drawY);
   if(v.screen==='garden'&&MEADOW_WALKS[v.kind])drawGardenCastShadow(ctx,v.x,contact,12*v.scale,17*v.scale,.12*opacity);
   ctx.globalAlpha=opacity*Math.max(.075,.18-lift*.007);
   ctx.fillStyle='#244a31';ctx.fillRect(Math.round(v.x-15*v.scale),Math.round(contact),Math.round(30*v.scale),4);
   ctx.globalAlpha=opacity;
  }
  if(v.residentPond&&v.splash>0){
   ctx.globalAlpha=(1-v.splash)*.65;
   ctx.strokeStyle='#B9F1E1';ctx.lineWidth=2;ctx.beginPath();
   ctx.ellipse(v.x, v.laneY+2, 14+v.splash*17, 3+v.splash*4,0,0,Math.PI*2);
   ctx.stroke();ctx.globalAlpha=opacity;
  }
  ctx.translate(Math.round(v.x),0);
  ctx.scale(v.facing*(v.residentFlutter?(v.turnScale??1):1),1);
  if(v.kind==='gatinho')img=catCoatSheet(img,Casa.getRoom());
  ctx.drawImage(img,frame*fw,0,fw,fh,-Math.round(w/2),
   Math.round(v.drawY-anchor*v.scale),Math.round(w),Math.round(h));
  ctx.restore();
 }
}
const gardenFaunaCanvas=document.createElement('canvas');
gardenFaunaCanvas.width=W;gardenFaunaCanvas.height=H;
const gardenFaunaCtx=gardenFaunaCanvas.getContext('2d');
const SNAIL_TRAIL={life:6200,spacing:2.6};
function updateSnailTrail(elapsed){
 const snail=visitors.find(v=>v.kind==='caracol');
 if(!snail)return;
 snail.trail=(snail.trail??[]).filter(mark=>elapsed-mark.at<SNAIL_TRAIL.life);
 if(!snail.visible){snail.trailX=null;return;}
 if(!snail.walking)return;
 const x=snail.x,y=snail.laneY+2;
 if(snail.trailX==null||Math.abs(x-snail.trailX)>=SNAIL_TRAIL.spacing){
  snail.trail.push({x,y,at:elapsed});snail.trailX=x;
 }
}
function drawSnailTrail(ctx,elapsed){
 const snail=visitors.find(v=>v.kind==='caracol');
 if(!snail?.trail?.length)return;
 ctx.save();
 for(const mark of snail.trail){
  const alpha=clamp(1-(elapsed-mark.at)/SNAIL_TRAIL.life,0,1);
  const x=Math.round(mark.x),y=Math.round(mark.y);
  ctx.globalAlpha=.26*alpha;ctx.fillStyle='#a9df82';ctx.fillRect(x-2,y,5,2);
  ctx.globalAlpha=.43*alpha;ctx.fillStyle='#e2f0ae';ctx.fillRect(x-1,y,3,1);
 }
 ctx.restore();
}
function maskGardenFauna(layer){
 if(assets.gardenOcclusion)layer.drawImage(assets.gardenOcclusion,0,0,W,H);
 if(assets.gardenDepth)layer.drawImage(assets.gardenDepth,0,0,W,H);
 for(const o of assets.layers){
  if(!o.img||!o.name.startsWith('flor_'))continue;
  const frame=Math.floor(sceneryTime()/o.ms)%10;
  layer.drawImage(o.img,frame*o.w,0,o.w,o.h,o.x,o.y,o.w,o.h);
 }
 drawGardenFlowers(layer);
 drawWindGrass(layer);drawGardenProps(layer);
 if(assets.birdHouse){
  const {x,y,doorX,doorY,doorRx,doorRy}=BIRD_HOUSE;
  layer.save();
  layer.beginPath();layer.rect(0,0,W,H);layer.moveTo(doorX+doorRx,doorY);
  layer.ellipse(doorX,doorY,doorRx,doorRy,0,0,Math.PI*2);
  layer.clip('evenodd');
  layer.drawImage(assets.birdHouse,x,y);
  layer.restore();
 }
}
const GARDEN_FOREGROUND_ANIMALS=new Set(['joao_de_barro','joaninha','caracol','tartaruga','coelho','patinho','borboleta']);
const drawsInGardenForeground=v=>GARDEN_FOREGROUND_ANIMALS.has(v.kind);
function drawGardenFauna(){
 const layer=gardenFaunaCtx;
 layer.clearRect(0,0,W,H);layer.imageSmoothingEnabled=false;
 drawSnailTrail(layer,gardenArrivalTime());
 drawVisitors(layer,v=>!drawsInGardenForeground(v));
 layer.save();layer.globalCompositeOperation='destination-out';
 maskGardenFauna(layer);
 layer.restore();
 ctx.drawImage(gardenFaunaCanvas,0,0);
 drawVisitors(ctx,drawsInGardenForeground);
}
function drawGaze(){
 if(!lookAt||GAME_CLOCK.wallNow()>lookAt.until||currentScreen==='evolve'||transition)return;
 // A soft series of small moving pixel-glints points from the pet's face to the visitor.
 const v=visitors.find(v=>v.id===lookAt.id);if(!v&&lookAt.id!==null)return;
 const sx=pet.x+((v?v.x:lookAt.x)>pet.x?29:-29),sy=currentGround()-102;
 const ex=v?v.x:lookAt.x,ey=(v?v.drawY:lookAt.y)-17;
 ctx.save();ctx.globalAlpha=.52;ctx.fillStyle='#eaffd5';
 for(let j=0;j<3;j++){
  const q=(.25+j*.19+((sceneTime/1800)%0.11));
  const x=sx+(ex-sx)*q,y=sy+(ey-sy)*q;
  ctx.fillRect(Math.round(x),Math.round(y),3,3);
 }
 ctx.restore();
}

// Assets V41-R1: fila com máximo de quatro decodificações iniciadas em paralelo.
// As três cenas e stages já possuem carregamento sob demanda na V41: mantidos.
const AssetManager=(()=>{
 const MAX_IN_FLIGHT=4, queue=[];
 let inFlight=0,peakInFlight=0,loaded=0,failed=0;
 function pump(){
  while(inFlight<MAX_IN_FLIGHT&&queue.length){
   const job=queue.shift();inFlight++;peakInFlight=Math.max(peakInFlight,inFlight);
   const im=new Image();let settled=false;
   const finish=(ok)=>{
    if(settled)return;settled=true;im.onload=im.onerror=null;
    inFlight--;if(ok)loaded++;else failed++;
    job.resolve(ok?im:null);pump();
    if(!ok){
     const msg=document.getElementById('feedback');
     if(msg){msg.textContent='⚠️ Um desenho não carregou. O jogo continua com desenhos de segurança.';msg.setAttribute('role','alert');}
    }
   };
   im.onload=()=>finish(true);im.onerror=()=>finish(false);
   try{im.src=job.src;}catch(error){finish(false);}
  }
 }
 function load(src){return new Promise(resolve=>{queue.push({src,resolve});pump();});}
 function status(){return {inFlight,peakInFlight,queued:queue.length,loaded,failed,limit:MAX_IN_FLIGHT};}
 return Object.freeze({load,status});
})();
function loadImage(src){return AssetManager.load(src);}
const stageSheets=new Map();
function loadStageSprites(id){
 const index=stageIndex(id);
 for(let i=0;i<=index;i++){
  const stage=STAGES[i];
  if(stageSheets.has(stage.id))continue;
  const sheets={};
  stageSheets.set(stage.id,sheets);
  for(const [action,src] of Object.entries(STAGE_SPRITE_MANIFEST[stage.id]||{})){
   if(typeof src!=='string'||!src.startsWith('data:image/png;base64,'))continue;
   loadImage(src).then(img=>{
    if(img?.height===128&&[1280,2560].includes(img.width))sheets[action]=img;
   });
  }
 }
}
function actorForStage(action,id=state.evolution.stage){
 const index=Math.max(0,stageIndex(id));
 for(let i=index;i>=0;i--){
  const sprite=stageSheets.get(STAGES[i].id)?.[action];
  if(sprite)return {sprite,fallback:i!==index};
 }
 return {sprite:assets.actors[action],fallback:id!==STAGES[0].id};
}
const GARDEN_DEPTH_SRC='../assets/jardim_mascara_profundidade.png';
const TREE_OCCLUSION_V40="../assets/tree_occlusion_v40.png";
const AFFECTION_SPRITE='../assets/carinho_coracoes.png';
const sceneImages={
 care:{casa_sala:CASA_ART.sala,casa_quarto:CASA_ART.quarto,casa_cozinha:CASA_ART.cozinha,affection:AFFECTION_SPRITE},
 garden:{bg:BG,gardenDepth:GARDEN_DEPTH_SRC,gardenSun:SUN_SPRITE,gardenOcclusion:TREE_OCCLUSION_V40,gardenExtra:GARDEN_EXTRA,transHG:TRANS_HOME_GARDEN,transGH:TRANS_GARDEN_HOME,rightTreeV26:ARVORE_DIREITA_V26,affection:AFFECTION_SPRITE},
 evolve:{voidBg:VOID_BG,voidPulse:VOID_PULSE}
};
const sceneReady=new Set(),sceneRequests=new Map();
const visitorRequests=new Map();
function loadVisitorImage(kind){
 if(assets.visitors[kind])return Promise.resolve(assets.visitors[kind]);
 if(visitorRequests.has(kind))return visitorRequests.get(kind);
 const request=loadImage(visitorArt(kind)).then(img=>{
  assets.visitors[kind]=img;
  visitorRequests.delete(kind);
  return img;
 });
 visitorRequests.set(kind,request);
 return request;
}
function loadScene(screen){
 if(sceneRequests.has(screen))return sceneRequests.get(screen);
 const requests=Object.entries(sceneImages[screen]).map(async ([key,src])=>assets[key]=await loadImage(src));
 if(screen==='care')requests.push(loadImage(CAT_WALK_SRC).then(img=>assets.catWalk=img));
 const animals=screen==='care'?homeAnimals:screen==='garden'?gardenAnimals:[];
 for(const kind of new Set(screen==='garden'?[...animals,'patinho']:animals)){
  requests.push(loadVisitorImage(kind));
  if(FAUNA_REACTIONS[kind]){
   assets.faunaReactions??={};
   requests.push(loadImage(FAUNA_REACTIONS[kind]).then(img=>assets.faunaReactions[kind]=img));
  }
 }
 if(screen==='garden'){
   requests.push(Promise.all(Object.entries(RABBIT_ACTION_SHEETS).map(async ([name,src])=>{
    assets.rabbitActions??={};assets.rabbitActions[name]=await loadImage(src);
   })));
  for(const [key,{src}] of Object.entries(GARDEN_PROPS)){
   requests.push(loadImage(src).then(img=>assets[key]=img));
  }
  requests.push(loadImage(GARDEN_FLOWERS.src).then(img=>assets.gardenFlowers=img));
  requests.push(loadImage(WIND_GRASS_SRC).then(img=>assets.windGrass=img));
  requests.push(loadImage(BIRD_HOUSE_SRC).then(img=>assets.birdHouse=img));
  for(const [name,src] of Object.entries(BIRD_HOUSE_ACTIONS)){
   requests.push(loadImage(src).then(img=>assets[name]=img));
  }
  assets.frogSplash??={};
  for(const {key,src} of FROG_SPLASH.layers){
   requests.push(loadImage(src).then(img=>assets.frogSplash[key]=img));
  }
  for(const [name,src] of Object.entries(FROG_ACTIONS)){
   requests.push(loadImage(src).then(img=>assets[name]=img));
  }
  requests.push(loadImage(FAUNA_SHEETS.sapo_salto).then(img=>assets.frogHop=img));
  requests.push(Promise.all(MODEL.layers.map(async layer=>({...layer,img:await loadImage(layer.src)}))).then(layers=>{
   assets.layers=layers;
   return layers.every(layer=>layer.img);
  }));
  for(const effect of MODEL.effects)requests.push(loadImage(effect.src).then(img=>assets.effects[effect.name]=img));
 }
 const request=Promise.all(requests).then(images=>{
  const complete=images.every(Boolean);
  if(complete)sceneReady.add(screen);
  else{
   sceneRequests.delete(screen);
   console.warn('Falha ao carregar imagens da tela '+screen);
  }
  return complete;
 });
 sceneRequests.set(screen,request);
 return request;
}
async function initAssets(){
 const [actors,,homeReady]=await Promise.all([
  Promise.all(MODEL.actors.map(async actor=>assets.actors[actor.name]=await loadImage(actor.src))),
  loadImage(TUB).then(img=>assets.tub=img),
  loadScene('care')
 ]);
 assets.ready=actors.every(Boolean)&&homeReady&&Boolean(assets.tub);
 if(homeReady)void loadScene('garden');
 if(currentScreen==='care'&&!transition&&screenRequest===1){
  setFeedback(assets.ready?'🟢 Seu slime está pronto para brincar!':'⚠️ Alguns desenhos não carregaram.');
 }
}
function sunPosition(){const period=SUN_HALF_SWEEP*2,elapsed=((GAME_CLOCK.wallNow()-sunEpoch)%period+period)%period;
 const t=elapsed/SUN_HALF_SWEEP,progress=ease(t<=1?t:2-t);
 sun.x=636-531*progress;sun.y=76-35*Math.sin(Math.PI*progress);sun.progress=progress;}
function pixel(x,y,w,h,color){ctx.fillStyle=color;ctx.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));}
function shadow(x,y,dx,len,width,opacity){ctx.save();ctx.fillStyle='#143d2f';for(let i=0;i<9;i++){const p=(i+.4)/9,w=width*(1-.55*p);ctx.globalAlpha=opacity*(1-.5*p);ctx.fillRect(Math.round(x+dx*p-w),Math.round(y+len*p),Math.round(2*w),Math.round(3+2*(1-p)));}ctx.restore();}
function drawWholeOrAtlas(img,frame,w=W,h=H){if(!img)return;const cols=Math.max(1,Math.floor(img.width/w));const rows=Math.max(1,Math.floor(img.height/h));const total=Math.max(1,cols*rows);const f=((frame%total)+total)%total;if(total===1){ctx.drawImage(img,0,0,w,h);return;}ctx.drawImage(img,(f%cols)*w,Math.floor(f/cols)*h,w,h,0,0,w,h);}
function drawSun(){
 const sprite=assets.gardenSun;
 if(sprite)ctx.drawImage(sprite,Math.round(sun.x-sprite.width/2),Math.round(sun.y-sprite.height/2));
}
function gardenShadowProjection(x,y,height){
 const sunHeight=Math.max(130,y-sun.y);
 return {
  dx:clamp((x-sun.x)*height/sunHeight,-116,116),
  dy:height*(.17+(sun.y-41)*.002),
 };
}
function drawGardenCastShadow(ctx,x,y,radius,height,opacity){
 const {dx,dy}=gardenShadowProjection(x,y,height);
 ctx.save();ctx.fillStyle='#285d3f';
 for(let step=0;step<10;step++){
  const p=step/9;
  const spread=radius*(1-.48*p)+Math.sin(p*Math.PI)*radius*.12;
  ctx.globalAlpha=opacity*(1-.68*p);
  ctx.fillRect(Math.round(x+dx*p-spread),Math.round(y+dy*p),Math.round(spread*2),3);
 }
 ctx.restore();
}
function drawGardenSunShadows(){
 for(const [x,y,radius,height] of [[130,367,29,95],[636,319,17,58],[492,369,22,26]]){
  drawGardenCastShadow(ctx,x,y,radius,height,.16);
 }
 for(const [key,{spots}] of Object.entries(GARDEN_PROPS)){
  const item=assets[key];
  if(!item)continue;
  for(const [x,y] of spots)drawGardenCastShadow(ctx,x,y,item.width*.30,item.height*.8,.14);
 }
}
const GARDEN_POLLEN_ORIGINS=[[52,344],[225,348],[448,326],[697,309],...GARDEN_FLOWERS.spots.map(([x,y])=>[x,y-20])];
function drawGardenPollen(){
 const reduced=reducedMotion.matches;
 const t=reduced?0:sceneryTime();
 ctx.save();
 for(const [i,[x,y]] of GARDEN_POLLEN_ORIGINS.entries()){
  const count=reduced?1:3;
  for(let particle=0;particle<count;particle++){
   const seed=i*787+particle*1793;
   const duration=4500+(i%4)*480;
   const p=((t+seed)%duration)/duration;
   const lift=7+p*(18+(i%3)*7);
   const drift=6+28*p+Math.sin(p*Math.PI*2+seed)*7;
   const px=x+drift,py=y-lift+Math.sin(p*Math.PI*2+particle)*3;
   const alpha=Math.sin(Math.PI*p)*(reduced?.32:.78);
   ctx.globalAlpha=alpha;
   pixel(px,py,2,2,'#F8DD80');
   if(particle===0){
    ctx.globalAlpha=alpha*.44;
    pixel(px-1,py+1,4,1,'#FFF3AA');
    pixel(px+1,py-1,1,4,'#FFF3AA');
   }
  }
 }
 ctx.restore();
}
function drawGarden(){if(assets.bg)ctx.drawImage(assets.bg,0,0,W,H);else{pixel(0,0,W,320,'#89cfe9');pixel(0,320,W,223,'#7fc65e')}
 const grad=ctx.createLinearGradient(sun.x,60,724-sun.x,440);grad.addColorStop(0,'rgba(255,244,176,0.095)');grad.addColorStop(1,'rgba(24,54,49,0.045)');ctx.fillStyle=grad;ctx.fillRect(0,0,W,H);
 drawSun(); // fundo do ceu; arvore, folhagem e animais sao pintados depois
 drawGardenSunShadows();
  for(const o of assets.layers){
    if(!o.img||o.name==='borboleta')continue;
   const frame=Math.floor(sceneryTime()/o.ms)%10;
   if(o.name==='nuvem_direita'||o.name==='nuvem_esquerda'){
    // Clouds travel behind the tree masses, never crossing in front of the trunks/canopies.
    const speed=o.name==='nuvem_direita'?13.5:-10.5;
    const span=W+o.w;
    const x=((o.x+o.w+(sceneryTime()/1000)*speed)%span+span)%span-o.w;
    ctx.drawImage(o.img,frame*o.w,0,o.w,o.h,Math.round(x),o.y,o.w,o.h);
   }else{
    ctx.drawImage(o.img,frame*o.w,0,o.w,o.h,o.x,o.y,o.w,o.h);
   }
  }
  // Tree canopy cutout sits on top of sun/clouds (pixel-perfect, no rectangle masks).
  if(assets.gardenOcclusion)ctx.drawImage(assets.gardenOcclusion,0,0,W,H);
  // Dedicated, independent 10-frame foliage and falling leaves on the SECOND/right tree.
  if(assets.rightTreeV26){
   const f=Math.floor(sceneryTime()/FRAME_MS)%10;
   ctx.drawImage(assets.rightTreeV26,f*145,0,145,232,543,112,145,232);
  }
 // Pixel sun flecks in trees and shimmering surface details.
 for(const [x,y,r] of [[151,155,87],[623,200,54]]){const sign=sun.x>x?1:-1;ctx.save();ctx.globalAlpha=.14;for(let i=0;i<12;i++)pixel(x+sign*r*.35+(i%3-1)*11,y-32+(i*13)%71,5+(i%2)*3,4,'#fff4a7');ctx.restore();}
 const wave=Math.floor(sceneryTime()/180)%5;ctx.save();ctx.globalAlpha=.16;for(let i=0;i<6;i++)pixel(565+i*23+(wave*3)%9,400+(i%3)*4,10,2,'#ffffff');ctx.restore();
 if(assets.gardenExtra){const frame=Math.floor(sceneryTime()/185)%10;ctx.drawImage(assets.gardenExtra,(frame%4)*W,Math.floor(frame/4)*H,W,H,0,0,W,H);}
 drawGardenBarkBranches();drawGardenAtmosphere();}
// Ramos em pixel art: as mesmas familias cromaticas do tronco ja desenhado no Jardim.
// Contorno -> sombra -> base -> reflexo: nao adiciona filtros nem gradientes borrados.
const BARK_RAMP={edge:'#573923',deep:'#6A4129',shadow:'#7B4A2D',base:'#955C35',light:'#B8794C',shine:'#D39358'};
function pixelBough(points,radii){
 ctx.save();
 for(let seg=0;seg<points.length-1;seg++){
  const [x0,y0]=points[seg],[x1,y1]=points[seg+1];
  const total=Math.max(1,Math.ceil(Math.hypot(x1-x0,y1-y0)/3));
  for(let step=0;step<=total;step++){
   const q=step/total;
   const x=Math.round((x0+(x1-x0)*q)/3)*3;
   const y=Math.round((y0+(y1-y0)*q)/3)*3;
   const r=radii[seg]+(radii[seg+1]-radii[seg])*q;
   const h=Math.max(3,Math.round(r/3)*3);
   pixel(x,y-h/2-2,5,h+6,BARK_RAMP.edge);
   pixel(x,y-h/2,5,h+2,BARK_RAMP.shadow);
   pixel(x,y-h/2+2,5,Math.max(3,h-3),BARK_RAMP.base);
   pixel(x,y-h/2+2,4,3,BARK_RAMP.light);
   if((step+seg*2)%5===2)pixel(x,y+Math.floor(h*.12),3,4,BARK_RAMP.deep);
  }
 }
 ctx.restore();
}
function drawGardenBarkBranches(){
 // Galho direito: sai do tronco da arvore menor e suporta o joao-de-barro.
 pixelBough([[631,283],[621,275],[603,269],[582,265]],[16,13,9,6]);
 // Pequenos reflexos e rugosidades acompanham o sombreado da casca.
 for(const [x,y] of [[623,280],[607,269]]){
  pixel(x,y,4,3,BARK_RAMP.shine);
  pixel(x+2,y+5,3,4,BARK_RAMP.deep);
 }
}
function drawGardenAtmosphere(){
 // Gentle leaf drift, coherent sunlight and animated ripples behind the pet.
 const slow=Boolean(reducedMotion?.matches);
 const t=slow?0:sceneryTime();
 ctx.save();
 // Fall from BOTH crowns, gently following the breeze.
 for(let i=0;i<8;i++){
  const right=i>=5,cx=right?624:145;
  const period=right?7700:9200;
  const q=((t+1051*i)%period)/period;
  const x=cx+Math.sin(q*5+i)*19+(right?-1:1)*q*54+(i%3-1)*12;
  const y=(right?203:215)+q*(right?127:151);
  const sunlight=sun.x>cx;
  ctx.globalAlpha=.25+(1-q)*.48;
  pixel(x,y,4,3,sunlight?'#BDE766':'#70B854');
  pixel(x+1,y+3,3,2,'#3A904A');
 }
 // Sun reflection on pond: tiny stepped pixels, not translucent blurred ellipses.
 for(let i=0;i<5;i++){
  const q=((t/950+i*.21)%1);
  const x=563+((i*37+Math.floor(t/180))%122);
  const y=391+(i%3)*7;
  ctx.globalAlpha=.10+.27*Math.sin(q*Math.PI);
  pixel(x,y,13-(i%2)*4,2,'#E8FCF1');
 }
 // Flower petals and ambient depth remain in the background layer.
 for(let i=0;i<5;i++){
  const q=((t/4600+i*.23)%1);
  ctx.globalAlpha=.16+.18*(1-q);
  const x=38+i*138+Math.sin(t/1900+i)*7;
  const y=347+Math.sin(t/750+i*2)*2;
  pixel(x,y,3,3,'#F8B0C3');
 }
 ctx.restore();
}
function drawGardenForeground(){
 if(currentScreen!=='garden')return;
 const t=reducedMotion.matches?0:sceneryTime();
 // Small shore ripples follow a visiting duck without inventing a floating shadow.
 const duck=visitors.find(v=>v.kind==='patinho'&&v.visible);
 if(duck){
  const x=Math.round(duck.x),y=Math.round(duck.drawY+5);
  const p=((t/580)%1);
  ctx.save();ctx.globalAlpha=.32*(1-p);
  pixel(x-12-8*p,y+3,9,2,'#B4EAED');pixel(x+8+8*p,y+3,9,2,'#C9FAF1');
  ctx.restore();
 }
}
// Silhuetas dos móveis na faixa do rodapé, na escala original dos cenários.
const ANT_BASEBOARD={
 sala:{y:244,furniture:[[10,222],[135,222],[138,235],[135,247],[130,251],[10,251]]},
 quarto:{y:240,furniture:[[12,218],[143,218],[145,236],[143,248],[14,249]]},
 cozinha:{y:245,furniture:[[8,222],[233,222],[234,248],[232,253],[8,253]]},
};
const ANT_TRAIL={count:12,speed:21,frameMs:78,scale:.22};
const ANT_TRAIL_PATTERNS=Object.fromEntries(CASA_ROOMS.map(room=>[room,
 Array.from({length:ANT_TRAIL.count},()=>({
  offset:v41Mix(-.16,.16,Math.random()),
  phase:Math.random()*Math.PI*2,
  rhythm:v41Mix(.28,.85,Math.random()),
  frame:Math.floor(Math.random()*FAUNA_FRAMES),
 }))
]));
function drawHomeAnts(g,room,elapsed){
 const sprite=assets.visitors.formiga;
 if(!sprite||!faunaPresent('formiga'))return;
 const {y,furniture}=ANT_BASEBOARD[room];
 const {count,speed,frameMs,scale}=ANT_TRAIL;
 const time=elapsed*(reducedMotion.matches?.5:1);
 const w=Math.round(FAUNA_FRAME_W*scale),h=Math.round(FAUNA_FRAME_H*scale);
 const distance=g.canvas.width+w;
 const spacing=distance/count,seconds=time/1000;
 g.save();
 g.beginPath();g.rect(0,0,g.canvas.width,g.canvas.height);
 furniture.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));
 g.closePath();g.clip('evenodd');
 for(let i=0;i<count;i++){
  const ant=ANT_TRAIL_PATTERNS[room][i];
  const sway=Math.sin(seconds*ant.rhythm+ant.phase)*.11;
  const traveled=seconds*speed+sway*spacing;
  const position=traveled+(i+ant.offset)*spacing;
  const x=((position%distance+distance)%distance)-w;
  const frame=(Math.floor(Math.max(0,traveled)/speed*1000/frameMs)+ant.frame)%FAUNA_FRAMES;
  g.drawImage(sprite,frame*FAUNA_FRAME_W,0,FAUNA_FRAME_W,FAUNA_FRAME_H,
    Math.round(x),Math.round(y-VISITOR_SPEC.formiga.anchor.y*scale),w,h);
 }
 g.restore();
}
// CASA V41: sala, quarto e cozinha animados (ver módulo Casa).
function drawHome(){
 paintCasa();
 // Responsive feedback in the room itself (without needing extra buttons).
 if(pet.act==='dormir'){
  const frame=pet.frame;ctx.fillStyle='rgba(250,247,221,.76)';
  for(let i=0;i<3;i++){const x=pet.x+60+i*12,y=pet.ground-161-i*18-((frame*2+i*5)%13);
   ctx.fillRect(x,y,7,3);ctx.fillRect(x+4,y-5,3,4);}
 }
 if(pet.act==='feliz'){
  ctx.fillStyle='rgba(253,197,222,.72)';
  for(let i=0;i<3;i++){const k=(pet.frame+i*3)%10;
   ctx.fillRect(pet.x-50+i*34,pet.ground-145-k*3,4,4);}
 }
}

function drawVoid(){
 const f=Math.floor(sceneTime/FRAME_MS)%10;
 if(assets.voidBg)ctx.drawImage(assets.voidBg,(f%4)*W,Math.floor(f/4)*H,W,H,0,0,W,H);
 else{ctx.fillStyle='#090716';ctx.fillRect(0,0,W,H);}
}
function drawVoidPulse(){
 if(voidPulseStart<0 || !assets.voidPulse)return;
 const elapsed=sceneTime-voidPulseStart;
 if(elapsed>10*FRAME_MS){voidPulseStart=-1;return;}
 const f=Math.min(9,Math.floor(elapsed/FRAME_MS));
 ctx.drawImage(assets.voidPulse,(f%4)*W,Math.floor(f/4)*H,W,H,0,0,W,H);
}

const SLIME_GARDEN_SCALE=.78;
function screenGround(screen){return screen==='garden'?450:screen==='evolve'?370:445;}
function currentGround(){return screenGround(currentScreen);}
function slimeScale(screen,stage=currentStage()){
 return stage.scale[screen]*(screen==='garden'?SLIME_GARDEN_SCALE:1);
}
function drawPetShadow(){const y=currentGround(),lift=(pet.act==='pulo'||pet.act.startsWith('walk_'))?[0,0,.28,.70,1,.76,.31,0,0,0][pet.frame]||0:0;
 const sc=slimeScale(currentScreen);
 ctx.save();ctx.fillStyle='#153d2d';ctx.globalAlpha=.20-.08*lift;ctx.beginPath();ctx.ellipse(pet.x,y-4,32*sc/1.6+lift*5,5+lift*2,0,0,Math.PI*2);ctx.fill();ctx.restore();
 const dx=(pet.x>sun.x?1:-1)*(13+8*(sun.y-41)/35);shadow(pet.x,y-3,dx,7,27*sc/1.6,.12);
}
function fallbackPet(){const x=pet.x,y=currentGround();ctx.save();if(currentScreen==='garden'){ctx.translate(x,y);ctx.scale(SLIME_GARDEN_SCALE,SLIME_GARDEN_SCALE);ctx.translate(-x,-y);}ctx.fillStyle='#173f19';ctx.fillRect(x-54,y-62,108,57);ctx.fillStyle='#8be735';ctx.fillRect(x-49,y-69,98,61);pixel(x-30,y-50,13,20,'#172617');pixel(x+17,y-50,13,20,'#172617');pixel(x-30,y-52,5,5,'#fff');pixel(x+17,y-52,5,5,'#fff');pixel(x-36,y-30,11,8,'#ff9aca');pixel(x+23,y-30,11,8,'#ff9aca');pixel(x-11,y-31,22,13,'#261326');pixel(x-5,y-25,12,7,'#ff8fc3');ctx.restore();}
const shaded=document.createElement('canvas');shaded.width=128;shaded.height=128;const shadeCtx=shaded.getContext('2d');
let shadedSprite=null,shadedFrame=-1,shadedScene='',shadedLit=false;
const REST_POSES={
 sick:'doente_v29',recovering:'recuperacao_v29',overfed:'repouso_enjoado',
 saude:'repouso_saude',sede:'repouso_sede',fome:'repouso_fome',
 energia:'repouso_energia',higiene:'repouso_higiene',felicidade:'repouso_felicidade'
};
const IDLE_GESTURES=['curioso','orgulhoso','timido','feliz'];
const petVisual={
 restSince:0,blinkAt:0,gestureAt:0,gesture:null,gestureSince:0,
 wasResting:false,breathe:0,lean:0,reaction:null,tapAt:-Infinity,tapBusy:false,request:null
};
function resetPetVisual(){
 Object.assign(petVisual,{
  restSince:sceneTime,blinkAt:sceneTime+2400,gestureAt:sceneTime+12000,gesture:null,
  wasResting:false,breathe:0,lean:0,reaction:null,tapAt:-Infinity,tapBusy:false,request:null
 });
}
function updatePetVisual(dt){
 const v=petVisual;
 const resting=pet.act==='idle'&&!task&&!transition&&currentScreen!=='evolve';
 const reduced=reducedMotion?.matches;
 if(resting&&!v.wasResting){
  v.restSince=sceneTime;
  v.blinkAt=sceneTime+1300+Math.random()*2600;
  v.gestureAt=sceneTime+10000+Math.random()*7000;
 }
 v.wasResting=resting;
 v.request=resting?priorityNeed():null;
 const expression=resting?restMood():null;
 if(expression!=='content'||reduced)v.gesture=null;
 else{
  if(sceneTime>=v.blinkAt+190)v.blinkAt=sceneTime+2300+Math.random()*3600;
  if(v.gesture&&sceneTime-v.gestureSince>=10*FRAME_MS)v.gesture=null;
  if(sceneTime>=v.gestureAt){
   v.gesture=IDLE_GESTURES[Math.floor(Math.random()*IDLE_GESTURES.length)];
   v.gestureSince=sceneTime;
   v.gestureAt=sceneTime+13000+Math.random()*10000;
  }
 }
 const time=sceneTime-v.restSince;
 const strength=expression==='sick'||expression==='recovering'?0.35:1;
 const breath=resting?Math.sin(time/520)*strength:0;
 const sway=resting?Math.sin(time/890)*strength:0;
 const step=clamp(dt/120,0,1);
 v.breathe=reduced?0:v.breathe+(breath-v.breathe)*step;
 v.lean=reduced?0:v.lean+(sway-v.lean)*step;
}
function restMood(){
 const mood=petMood(),request=petVisual.request;
 if(request?.status==='want'&&['content','sede','fome','energia','higiene','felicidade'].includes(mood))return request.key;
 return mood;
}
// The gameplay clock still uses ten beats. Each beat now has two drawings.
function actorAtlasFrame(sprite,beat){
 const count=sprite.width/128;
 return clamp(Math.floor(beat*count/10),0,count-1);
}
function drawPet(){const evolve=currentScreen==='evolve';
 const stage=currentStage();
 const reduced=reducedMotion?.matches;
 let name=evolve?'desesperado':pet.act;
 let spriteFrame=evolve?(sceneTime/FRAME_MS)%10:pet.frame+pet.frameTime/FRAME_MS;
 if(!evolve&&pet.act==='idle'){
  const restingMood=restMood(),pose=REST_POSES[restingMood];
  const settling=sceneTime-petVisual.restSince<140;
  if(pose&&(!settling||restingMood==='sick'||restingMood==='recovering')){
   name=pose;
  }else if(restingMood==='content'&&!reducedMotion?.matches&&petVisual.wasResting){
   const blink=sceneTime-petVisual.blinkAt;
   if(petVisual.gesture){
    name=petVisual.gesture;
    spriteFrame=(sceneTime-petVisual.gestureSince)/FRAME_MS;
   }else if(blink>=0&&blink<190){
    name='timido';spriteFrame=blink<45?1+blink/45:blink<145?2+(blink-45)/100:8+(blink-145)/45;
   }
  }
  if(settling&&name==='idle')spriteFrame=0;
 }
 let actor=actorForStage(name,stage.id);
 if(!actor.sprite)actor=actorForStage(evolve?'surpreso':'idle',stage.id);
 const sprite=actor.sprite||assets.actors.idle;
 if(!sprite){fallbackPet();return;}
 spriteFrame=actorAtlasFrame(sprite,spriteFrame);
 const lit=currentScreen==='evolve'?Math.sin(sceneTime/500)>0:sun.x>pet.x;
 if(shadedSprite!==sprite||shadedFrame!==spriteFrame||shadedScene!==currentScreen||shadedLit!==lit){
 shadedSprite=sprite;shadedFrame=spriteFrame;shadedScene=currentScreen;shadedLit=lit;
 shadeCtx.clearRect(0,0,128,128);shadeCtx.imageSmoothingEnabled=false;shadeCtx.drawImage(sprite,128*spriteFrame,0,128,128,0,0,128,128);
 shadeCtx.save();shadeCtx.globalCompositeOperation='source-atop';
 for(let j=0;j<16;j++){
  const isLit=lit?j/15:1-j/15;
 shadeCtx.fillStyle=currentScreen==='evolve'?(isLit>.53?`rgba(152,119,235,${.025+.07*isLit})`:`rgba(20,18,61,${.08-.05*isLit})`):(isLit>.53?`rgba(255,242,170,${.025+.1*isLit})`:`rgba(11,54,30,${.085-.07*isLit})`);
 shadeCtx.fillRect(j*8,0,8,128);
 }shadeCtx.restore();
 }
 const sc=slimeScale(currentScreen,stage);
 const gx=evolve?362+(reduced?0:Math.round(4*Math.sin(sceneTime/210))):pet.x;
 const floatY=evolve&&!reduced?Math.round(7*Math.sin(sceneTime/330)):0;
 const sleeping=activeCareSequence?.key==='dormir'&&['lie','sleep'].includes(carePhase(activeCareSequence));
 const sleepBlend=sleeping?1:0;
 const width=evolve?128*sc:Math.round(128*sc-petVisual.breathe*5+sleepBlend*128*sc*.12);
 const height=evolve?128*sc:Math.round(128*sc+petVisual.breathe*7-sleepBlend*128*sc*.15);
 const lean=evolve?0:Math.round(petVisual.lean*3);
 const top=Math.round(currentGround()-103*height/128+floatY-(sleeping&&currentScreen==='care'?53:0)),left=Math.round(gx-width/2+lean);
 if(actor.fallback&&stage.aura){
  ctx.save();ctx.globalAlpha=.34;ctx.fillStyle=stage.aura;
  pixel(gx-width*.38,top+height*.60,5,5,stage.aura);
  pixel(gx+width*.34,top+height*.48,5,5,stage.aura);
  pixel(gx+width*.39,top+height*.66,3,3,stage.aura);
  ctx.restore();
 }
 ctx.drawImage(shaded,left,top,width,height);
 // Original dormir spritesheet frames 10–12 retain naturally closed eyes during the nap.
 if(evolve){ctx.save();ctx.fillStyle='rgba(197,232,255,.92)';const drip=Math.floor(sceneTime/FRAME_MS)%10;ctx.fillRect(Math.round(gx+78),Math.round(currentGround()-206*sc/2+floatY+drip*2),6,10);ctx.fillRect(Math.round(gx+85),Math.round(currentGround()-193*sc/2+floatY+drip),4,7);ctx.fillStyle='rgba(255,240,170,.55)';ctx.fillRect(Math.round(gx-84),Math.round(currentGround()-191*sc/2+floatY),7,7);ctx.restore();}
 if(currentScreen!=='evolve'&&pet.act==='banho'&&assets.tub){const fade=[0,.20,.55,.9,1,1,1,.9,.5,.1][pet.frame]||0;ctx.save();ctx.globalAlpha=fade;const w=currentScreen==='garden'?150:188,h=w*assets.tub.height/assets.tub.width;
 ctx.drawImage(assets.tub,Math.round(pet.x-w/2),Math.round(currentGround()-28),w,h);ctx.restore();}
}
const PET_MARKS={
 heart:['0110110','1111111','1111111','0111110','0011100','0001000'],
 sparkle:['00100','00100','11111','00100','00100'],
 crumb:['110','111','011'],
 bubble:['0110','1001','1001','0110'],
 sleep:['1111','0010','0100','1111'],
 drop:['010','010','111','111','010']
};
const CARE_REACTIONS={
 carinho:{mark:'heart',color:'#FFA1BC',start:2,end:8,x:39,y:-94},
 comer:{mark:'crumb',color:'#FFD386',start:3,end:7,x:24,y:-50},
 beber:{mark:'drop',color:'#87DCFF',start:3,end:7,x:38,y:-69},
 banho:{mark:'bubble',color:'#B4F5EF',start:2,end:8,x:46,y:-61},
 dormir:{mark:'sleep',color:'#E6EAF8',start:3,end:8,x:43,y:-107},
 brincar:{mark:'sparkle',color:'#FFE18B',start:2,end:7,x:48,y:-82},
 cuidar_saude:{mark:'sparkle',color:'#BFF5CE',start:4,end:8,x:43,y:-100}
};
function drawPetMark(mark,x,y,size,color){
 const rows=PET_MARKS[mark];
 const left=Math.round(x),top=Math.round(y);
 ctx.fillStyle=color;
 for(let row=0;row<rows.length;row++){
  for(let col=0;col<rows[row].length;col++){
   if(rows[row][col]==='1')ctx.fillRect(left+col*size,top+row*size,size,size);
  }
 }
}
function drawPetReaction(){
 if(currentScreen==='evolve'||transition)return;
 const scale=currentScreen==='garden'?.8*SLIME_GARDEN_SCALE:1;
 const ground=currentGround();
 const reduced=reducedMotion?.matches;
 const care=activeCareSequence;
 if(care&&currentScreen!=='evolve'){
  const phase=carePhase(care),ground=currentGround();
  if(care.key==='dormir'&&['lie','sleep'].includes(phase)){
   const x=Math.round(pet.x+42),y=Math.round(ground-120-(care.elapsed/280)%27);
   drawPetMark('sleep',x,y,3,'#F1F2FF');
   drawPetMark('sleep',x+24,y-29,2,'#D8EAFB');
  }
  if(care.key==='comer'){
   const t=care.elapsed/CARE_DURATIONS.comer;
   const bx=Math.round(pet.x+58*(1-ease(Math.min(1,t/.35)))-12);
   const by=Math.round(ground-73+Math.sin(t*14)*3);
   if(phase!=='full'){
    ctx.save();ctx.fillStyle='#D84F59';ctx.fillRect(bx-6,by-6,13,13);ctx.fillStyle='#F38972';ctx.fillRect(bx-4,by-5,4,3);
    ctx.fillStyle='#4A7839';ctx.fillRect(bx,by-10,7,4);ctx.restore();
   }
   if(phase==='chew'&&Math.floor(care.elapsed/170)%2===0)drawPetMark('crumb',Math.round(pet.x+26),Math.round(ground-58),2,'#FFE4A7');
   if(phase==='full')drawPetMark('heart',Math.round(pet.x+40),Math.round(ground-108),2,'#F8B8A1');
  }
  if(care.key==='banho'&&phase!=='clean'){
   for(let i=0;i<5;i++){
    const x=Math.round(pet.x-55+i*24+Math.sin(care.elapsed/170+i)*5);
    const y=Math.round(ground-15-i*19-(care.elapsed/85)%25);
    drawPetMark('bubble',x,y,2,'#D8FFFF');
   }
  }
 }
 const reaction=CARE_REACTIONS[petVisual.reaction];
 if(petVisual.reaction==='carinho'&&pet.act==='feliz'&&assets.affection){
  const frame=reduced?9:Math.min(19,pet.frame*2+Math.floor(pet.frameTime*2/FRAME_MS));
  const petScale=slimeScale(currentScreen),zoom=Math.max(2,petScale*1.4);
  const w=Math.round(72*zoom),h=Math.round(56*zoom);
  const x=Math.round(pet.x-w/2),y=Math.round(ground-50*petScale-47*zoom);
  ctx.drawImage(assets.affection,frame*72,0,72,56,x,y,w,h);
 }else if(reaction&&pet.act!=='idle'&&pet.frame>=reaction.start&&pet.frame<=reaction.end){
  const tick=reduced?0:pet.frame-reaction.start;
  drawPetMark(reaction.mark,pet.x+reaction.x*scale+tick*2,ground+reaction.y*scale-tick*3,3,reaction.color);
 }
 const elapsed=sceneTime-petVisual.tapAt;
 if(elapsed<460){
  const offset=reduced?0:Math.floor(elapsed/90)*3;
  drawPetMark('sparkle',pet.x-57*scale-offset,ground-85*scale-offset,3,petVisual.tapBusy?'#DBF9EA':'#FFD6E8');
 }
}

function drawNeedBubble(){
 if(currentScreen==='evolve'||transition||pet.act!=='idle')return;
 const item=petVisual.request;if(!item)return;
 const sc=slimeScale(currentScreen);
 // As poses de repouso começam perto da linha 54 de cada quadro de 128 px.
 const height=Math.round(128*sc+petVisual.breathe*7);
 const headY=currentGround()-(103-54)*height/128;
 const y=Math.round(clamp(headY-31,24,H-60));
 ctx.save();
 const label=NEED_ACTION_LABEL[item.key];
 ctx.font='700 15px system-ui';
 const width=Math.ceil(ctx.measureText(label).width)+48, left=-width/2;
 const x=Math.round(clamp(pet.x,5-left,W+left-5));
 const tailX=clamp(pet.x-x,left+18,-left-18);
 ctx.translate(x,y);
 ctx.beginPath();ctx.roundRect(left,-17,width,34,12);
 ctx.moveTo(tailX-7,15);ctx.lineTo(tailX+7,15);ctx.lineTo(tailX,23);ctx.closePath();
 ctx.fillStyle='#FFFFF5';ctx.shadowColor='#28353044';ctx.shadowBlur=6;ctx.shadowOffsetY=2;
 ctx.fill();ctx.shadowColor='transparent';
 ctx.drawImage(careIcon(item.key).tile,left+8,-11,22,22);
 ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillStyle='#25443A';
 ctx.fillText(label,left+35,0);ctx.restore();
}
function drawEffect(){if(!fx)return;const q=assets.effects[fx.name];if(!q)return;const f=Math.floor(fx.time/FRAME_MS)%10;ctx.drawImage(q,f*120,0,120,100,Math.round(fx.x-60),Math.round(fx.y-82),120,100);}
function updateTransition(now){
 if(!transition)return;
 const elapsed=now-transition.start;
 if(!transition.mid&&elapsed>=transition.duration/2){
  applyScreen(transition.to);
  transition.mid=true;
 }
 if(elapsed>=transition.duration){
  transition=null;SceneMachine.finish();
 }
}
function drawTransitionOverlay(now){
 if(!transition)return;
 const elapsed=now-transition.start;
 const t=clamp(elapsed/transition.duration,0,1);
 const frameIndex=Math.min(9,Math.floor(t*10));
 const doorway=transition.from==='care'&&transition.to==='garden'?assets.transHG:
   transition.from==='garden'&&transition.to==='care'?assets.transGH:null;
 if(doorway){
   paintCasa();
   ctx.drawImage(doorway,(frameIndex%4)*W,Math.floor(frameIndex/4)*H,W,H,0,0,W,H);
   // The doorway and the slime advance on their own frame grids.
   const walking=actorForStage((transition.startX??pet.x)<=362?'walk_direita':'walk_esquerda').sprite||assets.actors.idle;
   if(walking){
     const fromX=transition.startX??pet.x;
     const x=fromX+(362-fromX)*ease(t);
     const ground=v41Mix(screenGround(transition.from),screenGround(transition.to),t);
     const sc=v41Mix(slimeScale(transition.from),slimeScale(transition.to),ease(t));
     ctx.save();ctx.globalAlpha=1;
     ctx.drawImage(walking,actorAtlasFrame(walking,t*10)*128,0,128,128,Math.round(x-64*sc),Math.round(ground-103*sc),128*sc,128*sc);
     ctx.restore();
   }
 }else{
   // Portal to void is still a cinematic shutter, now timed in ten frames.
   const cover=frameIndex<5?ease(frameIndex/4):ease((9-frameIndex)/4);
   ctx.save();ctx.fillStyle='#0e1025';ctx.globalAlpha=Math.max(0,Math.min(1,cover));
   ctx.fillRect(0,0,W,H);ctx.fillStyle='#baa9ff';ctx.textAlign='center';ctx.font='bold 24px system-ui';
   ctx.fillText(transition.to==='evolve'?'Entrando no Limbo':'De volta à Casa',W/2,H/2);ctx.restore();
 }
}
function faunaPresent(kind){
 return state.fauna.presentes?.[kind]!==false;
}
function setupFaunaOptions(){
 const list=$('faunaOptions');
 const kinds=new Set([...Object.keys(FIXED_VISITORS),...gardenAnimals,...homeAnimals,'patinho']);
 for(const kind of kinds){
  const button=document.createElement('button');
  button.type='button';button.className='faunaToggle';
  const icon=document.createElement('span');
  icon.className='faunaIcon';icon.setAttribute('aria-hidden','true');
  icon.style.backgroundImage='url("'+visitorArt(kind)+'")';
  button.append(icon,VISITOR_SPEC[kind].label);
  const sync=()=>button.setAttribute('aria-pressed',String(faunaPresent(kind)));
  sync();
  button.addEventListener('click',()=>{
   if(faunaPresent(kind)){
    state.fauna.presentes[kind]=false;
    const removed=visitors.filter(v=>v.kind===kind);
    visitors=visitors.filter(v=>v.kind!==kind);
    if(lookAt?.kind===kind)lookAt=null;
    if(removed.some(v=>v.id===visitorReach?.id))visitorReach=null;
   }else{
    delete state.fauna.presentes[kind];
    if(FIXED_VISITORS[kind])spawnResidentVisitors(currentScreen,kind);
   }
   sync();save();
  });
  list.append(button);
 }
}
function collisionBox(kind,x,y){
 const [width,height]=COLLISION[kind];
 const scale=kind==='slime'&&currentScreen==='garden'?SLIME_GARDEN_SCALE:
  kind==='formiga'&&currentScreen==='care'?HOME_ANT_SCALE:1;
 return {x,y,half:width*scale/2,height:height*scale};
}
function collisionSharesLane(a,b){
 return a.y-a.height<b.y&&b.y-b.height<a.y;
}
function resolveCollisionX(box,previousX,obstacles,min=box.half,max=W-box.half){
 const proposed=clamp(box.x,min,max);
 const lane=obstacles.filter(other=>collisionSharesLane(box,other));
 let target=proposed;
 if(Number.isFinite(previousX)){
  for(const other of lane){
   const left=other.x-other.half-box.half,right=other.x+other.half+box.half;
   if(previousX<=left&&target>left)target=left;
   if(previousX>=right&&target<right)target=right;
  }
 }
 const free=x=>x>=min&&x<=max&&lane.every(other=>Math.abs(x-other.x)+1e-7>=other.half+box.half);
 if(free(target))return target;
 const positions=[min,max,...lane.flatMap(other=>[
  other.x-other.half-box.half,other.x+other.half+box.half,
 ])];
 return positions.filter(free).sort((a,b)=>Math.abs(a-target)-Math.abs(b-target))[0];
}
function visitorHasCollision(v){
 if(!v.visible||!COLLISION[v.kind]||v.puddleClip||v.kind==='gatinho')return false;
 const half=COLLISION[v.kind][0]/2;
 return !v.sideArrival||(v.x>=half&&v.x<=W-half);
}
function visitorCollisionBox(v){
 return collisionBox(v.kind,v.x,v.drawY);
}
function limitSlimeWalk(target){
 if(currentScreen==='evolve'||transition)return target;
 const obstacles=visitors.filter(visitorHasCollision).map(visitorCollisionBox);
 return resolveCollisionX(collisionBox('slime',target,currentGround()),pet.x,obstacles,80,644)??pet.x;
}
function resolveActorCollisions(previousPetX,previousVisitors){
 if(currentScreen==='evolve'||transition)return;
 const previousBoxes=[...previousVisitors.values()];
 const slime=collisionBox('slime',pet.x,currentGround());
 pet.x=resolveCollisionX(slime,previousPetX,previousBoxes,80,644)??previousPetX;
 const occupied=[collisionBox('slime',pet.x,slime.y)];
 const visible=visitors.filter(visitorHasCollision).sort((a,b)=>Number(b.stationary)-Number(a.stationary));
 for(const v of visible){
  const previous=previousVisitors.get(v.id);
  const box=visitorCollisionBox(v);
  const maximumStep=8;
  if(v.residentFlutter&&previous&&!reducedMotion.matches){
   box.x=clamp(box.x,previous.x-maximumStep,previous.x+maximumStep);
   box.y=clamp(box.y,previous.y-maximumStep,previous.y+maximumStep);
   v.drawY=v.laneY=box.y;
  }
  let x=resolveCollisionX(box,previous?.x,occupied);
  if(v.residentFlutter&&previous&&!reducedMotion.matches&&(x===undefined||Math.abs(x-previous.x)>maximumStep)){
   // Keep a clear waypoint while another resident crosses the flight path.
   const held=resolveCollisionX(previous,previous.x,occupied);
   if(held===previous.x){
    v.drawY=v.laneY=previous.y;
    x=held;
   }
  }
  if(x===undefined){v.visible=false;continue;}
  v.x=x;
  if(v.residentRabbit&&v.rabbitAction==='andar'){
   v.strideDistance=(v.strideDistance??0)+Math.abs(x-(previous?.x??x));
   v.frame=v.rabbitFrame=rabbitWalkFrame(v.strideDistance);
  }
  occupied.push(visitorCollisionBox(v));
 }
}
function frame(timestamp){
 frameRequest=null;
 if(document.hidden||gameSuspended)return;
 const dt=GAME_CLOCK.frameDelta(timestamp,lastAnimation);lastAnimation=timestamp;if(!transition)sceneTime+=dt*.90;
 const screenBeforeFrame=currentScreen,previousPetX=pet.x;
 const previousVisitors=new Map(visitors.filter(visitorHasCollision).map(v=>[v.id,visitorCollisionBox(v)]));
 PersonalityMachine.tick();
 if(activeCareSequence){advanceCareSequence(dt);}
 else if(!transition&&pet.act!=='idle'){pet.frameTime+=dt;let cap=0;while(pet.frameTime>=FRAME_MS&&cap++<10){pet.frameTime-=FRAME_MS;nextFrame();}}
 else if(!transition){pet.frameTime+=dt;if(pet.frameTime>=FRAME_MS){pet.frameTime-=FRAME_MS;pet.frame=(pet.frame+1)%10;}}
 if(!transition&&!activeCareSequence&&pet.act.startsWith('walk_'))updateSlimeStride();
 if(!transition&&fx){fx.time+=dt;if(fx.time>=10*FRAME_MS)fx=null;}
 updateTransition(timestamp);sunPosition();updateVisitors(dt);if(currentScreen===screenBeforeFrame)resolveActorCollisions(previousPetX,previousVisitors);if(currentScreen==='garden'&&!transition)updateSnailTrail(gardenArrivalTime());updatePetVisual(dt);SOUND.ambient(currentScreen,timestamp);ctx.imageSmoothingEnabled=false;
 if(currentScreen==='garden'){drawGarden();drawWindGrass(ctx);drawGardenFlowers(ctx);drawGardenProps(ctx);drawGardenPollen();if(assets.birdHouse)ctx.drawImage(assets.birdHouse,BIRD_HOUSE.x,BIRD_HOUSE.y);}else if(currentScreen==='evolve')drawVoid();else drawHome();if(currentScreen!=='evolve'){if(currentScreen==='garden')drawGardenFauna();else drawVisitors(ctx);drawPetShadow();drawEffect();}drawPet();if(currentScreen==='garden'){drawGardenForeground();drawFrogPuddle();}drawPetReaction();drawGaze();if(currentScreen==='evolve')drawVoidPulse();if(currentScreen==='care')drawNeedBubble();drawTransitionOverlay(timestamp);
 frameRequest=requestAnimationFrame(frame);}
function visitorAt(x,y){
 for(let i=visitors.length-1;i>=0;i--){
  const v=visitors[i];
  if(v.screen!==currentScreen||!v.visible||!assets.visitors[v.kind])continue;
  if(v.clipped&&!ctx.isPointInPath(windowGlass(),x,y))continue;
  const center=v.spec.anchor?(28-v.spec.anchor.y)*v.scale:-4;
  const hitScale=v.kind==='formiga'&&v.screen==='care'?HOME_ANT_SCALE:1;
  if(Math.abs(x-v.x)<=v.spec.rx*hitScale&&Math.abs(y-v.drawY-center)<=v.spec.ry*hitScale)return v;
 }
}
function acknowledgePetTap(busy){
 if(sceneTime-petVisual.tapAt>=460){
  petVisual.tapAt=sceneTime;
  petVisual.tapBusy=busy;
 }
 if(!busy)doAction('carinho');
}
function clickCanvas(ev){if(transition)return;const b=canvas.getBoundingClientRect(),x=(ev.clientX-b.left)*W/b.width,y=(ev.clientY-b.top)*H/b.height;
 const garden=currentScreen==='garden',ground=currentGround();
 const ratio=slimeScale(currentScreen)/STAGES[0].scale[currentScreen];
 const onPet=currentScreen!=='evolve'&&Math.abs(x-pet.x)<(garden?61:78)*ratio&&
  y>=ground-(garden?112:148)*ratio&&y<=ground+16;
 if(onPet&&activeCareSequence?.key==='dormir'){cancelCareSequence('tap');setFeedback('☀️ Acordei! 💚');return;}
 if(onPet&&PersonalityMachine.automatic){PersonalityMachine.interrupt('pet-touch');acknowledgePetTap(false);return;}
 if(onPet&&(pet.act!=='idle'||task)){acknowledgePetTap(true);return;}
 const animal=onPet&&!inspectMode?null:visitorAt(x,y);
 if(animal){inspectMode=false;watchVisitor(animal,true);return;}
 if(!canAct())return;
 if(currentScreen==='evolve'){if(Math.hypot((x-W/2)/230,(y-H/2)/185)>1)return;voidPulseStart=sceneTime;SOUND.play('switch');setFeedback('😱 Aaah! O vórtice puxou o slime!');return;}
 if(inspectMode){inspectMode=false;const list=currentScreen==='care'?homeThings():THINGS;const item=nearestThing(list,x,y);observeScene(x,y,item.d<1.8?item.o.label:'um cantinho do cenário');return;}
 if(onPet){acknowledgePetTap(false);return;}
  if(currentScreen==='garden'){
  const ranking=THINGS.map(o=>({o,d:Math.hypot((x-o.x)/o.r,(y-o.y)/o.r)})).sort((a,b)=>a.d-b.d);
  if(ranking[0]?.d<1.25){startInteraction(ranking[0].o.id);return;}
   if(y>300&&canAct(5)&&assets.actors.curioso&&assets.actors.walk_direita&&assets.actors.walk_esquerda){
    advanceNeeds();lastUserAction=GAME_CLOCK.wallNow();applyStats({energia:-2});
    task={id:'local',target:clamp(x,80,644),anim:'curioso',text:'🌿 Explorando um cantinho do jardim.'};continueTask();return;
   }
 }
 if(currentScreen==='care'){
   const spot=casaSpotAt(x,y);
   if(spot){interactCasaSpot(spot);return;}
 }
}
for(const panel of ['needs-care','needs-garden']){
 $(panel).addEventListener('click',ev=>{
  const button=ev.target.closest('button[data-care-action]');
  if(button)doAction(button.dataset.careAction);
 });
}
let canvasTap=null;
canvas.addEventListener('pointerdown',ev=>{
 if(!ev.isPrimary||ev.button!==0||transition)return;
 canvasTap={id:ev.pointerId,x:ev.clientX,y:ev.clientY,screen:currentScreen};
});
function movedBeyondTap(ev){
 return Math.hypot(ev.clientX-canvasTap.x,ev.clientY-canvasTap.y)>10;
}
canvas.addEventListener('pointermove',ev=>{
 if(canvasTap?.id===ev.pointerId&&movedBeyondTap(ev))canvasTap=null;
});
for(const event of ['pointercancel','pointerleave']){
 canvas.addEventListener(event,ev=>{if(canvasTap?.id===ev.pointerId)canvasTap=null;});
}
canvas.addEventListener('pointerup',ev=>{
 if(canvasTap?.id!==ev.pointerId)return;
 const b=canvas.getBoundingClientRect();
 const inside=ev.clientX>=b.left&&ev.clientX<=b.right&&ev.clientY>=b.top&&ev.clientY<=b.bottom;
 const accepted=inside&&!movedBeyondTap(ev)&&canvasTap.screen===currentScreen;
 canvasTap=null;
 if(accepted)clickCanvas(ev);
});
document.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',()=>doAction(b.dataset.action)));
document.querySelectorAll('[data-screen]').forEach(b=>b.addEventListener('click',()=>setScreen(b.dataset.screen)));
const explore=$('exploreActions');THINGS.forEach(t=>{const b=document.createElement('button');b.type='button';b.className='actionButton';b.textContent=t.label;b.addEventListener('click',()=>startInteraction(t.id));explore.appendChild(b)});

function syncPersonalityPreferences(){
 SOUND.setSoftAudio(state.accessibility.softAudio);
 document.querySelectorAll('[data-pet-setting]').forEach(b=>{
  const active=Boolean(state.accessibility[b.dataset.petSetting]);
  b.setAttribute('aria-pressed',String(active));
 });
}
document.querySelectorAll('[data-pet-setting]').forEach(b=>b.addEventListener('click',()=>{
 const key=b.dataset.petSetting;
 state.accessibility[key]=!state.accessibility[key];
 if(key==='reducedMotion'&&state.accessibility[key])PersonalityMachine.interrupt('reduced-motion');
 syncPersonalityPreferences();save();
 setFeedback(key==='reducedMotion'?'💚 Movimento adaptado!':'🎵 Volume ajustado!');
}));
syncPersonalityPreferences();
let frameRequest=null,needsTimer=null,gameSuspended=false,nextAutoSave=GAME_CLOCK.wallNow()+15000;
function tickNeeds(){
 if(document.hidden||gameSuspended)return;
 const now=GAME_CLOCK.wallNow();
 advanceNeeds(now);renderNeeds();if(activeCareSequence)saveCareSnapshot();
 if(now>=nextAutoSave){save();nextAutoSave=now+15000;}
}
function startGameLoop(){
 if(document.hidden||gameSuspended)return;
 if(frameRequest===null)frameRequest=requestAnimationFrame(frame);
 if(needsTimer===null)needsTimer=setInterval(tickNeeds,1000);
}
function pauseGameLoop(){
 if(gameSuspended)return;
 gameSuspended=true;
 if(frameRequest!==null)cancelAnimationFrame(frameRequest);
 if(needsTimer!==null)clearInterval(needsTimer);
 frameRequest=needsTimer=null;lastAnimation=0;canvasTap=null;
 advanceNeeds();suspendNeedsClock();saveCareSnapshot();
}
function resumeGameLoop(){
 if(document.hidden)return;
 if(gameSuspended){
  gameSuspended=false;
  advanceNeeds();renderNeeds();save();
  nextAutoSave=GAME_CLOCK.wallNow()+15000;
 }
 startGameLoop();
}
restoreCareScene();
setupFaunaOptions();
setScreen(activeCareSequence?.scene||'care',true);
loadStageSprites(state.evolution.stage);
if(lastReadSave===null&&(state.migratedFromV33||state.migratedFromV32||state.migratedFromV31||state.migratedFromV30||state.migratedFromV19))save();
initAssets().catch(error=>{console.error(error);setFeedback('⚠️ Falha ao carregar as sprites.');});
startGameLoop();
document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseGameLoop();else resumeGameLoop();});
window.addEventListener('pagehide',pauseGameLoop);
window.addEventListener('pageshow',resumeGameLoop);
window.__slimeGameTest={getState:()=>({version:41,personality:PersonalityMachine.snapshot(),accessibility:{...state.accessibility},careSequence:careSnapshot(),evolution:JSON.parse(JSON.stringify(state.evolution)),cooldownRemaining:remainingTreatmentMs(),screen:currentScreen,act:pet.act,frame:pet.frame,x:pet.x,ready:assets.ready,loadedActors:Object.keys(assets.actors).filter(k=>assets.actors[k]).length,loadedAnimals:Object.keys(assets.visitors).filter(k=>assets.visitors[k]).length,visitors:visitors.map(v=>({kind:v.kind,x:v.x,y:v.drawY,stationary:!!v.stationary,cycle:v.residentCycle||null,phase:v.phase,visible:v.visible,frame:v.frame,facing:v.facing,rabbitAction:v.kind==='coelho'?v.rabbitAction:null})),visitCount:visitCount,visitorTuning:{abelha:{scale:VISITOR_SPEC.abelha.scale,ms:VISITOR_SPEC.abelha.ms},libelula:{scale:VISITOR_SPEC.libelula.scale,y:VISITOR_SPEC.libelula.y,ms:VISITOR_SPEC.libelula.ms},removed:['beijaflor','passarinho','coelho']},visitorDetails:visitors.map(v=>({kind:v.kind,x0:v.x0,x1:v.x1,stop:v.stop,progress:v.progress,visible:v.visible,fromLeft:v.fromLeft,phase:v.phase,frame:v.frame,near:v.near,stationary:!!v.stationary})),lookingAt:lookAt?.kind||null,inspecting:inspectMode,soundEnabled:SOUND.enabled,soundActive:SOUND.active,assetManager:AssetManager.status(),sceneMachine:SceneMachine.snapshot(),frameMs:FRAME_MS,stats:{...state.stats},healthSystem:JSON.parse(JSON.stringify(state.healthSystem)),sunX:sun.x,sunY:sun.y,buttons:document.querySelectorAll('button').length,fx:fx?.name||null,roomExtra:!!casaBg(),casaRoom:Casa.getRoom(),gardenExtra:!!assets.gardenExtra,voidBg:!!assets.voidBg,voidPulse:!!assets.voidPulse,metabolismRates:Object.fromEntries(Object.entries(currentNeedsRates()).map(([key,rate])=>[key,rate*60])),needsMode:state.needsMode,needsClock:{...needsClock},rightTreeReady:!!assets.rightTreeV26,cloudTravel:{right:((487+161+(sceneTime/1000)*13.5)%885+885)%885-161,left:((247+161-(sceneTime/1000)*10.5)%885+885)%885-161},gardenCareCount:document.querySelectorAll('#needs-garden .needButton').length,frameMs:FRAME_MS,transitionFrame:transition?Math.floor(clamp((GAME_CLOCK.animationNow()-transition.start)/transition.duration,0,1)*10):null,transitionActive:!!transition,loadedSceneSprites:{home:!!casaBg(),void:!!assets.voidV25,houseGarden:!!assets.transHG,gardenHouse:!!assets.transGH}}),personalityLogs:()=>PersonalityMachine.logs(),personalityTick:()=>PersonalityMachine.tick(),personalityTest:PersonalityMachine.test,action:doAction,advanceCare:advanceCareSequence,cancelCare:cancelCareSequence,switch:setScreen,casaRoom:setCasaRoom,casaSpots:()=>Casa.spots().map(x=>({id:x.id,x:x.x,y:x.y,w:x.w,h:x.h,care:x.care||null})),interact:startInteraction,spawnAnimal:(kind)=>{const k=kind||(currentScreen==="care"?"beijaflor":"passarinho");const choices=currentScreen==="care"?homeAnimals:currentScreen==="garden"?gardenAnimals:[];const resident=visitors.find(v=>v.kind===k&&v.stationary);if(resident)return resident.id;if(!faunaPresent(k)||visitors.filter(v=>!v.stationary).length>=2||!choices.includes(k)||!assets.visitors[k]||visitors.some(v=>v.kind===k))return null;const v=newVisitor(k);visitors.push(v);return v.id;},watch:(id)=>{const v=visitors.find(x=>x.id===id);if(v)watchVisitor(v,true);}};
