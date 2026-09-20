import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContentShell from '@/components/content-shell';
import { canonicalProverbs, topics, siteUrl, proverbPath, jsonLd } from '@/app/seo-content';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return topics.map(t=>({slug:t.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params; const topic=topics.find(t=>t.slug===slug);
  if(!topic) return {title:'Thema nicht gefunden',robots:{index:false,follow:true}};
  const title=`Persische Sprichwörter über ${topic.name} – Deutsch & Persisch`;
  return {title,description:topic.description,alternates:{canonical:`/themen/${topic.slug}`},openGraph:{title,description:topic.description,url:`/themen/${topic.slug}`,type:'website'},twitter:{title,description:topic.description}};
}
export default async function TopicPage({params}:Props){
  const {slug}=await params; const topic=topics.find(t=>t.slug===slug); if(!topic) notFound();
  const items=canonicalProverbs.filter(p=>p.category===topic.name);const url=`${siteUrl}/themen/${topic.slug}`;
  const schema={'@context':'https://schema.org','@graph':[
    {'@type':'CollectionPage','@id':url,url,name:`Persische Sprichwörter über ${topic.name}`,description:topic.description,inLanguage:['de','fa'],isPartOf:{'@id':siteUrl+'/#website'},mainEntity:{'@type':'ItemList',itemListElement:items.map((p,i)=>({'@type':'ListItem',position:i+1,name:p.equivalent,url:siteUrl+proverbPath(p)}))}},
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Sprichwörter',item:siteUrl+'/'},{'@type':'ListItem',position:2,name:topic.name,item:url}]}
  ]};
  return <ContentShell><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(schema)}} />
    <nav className="content-breadcrumbs" aria-label="Brotkrumennavigation"><a href="/">Sprichwörter</a><span aria-hidden="true"> / </span><span>{topic.name}</span></nav>
    <h1>Persische Sprichwörter über {topic.name}</h1><p className="content-persian" lang="fa" dir="rtl">ضرب‌المثل‌های فارسی دربارهٔ {topic.fa}</p>
    <p className="content-lead">{topic.description}</p><p>{items.length} Einträge mit Bedeutung, Umschrift und Alltagsbeispielen.</p>
    <ul className="topic-entries">{items.map(p=><li key={p.id}><h2><a href={proverbPath(p)}>{p.equivalent}</a></h2><p lang="fa" dir="rtl">{p.proverb}</p><p>{p.meaning}</p><a href={proverbPath(p)}>Bedeutung und Beispiel · معنی و مثال</a></li>)}</ul>
    <section><h2>Weitere Themen</h2><ul className="topic-nav">{topics.filter(t=>t.slug!==slug).map(t=><li key={t.slug}><a href={`/themen/${t.slug}`}>{t.name} · <span lang="fa" dir="rtl">{t.fa}</span></a></li>)}</ul></section>
  </ContentShell>;
}
