import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContentShell from '@/components/content-shell';
import { canonicalProverbs, findProverb, proverbPath, proverbSlug, siteUrl, topicPath, jsonLd } from '@/app/seo-content';
import { proverbLearning } from '@/app/proverb-learning';
import { pronunciationGuideDe } from '@/app/pronunciation';
import proverbArt from '@/app/proverb-art.json';

type Props = { params: Promise<{slug: string}> };
export function generateStaticParams() { return canonicalProverbs.map(p=>({slug:proverbSlug(p)})); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const p=findProverb((await params).slug);
  if(!p) return {title:'Sprichwort nicht gefunden',robots:{index:false,follow:true}};
  const title=`${p.equivalent.replace(/\.$/,'')} auf Persisch – Bedeutung & Beispiel`;
  const description=`${p.proverb} – ${p.meaning} Mit Umschrift und Beispielen auf Deutsch und Persisch.`;
  const url=proverbPath(p);
  return {title,description,alternates:{canonical:url},openGraph:{title,description,url,type:'article',locale:'de_DE',images:[{url:'/og.png',width:1730,height:909,alt:'Zarbol Masal – persische und deutsche Sprichwörter'}]},twitter:{card:'summary_large_image',title,description,images:['/og.png']}};
}
export default async function ProverbPage({params}: Props) {
  const p=findProverb((await params).slug); if(!p) notFound();
  const learning=proverbLearning[p.id]; const url=siteUrl+proverbPath(p);
  const related=canonicalProverbs.filter(other=>other.category===p.category&&other.id!==p.id).slice(0,4);
  const art=(proverbArt as Record<string,{src:string;de:string;fa:string}>)[String(p.id)];
  const schema={'@context':'https://schema.org','@graph':[
    {'@type':'WebPage','@id':url+'#page',url,name:`${p.equivalent} – Persisches Sprichwort`,inLanguage:['de','fa'],isPartOf:{'@id':siteUrl+'/#website'},mainEntity:{'@id':url+'#sprichwort'}},
    {'@type':'DefinedTerm','@id':url+'#sprichwort',name:p.proverb,description:p.meaning,inDefinedTermSet:{'@id':siteUrl+'/#sammlung'},url},
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Sprichwörter',item:siteUrl+'/'},{'@type':'ListItem',position:2,name:p.category,item:siteUrl+topicPath(p.category)},{'@type':'ListItem',position:3,name:p.equivalent,item:url}]}
  ]};
  return <ContentShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(schema)}} />
    <nav className="content-breadcrumbs" aria-label="Brotkrumennavigation"><a href="/">Sprichwörter</a><span aria-hidden="true"> / </span><a href={topicPath(p.category)}>{p.category}</a></nav>
    <article>
      <h1>{p.equivalent.replace(/\.$/,'')} auf Persisch</h1>
      <p className="content-lead">Das persische Sprichwort <span lang="fa" dir="rtl">«{p.proverb}»</span> bedeutet: {p.meaning}</p>
      <p className="content-persian" lang="fa" dir="rtl">{p.proverb}</p>
      <section className="content-panel" aria-labelledby="umschrift"><h2 id="umschrift">Deutsche Aussprachehilfe · آوانویسی</h2><p className="content-latin" lang="fa-Latn" dir="ltr">{learning.latin}</p><p>{pronunciationGuideDe} <a href="/ueber-die-sammlung#umschrift">Aussprachehinweise und Quellen</a></p></section>
      <section><h2>Was bedeutet das Sprichwort?</h2><p>{p.meaning}</p><p lang="fa" dir="rtl">{learning.meaningFa}</p><p>{p.note}</p></section>
      {art && <figure className="content-illustration"><img src={art.src} alt={art.de} width={640} height={300} loading="lazy" /></figure>}
      <section><h2>Wie verwendet man es im Alltag?</h2><p>{learning.exampleDe}</p><p lang="fa" dir="rtl">{learning.exampleFa}</p></section>
      <section><h2>Welche deutsche Entsprechung passt?</h2><blockquote>{p.equivalent}</blockquote><p>Diese deutsche Wendung drückt eine ähnliche Idee aus. Wortwahl, Bild und Ton können vom persischen Sprichwort abweichen; die Entsprechung ist keine Wort-für-Wort-Übersetzung.</p><p lang="fa" dir="rtl">این عبارت آلمانی معنای مشابهی دارد، اما ترجمهٔ کلمه‌به‌کلمه نیست. تصویر و لحن دو عبارت ممکن است متفاوت باشد.</p></section>
      <p className="content-method">Die Beispiele sind für diese Lernsammlung formuliert. Historische Herkunft und Erstbelege werden hier nicht behauptet. <a href="/ueber-die-sammlung">So ist die Sammlung aufgebaut</a>.</p>
    </article>
    <section><h2>Weitere Sprichwörter zum Thema {p.category}</h2><ul className="content-links">{related.map(other=><li key={other.id}><a href={proverbPath(other)}>{other.equivalent}<span lang="fa" dir="rtl">{other.proverb}</span></a></li>)}</ul><a href={topicPath(p.category)}>Alle Sprichwörter über {p.category}</a></section>
    <aside className="content-panel"><h2>Mit Beispielen üben</h2><p>In der kostenlosen Lernprobe kannst du fünf Sprichwörter mit kurzen Aufgaben kennenlernen.</p><a href="/lernpaket#lernprobe">Zur Lernprobe · تمرین رایگان</a></aside>
  </ContentShell>;
}
