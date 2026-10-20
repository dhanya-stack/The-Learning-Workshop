
(function(){
function fmt(n,d){return Number(n).toFixed(d);}
function set(el,role,value){var target=el.querySelector('[data-role="'+role+'"]');if(target)target.textContent=value;}
function val(el,key){return Number(el.querySelector('[data-input="'+key+'"]').value);}
function initTriangle(el){
 function update(){var angle=val(el,'tri-angle'),dist=val(el,'tri-distance'),rad=angle*Math.PI/180;
  var h=dist*Math.tan(rad),scale=Math.min(300/dist,155/h,25);
  var lineLength=dist*scale,y=197-h*scale,endX=105+lineLength;var v=el.querySelector('[data-role="triangle-height"]');v.setAttribute('x1',endX);v.setAttribute('x2',endX);v.setAttribute('y2',y);
  var slope=el.querySelector('[data-role="triangle-slope"]');slope.setAttribute('d','M105 197L'+endX+' '+y);
  el.querySelector('[data-role="triangle-right-angle"]').setAttribute('d','M'+(endX-15)+' 197V182H'+endX);
  el.querySelector('[data-role="triangle-angle-label"]').textContent=angle+'°';
  set(el,'triangle-distance-label',dist+' m');
  var lbl=el.querySelector('[data-role="triangle-height-label"]');lbl.setAttribute('x',Math.min(endX+7,480));lbl.setAttribute('y',Math.max(y-8,15));lbl.textContent=fmt(h,2)+' m';
  // The angle-arc ends on the inclined edge at radius 34.
  var ar=el.querySelector('[data-role="triangle-angle-arc"]');ar.setAttribute('d','M139 197 A34 34 0 0 0 '+(105+34*Math.cos(rad))+' '+(197-34*Math.sin(rad)));
  set(el,'tri-angle-val',angle+'°');set(el,'tri-distance-val',dist+' m');set(el,'tri-height',fmt(h,2)+' m');
 }
 el.addEventListener('input',update);update();
}
function initContinuity(el){
 function update(){var ratio=val(el,'con-area')/100,v1=val(el,'con-velocity'),v2=v1/ratio;
  // Outlet cross-section shown smaller when area is smaller; schematic only.
  var outletHalf=56*Math.sqrt(ratio),top=112-outletHalf,bottom=112+outletHalf;
  el.querySelector('[data-role="pipe-top"]').setAttribute('d','M35 56 L223 56 L322 '+top+' L485 '+top);
  el.querySelector('[data-role="pipe-bottom"]').setAttribute('d','M35 168 L223 168 L322 '+bottom+' L485 '+bottom);
  set(el,'con-area-val',Math.round(ratio*100)+'%');set(el,'con-velocity-val',fmt(v1,1)+' m/s');
  set(el,'inlet-speed','v₁ = '+fmt(v1,1)+' m/s');set(el,'outlet-speed','v₂ = '+fmt(v2,1)+' m/s');
  set(el,'con-speed',fmt(v2,1)+' m/s');set(el,'con-flow',fmt(v1,1)+' / '+fmt(ratio*v2,1)+' (relative)');
 }
 el.addEventListener('input',update);update();
}
function initBuoyancy(el){
 function update(){var rho=val(el,'buoy-object'),water=val(el,'buoy-fluid'),fraction=rho/water,sinks=fraction>1;
  // A 100-unit tall object. Surface y=64; sea bottom y=204.
  var rect=el.querySelector('[data-role="float-block"]');var y=sinks?104:64-100*(1-fraction);
  rect.setAttribute('y',y);
  set(el,'buoy-object-val',rho+' kg/m³');set(el,'buoy-fluid-val',water+' kg/m³');
  set(el,'buoy-status',sinks?'Sinks':fraction===1?'Neutral / fully submerged':'Floats');
  set(el,'buoy-fraction',sinks?'Not applicable':fmt(fraction*100,0)+'%');
  set(el,'float-label',sinks?'Sinks':fmt(fraction*100,0)+'% submerged');
 }
 el.addEventListener('input',update);update();
}
function initOrbital(el){
 function update(){var alt=val(el,'orbit-altitude'),r=6371+alt,mu=398600,speed=Math.sqrt(mu/r),period=2*Math.PI*Math.sqrt(r*r*r/mu)/60;
   var visualRadius=72+47*Math.log1p(alt/400)/Math.log1p(36000/400);
   el.querySelector('[data-role="orbit-path"]').setAttribute('r',visualRadius);
   el.querySelector('[data-role="orbit-satellite"]').setAttribute('cx',258+visualRadius);
   var t=el.querySelector('[data-role="orbit-label"]');t.setAttribute('x',Math.min(270+visualRadius,463));
   set(el,'orbit-label',alt.toLocaleString('en-US')+' km');set(el,'orbit-alt-val',alt.toLocaleString('en-US')+' km');
   set(el,'orbit-speed',fmt(speed,2)+' km/s');set(el,'orbit-period',period>=120?fmt(period/60,2)+' hours':fmt(period,1)+' min');
 }
 el.addEventListener('input',update);update();
}
function initializeConceptDemos(){
 document.querySelectorAll('[data-demo]').forEach(function(el){
  var id=el.dataset.demo;
  if(id==='triangle')initTriangle(el);
  if(id==='continuity')initContinuity(el);
  if(id==='buoyancy')initBuoyancy(el);
  if(id==='orbital')initOrbital(el);
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initializeConceptDemos);else initializeConceptDemos();
})();
