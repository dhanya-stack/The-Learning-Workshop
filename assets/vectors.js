"use strict";
(()=>{
 const $=id=>document.getElementById(id);if(!$('vector-plot'))return;
 const controls=['ax','ay','bx','by'].map($);
 const grid=$('vector-grid');let gridHtml='';
 const cx=260,cy=180,unit=19;
 for(let i=-12;i<=12;i++){const x=cx+i*unit;if(x>=10&&x<=510)gridHtml+=`<line x1="${x}" y1="10" x2="${x}" y2="350" stroke="#e4d9cb" stroke-width="1"/>`}
 for(let i=-9;i<=9;i++){const y=cy+i*unit;if(y>=10&&y<=350)gridHtml+=`<line x1="10" y1="${y}" x2="510" y2="${y}" stroke="#e4d9cb" stroke-width="1"/>`}
 gridHtml+=`<line x1="10" y1="${cy}" x2="510" y2="${cy}" stroke="#9c8a79" stroke-width="1.5"/><line x1="${cx}" y1="10" x2="${cx}" y2="350" stroke="#9c8a79" stroke-width="1.5"/>`;
 grid.innerHTML=gridHtml;
 const xy=(x,y)=>[cx+x*unit,cy-y*unit];
 function line(id,x1,y1,x2,y2){const l=$(id);const a=xy(x1,y1),b=xy(x2,y2);['x1','y1','x2','y2'].forEach((k,i)=>l.setAttribute(k,(i<2?a:b)[i%2]));}
 function label(id,x,y){const p=xy(x,y);$(id).setAttribute('x',p[0]+9);$(id).setAttribute('y',p[1]-8);}
 function update(){let [ax,ay,bx,by]=controls.map(e=>+e.value);controls.forEach(e=>$(e.id+'val').textContent=e.value);let rx=ax+bx,ry=ay+by;line('arrowA',0,0,ax,ay);line('arrowB',ax,ay,rx,ry);line('arrowR',0,0,rx,ry);label('labelA',ax/2,ay/2);label('labelB',ax+bx/2,ay+by/2);label('labelR',rx*.66,ry*.66);const len=Math.hypot(rx,ry).toFixed(2);$('vector-result').textContent=`A + B = (${rx}, ${ry}); magnitude = √(${rx*rx+ry*ry}) ≈ ${len} units.`;}
 controls.forEach(e=>e.addEventListener('input',update));update();
})();
