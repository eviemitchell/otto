const KEY = 'otto-habits-v1';
    const OLD_KEY = 'tend-habits-v1';
    const THEME_KEY = 'otto-theme-v1';
    const OLD_THEME_KEY = 'tend-theme-v1';
    const WORKOUT_KEY = 'otto-workouts-v1';
    const palettes = ['#e8eee4','#f3eadb','#e9e8f1','#f2e4e1','#e2eceb','#efe8dc'];
    const rainbow = ['#cf7d88','#d29465','#c6ae57','#7c9b69','#62a6a5','#698dcc','#967ac1','#bb78a4'];
    const icons = ['🌱','📖','💧','🧘','🚶','☀️','✍️','🪴','🫖','🎨'];
    const seed = [
      {id:'seed-weigh',name:'weigh',type:'amount',target:1,icon:'⚖️',color:palettes[2],entries:{}},
      {id:'seed-cat-litter',name:'litter',type:'daily',target:1,icon:'🐈‍⬛',color:palettes[1],entries:{}},
      {id:'seed-bed',name:'make bed',type:'daily',target:1,icon:'🛏️',color:palettes[0],entries:{}},
      {id:'seed-abrahangs',name:'abrahangs',type:'daily',target:1,icon:'👊',color:palettes[3],entries:{}},
      {id:'seed-fit-check',name:'fit check',type:'daily',target:1,icon:'🌷',color:palettes[3],entries:{}},
      {id:'seed-creatine',name:'creatine',type:'daily',target:1,icon:'🦆',color:palettes[2],entries:{}},
      {id:'seed-draw',name:'draw',type:'weekly',target:2,icon:'✏️',color:palettes[4],entries:{}},
      {id:'seed-workout',name:'train',type:'weekly',target:5,icon:'🧗🏻‍♀️',color:palettes[4],entries:{}}
    ];
    const workoutPlans = [
      {id:'climbing-a',name:'projecting day',kind:'climbing',exercises:[
        {id:'wrist-curls',name:'wrist curls',kind:'timer-weight',sets:4,work:60,setRest:60,details:'1-minute working, 4 sets.'},
        {id:'repeaters',name:'repeaters',kind:'interval',sets:6,reps:10,work:7,rest:3,setRest:60,details:'Hang 7 seconds, rest 3 seconds, repeat 10 times. Rest 1 minute between sets.'},
        {id:'density-hangs',name:'density hangs',kind:'interval-weight',sets:4,reps:3,work:30,rest:240,setRest:240,assisted:true,details:'30-second hangs, 4-minute rest. 3 reps per set, 4-minute rest between sets.'},
        {id:'climbing-ramp',name:'climbing ramp',kind:'timer',sets:1,duration:1200,details:'20 minutes'},
        {id:'projecting',name:'projecting',kind:'timer',sets:1,duration:2400,details:'40 minutes'},
        {id:'weighted-pullups',name:'pullups',kind:'weight-reps',sets:1,assisted:true},
        {id:'face-pulls',name:'face pulls',kind:'weight-reps',sets:1},
        {id:'bicep-curls',name:'bicep curls',kind:'weight-reps',sets:1}
      ]},
      {id:'climbing-b',name:'volume day',kind:'climbing',exercises:[
        {id:'wrist-curls',name:'wrist curls',kind:'timer-weight',sets:4,work:60,setRest:60,details:'1-minute working, 4 sets.'},
        {id:'repeaters',name:'repeaters',kind:'interval',sets:6,reps:10,work:7,rest:3,setRest:60,details:'Hang 7 seconds, rest 3 seconds, repeat 10 times. Rest 1 minute between sets.'},
        {id:'boulder-pyramid',name:'boulder pyramid on the minute',kind:'timer',sets:1,duration:1800,details:'30 minutes'},
        {id:'max-hangs',name:'max hangs',kind:'interval-weight',sets:1,reps:6,work:10,rest:120,setRest:0,details:'10-second hangs, 2-minute rest. 6 reps.'},
        {id:'rdls',name:'romanian deadlift',kind:'weight-reps',sets:5,reps:5,details:'5 sets of 5'},
        {id:'cable-crunch',name:'cable crunch',kind:'weight-reps',sets:3,reps:10,details:'3 sets of 10 reps'}
      ]},
      {id:'climbing-c',name:'techy day',kind:'climbing',exercises:[
        {id:'wrist-curls',name:'wrist curls',kind:'timer-weight',sets:4,work:60,setRest:60,details:'1-minute working, 4 sets.'},
        {id:'repeaters',name:'repeaters',kind:'interval',sets:6,reps:10,work:7,rest:3,setRest:60,details:'Hang 7 seconds, rest 3 seconds, repeat 10 times. Rest 1 minute between sets.'},
        {id:'density-hangs',name:'density hangs',kind:'interval-weight',sets:4,reps:3,work:30,rest:240,setRest:240,assisted:true,details:'30-second hangs, 4-minute rest. 3 reps per set, 4-minute rest between sets.'},
        {id:'boulder-triples',name:'boulder triples',kind:'reps',sets:3,reps:3,details:'Climb the same boulder 3 times with 1-minute rest. Rest 3 minutes between sets.'},
        {id:'bench',name:'bench',kind:'weight-reps',sets:1},
        {id:'tricep-dips',name:'tricep dips',kind:'weight-reps',sets:1,assisted:true},
        {id:'lat-raise',name:'lat raise',kind:'weight-reps',sets:1},
        {id:'cable-crunch',name:'cable crunch',kind:'weight-reps',sets:3,reps:10,details:'3 sets of 10 reps'}
      ]},
      {id:'home-a',name:'home a',kind:'home',exercises:[
        {id:'density-hangs',name:'density hangs',kind:'interval-weight',sets:4,reps:3,work:30,rest:240,setRest:240,assisted:true,details:'30-second hangs, 4-minute rest. 3 reps per set, 4-minute rest between sets.'},
        {id:'wrist-curls',name:'wrist curls',kind:'timer-weight',sets:4,work:60,setRest:60,details:'1-minute working, 4 sets.'},
        {id:'dumbbell-row',name:'dumbbell row',kind:'weight-reps',sets:1},
        {id:'scapular-pushups',name:'scapular pushups',kind:'weight-reps',sets:1},
        {id:'pistol-squats',name:'pistol squats',kind:'weight-reps',sets:1},
        {id:'cable-crunch',name:'cable crunch',kind:'weight-reps',sets:3,reps:10,details:'3 sets of 10 reps'},
        {id:'plank',name:'plank',kind:'timer',sets:3,duration:60,details:'1 minute, 3 reps.'}
      ]},
      {id:'home-b',name:'home b',kind:'home',exercises:[
        {id:'density-hangs',name:'density hangs',kind:'interval-weight',sets:4,reps:3,work:30,rest:240,setRest:240,assisted:true,details:'30-second hangs, 4-minute rest. 3 reps per set, 4-minute rest between sets.'},
        {id:'wrist-curls',name:'wrist curls',kind:'timer-weight',sets:4,work:60,setRest:60,details:'1-minute working, 4 sets.'},
        {id:'lat-pulldowns',name:'lat pulldowns',kind:'weight-reps',sets:1},
        {id:'chest-supported-row',name:'chest-supported row',kind:'weight-reps',sets:1},
        {id:'tricep-pushdown',name:'tricep pushdown',kind:'weight-reps',sets:1},
        {id:'cable-crunch',name:'cable crunch',kind:'weight-reps',sets:3,reps:10,details:'3 sets of 10 reps'},
        {id:'deadbug',name:'deadbug',kind:'timer',sets:3,duration:60,details:'1 minute, 3 reps.'}
      ]},
      {id:'abrahangs',name:'abrahangs',kind:'daily',daily:true,habitId:'seed-abrahangs',exercises:[
        {id:'half-crimp',name:'half crimp',kind:'interval',sets:1,reps:20,work:10,rest:20,details:'Half crimp x6, open three x6, half crimp front two x2, half crimp middle two x2, open front two x2, open middle two x2.'}
      ]}
    ];
    let habits = loadHabits();
    let selectedDate = new Date(); selectedDate.setHours(12,0,0,0);
    let editingId = null; let target = 3; let amountEntry = null; let nativeDragId = null; let touchDrag = null; let skipEditUntil = 0;
    const $ = s => document.querySelector(s);
    const dateKey = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const today = new Date(); today.setHours(12,0,0,0);
    let workoutData=loadWorkoutData(),selectedWorkoutDate=new Date(today),activeRoutineId=null,activeExerciseTimer=null,workoutTimerInterval=null,setContextTarget=null,setTouchGesture=null,renameTarget=null,renamePress=null,renamePressTimer=0,suppressRoutineOpenUntil=0;
    function loadHabits(){
      try {
        const saved=JSON.parse(localStorage.getItem(KEY) ?? localStorage.getItem(OLD_KEY));
        if(!Array.isArray(saved)){localStorage.setItem('otto-seed-goals-v7','done');return seed;}
        const defaultsKey='otto-seed-goals-v7';
        if(!localStorage.getItem(defaultsKey)){
          const removed=saved.filter(h=>h.id==='seed-climb');
          if(removed.length){
            let archived=[];try{archived=JSON.parse(localStorage.getItem('otto-archived-habits-v1')||'[]');}catch{}
            const archiveById=new Map(Array.isArray(archived)?archived.map(h=>[h.id,h]):[]);
            for(const habit of removed)archiveById.set(habit.id,{...habit,archivedAt:new Date().toISOString()});
            localStorage.setItem('otto-archived-habits-v1',JSON.stringify([...archiveById.values()]));
            for(let i=saved.length-1;i>=0;i--)if(saved[i].id==='seed-climb')saved.splice(i,1);
          }
          const byId=new Map(saved.map(h=>[h.id,h]));
          for(const preset of seed){
            const habit=byId.get(preset.id);
            if(habit){
              habit.name=preset.name;habit.type=preset.type;habit.target=preset.target;habit.icon=preset.icon;
              if(!habit.entries||typeof habit.entries!=='object')habit.entries={};
            }else{
              saved.push({...preset,entries:{}});
            }
          }
          const seedOrder=new Map(seed.map((habit,index)=>[habit.id,index]));
          saved.sort((a,b)=>{
            const aOrder=seedOrder.has(a.id)?seedOrder.get(a.id):Infinity;
            const bOrder=seedOrder.has(b.id)?seedOrder.get(b.id):Infinity;
            return aOrder-bOrder;
          });
          localStorage.setItem(KEY,JSON.stringify(saved));
          localStorage.setItem(defaultsKey,'done');
        }
        return saved;
      } catch { return seed; }
    }
    function persist(){ localStorage.setItem(KEY,JSON.stringify(habits)); }
    function loadWorkoutData(){try{const saved=JSON.parse(localStorage.getItem(WORKOUT_KEY));if(saved&&typeof saved==='object')return{completions:saved.completions&&typeof saved.completions==='object'?saved.completions:{},sessions:saved.sessions&&typeof saved.sessions==='object'?saved.sessions:{},customExercises:saved.customExercises&&typeof saved.customExercises==='object'?saved.customExercises:{},exerciseNames:saved.exerciseNames&&typeof saved.exerciseNames==='object'?saved.exerciseNames:{},routineNames:saved.routineNames&&typeof saved.routineNames==='object'?saved.routineNames:{}};}catch{}return{completions:{},sessions:{},customExercises:{},exerciseNames:{},routineNames:{}};}
    function persistWorkouts(){localStorage.setItem(WORKOUT_KEY,JSON.stringify(workoutData));}
    function allRoutineExercises(routine){return [...routine.exercises,...(workoutData.customExercises[routine.id]||[])];}
    function displayExerciseName(routine,exercise){return routine.exercises.includes(exercise)?(workoutData.exerciseNames[routine.id]?.[exercise.id]||exercise.name):exercise.name;}
    function displayRoutineName(routine){return workoutData.routineNames[routine.id]||routine.name;}
    function sessionKey(date=selectedWorkoutDate,routineId=activeRoutineId){return `${dateKey(date)}|${routineId}`;}
    function getWorkoutSession(routine,date=selectedWorkoutDate){const key=sessionKey(date,routine.id);let session=workoutData.sessions[key];if(!session)session=workoutData.sessions[key]={startedAt:null,finishedAt:null,exerciseSets:{}};session.exerciseSets||={};for(const exercise of allRoutineExercises(routine)){if(!Array.isArray(session.exerciseSets[exercise.id]))session.exerciseSets[exercise.id]=Array.from({length:Math.max(1,exercise.sets||1)},()=>({done:false,weight:'',reps:exercise.reps||'',seconds:exercise.duration||exercise.work||''}));}return session;}
    function previousExerciseWeight(exerciseId,date=selectedWorkoutDate){const beforeDate=dateKey(date);let latestDate='',latestWeight='';for(const [key,session] of Object.entries(workoutData.sessions)){const sessionDate=key.split('|',1)[0];if(sessionDate>=beforeDate||sessionDate<latestDate)continue;const sets=session.exerciseSets?.[exerciseId];if(!Array.isArray(sets))continue;for(let index=sets.length-1;index>=0;index--){const weight=sets[index]?.weight;if(weight!==''&&weight!=null&&Number.isFinite(Number(weight))){latestDate=sessionDate;latestWeight=String(weight);break;}}}return latestWeight;}
    function workoutWeekKey(date=selectedWorkoutDate){return dateKey(weekStart(date));}
    function selectedRoutineCompletionDate(routine,date=selectedWorkoutDate){const week=workoutData.completions[workoutWeekKey(date)]||{},completionId=routine.daily?`${routine.id}:${dateKey(date)}`:routine.id,completedDate=week[completionId];return typeof completedDate==='string'?completedDate:null;}
    function toggleRoutineCompletion(routineId){const routine=workoutPlans.find(item=>item.id===routineId);if(!routine)return;const completedDate=selectedRoutineCompletionDate(routine);setWorkoutCompletion(routineId,!completedDate,selectedWorkoutDate);}
    function setWorkoutCompletion(routineId,done,date=selectedWorkoutDate){const routine=workoutPlans.find(item=>item.id===routineId);if(!routine)return;const key=workoutWeekKey(date),completionId=routine.daily?`${routine.id}:${dateKey(date)}`:routine.id;workoutData.completions[key]||={};if(done){workoutData.completions[key][completionId]=dateKey(date);const habitIds=new Set(['seed-workout',routine.habitId].filter(Boolean));for(const id of habitIds){const habit=habits.find(item=>item.id===id);if(!habit)continue;habit.entries||={};const day=dateKey(date);habit.entries[day]=Math.max(1,Number(habit.entries[day])||0);}persist();selectedDate=new Date(date);selectedDate.setHours(12,0,0,0);render();}else delete workoutData.completions[key][completionId];persistWorkouts();}
    function exportBackup(){
      const backup={app:'otto',formatVersion:2,exportedAt:new Date().toISOString(),theme:document.documentElement.dataset.theme||'dark',habits,archivedHabits:JSON.parse(localStorage.getItem('otto-archived-habits-v1')||'[]'),workouts:workoutData};
      const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');
      link.href=url;link.download=`otto-backup-${dateKey(today)}.json`;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    }
    function parseBackup(data){
      if(!data||data.app!=='otto'||![1,2].includes(data.formatVersion)||!Array.isArray(data.habits)||data.habits.length>100)throw new Error('This file is not a supported Otto backup.');
      const ids=new Set(),types=new Set(['daily','weekly','times','amount']);
      const restored=data.habits.map(h=>{
        if(!h||typeof h.id!=='string'||!h.id||h.id.length>100||ids.has(h.id)||typeof h.name!=='string'||!h.name.trim()||h.name.length>48||!types.has(h.type)||!Number.isInteger(h.target)||h.target<1||!h.entries||typeof h.entries!=='object'||Array.isArray(h.entries))throw new Error('The backup contains invalid habit data.');
        ids.add(h.id);const entries={};
        for(const [day,value] of Object.entries(h.entries)){if(!/^\d{4}-\d{2}-\d{2}$/.test(day)||!Number.isFinite(value)||value<0)throw new Error('The backup contains an invalid check-in.');entries[day]=value;}
        return {id:h.id,name:h.name.trim(),type:h.type,target:h.target,icon:typeof h.icon==='string'?h.icon.slice(0,16):'🌱',entries};
      });
      const archivedHabits=Array.isArray(data.archivedHabits)?data.archivedHabits.map(h=>{
        if(!h||typeof h.id!=='string'||typeof h.name!=='string'||!types.has(h.type)||!Number.isInteger(h.target)||h.target<1||!h.entries||typeof h.entries!=='object'||Array.isArray(h.entries))throw new Error('The backup contains invalid archived habit data.');
        const entries={};for(const [day,value] of Object.entries(h.entries)){if(!/^\d{4}-\d{2}-\d{2}$/.test(day)||!Number.isFinite(value)||value<0)throw new Error('The backup contains an invalid archived check-in.');entries[day]=value;}
        return {id:h.id,name:h.name.trim(),type:h.type,target:h.target,icon:typeof h.icon==='string'?h.icon.slice(0,16):'🌱',entries,archivedAt:typeof h.archivedAt==='string'?h.archivedAt:null};
      }):[];
      if(archivedHabits.length>100)throw new Error('The backup contains too many archived habits.');
      return {habits:restored,archivedHabits,theme:['light','dark'].includes(data.theme)?data.theme:null,workouts:parseWorkoutBackup(data.workouts)};
    }
    function parseWorkoutBackup(source){
      const empty={completions:{},sessions:{},customExercises:{},exerciseNames:{},routineNames:{}};if(source==null)return empty;
      if(typeof source!=='object'||Array.isArray(source))throw new Error('The backup contains invalid workout data.');
      const result={completions:source.completions||{},sessions:source.sessions||{},customExercises:source.customExercises||{},exerciseNames:source.exerciseNames||{},routineNames:source.routineNames||{}};
      if([result.completions,result.sessions,result.customExercises,result.exerciseNames,result.routineNames].some(value=>!value||typeof value!=='object'||Array.isArray(value)))throw new Error('The backup contains invalid workout data.');
      const kinds=new Set(['reps','weight-reps','timer','timer-weight','interval','interval-weight']);
      for(const [routineId,items] of Object.entries(result.customExercises)){if(!Array.isArray(items)||items.length>100)throw new Error('The backup contains invalid custom exercises.');for(const exercise of items)if(!exercise||typeof exercise.id!=='string'||typeof exercise.name!=='string'||!exercise.name.trim()||!kinds.has(exercise.kind))throw new Error('The backup contains invalid custom exercises.');}
      for(const names of Object.values(result.exerciseNames))if(!names||typeof names!=='object'||Array.isArray(names)||Object.values(names).some(name=>typeof name!=='string'||!name.trim()||name.length>48))throw new Error('The backup contains invalid exercise names.');
      if(Object.values(result.routineNames).some(name=>typeof name!=='string'||!name.trim()||name.length>48))throw new Error('The backup contains invalid routine names.');
      for(const session of Object.values(result.sessions))if(!session||typeof session!=='object'||!session.exerciseSets||typeof session.exerciseSets!=='object'||Array.isArray(session.exerciseSets)||Object.values(session.exerciseSets).some(sets=>!Array.isArray(sets)||sets.some(set=>!set||typeof set!=='object')))throw new Error('The backup contains invalid workout history.');
      return result;
    }
    function getCount(h,date=dateKey(selectedDate)){ return Number(h.entries?.[date]||0); }
    function lastSevenDays(){return Array.from({length:7},(_,index)=>{const date=new Date(today);date.setDate(date.getDate()-6+index);date.setHours(12,0,0,0);return date;});}
    function habitConsistency(h,days){
      const counts=days.map(day=>getCount(h,dateKey(day)));
      if(h.type==='weekly'){const target=Math.max(1,Number(h.target)||1);return Math.min(counts.filter(count=>count>0).length,target)/target;}
      if(h.type==='times'){const target=Math.max(1,Number(h.target)||1);return counts.reduce((sum,count)=>sum+Math.min(count,target),0)/(target*days.length);}
      if(h.type==='amount')return days.filter(day=>Object.hasOwn(h.entries||{},dateKey(day))).length/days.length;
      return counts.filter(count=>count>0).length/days.length;
    }
    function habitTaskTotals(days){
      let completed=0,possible=0;
      for(const habit of habits){
        const target=Math.max(1,Number(habit.target)||1),counts=days.map(day=>getCount(habit,dateKey(day)));
        if(habit.type==='weekly'){
          possible+=target;completed+=Math.min(counts.filter(count=>count>0).length,target);
        }else if(habit.type==='times'){
          possible+=target*days.length;completed+=counts.reduce((sum,count)=>sum+Math.min(count,target),0);
        }else if(habit.type==='amount'){
          possible+=days.length;completed+=days.filter(day=>Object.hasOwn(habit.entries||{},dateKey(day))).length;
        }else{
          possible+=days.length;completed+=counts.filter(count=>count>0).length;
        }
      }
      return {completed,possible};
    }
    function updateConsistencyHero(){
      const days=lastSevenDays(),scores=habits.map(h=>habitConsistency(h,days));
      const {completed,possible}=habitTaskTotals(days);
      $('#consistencyCount').textContent=`${completed}/${possible}`;
      const format=new Intl.DateTimeFormat(undefined,{month:'long',day:'numeric'});
      $('#consistencyDates').textContent=`${format.format(days[0])} – ${format.format(days[days.length-1])}`;
      return scores;
    }
    function weekStart(d){ const x=new Date(d); x.setDate(x.getDate()-((x.getDay()+6)%7)); x.setHours(12,0,0,0); return x; }
    function weekDates(d){ const start=weekStart(d); return Array.from({length:7},(_,i)=>{const x=new Date(start);x.setDate(x.getDate()+i);return x;}); }
    function achieved(h,date=dateKey(selectedDate)){ return h.type==='times' ? getCount(h,date)>=h.target : getCount(h,date)>0; }
    function safe(s){ return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
    function render(){ renderHeader(); renderDays(); renderHabits(); }
    function renderHeader(){ const ds=weekDates(selectedDate); $('#weekRange').textContent=`${ds[0].toLocaleDateString(undefined,{month:'short',day:'numeric'})} – ${ds[6].toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}`; $('#prevWeek').disabled=false; $('#nextWeek').disabled=weekStart(selectedDate)>=weekStart(today); }
    function renderDays(){ const ds=weekDates(selectedDate); $('#days').innerHTML=ds.map(d=>`<div class="day-header ${dateKey(d)===dateKey(today)?'today':''}">${d.toLocaleDateString(undefined,{weekday:'short'}).slice(0,1)}<span>${d.getDate()}</span></div>`).join(''); }
    function renderHabits(){ const list=$('#habitList'); if(!habits.length){list.innerHTML='<div class="empty"><strong>No habits yet</strong>Add a habit to start checking in.</div>';return;}
      list.innerHTML=habits.map((h,index)=>{
        const week=weekDates(selectedDate),weeklyDone=h.type==='weekly'?week.filter(d=>getCount(h,dateKey(d))>0).length:0;
        const cells=week.map(d=>{const key=dateKey(d),count=getCount(h,key),goal=h.type==='times'?h.target:1,complete=count>=goal,partial=count>0&&!complete,disabled=d>today;const dayLabel=d.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'});if(h.type==='amount'){const hasAmount=Object.hasOwn(h.entries||{},key),value=hasAmount?new Intl.NumberFormat(undefined,{maximumFractionDigits:2,notation:'compact'}).format(count):'';const label=`${h.name}, ${dayLabel}: ${hasAmount?`amount ${count}`:'no amount recorded'}`;return `<button class="check-cell amount-cell ${hasAmount?'has-amount':''}" type="button" data-action="record-amount" data-id="${safe(h.id)}" data-date="${key}" aria-label="${safe(label)}" aria-pressed="${hasAmount}" ${disabled?'disabled':''}>${safe(value)}</button>`;}const state=h.type==='times'?`${Math.min(count,goal)} of ${goal} check-ins`:`${complete?'complete':'not complete'}${h.type==='weekly'?`, ${weeklyDone} of ${h.target} days this week`:''}`;const label=`${h.name}, ${dayLabel}: ${state}`;return `<button class="check-cell ${complete?'complete':partial?'partial':''}" type="button" data-action="cycle" data-id="${safe(h.id)}" data-date="${key}" aria-label="${safe(label)}" aria-pressed="${complete}" ${disabled?'disabled':''}>${complete?checkIcon():partial?count:''}</button>`;}).join('');
        return `<article class="habit" role="group" data-habit-id="${safe(h.id)}" aria-label="${safe(h.name)}" style="--habit-color:${rainbow[index%rainbow.length]}"><div class="habit-identity"><button class="habit-icon" type="button" draggable="true" data-edit="${safe(h.id)}" aria-label="Edit ${safe(h.name)}; drag to reorder" title="Drag to reorder · click to edit">${h.icon||'🌱'}</button><span class="habit-name">${safe(h.name)}</span></div>${cells}<span class="week-divider" aria-hidden="true"></span></article>`;
      }).join('');
      list.querySelectorAll('[data-action="cycle"]').forEach(b=>b.addEventListener('click',()=>changeEntry(b.dataset.id,b.dataset.date)));
      list.querySelectorAll('[data-action="record-amount"]').forEach(b=>b.addEventListener('click',()=>openAmountEntry(b.dataset.id,b.dataset.date)));
      list.querySelectorAll('[data-edit]').forEach(icon=>{
        const row=icon.closest('.habit');
        icon.addEventListener('click',()=>{if(Date.now()<skipEditUntil)return;openEdit(icon.dataset.edit);});
        icon.addEventListener('keydown',e=>{if(!e.altKey||!['ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();const offset=e.key==='ArrowUp'?-1:1;moveHabit(icon.dataset.edit,offset);});
        icon.addEventListener('dragstart',e=>{nativeDragId=icon.dataset.edit;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',nativeDragId);row.classList.add('dragging');});
        icon.addEventListener('dragend',()=>{nativeDragId=null;clearDropMarkers();row.classList.remove('dragging');});
        row.addEventListener('dragover',e=>{if(!nativeDragId)return;e.preventDefault();markDropTarget(row,e.clientY);});
        row.addEventListener('drop',e=>{if(!nativeDragId)return;e.preventDefault();const rect=row.getBoundingClientRect();const after=e.clientY>rect.top+rect.height/2;moveHabitTo(nativeDragId,row.dataset.habitId,after);nativeDragId=null;});
      });
    }
    function clearDropMarkers(){document.querySelectorAll('.habit.drop-before,.habit.drop-after').forEach(row=>row.classList.remove('drop-before','drop-after'));}
    function markDropTarget(row,y){clearDropMarkers();const after=y>row.getBoundingClientRect().top+row.getBoundingClientRect().height/2;row.classList.add(after?'drop-after':'drop-before');return after;}
    function moveHabitTo(fromId,toId,after){if(fromId===toId)return;const from=habits.findIndex(h=>h.id===fromId);if(from<0)return;const [item]=habits.splice(from,1);const to=habits.findIndex(h=>h.id===toId);if(to<0){habits.splice(from,0,item);return;}habits.splice(to+(after?1:0),0,item);persist();render();}
    function moveHabit(id,offset){const from=habits.findIndex(h=>h.id===id),to=from+offset;if(from<0||to<0||to>=habits.length)return;[habits[from],habits[to]]=[habits[to],habits[from]];persist();render();$('#habitList [data-edit="'+CSS.escape(id)+'"]')?.focus();}
    const habitList=$('#habitList');
    habitList.addEventListener('pointerdown',e=>{const icon=e.target.closest('.habit-icon');if(!icon||e.pointerType!=='touch')return;touchDrag={id:icon.dataset.edit,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,dragging:false,targetId:icon.dataset.edit,after:false};});
    window.addEventListener('pointermove',e=>{if(!touchDrag||e.pointerId!==touchDrag.pointerId)return;const dx=e.clientX-touchDrag.startX,dy=e.clientY-touchDrag.startY;if(!touchDrag.dragging&&Math.hypot(dx,dy)>9){touchDrag.dragging=true;habitList.querySelector('[data-edit="'+CSS.escape(touchDrag.id)+'"]')?.closest('.habit')?.classList.add('dragging');}if(!touchDrag.dragging)return;e.preventDefault();const row=document.elementFromPoint(e.clientX,e.clientY)?.closest('.habit');if(row){touchDrag.targetId=row.dataset.habitId;touchDrag.after=markDropTarget(row,e.clientY);}}, {passive:false});
    function finishTouchDrag(e,cancelled=false){if(!touchDrag||e.pointerId!==touchDrag.pointerId)return;if(touchDrag.dragging&&!cancelled){moveHabitTo(touchDrag.id,touchDrag.targetId,touchDrag.after);skipEditUntil=Date.now()+500;}clearDropMarkers();habitList.querySelectorAll('.habit.dragging').forEach(row=>row.classList.remove('dragging'));touchDrag=null;}
    window.addEventListener('pointerup',e=>finishTouchDrag(e));window.addEventListener('pointercancel',e=>finishTouchDrag(e,true));
    function checkIcon(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4.5 4.5L19 7"/></svg>';}
    function formatClock(seconds){const n=Math.max(0,Math.ceil(seconds));return `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;}
    function dateLabel(date,options={weekday:'long',month:'long',day:'numeric'}){return date.toLocaleDateString(undefined,options);}
    function renderWorkoutCalendar(){
      const days=weekDates(selectedWorkoutDate),weekKey=workoutWeekKey(selectedWorkoutDate),done=workoutData.completions[weekKey]||{};
      $('#workoutWeekLabel').textContent=`${days[0].toLocaleDateString(undefined,{month:'long'})} ${days[0].getFullYear()} · ${days[0].toLocaleDateString(undefined,{month:'short',day:'numeric'})} – ${days[6].toLocaleDateString(undefined,{month:'short',day:'numeric'})}`;
      $('#workoutCalendar').innerHTML=days.map(day=>{const key=dateKey(day),count=Object.values(done).filter(value=>value===key).length;return `<button class="workout-day ${key===dateKey(today)?'today':''}" type="button" data-workout-date="${key}" aria-pressed="${key===dateKey(selectedWorkoutDate)}"><span class="workout-day-name">${day.toLocaleDateString(undefined,{weekday:'short'}).slice(0,2)}</span><span class="workout-day-number">${day.getDate()}</span><span class="workout-day-dots" aria-hidden="true">${Array.from({length:Math.min(count,5)},()=>'<i></i>').join('')}</span></button>`;}).join('');
      $('#workoutPrevWeek').disabled=false;$('#workoutNextWeek').disabled=weekStart(selectedWorkoutDate)>=weekStart(today);
    }
    function renderRoutineList(){
      const list=$('#routineList'),ordered=[...workoutPlans].sort((a,b)=>Number(Boolean(selectedRoutineCompletionDate(a)))-Number(Boolean(selectedRoutineCompletionDate(b))));list.innerHTML=ordered.map(routine=>{
        const date=selectedRoutineCompletionDate(routine),done=Boolean(date),label=done?`Done ${dateLabel(new Date(`${date}T12:00:00`),{month:'short',day:'numeric'})}`:`${routine.daily?'Daily · ':''}${allRoutineExercises(routine).length} exercises`;
        const routineName=displayRoutineName(routine);
        return `<article class="workout-card ${done?'recently-done':'needs-work'}"><button class="workout-card-open" type="button" data-open-routine="${safe(routine.id)}" aria-label="Open ${safe(routineName)} workout"><div class="workout-card-copy"><h2 data-rename-routine="${safe(routine.id)}" title="Right-click or press and hold to rename">${safe(routineName)}</h2><p>${safe(label)}</p></div></button><button class="workout-quick" type="button" data-quick-routine="${safe(routine.id)}" aria-label="${done?'Undo':'Quick complete'} ${safe(routineName)}" aria-pressed="${done}">${checkIcon()}</button></article>`;
      }).join('');
    }
    function renderWorkouts(){renderWorkoutCalendar();renderRoutineList();}
    function setRowsFor(exercise,session){return session.exerciseSets[exercise.id]||[];}
    function openWorkoutMode(routineId){const routine=workoutPlans.find(item=>item.id===routineId);if(!routine)return;activeRoutineId=routineId;const session=getWorkoutSession(routine);session.startedAt||=new Date().toISOString();persistWorkouts();$('#workoutBrowse').hidden=true;$('#workoutMode').hidden=false;renderWorkoutMode();}
    function renderWorkoutMode(){
      const routine=workoutPlans.find(item=>item.id===activeRoutineId);if(!routine)return;const session=getWorkoutSession(routine),exercises=allRoutineExercises(routine);
      $('#activeWorkoutTitle').textContent=displayRoutineName(routine);$('#activeWorkoutTitle').dataset.renameRoutine=routine.id;$('#activeWorkoutTitle').title='Right-click or press and hold to rename';
      $('#exerciseList').innerHTML=exercises.map(exercise=>{
        const exerciseName=displayExerciseName(routine,exercise);
        const records=setRowsFor(exercise,session),hasWeight=['weight-reps','interval-weight','timer-weight'].includes(exercise.kind),hasReps=['weight-reps','reps'].includes(exercise.kind),isTimer=['timer','interval','interval-weight','timer-weight'].includes(exercise.kind),isInterval=['interval','interval-weight','timer-weight'].includes(exercise.kind),hasRepCounter=isInterval&&Number(exercise.reps)>0,previousWeight=hasWeight?previousExerciseWeight(exercise.id):'';
        const detail=[exercise.details,exercise.assisted?'Weight can be negative for assistance.':''].filter(Boolean).join(' ');
        const fieldLabels=[...(hasWeight?['Weight']:[]),...(isTimer?['Timer']:hasReps?['Reps']:[]),...(hasRepCounter?['Reps']:[])];
        const gridClass=`set-fields-${fieldLabels.length}`;
        const headings=`<span>Set</span>${fieldLabels.map(label=>`<span>${label}</span>`).join('')}<span></span>`;
        const rows=records.map((record,index)=>{
          const weightInput=hasWeight?`<input type="number" step="any" data-set-field="weight" data-exercise="${safe(exercise.id)}" data-set-index="${index}" value="${safe(record.weight??'')}" placeholder="${safe(previousWeight||'lb')}" class="${previousWeight?'has-previous-weight':''}" title="${previousWeight?`Previous workout: ${safe(previousWeight)} lb`:''}" aria-label="${safe(exerciseName)} set ${index+1} weight${previousWeight?`, previous workout ${safe(previousWeight)} pounds`:''}">`:'';
          const check=`<button class="set-check ${record.done?'done':''}" type="button" data-set-done="${safe(exercise.id)}" data-set-index="${index}" aria-label="${record.done?'Uncheck':'Complete'} ${safe(exerciseName)} set ${index+1}" aria-pressed="${record.done}">${record.done?'✓':'✓'}</button>`;
          const deleteAction=`<button class="swipe-delete-action" type="button" data-delete-set="${safe(exercise.id)}" data-set-index="${index}" aria-label="Delete ${safe(exerciseName)} set ${index+1}">Delete</button>`;
          const repsInput=hasReps?`<input type="number" step="1" min="0" data-set-field="reps" data-exercise="${safe(exercise.id)}" data-set-index="${index}" value="${safe(record.reps??'')}" placeholder="reps" aria-label="${safe(exerciseName)} set ${index+1} reps">`:'<span class="set-spacer"></span>';
          const timerActive=activeExerciseTimer?.routineId===activeRoutineId&&activeExerciseTimer.date===dateKey(selectedWorkoutDate)&&activeExerciseTimer.exerciseId===exercise.id&&activeExerciseTimer.setIndex===index;
          const timerLabel=exercise.kind==='timer'?formatClock(record.seconds||exercise.duration):`${Number(exercise.reps)||1} × ${formatClock(exercise.work)}`;
          const timerButton=isTimer?'':`<button class="set-timer ${timerActive?'set-timer-restart':''}" type="button" data-start-timer="${safe(exercise.id)}" data-set-index="${index}" aria-label="${timerActive?'Restart':'Start'} ${safe(exerciseName)} timer" ${record.done?'disabled':''}>${timerActive?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5"/><path d="M19.2 12A7.5 7.5 0 1 1 17 6.7L20 12"/></svg>':record.done?'Done':'Start'}</button>`;
          const timerHtml=isTimer?`<div class="timer-control"><span class="timer-readout" data-timer-readout="${safe(exercise.id)}:${index}">${timerLabel}</span>${timerButton}</div>`:'';
          const repCounter=hasRepCounter?`<span class="rep-counter" data-rep-counter="${safe(exercise.id)}:${index}">${record.done?exercise.reps:0}/${exercise.reps}</span>`:'';
          const fields=[...(hasWeight?[weightInput]:[]),...(isTimer?[timerHtml]:hasReps?[repsInput]:[]),...(hasRepCounter?[repCounter]:[])].join('');
          return `<div class="set-row ${gridClass} ${isTimer?'timer-set':''} ${record.done?'is-done':''}" data-set-row="${safe(exercise.id)}" data-set-index="${index}" tabindex="-1" aria-label="${safe(exerciseName)} set ${index+1}">${deleteAction}<span class="set-number">${index+1}</span>${fields}${check}</div>`;
        }).join('');
        const exerciseTimerActive=activeExerciseTimer?.routineId===activeRoutineId&&activeExerciseTimer.date===dateKey(selectedWorkoutDate)&&activeExerciseTimer.exerciseId===exercise.id;
        const allSetsDone=records.length>0&&records.every(record=>record.done);
        const exerciseTimerButton=isTimer?`<button class="exercise-timer-start ${exerciseTimerActive?'is-running':''}" type="button" data-start-exercise-timer="${safe(exercise.id)}" aria-label="${exerciseTimerActive?`Restart ${exerciseName} set ${activeExerciseTimer.setIndex+1}`:`Start ${exerciseName}`}" ${allSetsDone&&!exerciseTimerActive?'disabled':''}>${exerciseTimerActive?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5"/><path d="M19.2 12A7.5 7.5 0 1 1 17 6.7L20 12"/></svg>':allSetsDone?'Done':'Start'}</button>`:'';
        return `<article class="exercise-card" data-exercise-card="${safe(exercise.id)}"><div class="exercise-top"><div><h2 class="exercise-title" data-rename-exercise="${safe(exercise.id)}" title="Right-click or press and hold to rename">${safe(exerciseName)}</h2>${detail?`<p class="exercise-detail">${safe(detail)}</p>`:''}</div>${exerciseTimerButton}</div><div class="set-head ${gridClass}">${headings}</div>${rows}<button class="add-set-btn" type="button" data-add-set="${safe(exercise.id)}">＋ Add set</button></article>`;
      }).join('');
    }
    function openRenameDialog(target){if($('#renameExerciseDialog').open)return;const routine=workoutPlans.find(item=>item.id===target.routineId);if(!routine)return;renameTarget=target;const isRoutine=target.kind==='routine',exercise=!isRoutine&&allRoutineExercises(routine).find(item=>item.id===target.exerciseId);if(!isRoutine&&!exercise){renameTarget=null;return;}$('#renameDialogTitle').textContent=isRoutine?'Rename routine':'Rename exercise';$('#renameDialogDescription').textContent=isRoutine?'Update the name shown for this routine.':'Update the name in this routine.';$('#renameDialogLabel').textContent=isRoutine?'Routine name':'Exercise name';$('#renameExerciseName').value=isRoutine?displayRoutineName(routine):displayExerciseName(routine,exercise);$('#renameExerciseDialog').showModal();$('#renameExerciseName').focus();$('#renameExerciseName').select();}
    function openExerciseRename(exerciseId){const routine=workoutPlans.find(item=>item.id===activeRoutineId),exercise=routine&&allRoutineExercises(routine).find(item=>item.id===exerciseId);if(!routine||!exercise)return;openRenameDialog({kind:'exercise',routineId:routine.id,exerciseId,isPreset:routine.exercises.includes(exercise)});}
    function openRoutineRename(routineId){openRenameDialog({kind:'routine',routineId});}
    function closeExerciseRename(){$('#renameExerciseDialog').close();renameTarget=null;}
    function startExerciseTimer(exerciseId,setIndex){
      const routine=workoutPlans.find(item=>item.id===activeRoutineId),exercise=routine&&allRoutineExercises(routine).find(item=>item.id===exerciseId);if(!exercise)return;
      const session=getWorkoutSession(routine),record=session.exerciseSets[exercise.id][setIndex];if(!record||record.done)return;
      activeExerciseTimer={routineId:activeRoutineId,date:dateKey(selectedWorkoutDate),exerciseId,setIndex,phase:'work',round:0,endsAt:Date.now()+((exercise.kind==='timer'?Number(record.seconds)||exercise.duration:exercise.work)||1)*1000};
      if(!workoutTimerInterval)workoutTimerInterval=setInterval(tickWorkoutTimers,250);renderWorkoutMode();tickWorkoutTimers();
    }
    function closeSetContextMenu(){const menu=$('#setContextMenu');menu.hidden=true;setContextTarget=null;}
    function showSetContextMenu(event,row){
      event.preventDefault();setContextTarget={exerciseId:row.dataset.setRow,setIndex:Number(row.dataset.setIndex)};
      const menu=$('#setContextMenu');menu.hidden=false;
      menu.style.left=`${Math.max(8,Math.min(event.clientX,window.innerWidth-168))}px`;
      menu.style.top=`${Math.max(8,Math.min(event.clientY,window.innerHeight-58))}px`;
      $('#deleteSetFromMenu').focus();
    }
    function deleteWorkoutSet(exerciseId,setIndex){
      const routine=workoutPlans.find(item=>item.id===activeRoutineId);if(!routine)return;
      const session=getWorkoutSession(routine),records=session.exerciseSets[exerciseId];if(!records||setIndex<0||setIndex>=records.length)return;
      records.splice(setIndex,1);
      if(activeExerciseTimer?.routineId===routine.id&&activeExerciseTimer.date===dateKey(selectedWorkoutDate)&&activeExerciseTimer.exerciseId===exerciseId){
        if(activeExerciseTimer.setIndex===setIndex)activeExerciseTimer=null;
        else if(activeExerciseTimer.setIndex>setIndex)activeExerciseTimer.setIndex--;
      }
      closeSetContextMenu();persistWorkouts();renderWorkoutMode();
    }
    function setComplete(exerciseId,setIndex){
      const routine=workoutPlans.find(item=>item.id===activeRoutineId);if(!routine)return;const session=getWorkoutSession(routine),record=session.exerciseSets[exerciseId]?.[setIndex];if(!record)return;record.done=!record.done;if(activeExerciseTimer?.routineId===routine.id&&activeExerciseTimer.date===dateKey(selectedWorkoutDate)&&activeExerciseTimer.exerciseId===exerciseId&&activeExerciseTimer.setIndex===setIndex)activeExerciseTimer=null;persistWorkouts();renderWorkoutMode();renderActiveTimerFab();
    }
    function renderActiveTimerFab(){
      const widget=$('#activeTimerWidget'),fab=$('#activeTimerFab'),timer=activeExerciseTimer,workoutOpen=Boolean(activeRoutineId&&!$('#workoutsPage').hidden&&!$('#workoutMode').hidden);
      if(!workoutOpen||!timer){widget.hidden=true;return;}
      const routine=workoutPlans.find(item=>item.id===timer.routineId),exercise=routine&&allRoutineExercises(routine).find(item=>item.id===timer.exerciseId);
      if(!exercise){widget.hidden=true;return;}
      const remaining=Math.max(0,(timer.paused?timer.pausedRemainingMs:timer.endsAt-Date.now())/1000),name=displayExerciseName(routine,exercise),repTotal=Number(exercise.reps)||1,isPaused=Boolean(timer.paused),phaseLabel=['rest','set-rest'].includes(timer.phase)?'rest':['interval','interval-weight','timer-weight'].includes(exercise.kind)?`rep ${Math.min(timer.round+1,repTotal)}/${repTotal}`:'timer';
      $('#activeTimerFabLabel').textContent=formatClock(remaining);$('#activeTimerFabPhase').textContent=phaseLabel;
      widget.classList.toggle('timer-phase-rest',!isPaused&&phaseLabel==='rest');widget.classList.toggle('timer-phase-work',!isPaused&&phaseLabel!=='rest');widget.classList.toggle('timer-phase-paused',isPaused);
      fab.setAttribute('aria-label',`${formatClock(remaining)}, ${phaseLabel}, ${name}, set ${timer.setIndex+1}. Tap to return to timer`);fab.title=`${name} · set ${timer.setIndex+1}`;
      const pause=$('#activeTimerPause'),close=$('#activeTimerClose');pause.innerHTML=isPaused?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>';pause.setAttribute('aria-label',isPaused?'Resume timer':'Pause timer');pause.title=isPaused?'Resume timer':'Pause timer';close.hidden=!isPaused;widget.hidden=false;
    }
    function focusRunningSet(){const timer=activeExerciseTimer;if(!timer)return;selectedWorkoutDate=new Date(`${timer.date}T12:00:00`);showView('workouts');if(activeRoutineId!==timer.routineId||$('#workoutMode').hidden)openWorkoutMode(timer.routineId);else renderWorkoutMode();requestAnimationFrame(()=>{const row=document.querySelector(`[data-set-row="${CSS.escape(timer.exerciseId)}"][data-set-index="${timer.setIndex}"]`);if(!row)return;const rect=row.getBoundingClientRect(),toolbarTop=$('#bottomToolbar').getBoundingClientRect().top,visibleBottom=Math.min(window.innerHeight,toolbarTop-12);if(rect.top<0||rect.bottom>visibleBottom)row.scrollIntoView({behavior:'smooth',block:'center'});row.focus({preventScroll:true});});}
    function nextTimerSet(exercise,session,currentIndex){return session.exerciseSets[exercise.id].findIndex((set,index)=>index>currentIndex&&!set.done);}
    function startTimedSet(timer,exercise,session,setIndex){const record=session.exerciseSets[exercise.id][setIndex];timer.setIndex=setIndex;timer.phase='work';timer.round=0;timer.endsAt=Date.now()+((exercise.kind==='timer'?Number(record.seconds)||exercise.duration:exercise.work)||1)*1000;}
    function finishTimedSet(timer,routine,exercise,session,record){record.done=true;const nextIndex=nextTimerSet(exercise,session,timer.setIndex);if(nextIndex>=0){const restSeconds=exercise.setRest==null?60:Number(exercise.setRest);if(restSeconds>0){timer.phase='set-rest';timer.endsAt=Date.now()+restSeconds*1000;}else startTimedSet(timer,exercise,session,nextIndex);}else activeExerciseTimer=null;persistWorkouts();if(activeRoutineId===routine.id)renderWorkoutMode();}
    function nextTimerSet(exercise,session,currentIndex){return session.exerciseSets[exercise.id].findIndex((set,index)=>index>currentIndex&&!set.done);}
    function startTimedSet(timer,exercise,session,setIndex){const record=session.exerciseSets[exercise.id][setIndex];timer.setIndex=setIndex;timer.phase='work';timer.round=0;timer.paused=false;timer.endsAt=Date.now()+((exercise.kind==='timer'?Number(record.seconds)||exercise.duration:exercise.work)||1)*1000;}
    function finishTimedSet(timer,routine,exercise,session,record){record.done=true;const nextIndex=nextTimerSet(exercise,session,timer.setIndex);if(nextIndex>=0){const restSeconds=exercise.setRest==null?60:Number(exercise.setRest);if(restSeconds>0){timer.phase='set-rest';timer.endsAt=Date.now()+restSeconds*1000;}else startTimedSet(timer,exercise,session,nextIndex);}else activeExerciseTimer=null;persistWorkouts();if(activeRoutineId===routine.id)renderWorkoutMode();}
    function toggleExerciseTimerPause(){const timer=activeExerciseTimer;if(!timer)return;if(timer.paused){timer.endsAt=Date.now()+timer.pausedRemainingMs;delete timer.pausedRemainingMs;timer.paused=false;}else{timer.pausedRemainingMs=Math.max(0,timer.endsAt-Date.now());timer.paused=true;}tickWorkoutTimers();}
    function discardCurrentTimedExercise(){const timer=activeExerciseTimer;if(!timer?.paused)return;const routine=workoutPlans.find(item=>item.id===timer.routineId),exercise=routine&&allRoutineExercises(routine).find(item=>item.id===timer.exerciseId);if(!routine||!exercise)return;const session=getWorkoutSession(routine,new Date(`${timer.date}T12:00:00`)),records=session.exerciseSets[exercise.id]||[];for(const record of records){record.done=false;record.weight='';record.reps=exercise.reps||'';record.seconds=exercise.duration||exercise.work||'';}activeExerciseTimer=null;persistWorkouts();if(activeRoutineId===routine.id)renderWorkoutMode();tickWorkoutTimers();}
    function tickWorkoutTimers(){
      const timer=activeExerciseTimer,routine=workoutPlans.find(item=>item.id===timer?.routineId);if(timer&&routine){const timerDate=new Date(`${timer.date}T12:00:00`),exercise=allRoutineExercises(routine).find(item=>item.id===timer.exerciseId),session=getWorkoutSession(routine,timerDate),record=session.exerciseSets[timer.exerciseId]?.[timer.setIndex];if(!exercise||!record||record.done&&timer.phase!=='set-rest')activeExerciseTimer=null;else if(!timer.paused&&Date.now()>=timer.endsAt){
          if(timer.phase==='set-rest'){const nextIndex=nextTimerSet(exercise,session,timer.setIndex);if(nextIndex>=0)startTimedSet(timer,exercise,session,nextIndex);else activeExerciseTimer=null;}
          else if(exercise.kind==='timer')finishTimedSet(timer,routine,exercise,session,record);
          else if(timer.phase==='work'){timer.round++;if(timer.round>=Number(exercise.reps||1))finishTimedSet(timer,routine,exercise,session,record);else if(exercise.rest){timer.phase='rest';timer.endsAt=Date.now()+exercise.rest*1000;}else{timer.endsAt=Date.now()+exercise.work*1000;}}
          else{timer.phase='work';timer.endsAt=Date.now()+exercise.work*1000;}
        }
        if(activeExerciseTimer){const remaining=(timer.paused?timer.pausedRemainingMs:timer.endsAt-Date.now())/1000,isRestPhase=['rest','set-rest'].includes(timer.phase),phase=isRestPhase?'Rest':'Hang',label=isRestPhase?`Rest · ${formatClock(remaining)}`:formatClock(remaining),selector=`${CSS.escape(timer.exerciseId)}:${timer.setIndex}`,readout=activeRoutineId===routine.id&&timer.date===dateKey(selectedWorkoutDate)?document.querySelector(`[data-timer-readout="${selector}"]`):null,repCounter=activeRoutineId===routine.id&&timer.date===dateKey(selectedWorkoutDate)?document.querySelector(`[data-rep-counter="${selector}"]`):null;if(readout){readout.textContent=label;readout.setAttribute('aria-label',`${phase}, ${formatClock(remaining)} remaining`);}if(repCounter){const progress=isRestPhase?timer.round:Math.min(timer.round+1,Number(exercise.reps)||1);repCounter.textContent=`${progress}/${exercise.reps}`;}}
      }
      renderActiveTimerFab();
      if(!activeExerciseTimer&&workoutTimerInterval){clearInterval(workoutTimerInterval);workoutTimerInterval=null;}
    }
    function changeEntry(id,key){const h=habits.find(x=>x.id===id);if(!h)return;h.entries||={};const goal=h.type==='times'?h.target:1;let n=getCount(h,key);n=n>=goal?0:n+1;if(n)h.entries[key]=n;else delete h.entries[key];persist();render();}
    function setTheme(theme){document.documentElement.dataset.theme=theme;localStorage.setItem(THEME_KEY,theme);$('#themeToggle').innerHTML=theme==='dark'?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 15.5A8.5 8.5 0 0 1 8.5 3.8 8.6 8.6 0 1 0 20.2 15.5Z"/></svg>';$('#themeToggle').setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode');document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#282a29':'#f8f7f2';}
    function openNew(){editingId=null;$('#dialogTitle').textContent='Add a habit';$('#habitForm').reset();$('#targetRow').hidden=true;$('#deleteHabit').hidden=true;$('#habitDialog').showModal();$('#habitName').focus();}
    function openEdit(id){const h=habits.find(x=>x.id===id);if(!h)return;editingId=id;$('#dialogTitle').textContent='Edit a habit';$('#habitName').value=h.name;$('#habitIcon').value=h.icon||'🌱';document.querySelector(`input[name="goalType"][value="${h.type}"]`).checked=true;target=h.target||3;updateTarget();$('#targetRow').hidden=!['weekly','times'].includes(h.type);$('#deleteHabit').hidden=false;$('#habitDialog').showModal();}
    function updateTarget(){const type=document.querySelector('input[name="goalType"]:checked').value;$('#targetLabel').textContent=type==='weekly'?'Days per week':'Times per day';$('#targetValue').textContent=target;}
    function openAmountEntry(id,key){const h=habits.find(x=>x.id===id);if(!h)return;amountEntry={id,key};const day=new Date(`${key}T12:00:00`);$('#amountDescription').textContent=`${h.name} · ${day.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})}`;$('#amountValue').value=Object.hasOwn(h.entries||{},key)?h.entries[key]:'';$('#amountDialog').showModal();$('#amountValue').focus();}
    $('#addHabit').addEventListener('click',openNew);$('#closeDialog').addEventListener('click',()=>$('#habitDialog').close());$('#habitDialog').addEventListener('click',e=>{if(e.target===$('#habitDialog'))$('#habitDialog').close();});
    document.querySelectorAll('input[name="goalType"]').forEach(r=>r.addEventListener('change',()=>{$('#targetRow').hidden=!['weekly','times'].includes(r.value);target=r.value==='weekly'?3:2;updateTarget();}));
    $('#targetMinus').addEventListener('click',()=>{target=Math.max(1,target-1);updateTarget();});$('#targetPlus').addEventListener('click',()=>{const type=document.querySelector('input[name="goalType"]:checked').value;target=Math.min(type==='weekly'?7:20,target+1);updateTarget();});
    $('#habitForm').addEventListener('submit',e=>{e.preventDefault();const name=$('#habitName').value.trim();if(!name)return;const type=document.querySelector('input[name="goalType"]:checked').value;const icon=$('#habitIcon').value.trim()||'🌱';const savedTarget=['weekly','times'].includes(type)?target:1;if(editingId){const h=habits.find(x=>x.id===editingId);h.name=name;h.icon=icon;h.type=type;h.target=savedTarget;}else habits.push({id:crypto.randomUUID(),name,type,target:savedTarget,icon,color:palettes[Math.floor(Math.random()*palettes.length)],entries:{}});persist();$('#habitDialog').close();render();});
    $('#closeAmountDialog').addEventListener('click',()=>$('#amountDialog').close());$('#cancelAmount').addEventListener('click',()=>$('#amountDialog').close());$('#amountDialog').addEventListener('click',e=>{if(e.target===$('#amountDialog'))$('#amountDialog').close();});
    $('#amountForm').addEventListener('submit',e=>{e.preventDefault();if(!amountEntry)return;const value=Number($('#amountValue').value);if(!Number.isFinite(value))return;const h=habits.find(x=>x.id===amountEntry.id);if(!h)return;h.entries||={};h.entries[amountEntry.key]=value;persist();$('#amountDialog').close();amountEntry=null;render();});
    $('#deleteHabit').addEventListener('click',()=>{if(!editingId)return;habits=habits.filter(h=>h.id!==editingId);persist();$('#habitDialog').close();render();});
    $('#themeToggle').addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
    $('#workoutPrevWeek').addEventListener('click',()=>{selectedWorkoutDate.setDate(selectedWorkoutDate.getDate()-7);renderWorkouts();});
    $('#workoutNextWeek').addEventListener('click',()=>{if(weekStart(selectedWorkoutDate)<weekStart(today)){selectedWorkoutDate.setDate(selectedWorkoutDate.getDate()+7);renderWorkouts();}});
    $('#workoutCalendar').addEventListener('click',e=>{const day=e.target.closest('[data-workout-date]');if(!day)return;selectedWorkoutDate=new Date(`${day.dataset.workoutDate}T12:00:00`);renderWorkouts();});
    $('#routineList').addEventListener('click',e=>{if(e.target.closest('[data-rename-routine]')&&Date.now()<suppressRoutineOpenUntil){e.preventDefault();e.stopPropagation();suppressRoutineOpenUntil=0;return;}const quick=e.target.closest('[data-quick-routine]');if(quick){e.stopPropagation();toggleRoutineCompletion(quick.dataset.quickRoutine);renderWorkouts();return;}const card=e.target.closest('[data-open-routine]');if(card)openWorkoutMode(card.dataset.openRoutine);});
    $('#routineList').addEventListener('contextmenu',e=>{const title=e.target.closest('[data-rename-routine]');if(title){e.preventDefault();openRoutineRename(title.dataset.renameRoutine);}});
    $('#leaveWorkout').addEventListener('click',()=>{activeRoutineId=null;$('#workoutMode').hidden=true;$('#workoutBrowse').hidden=false;renderWorkouts();});
    $('#finishWorkout').addEventListener('click',()=>{const routine=workoutPlans.find(item=>item.id===activeRoutineId);if(!routine)return;const session=getWorkoutSession(routine);session.finishedAt=new Date().toISOString();setWorkoutCompletion(routine.id,true,selectedWorkoutDate);activeRoutineId=null;$('#workoutMode').hidden=true;$('#workoutBrowse').hidden=false;renderWorkouts();});
    $('#activeTimerFab').addEventListener('click',focusRunningSet);
    $('#activeTimerPause').addEventListener('click',toggleExerciseTimerPause);
    $('#activeTimerClose').addEventListener('click',discardCurrentTimedExercise);
    $('#exerciseList').addEventListener('input',e=>{const input=e.target.closest('[data-set-field]');if(!input)return;const routine=workoutPlans.find(item=>item.id===activeRoutineId);if(!routine)return;const session=getWorkoutSession(routine),record=session.exerciseSets[input.dataset.exercise]?.[Number(input.dataset.setIndex)];if(!record)return;record[input.dataset.setField]=input.value;persistWorkouts();});
    $('#workoutMode').addEventListener('contextmenu',e=>{const routineTitle=e.target.closest('[data-rename-routine]');if(routineTitle){e.preventDefault();openRoutineRename(routineTitle.dataset.renameRoutine);return;}const exerciseTitle=e.target.closest('[data-rename-exercise]');if(exerciseTitle){e.preventDefault();openExerciseRename(exerciseTitle.dataset.renameExercise);return;}const row=e.target.closest('[data-set-row]');if(row)showSetContextMenu(e,row);});
    function clearRenamePress(){if(renamePressTimer)clearTimeout(renamePressTimer);renamePressTimer=0;renamePress=null;}
    function startRenamePress(e){if(e.pointerType!=='touch')return;const routineTitle=e.target.closest('[data-rename-routine]'),exerciseTitle=e.target.closest('[data-rename-exercise]');if(!routineTitle&&!exerciseTitle)return;renamePress={kind:routineTitle?'routine':'exercise',id:routineTitle?.dataset.renameRoutine||exerciseTitle.dataset.renameExercise,pointerId:e.pointerId,x:e.clientX,y:e.clientY};renamePressTimer=setTimeout(()=>{const pending=renamePress;clearRenamePress();if(!pending)return;if(pending.kind==='routine'){suppressRoutineOpenUntil=Date.now()+1200;openRoutineRename(pending.id);}else openExerciseRename(pending.id);},550);}
    $('#routineList').addEventListener('pointerdown',startRenamePress);
    $('#workoutMode').addEventListener('pointerdown',startRenamePress);
    window.addEventListener('pointermove',e=>{if(!renamePress||renamePress.pointerId!==e.pointerId)return;if(Math.hypot(e.clientX-renamePress.x,e.clientY-renamePress.y)>10)clearRenamePress();});
    window.addEventListener('pointerup',e=>{if(renamePress?.pointerId===e.pointerId)clearRenamePress();});
    window.addEventListener('pointercancel',e=>{if(renamePress?.pointerId===e.pointerId)clearRenamePress();});
    $('#exerciseList').addEventListener('pointerdown',e=>{
      if(e.pointerType!=='touch')return;
      const row=e.target.closest('[data-set-row]');
      if(!row||e.target.closest('button')){if(!e.target.closest('[data-delete-set]'))$('#exerciseList').querySelectorAll('.swipe-delete-ready').forEach(item=>item.classList.remove('swipe-delete-ready'));setTouchGesture=null;return;}
      $('#exerciseList').querySelectorAll('.swipe-delete-ready').forEach(item=>{if(item!==row)item.classList.remove('swipe-delete-ready');});
      setTouchGesture={pointerId:e.pointerId,row,startX:e.clientX,startY:e.clientY};
    });
    window.addEventListener('pointerup',e=>{if(!setTouchGesture||setTouchGesture.pointerId!==e.pointerId)return;const dx=e.clientX-setTouchGesture.startX,dy=e.clientY-setTouchGesture.startY;if(dx>64&&Math.abs(dy)<42)setTouchGesture.row.classList.add('swipe-delete-ready');else if(dx< -32)setTouchGesture.row.classList.remove('swipe-delete-ready');setTouchGesture=null;});
    window.addEventListener('pointercancel',e=>{if(setTouchGesture?.pointerId===e.pointerId)setTouchGesture=null;});
    document.addEventListener('pointerdown',e=>{if(!e.target.closest('#setContextMenu'))closeSetContextMenu();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#setContextMenu').hidden){closeSetContextMenu();}});
    $('#deleteSetFromMenu').addEventListener('click',()=>{if(setContextTarget)deleteWorkoutSet(setContextTarget.exerciseId,setContextTarget.setIndex);});
    $('#exerciseList').addEventListener('click',e=>{
      const exerciseTimer=e.target.closest('[data-start-exercise-timer]');if(exerciseTimer){const routine=workoutPlans.find(item=>item.id===activeRoutineId),exercise=routine&&allRoutineExercises(routine).find(item=>item.id===exerciseTimer.dataset.startExerciseTimer),records=exercise&&getWorkoutSession(routine).exerciseSets[exercise.id];if(!exercise||!records)return;const isCurrentTimer=activeExerciseTimer?.routineId===routine.id&&activeExerciseTimer.date===dateKey(selectedWorkoutDate)&&activeExerciseTimer.exerciseId===exercise.id,setIndex=isCurrentTimer?activeExerciseTimer.setIndex:records.findIndex(record=>!record.done);if(setIndex<0)return;if(isCurrentTimer)records[setIndex].done=false;startExerciseTimer(exercise.id,setIndex);return;}
      const deleteAction=e.target.closest('[data-delete-set]');if(deleteAction){deleteWorkoutSet(deleteAction.dataset.deleteSet,Number(deleteAction.dataset.setIndex));return;}
      const check=e.target.closest('[data-set-done]');if(check){setComplete(check.dataset.setDone,Number(check.dataset.setIndex));return;}
      const timer=e.target.closest('[data-start-timer]');if(timer){startExerciseTimer(timer.dataset.startTimer,Number(timer.dataset.setIndex));return;}
      const add=e.target.closest('[data-add-set]');if(add){const routine=workoutPlans.find(item=>item.id===activeRoutineId),exercise=routine&&allRoutineExercises(routine).find(item=>item.id===add.dataset.addSet);if(!routine||!exercise)return;const session=getWorkoutSession(routine),records=session.exerciseSets[exercise.id],last=records.at(-1)||{};records.push({done:false,weight:last.weight??'',reps:exercise.reps||last.reps||'',seconds:exercise.duration||exercise.work||last.seconds||''});persistWorkouts();renderWorkoutMode();}
    });
    $('#addExercise').addEventListener('click',()=>{$('#customExerciseForm').reset();$('#customExerciseDialog').showModal();$('#customExerciseName').focus();});
    $('#closeCustomExercise').addEventListener('click',()=>$('#customExerciseDialog').close());
    $('#customExerciseDialog').addEventListener('click',e=>{if(e.target===$('#customExerciseDialog'))$('#customExerciseDialog').close();});
    $('#customExerciseForm').addEventListener('submit',e=>{e.preventDefault();const routine=workoutPlans.find(item=>item.id===activeRoutineId),name=$('#customExerciseName').value.trim(),kind=$('#customExerciseType').value;if(!routine||!name)return;workoutData.customExercises[routine.id]||=[];workoutData.customExercises[routine.id].push({id:`custom-${crypto.randomUUID()}`,name,kind,sets:1,...(['timer','timer-weight'].includes(kind)?{duration:60,work:60,reps:1,details:'1 minute'}:{})});persistWorkouts();getWorkoutSession(routine);$('#customExerciseDialog').close();renderWorkoutMode();});
    $('#closeRenameExercise').addEventListener('click',closeExerciseRename);
    $('#renameExerciseDialog').addEventListener('click',e=>{if(e.target===$('#renameExerciseDialog'))closeExerciseRename();});
    $('#renameExerciseForm').addEventListener('submit',e=>{e.preventDefault();if(!renameTarget)return;const routine=workoutPlans.find(item=>item.id===renameTarget.routineId),isRoutine=renameTarget.kind==='routine',exercise=routine&&!isRoutine&&allRoutineExercises(routine).find(item=>item.id===renameTarget.exerciseId),name=$('#renameExerciseName').value.trim();if(!routine||(!isRoutine&&!exercise)||!name)return;if(isRoutine)workoutData.routineNames[routine.id]=name;else if(renameTarget.isPreset){workoutData.exerciseNames[routine.id]||={};workoutData.exerciseNames[routine.id][exercise.id]=name;}else exercise.name=name;persistWorkouts();closeExerciseRename();renderWorkouts();if(activeRoutineId)renderWorkoutMode();});
    $('#openBackup').addEventListener('click',()=>$('#backupDialog').showModal());
    $('#closeBackup').addEventListener('click',()=>$('#backupDialog').close());
    $('#backupDialog').addEventListener('click',e=>{if(e.target===$('#backupDialog'))$('#backupDialog').close();});
    $('#exportBackup').addEventListener('click',exportBackup);
    $('#chooseBackup').addEventListener('click',()=>$('#backupFile').click());
    $('#backupFile').addEventListener('change',async e=>{
      const file=e.target.files?.[0];if(!file)return;
      try{
        if(file.size>2_000_000)throw new Error('That file is too large to be an Otto backup.');
        const restored=parseBackup(JSON.parse(await file.text()));
        if(!confirm('Import this backup and replace the habits and check-ins saved in this browser?'))return;
        const archived=[...restored.archivedHabits],climb=restored.habits.find(h=>h.id==='seed-climb');if(climb)archived.push({...climb,archivedAt:new Date().toISOString()});habits=restored.habits.filter(h=>h.id!=='seed-climb');workoutData=restored.workouts;localStorage.setItem(KEY,JSON.stringify(habits));localStorage.setItem('otto-archived-habits-v1',JSON.stringify(archived));persistWorkouts();localStorage.setItem('otto-habit-names-v1','done');localStorage.setItem('otto-seed-goals-v3','done');localStorage.setItem('otto-seed-goals-v6','done');
        if(restored.theme)setTheme(restored.theme);
        $('#backupDialog').close();render();alert('Backup imported. Your habits and check-ins are ready.');
      }catch(error){alert(error instanceof SyntaxError?'Could not read that file as an Otto backup.':error.message||'Could not import that backup.');}
      finally{e.target.value='';}
    });
    $('#prevWeek').addEventListener('click',()=>{selectedDate.setDate(selectedDate.getDate()-7);render();});$('#nextWeek').addEventListener('click',()=>{if(weekStart(selectedDate)<weekStart(today)){selectedDate.setDate(selectedDate.getDate()+7);render();}});
    const tabs=[$('#habitsTab'),$('#homeTab'),$('#workoutsTab')];
    const particleCanvas=$('#particleField'),particleContext=particleCanvas.getContext('2d'),consistencyOrb=$('#consistencyOrb'),reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    let particles=[],particleFrame=0,lastParticleTime=0,canvasWidth=0,canvasHeight=0;
    function resizeParticleCanvas(){const dpr=Math.min(window.devicePixelRatio||1,2);canvasWidth=window.innerWidth;canvasHeight=window.innerHeight;particleCanvas.width=Math.round(canvasWidth*dpr);particleCanvas.height=Math.round(canvasHeight*dpr);particleContext.setTransform(dpr,0,0,dpr,0,0);}
    function seedParticles(scores){
      const orb=consistencyOrb.getBoundingClientRect(),cx=canvasWidth/2,cy=canvasHeight/2;
      particles=scores.flatMap((score,index)=>Array.from({length:Math.round(score*18)},()=>{
        const angle=Math.random()*Math.PI*2;
        const distance=Math.max(orb.width,orb.height)/2+16+Math.random()*Math.min(canvasWidth,canvasHeight)*.23;
        const speed=12+Math.random()*28;
        return {
          x:Math.max(4,Math.min(canvasWidth-4,cx+Math.cos(angle)*distance)),
          y:Math.max(4,Math.min(canvasHeight-4,cy+Math.sin(angle)*distance)),
          vx:-Math.sin(angle)*speed+(Math.random()-.5)*12,
          vy:Math.cos(angle)*speed+(Math.random()-.5)*12,
          radius:1.8+score*2+Math.random()*1.8,
          color:rainbow[index%rainbow.length],
          sparkle:Math.random()<.2,
          phase:Math.random()*Math.PI*2
        };
      }));
    }
    function drawSparkle(p,time){
      const flicker=.45+.55*(.5+.5*Math.sin(time*.004+p.phase));
      particleContext.save();particleContext.globalAlpha=flicker;particleContext.strokeStyle=p.color;particleContext.lineWidth=1.5;particleContext.shadowColor=p.color;particleContext.shadowBlur=14;
      particleContext.beginPath();particleContext.moveTo(p.x-p.radius*1.8,p.y);particleContext.lineTo(p.x+p.radius*1.8,p.y);particleContext.moveTo(p.x,p.y-p.radius*1.8);particleContext.lineTo(p.x,p.y+p.radius*1.8);particleContext.stroke();particleContext.restore();
    }
    function paintParticles(time,animate=true){
      particleContext.clearRect(0,0,canvasWidth,canvasHeight);
      const orb=consistencyOrb.getBoundingClientRect(),cx=orb.left+orb.width/2,cy=orb.top+orb.height/2;
      const rx=orb.width*.51,ry=orb.height*.51,dt=lastParticleTime?Math.min((time-lastParticleTime)/1000,.04):0;
      lastParticleTime=time;
      for(const p of particles){
        if(animate){
          const dx=cx-p.x,dy=cy-p.y,distance=Math.max(1,Math.hypot(dx,dy));
          p.vx+=(-dy/distance)*17*dt;p.vy+=(dx/distance)*17*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;
          if(p.x<p.radius){p.x=p.radius;p.vx=Math.abs(p.vx);}else if(p.x>canvasWidth-p.radius){p.x=canvasWidth-p.radius;p.vx=-Math.abs(p.vx);}
          if(p.y<p.radius){p.y=p.radius;p.vy=Math.abs(p.vy);}else if(p.y>canvasHeight-p.radius){p.y=canvasHeight-p.radius;p.vy=-Math.abs(p.vy);}
          const ox=p.x-cx,oy=p.y-cy,nx=ox/(rx+p.radius),ny=oy/(ry+p.radius),norm=Math.max(.0001,Math.hypot(nx,ny));
          if(norm<1){
            p.x=cx+ox/norm;p.y=cy+oy/norm;
            const normalX=ox/((rx+p.radius)**2),normalY=oy/((ry+p.radius)**2),normalLength=Math.max(.0001,Math.hypot(normalX,normalY));
            const nX=normalX/normalLength,nY=normalY/normalLength,dot=p.vx*nX+p.vy*nY;
            if(dot<0){p.vx-=2*dot*nX;p.vy-=2*dot*nY;}
            p.vx+=-nY*7;p.vy+=nX*7;
          }
        }
        if(p.sparkle)drawSparkle(p,time);else{
          particleContext.save();particleContext.fillStyle=p.color;particleContext.globalAlpha=.76+.24*(.5+.5*Math.sin(time*.003+p.phase));particleContext.shadowColor=p.color;particleContext.shadowBlur=12;
          particleContext.beginPath();particleContext.arc(p.x,p.y,p.radius,0,Math.PI*2);particleContext.fill();particleContext.restore();
        }
      }
      if(animate&&document.body.classList.contains('home-active'))particleFrame=requestAnimationFrame(paintParticles);else particleFrame=0;
    }
    function startParticleScene(){stopParticleScene();const scores=updateConsistencyHero();resizeParticleCanvas();seedParticles(scores);lastParticleTime=0;paintParticles(performance.now(),!reduceMotion.matches);}
    function stopParticleScene(){if(particleFrame)cancelAnimationFrame(particleFrame);particleFrame=0;}
    window.addEventListener('resize',()=>{if(document.body.classList.contains('home-active'))startParticleScene();else resizeParticleCanvas();});
    function showView(view){const home=view==='home',workouts=view==='workouts',index=['habits','home','workouts'].indexOf(view);document.body.classList.toggle('home-active',home);document.body.classList.toggle('workouts-active',workouts);$('#homePage').hidden=!home;$('#workoutsPage').hidden=!workouts;if(workouts)renderWorkouts();renderActiveTimerFab();const toolbar=$('#bottomToolbar');toolbar.dataset.active=view;toolbar.style.setProperty('--tab-index',String(Math.max(0,index)));tabs.forEach((tab,i)=>{const selected=i===index;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});if(home)startParticleScene();else stopParticleScene();}
    tabs.forEach((tab,index)=>tab.addEventListener('click',()=>showView(['habits','home','workouts'][index])));
    $('#bottomToolbar').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();const current=tabs.findIndex(tab=>tab.getAttribute('aria-selected')==='true'),next=(current+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length;tabs[next].focus();showView(['habits','home','workouts'][next]);});
    showView('habits');
    setTheme(localStorage.getItem(THEME_KEY)||localStorage.getItem(OLD_THEME_KEY)||'dark');render();
