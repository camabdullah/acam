// Prepend the Figma createComponentWithVariants skill helper before execution.
const created=[];
const page=figma.createPage();page.name='TYT · Arayüz v2';created.push(page.id);
await figma.setCurrentPageAsync(page);
await Promise.all(['Regular','Medium','Semi Bold','Bold'].map(style=>figma.loadFontAsync({family:'Inter',style})));
const rgb=h=>({r:parseInt(h.slice(1,3),16)/255,g:parseInt(h.slice(3,5),16)/255,b:parseInt(h.slice(5,7),16)/255});
const primitive=figma.variables.createVariableCollection('TYT / Primitives');
const semantic=figma.variables.createVariableCollection('TYT / UI');
const vars={};
for(const [name,hex] of Object.entries({navy:'#172337',ink:'#202c40',muted:'#606c7e',orange:'#b94725',paper:'#f7f8fb',white:'#ffffff',line:'#e3e7ef',purple:'#6552a3',lavender:'#eef0f8',green:'#166a51'})){
 const p=figma.variables.createVariable(name,primitive,'COLOR');p.scopes=[];p.setValueForMode(primitive.defaultModeId,{...rgb(hex),a:1});
 const v=figma.variables.createVariable(name,semantic,'COLOR');v.scopes=['FRAME_FILL','SHAPE_FILL','TEXT_FILL','STROKE_COLOR'];v.setValueForMode(semantic.defaultModeId,{type:'VARIABLE_ALIAS',id:p.id});v.setVariableCodeSyntax('WEB',`var(--${name})`);vars[name]=v;
}
for(const [name,value] of Object.entries({'space-2':8,'space-3':12,'space-4':16,'space-6':24,'space-8':32,'radius':20})){
 const v=figma.variables.createVariable(name,semantic,'FLOAT');v.scopes=name==='radius'?['CORNER_RADIUS']:['GAP'];v.setValueForMode(semantic.defaultModeId,value);v.setVariableCodeSyntax('WEB',`var(--${name})`);vars[name]=v;
}
const paint=name=>figma.variables.setBoundVariableForPaint({type:'SOLID',color:rgb('#ffffff')},'color',vars[name]);
const styles={};
for(const [name,size,style] of [['Body',14,'Regular'],['Heading',24,'Bold'],['Caption',11,'Medium'],['Label',14,'Semi Bold']]){const s=figma.createTextStyle();s.name='TYT / '+name;s.fontName={family:'Inter',style};s.fontSize=size;s.lineHeight={unit:'PERCENT',value:160};styles[name]=s;}
function label(parent,text,size=14,color='ink',bold=false,width=270){const n=figma.createText();created.push(n.id);n.name=text.slice(0,40);n.fontName={family:'Inter',style:bold?'Semi Bold':'Regular'};n.fontSize=size;n.characters=text;n.lineHeight={unit:'PERCENT',value:150};n.fills=[paint(color)];n.textAutoResize='HEIGHT';n.resize(width,n.height);parent.appendChild(n);return n;}
const unit=await createComponentWithVariants({name:'TYT / Unit row',variantAxes:{State:['Default','Selected']},baseProps:{width:340,height:78,fills:[paint('white')],padding:{top:14,bottom:14,left:16,right:16},radius:12,layoutMode:'VERTICAL',itemSpacing:5},page});
created.push(unit.componentSet.id,...unit.variants.map(n=>n.id));unit.componentSet.x=400;unit.componentSet.y=2400;
for(const v of unit.variants){v.primaryAxisAlignItems='CENTER';v.counterAxisAlignItems='MIN';label(v,'Bilgi ve İnanç',14,'ink',true);label(v,'9. sınıf · 60 soru · 0 görüldü',10,'muted');v.setBoundVariable('paddingLeft',vars['space-4']);}
const answer=await createComponentWithVariants({name:'TYT / Answer',variantAxes:{State:['Default','Selected','Correct','Incorrect']},baseProps:{width:342,height:59,fills:[paint('white')],padding:{top:14,bottom:14,left:16,right:16},radius:12,layoutMode:'HORIZONTAL',itemSpacing:12},page});
created.push(answer.componentSet.id,...answer.variants.map(n=>n.id));answer.componentSet.x=1250;answer.componentSet.y=2400;
for(const v of answer.variants){v.primaryAxisAlignItems='MIN';v.counterAxisAlignItems='CENTER';v.strokes=[paint(v.name.includes('Correct')?'green':v.name.includes('Selected')?'purple':'line')];v.strokeWeight=1;label(v,'A',11,'muted',false,20);label(v,'Kavram seçeneği',14,'ink',false,260);v.setBoundVariable('itemSpacing',vars['space-3']);}
return {createdNodeIds:created,pageId:page.id,variables:Object.fromEntries(Object.entries(vars).map(([k,v])=>[k,v.id])),styles:Object.fromEntries(Object.entries(styles).map(([k,v])=>[k,v.id])),components:{unit:{set:unit.componentSet.id,default:unit.variants[0].id,selected:unit.variants[1].id},answer:{set:answer.componentSet.id,default:answer.variants[0].id,selected:answer.variants[1].id,correct:answer.variants[2].id,incorrect:answer.variants[3].id}},font:'Inter',variantCounts:{unit:unit.variants.length,answer:answer.variants.length}};
