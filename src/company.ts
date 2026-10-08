export const departments = [
  { name: 'IT', count: 96, color: '#8aa7da', roles: ['Software developer', 'DevOps engineer', 'QA engineer', 'IT analytik'] },
  { name: 'Marketing', count: 40, color: '#ce9dc5', roles: ['Marketing špecialista', 'Content špecialista', 'Brand manager'] },
  { name: 'Support', count: 64, color: '#91c9c0', roles: ['Customer care špecialista', 'Support špecialista', 'Team leader podpory'] },
  { name: 'HR', count: 24, color: '#d7b67d', roles: ['HR špecialista', 'Recruiter', 'People partner'] },
  { name: 'Manažment', count: 16, color: '#a99bcf', roles: ['Operations manager', 'Project manager', 'Vedúci oddelenia'] },
  { name: 'Obchod', count: 32, color: '#9fc483', roles: ['Account manager', 'Sales špecialista', 'Business developer'] },
  { name: 'Financie', count: 24, color: '#d6a08d', roles: ['Finančný analytik', 'Účtovník', 'Payroll špecialista'] },
  { name: 'Dizajn', count: 24, color: '#a4bfc8', roles: ['Product designer', 'UX researcher', 'UI designer'] },
];
export type Person = { id: number; name: string; role: string; team: string; initials: string; color: string; time: string };
export type Entry = { id: number; person: number; time: string; kind: 'in' | 'out'; fresh?: boolean };
const core: Person[] = [
 {id:1,name:'Martin Novák',role:'Frontend developer',team:'IT',initials:'MN',color:'#dde6fa',time:'—'},
 {id:2,name:'Simona Kováčová',role:'Product designer',team:'Dizajn',initials:'SK',color:'#f3dfd5',time:'08:32'},
 {id:3,name:'Tomáš Horváth',role:'Backend developer',team:'IT',initials:'TH',color:'#e6e7ca',time:'08:24'},
 {id:4,name:'Lucia Vargová',role:'Project manager',team:'Manažment',initials:'LV',color:'#e9dff3',time:'08:18'},
 {id:5,name:'Adam Kováč',role:'Fullstack developer',team:'IT',initials:'AK',color:'#d6e9e1',time:'08:12'},
 {id:6,name:'Nina Poláková',role:'People partner',team:'HR',initials:'NP',color:'#f3e5ca',time:'08:05'},
 {id:7,name:'Peter Baláž',role:'QA engineer',team:'IT',initials:'PB',color:'#dce7ed',time:'07:56'},
 {id:8,name:'Ema Urbanová',role:'UX researcher',team:'Dizajn',initials:'EU',color:'#efdfdf',time:'—'},
];
const firstNames = ['Jakub','Zuzana','Samuel','Petra','Filip','Barbora','Lukáš','Andrea','Patrik','Veronika','Oliver','Katarína','Ján','Michaela','Dávid','Jana','Šimon','Lenka','Ivan','Kristína'];
const lastNames = ['Bartoš','Beneš','Černý','Dvořák','Farkaš','Gajdoš','Hruška','Jankovič','Kollár','Lipták','Mikula','Németh','Ondrejka','Pavlík','Rybár','Sabol','Tóth','Valent','Zeman','Švec'];
const colors = ['#dde6fa','#f3dfd5','#e6e7ca','#e9dff3','#d6e9e1','#f3e5ca','#dce7ed','#efdfdf'];
export const people: Person[] = [...core];
// Stable fictional company roster: department headcounts sum to 320.
for (const department of departments) {
 const existing = core.filter(p=>p.team===department.name).length;
 for (let n=existing;n<department.count;n++) {
  const id=people.length+1,index=((id-9)*137)%400;
  const first=firstNames[index%firstNames.length],surname=lastNames[Math.floor(index/firstNames.length)];
  const last=index%2===1?(surname.endsWith('ý')?surname.slice(0,-1)+'á':surname+'ová'):surname;
  const minutes=7*60+(id*7)%91;
  people.push({id,name:`${first} ${last}`,role:department.roles[n%department.roles.length],team:department.name,initials:first[0]+last[0],color:colors[id%colors.length],time:id%5===0?'—':`${String(Math.floor(minutes/60)).padStart(2,'0')}:${String(minutes%60).padStart(2,'0')}`});
 }
}
export const initial: Entry[] = people.filter(p=>p.time!=='—').map(p=>({id:p.id,person:p.id,time:p.time,kind:'in' as const})).sort((a,b)=>b.time.localeCompare(a.time));
