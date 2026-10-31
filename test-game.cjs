// Pure application-state checks; browser interaction is verified separately.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const elements=new Map(),listeners={};
function element(id){if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',disabled:false,open:false,classList:{add(){},remove(){},toggle(){}},setAttribute(){},removeAttribute(){},querySelector(){return {focus(){}}},addEventListener(){},showModal(){this.open=true},close(){this.open=false}});return elements.get(id);}
const memory=new Map();
const ctx={console,Intl,Date,Math,JSON,Number,String,Array,Set,Promise,Error,document:{getElementById:element,querySelectorAll(){return []},addEventListener(n,f){listeners[n]=f}},localStorage:{getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,v)},window:{scrollTo(){},addEventListener(){}},setInterval:()=>1,clearInterval(){}};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(__dirname+'/questions.js','utf8')+fs.readFileSync(__dirname+'/app.js','utf8').replace('/*FEATURES*/',fs.readFileSync(__dirname+'/features.js','utf8')),ctx);
const run=s=>vm.runInContext(s,ctx);
assert.equal(run('TOPICS.length'),10);
assert.equal(run('new Set(QUESTIONS.map(q=>q.id)).size===QUESTIONS.length'),true);
assert.equal(run('QUESTIONS.every(q=>q.options.length===5&&new Set(q.options).size===5&&q.explanation.length>30)'),true);
assert.equal(run('EXAMS.every(q=>q.examDomain&&q.text.length>140)'),true);
// Grade-filtered balanced selections never leak another class or exam items.
for(const grade of ['9','10','all']){
  run(`selectedGrade='${grade}';selectedTopic='all'`);
  for(let i=0;i<25;i++){
    assert.equal(run('balancedQuestions().length'),10);
    assert.equal(run('balancedQuestions().every(q=>!q.examDomain)'),true);
    if(grade!=='all')assert.equal(run(`balancedQuestions().every(q=>topicBy(q.topic).grade===${grade})`),true);
  }
}
// A complete learning round records progress exactly once per answer.
run("progress=fresh();startGame('learn','bilgi');answer(game.questions[0].choices.findIndex(c=>!c.correct))");
const wrongId=run('game.questions[0].id');
assert.equal(run('progress.mistakes.length'),1);
run('answer(0)');assert.equal(run('progress.answered'),1);
run('next()');
while(!run('game.finished')){
  run('answer(currentQuestion().choices.findIndex(c=>c.correct));next()');
}
assert.equal(run('progress.rounds'),1);
assert.equal(run('progress.answered'),10);
run(`startGame('review','all',[${JSON.stringify(wrongId)}]);answer(currentQuestion().choices.findIndex(c=>c.correct));next()`);
assert.equal(run('progress.mistakes.length'),0);
// Exam selections are editable and never graded before submitting.
run("progress=fresh();elementDuration=0");element('exam-duration').value='0';
run('startExam();chooseExam(0);chooseExam(1)');
assert.equal(run('progress.answered'),0);assert.equal(run('game.selections[0]'),1);
assert.equal(run('new Set(game.questions.map(q=>q.examDomain)).size'),5);
run("navigate('home');resume()");assert.equal(run('game.deadline'),0);
element('info-dialog').close();
run('game.selections=game.questions.map((q,i)=>i<3?q.choices.findIndex(c=>c.correct):i===3?q.choices.findIndex(c=>!c.correct):-1);finishExam()');
assert.equal(run('progress.examHistory[0].correct'),3);assert.equal(run('progress.examHistory[0].wrong'),1);assert.equal(run('progress.examHistory[0].blank'),1);
assert.equal(run('progress.mistakes.length'),2);assert.equal(run('progress.answered'),5);
run('finishExam()');assert.equal(run('progress.answered'),5);
// Correct answer mapping survives shuffle, exam expiry handles unanswered items.
for(let i=0;i<20;i++){
  run('startExam();game.selections=game.questions.map(q=>q.choices.findIndex(c=>c.correct));finishExam()');
  assert.equal(run('progress.examHistory.at(-1).correct'),5);
}
element('exam-duration').value='480';run('startExam();game.deadline=Date.now()-1;examTick()');
assert.equal(run('game.finished'),true);assert.equal(run('progress.examHistory.at(-1).blank'),5);
// An error keeps concepts queued even if later corrected in the same round.
run("progress=fresh();conceptCategory='all';conceptQuery='';startMatching();selectMatch('left',matching.left[0].id);selectMatch('right',matching.items.find(c=>c.id!==matching.left[0].id).id)");
assert.equal(run('progress.conceptMistakes.length'),2);
run("for(const c of matching.items){selectMatch('left',c.id);selectMatch('right',c.id)}");
assert.equal(run('matching.finished'),true);assert.equal(run('progress.conceptMistakes.length'),2);
run("startMatching(true);for(const c of matching.items){selectMatch('left',c.id);selectMatch('right',c.id)}");
assert.equal(run('progress.conceptMistakes.length'),0);
// Old data migrates, invalid IDs and malformed stats are discarded.
memory.set('din-rotasi-v1',JSON.stringify({points:123,answered:6,correct:4,mistakes:['missing'],topics:{bilgi:{correct:9,total:1}},conceptMistakes:['missing']}));
assert.equal(run('readProgress().points'),123);assert.equal(run('readProgress().mistakes.length'),0);assert.equal(run('Object.keys(readProgress().topics).length'),0);
memory.set('din-rotasi-v1','broken');assert.equal(run('readProgress().points'),0);
assert.equal(run("normalize('İHLÂS')===normalize('ihlas')"),true);
console.log('PASS: bank integrity, grade filters, balanced rounds, answer locking, wrong review, exam editing/scoring/expiry, concept retries, migration, search normalization.');
