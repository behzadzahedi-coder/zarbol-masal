import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import LocalizedShell from '@/components/localized-shell';
import {CollectionPage,DetailPage,TopicPage,LessonsPage,AboutPage} from '@/app/localized-pages';
import {type Locale,ui,localizedPath,languageAlternates,topicDescriptionsFa} from '@/app/i18n';
import {findProverb,topics,siteUrl,jsonLd,canonicalProverbs,proverbPath} from '@/app/seo-content';
import {proverbLearning} from '@/app/proverb-learning';
import {shop, shopPageText, type ShopPath} from '@/app/shop-data';
import ShopPage from '@/components/shop-pages';

type Props={params:Promise<{locale:string;path?:string[]}>};
function resolve(locale:string,parts:string[]=[]){
 if(locale!=='de'&&locale!=='fa')return null;
 const path=parts.length?'/'+parts.join('/'):'';
 if(!parts.length)return {locale:locale as Locale,path,kind:'home' as const};
 if(Object.hasOwn(shopPageText,path))return {locale:locale as Locale,path:path as ShopPath,kind:'shop' as const};
 if(path==='/lernpaket')return {locale:locale as Locale,path,kind:'lessons' as const};
 if(path==='/ueber-die-sammlung')return {locale:locale as Locale,path,kind:'about' as const};
 if(parts.length===2&&parts[0]==='sprichwoerter'){const p=findProverb(parts[1]);if(p)return {locale:locale as Locale,path,kind:'detail' as const,p};}
 if(parts.length===2&&parts[0]==='themen'){const topic=topics.find(t=>t.slug===parts[1]);if(topic)return {locale:locale as Locale,path,kind:'topic' as const,topic};}
 return null;
}
function pageText(page:NonNullable<ReturnType<typeof resolve>>){const t=ui[page.locale];const fa=page.locale==='fa';
 if(page.kind==='shop'){const [title,description]=shopPageText[page.path][page.locale];return {title,description};}
 if(page.kind==='lessons')return {title:fa?'بستهٔ آموزشی ۵۰ ضرب‌المثل فارسی':'Lernpaket: 50 persische Sprichwörter mit Fotos',description:fa?'PDF شامل ۴۱ صفحه، ۵۰ تصویر، تمرین و کارت یادگیری. ۹٫۹۰ یورو، ارسال با ایمیل طی ۲۴ ساعت پس از تأیید پرداخت.':'41 Seiten mit 50 Fotos, Erklärungen, Übungen und Lernkarten. 9,90 € einmalig, Lieferung per E-Mail innerhalb von 24 Stunden nach bestätigter Zahlung.'};
 if(page.kind==='detail')return {title:fa?`${page.p.equivalent} — معنی و مثال فارسی`:`${page.p.equivalent} auf Persisch – Bedeutung & Beispiel`,description:fa?proverbLearning[page.p.id].meaningFa:`${page.p.proverb} – ${page.p.meaning}`};
 if(page.kind==='topic')return {title:`${t.topicTitle} ${fa?page.topic.fa:page.topic.name}`,description:fa?topicDescriptionsFa[page.topic.slug]:page.topic.description};
 return {title:page.kind==='home'?t.title:t.aboutTitle,description:t.lead};
}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {locale,path}=await params;const page=resolve(locale,path);if(!page)return {title:'404',robots:{index:false,follow:true}};const text=pageText(page);return {
 title:text.title+' | Zarbol Masal',description:text.description,alternates:{canonical:localizedPath(page.locale,page.path),languages:languageAlternates(page.path)},
 openGraph:{title:text.title,description:text.description,url:localizedPath(page.locale,page.path),locale:page.locale==='fa'?'fa_IR':'de_DE',alternateLocale:[page.locale==='fa'?'de_DE':'fa_IR'],siteName:'Zarbol Masal',type:'website',images:[{url:'/og.png',width:1730,height:909,alt:ui[page.locale].title}]},
 twitter:{card:'summary_large_image',title:text.title,description:text.description,images:['/og.png']},robots:{index:!(page.kind==='shop'&&page.path!=='/fuer-sprachkurse'),follow:true,googleBot:{index:!(page.kind==='shop'&&page.path!=='/fuer-sprachkurse'),follow:true}},
 };}
export default async function LocalizedPage({params}:Props){const {locale,path}=await params;const page=resolve(locale,path);if(!page)notFound();const fa=page.locale==='fa';const text=pageText(page);const url=siteUrl+localizedPath(page.locale,page.path);
 const schema:Record<string,unknown>[]=[{'@type':page.kind==='home'||page.kind==='topic'?'CollectionPage':'WebPage','@id':url+'#page',url,name:text.title,description:text.description,inLanguage:page.locale,isPartOf:{'@id':siteUrl+'/#website'}}];
 if(page.kind==='detail')schema.push({'@type':'DefinedTerm',name:fa?page.p.equivalent:page.p.proverb,description:text.description,url,inDefinedTermSet:siteUrl+localizedPath(page.locale)+'#sammlung'});
 if(page.kind==='home')schema.push({'@type':'DefinedTermSet','@id':url+'#sammlung',name:ui[page.locale].title,inLanguage:page.locale,url,isAccessibleForFree:true});
 if(page.kind==='topic')schema.push({'@type':'ItemList',itemListElement:canonicalProverbs.filter(p=>p.category===page.topic.name).map((p,i)=>({'@type':'ListItem',position:i+1,name:fa?p.equivalent:p.proverb,url:siteUrl+localizedPath(page.locale,proverbPath(p))}))});
 if(page.kind==='lessons')schema.push({'@type':'Product',name:'Zarbol Masal Lernpaket',description:text.description,image:siteUrl+'/learning-package/preview.jpg',sku:'ZM-PDF-50-2026',brand:{'@type':'Brand',name:'Zarbol Masal'},offers:{'@type':'Offer',url,price:'9.90',priceCurrency:'EUR',availability:'https://schema.org/InStock',seller:{'@type':'Person',name:shop.seller}}});
 if(page.kind==='detail'||page.kind==='topic')schema.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:ui[page.locale].home,item:siteUrl+localizedPath(page.locale)},{'@type':'ListItem',position:2,name:text.title,item:url}]});
 return <LocalizedShell locale={page.locale} path={page.path} wide={page.kind==='home'}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd({'@context':'https://schema.org','@graph':schema})}}/>
 {page.kind==='home'?<CollectionPage locale={page.locale}/>:page.kind==='detail'?<DetailPage locale={page.locale} p={page.p}/>:page.kind==='topic'?<TopicPage locale={page.locale} slug={page.topic.slug}/>:page.kind==='lessons'?<LessonsPage locale={page.locale}/>:page.kind==='shop'?<ShopPage locale={page.locale} path={page.path}/>:<AboutPage locale={page.locale}/>}
 </LocalizedShell>;
}
