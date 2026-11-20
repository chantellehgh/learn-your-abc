export type Sound={id:string;label:string;group:number;ipa:string;example:string};
const rows:[string,string,string][][]=[
[['s','s','sun'],['a','æ','ant'],['t','t','tap'],['i','ɪ','in'],['p','p','pin'],['n','n','nap']],
[['ck','k','cat'],['e','ɛ','pen'],['h','h','hat'],['r','ɹ','rat'],['m','m','man'],['d','d','dog']],
[['g','ɡ','gap'],['o','ɒ','pot'],['u','ʌ','sun'],['l','l','leg'],['f','f','fan'],['b','b','bat']],
[['ai','eɪ','rain'],['j','dʒ','jam'],['oa','əʊ','boat'],['ie','aɪ','pie'],['ee','iː','see'],['or','ɔː','fork']],
[['z','z','zip'],['w','w','web'],['ng','ŋ','sing'],['v','v','van'],['oo-long','uː','moon'],['oo-short','ʊ','book']],
[['y','j','yes'],['x','ks','box'],['ch','tʃ','chip'],['sh','ʃ','ship'],['th-quiet','θ','thin'],['th-voice','ð','this']],
[['qu','kw','quack'],['ou','aʊ','out'],['oi','ɔɪ','coin'],['ue','juː','cue'],['er','ɜː','her'],['ar','ɑː','car']]
];
export const sounds:Sound[]=rows.flatMap((row,i)=>row.map(([id,ipa,example])=>({id,label:id==='ck'?'c/k':id.startsWith('oo-')?'oo':id.startsWith('th-')?'th':id,group:i+1,ipa,example})));
export type Word={text:string;parts:string[];picture:string;group:number};
const raw:[string,string,string][]= [
['at','a t','🎯'],['sat','s a t','🪑'],['sit','s i t','🪑'],['it','i t','👉'],['in','i n','📥'],['pin','p i n','📌'],['tin','t i n','🥫'],['tip','t i p','✏️'],['tap','t a p','🚰'],['pat','p a t','🐾'],['pan','p a n','🍳'],['nap','n a p','😴'],['nip','n i p','🦀'],['pit','p i t','🕳️'],['spin','s p i n','🌀'],['snap','s n a p','🫰'],
['pen','p e n','🖊️'],['ten','t e n','🔟'],['net','n e t','🥅'],['hen','h e n','🐔'],['hat','h a t','🎩'],['mat','m a t','🧶'],['rat','r a t','🐀'],['cat','c a t','🐈'],['kid','k i d','🧒'],['red','r e d','🔴'],['dad','d a d','👨'],
['dog','d o g','🐕'],['pot','p o t','🍲'],['sun','s u n','☀️'],['bug','b u g','🐞'],['log','l o g','🪵'],['fan','f a n','🪭'],['bag','b a g','🎒'],['cup','c u p','🥤'],['frog','f r o g','🐸'],['flag','f l a g','🚩'],
['rain','r ai n','🌧️'],['jam','j a m','🍓'],['boat','b oa t','⛵'],['pie','p ie','🥧'],['seed','s ee d','🌱'],['fork','f or k','🍴'],['train','t r ai n','🚂'],['goat','g oa t','🐐'],
['zip','z i p','🤐'],['web','w e b','🕸️'],['sing','s i ng','🎤'],['van','v a n','🚐'],['moon','m oo-long n','🌙'],['book','b oo-short k','📖'],
['yes','y e s','👍'],['box','b o x','📦'],['chip','ch i p','🍟'],['ship','sh i p','🚢'],['thin','th-quiet i n','📏'],['this','th-voice i s','👉'],
['quack','qu a c k','🦆'],['out','ou t','🚪'],['coin','c oi n','🪙'],['cue','c ue','🎱'],['her','h er','👧'],['car','c ar','🚗']
];
const soundGroup=new Map<string,number>();sounds.forEach(s=>soundGroup.set(s.id,s.group));soundGroup.set('c',2);soundGroup.set('k',2);
export const words:Word[]=raw.map(([text,parts,picture])=>({text,parts:parts.split(' '),picture,group:Math.max(...parts.split(' ').map(p=>soundGroup.get(p)??99))}));
export const tricky=[{word:'I',group:2},{word:'the',group:3},{word:'he',group:4},{word:'she',group:6},{word:'we',group:5},{word:'me',group:3},{word:'be',group:3},{word:'was',group:5},{word:'to',group:4}];
export const stories=[{title:'A nap',group:1,pages:[['a','nap'],['pat','sat'],['pat','sat','in','a','pan']]},{title:'A red hen',group:2,pages:[['a','red','hen'],['the','hen','sat'],['the','hen','ran']]},{title:'The sun',group:3,pages:[['the','sun'],['a','bug','sat','in','the','sun']]},{title:'A boat',group:4,pages:[['a','boat'],['a','goat','in','a','boat']]},{title:'Sing',group:5,pages:[['we','sing'],['sing','in','the','sun']]},{title:'A ship',group:6,pages:[['a','ship'],['the','ship','is','big']]},{title:'A car',group:7,pages:[['a','car'],['the','car','is','red']]}];
