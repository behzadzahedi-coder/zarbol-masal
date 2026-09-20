'use client';
import {useState} from 'react';
import {proverbPairs} from '@/app/proverbs';
import {proverbLearning} from '@/app/proverb-learning';
import art from '@/app/proverb-art.json';
import photos from '@/app/proverb-photos.json';
import {proverbPath, topics} from '@/app/seo-content';
import {localizedPath, type Locale, ui} from '@/app/i18n';
function normalize(text:string){return text.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/ي/g,'ی').replace(/ك/g,'ک').replace(/q/g,'gh').replace(/[\u200c\u200d]/g,'').trim();}
export default function LocalizedCollection({locale}:{locale:Locale}){
 const t=ui[locale];const fa=locale==='fa';const [query,setQuery]=useState('');const [category,setCategory]=useState('');const [sorted,setSorted]=useState(false);
 const items=proverbPairs.filter(p=>(!category||p.category===category)&&normalize([p.proverb,p.equivalent,p.meaning,proverbLearning[p.id].meaningFa,proverbLearning[p.id].latin,proverbLearning[p.id].internationalLatin].join(' ')).includes(normalize(query)));
 if(sorted)items.sort((a,b)=>(fa?a.equivalent:a.proverb).localeCompare(fa?b.equivalent:b.proverb,fa?'de':'fa'));
 return <>
 <div className="locale-search"><label htmlFor="proverb-search">{t.search}</label><input id="proverb-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.placeholder} dir="auto" type="search"/>
 <div className="locale-filters"><label>{t.topics}<select value={category} onChange={e=>setCategory(e.target.value)}><option value="">{t.all}</option>{topics.map(topic=><option key={topic.slug} value={topic.name}>{fa?topic.fa:topic.name}</option>)}</select></label><label>{t.sort}<select value={sorted?'alphabet':'original'} onChange={e=>setSorted(e.target.value==='alphabet')}><option value="original">{t.original}</option><option value="alphabet">{t.alphabet}</option></select></label></div></div>
 <p role="status" className="locale-count">{items.length.toLocaleString(fa?'fa':'de')} {t.found}</p>
 {items.length?<div className="locale-cards">{items.map(p=>{const l=proverbLearning[p.id];const photo=(photos as Record<string,Record<Locale,{src:string;alt:string}>>)[p.id]?.[locale];const artwork=(art as Record<string,{src:string;de:string;fa:string}>)[p.id];const image=photo??(artwork&&{src:artwork.src,alt:fa?artwork.fa:artwork.de});return <article className="proverb-card" key={p.id}>
 {image&&<img className={photo?'proverb-photo':'proverb-art'} src={image.src} alt={image.alt} width={960} height={640} loading="lazy" decoding="async"/>}
 <p className="locale-label">{t.source}</p><h2 lang={fa?'de':'fa'} dir={fa?'ltr':'rtl'}>{fa?p.equivalent:p.proverb}</h2>
 {!fa&&<div className="proverb-transliteration"><span>{t.pronunciation}</span><p lang="fa-Latn" dir="ltr">{l.latin}</p></div>}
 <p className="locale-label">{t.equivalent}</p><p lang={locale} dir={fa?'rtl':'ltr'} className="locale-equivalent">{fa?p.proverb:p.equivalent}</p>
 <h3>{t.meaning}</h3><p>{fa?l.meaningFa:p.meaning}</p>
 <details className="proverb-example"><summary>{t.example}</summary>{fa&&<p lang="de" dir="ltr">{l.exampleDe}</p>}<p>{fa?l.exampleFa:l.exampleDe}</p></details>
 <a className="proverb-detail-link" href={localizedPath(locale,proverbPath(p))}>{t.open}</a>
 </article>})}</div>:<div className="locale-empty"><h2>{t.empty}</h2><p>{t.emptyText}</p><button type="button" className="learning-button" onClick={()=>{setQuery('');setCategory('');}}>{t.reset}</button></div>}
 </>;
}
