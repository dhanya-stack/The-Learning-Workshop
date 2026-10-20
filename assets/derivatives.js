"use strict";
(()=>{const $=id=>document.getElementById(id);if(!$('derivative-plot'))return;
 const minX=-3,maxX=3,scaleX=87,originX=300,originY=302,scaleY=27;
 const pt=(t,s)=>[originX+scaleX*t,originY-scaleY*s];
 const f=t=>t*t;const grid=$('derivative-grid');let html='';
 for(let t=-3;t<=3;t++){const x=pt(t,0)[0];html+=`<line x1="${x}" y1="12" x2="${x}" y2="310" stroke="#ded4c6" stroke-width="1"/>`}
 for(let s=0;s<=10;s+=2){const y=pt(0,s)[1];html+=`<line x1="30" y1="${y}" x2="570" y2="${y}" stroke="#ded4c6" stroke-width="1"/>`}
 html+='<line x1="30" y1="302" x2="570" y2="302" stroke="#8b857c" stroke-width="1.7"/><line x1="300" y1="12" x2="300" y2="310" stroke="#8b857c" stroke-width="1.7"/>';
 grid.innerHTML=html;
 const points=[];for(let t=-3;t<=3.001;t+=.04){const [x,y]=pt(t,f(t));points.push(`${points.length?'L':'M'}${x.toFixed(2)} ${y.toFixed(2)}`)}$('curve').setAttribute('d',points.join(' '));
 function line(id,x1,y1,x2,y2){let [a,b]=[pt(x1,y1),pt(x2,y2)];['x1','y1','x2','y2'].forEach((k,i)=>$(id).setAttribute(k,(i<2?a:b)[i%2]));}
 function dot(id,t){let [x,y]=pt(t,f(t));$(id).setAttribute('cx',x);$(id).setAttribute('cy',y)}
 function update(){let t=+$('t0').value,h=+$('dt').value;let avg=(f(t+h)-f(t))/h,instant=2*t;$('t0val').textContent=t.toFixed(2);$('dtval').textContent=h.toFixed(2);line('secant',t-0.6,f(t)-.6*avg,t+h+.6,f(t+h)+.6*avg);line('tangent',t-1.15,f(t)-1.15*instant,t+1.15,f(t)+1.15*instant);dot('point1',t);dot('point2',t+h);$('derivative-result').textContent=`Average slope = ${avg.toFixed(2)} m/s; instantaneous slope = ${instant.toFixed(2)} m/s. Difference = ${Math.abs(avg-instant).toFixed(2)} m/s.`}
 ['t0','dt'].forEach(id=>$(id).addEventListener('input',update));update();
})();
