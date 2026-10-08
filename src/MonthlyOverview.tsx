import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock3, Palmtree, HeartPulse, AlertTriangle, Check } from 'lucide-react';

// Fictional presentation records; entitlement is configured per employee, not inferred from law.
const records = [
 { entitlement:25, prior:12, vacation:2, sick:1, hours:24, previousHours:152, previousVacation:3, previousSick:0 },
 { entitlement:25, prior:19, vacation:3, sick:0, hours:24, previousHours:144, previousVacation:4, previousSick:0 },
 { entitlement:20, prior:19, vacation:2, sick:0, hours:32, previousHours:160, previousVacation:2, previousSick:0 },
 { entitlement:25, prior:10, vacation:0, sick:2, hours:32, previousHours:160, previousVacation:0, previousSick:2 },
 { entitlement:20, prior:8, vacation:1, sick:0, hours:40, previousHours:168, previousVacation:1, previousSick:0 },
 { entitlement:25, prior:15, vacation:0, sick:0, hours:48, previousHours:176, previousVacation:0, previousSick:0 },
 { entitlement:20, prior:16, vacation:1, sick:1, hours:32, previousHours:152, previousVacation:2, previousSick:1 },
 { entitlement:25, prior:20, vacation:4, sick:0, hours:16, previousHours:144, previousVacation:4, previousSick:0 },
];
const days = (n:number) => Math.abs(n)===1?'deň':Math.abs(n)>=2&&Math.abs(n)<=4?'dni':'dní';
export function MonthlyOverview({personId}:{personId:number}) {
 const [month,setMonth]=useState(10);
 const r=records[(personId-1)%records.length];
 const current=month===10;
 const vacation=current?r.vacation:r.previousVacation;
 const sick=current?r.sick:r.previousSick;
 const hours=current?r.hours:r.previousHours;
 const used=current?r.prior+r.vacation:r.prior;
 const remaining=r.entitlement-used;
 return <section className="monthly-overview" aria-label="Mesačný prehľad">
  <div className="month-title"><h3>Mesačný prehľad</h3><span className="month-picker"><button aria-label="Predchádzajúci mesiac" disabled={!current} onClick={()=>setMonth(9)}><ChevronLeft size={15}/></button><b>{current?'Október':'September'} 2026</b><button aria-label="Nasledujúci mesiac" disabled={current} onClick={()=>setMonth(10)}><ChevronRight size={15}/></button></span></div>
  <p className="month-caption">{current?'Priebežný súhrn k 8. 10. 2026':'Uzavretý mesačný súhrn'} <span>· Demo dáta</span></p>
  <div className="month-metrics">
   <div><Clock3 size={16}/><strong>{hours}<small> h</small></strong><span>Odpracované</span></div>
   <div><Palmtree size={16}/><strong>{vacation}<small> {days(vacation)}</small></strong><span>Dovolenka</span></div>
   <div><HeartPulse size={16}/><strong>{sick}<small> {days(sick)}</small></strong><span>PN</span></div>
  </div>
  <div className={'leave-balance '+(remaining<0?'over-limit':remaining<=3?'low-balance':'')}>
   <div className="leave-heading"><div><h4>Zostatok dovolenky</h4><span>Rok 2026 · k {current?'8. 10.':'30. 9.'}</span></div><strong>{remaining}<small> {days(remaining)}</small></strong></div>
   <div className="leave-progress" role="meter" aria-label="Vyčerpaná dovolenka" aria-valuemin={0} aria-valuemax={r.entitlement} aria-valuenow={Math.min(used,r.entitlement)} aria-valuetext={`${used} z ${r.entitlement} dní`}><i style={{width:`${Math.min(100,used/r.entitlement*100)}%`}}/></div>
   <div className="leave-details"><span>Vyčerpané <b>{used} dní</b></span><span>Ročný nárok <b>{r.entitlement} dní</b></span></div>
   <div className="leave-message">{remaining<0?<><AlertTriangle size={14}/><span>Prekročený nárok o {Math.abs(remaining)} {days(remaining)}. Skontrolujte čerpanie.</span></>:remaining<=3?<><AlertTriangle size={14}/><span>Nízky zostatok — zostatok je {remaining} {days(remaining)} dovolenky.</span></>:<><Check size={14}/><span>Čerpanie je v rámci ročného nároku.</span></>}</div>
  </div>
  <p className="leave-footnote">PN sa neodpočítava z dovolenky. Zostatok zahŕňa čerpanie od začiatku roka do uvedeného dátumu.</p>
 </section>
}
