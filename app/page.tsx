'use client';

import { useMemo, useState } from 'react';
import {
  ArrowLeftRight,
  BookOpen,
  Search,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { additionalProverbs, type Proverb } from '@/app/additional-proverbs';
import { moreProverbs } from '@/app/more-proverbs';
import proverbArt from '@/app/proverb-art.json';
import { newProverbs } from '@/app/new-proverbs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Direction = 'fa' | 'de';
type SortLanguage = 'default' | 'de' | 'fa';

const ALL_CATEGORIES = 'all';

const categoryLabels: Record<Direction, Record<string, string>> = {
  fa: {
    Alltag: 'زندگی روزمره',
    Arbeit: 'کار',
    Geduld: 'صبر',
    Gelegenheit: 'فرصت',
    Weisheit: 'خرد',
    Zusammenarbeit: 'همکاری',
  },
  de: {
    Alltag: 'Alltag',
    Arbeit: 'Arbeit',
    Geduld: 'Geduld',
    Gelegenheit: 'Gelegenheit',
    Weisheit: 'Weisheit',
    Zusammenarbeit: 'Zusammenarbeit',
  },
};

function getCategoryLabel(category: string, language: Direction) {
  return categoryLabels[language][category] ?? category;
}

const featuredProverbs: Proverb[] = [
  {
    id: 1,
    language: 'fa',
    proverb: 'قطره قطره جمع گردد، وانگهی دریا شود',
    equivalent: 'Kleinvieh macht auch Mist.',
    meaning:
      'Viele kleine Beiträge wirken zunächst unbedeutend, ergeben zusammen aber etwas Großes.',
    category: 'Geduld',
    note: 'Wörtlich: Tropfen für Tropfen entsteht schließlich ein Meer.',
  },
  {
    id: 2,
    language: 'fa',
    proverb: 'جوجه را آخر پاییز می‌شمارند',
    equivalent: 'Man soll den Tag nicht vor dem Abend loben.',
    meaning:
      'Beurteile den Erfolg erst am Ende und freue dich nicht zu früh.',
    category: 'Weisheit',
    note: 'Wörtlich: Die Küken zählt man am Ende des Herbstes.',
  },
  {
    id: 3,
    language: 'fa',
    proverb: 'از تو حرکت، از خدا برکت',
    equivalent: 'Hilf dir selbst, so hilft dir Gott.',
    meaning:
      'Wer etwas erreichen will, muss selbst den ersten Schritt machen.',
    category: 'Arbeit',
    note: 'Wörtlich: Von dir die Bewegung, von Gott der Segen.',
  },
  {
    id: 4,
    language: 'fa',
    proverb: 'آشپز که دو تا شد، آش یا شور می‌شود یا بی‌نمک',
    equivalent: 'Viele Köche verderben den Brei.',
    meaning:
      'Zu viele Verantwortliche behindern sich und verschlechtern oft das Ergebnis.',
    category: 'Zusammenarbeit',
    note: 'Wörtlich: Bei zwei Köchen wird die Suppe zu salzig oder zu fad.',
  },
  {
    id: 5,
    language: 'fa',
    proverb: 'نابرده رنج، گنج میسر نمی‌شود',
    equivalent: 'Ohne Fleiß kein Preis.',
    meaning: 'Ein wertvolles Ziel erreicht man nur durch Mühe und Ausdauer.',
    category: 'Arbeit',
    note: 'Wörtlich: Ohne Mühsal gelangt man nicht zum Schatz.',
  },
  {
    id: 6,
    language: 'fa',
    proverb: 'مرغ همسایه غاز است',
    equivalent: 'Auf der anderen Seite ist das Gras immer grüner.',
    meaning:
      'Was andere besitzen, erscheint uns oft besser als das Eigene.',
    category: 'Alltag',
    note: 'Wörtlich: Das Huhn des Nachbarn ist eine Gans.',
  },
  {
    id: 7,
    language: 'fa',
    proverb: 'تا تنور داغ است، نان را بچسبان',
    equivalent: 'Man muss das Eisen schmieden, solange es heiß ist.',
    meaning: 'Nutze eine günstige Gelegenheit, solange sie noch besteht.',
    category: 'Gelegenheit',
    note: 'Wörtlich: Klebe das Brot an, solange der Ofen heiß ist.',
  },
  {
    id: 8,
    language: 'fa',
    proverb: 'یک دست صدا ندارد',
    equivalent: 'Gemeinsam sind wir stark.',
    meaning:
      'Manche Aufgaben gelingen nur, wenn Menschen zusammenarbeiten.',
    category: 'Zusammenarbeit',
    note: 'Wörtlich: Eine Hand allein macht kein Geräusch.',
  },
  {
    id: 9,
    language: 'de',
    proverb: 'Eine Schwalbe macht noch keinen Sommer.',
    equivalent: 'با یک گل بهار نمی‌شود',
    meaning: 'یک نشانه یا موفقیت کوچک برای نتیجه‌گیری قطعی کافی نیست.',
    category: 'Weisheit',
    note: 'ترجمهٔ لفظی: یک پرستو به‌تنهایی تابستان را نمی‌سازد.',
  },
  {
    id: 10,
    language: 'de',
    proverb: 'Wer anderen eine Grube gräbt, fällt selbst hinein.',
    equivalent: 'چاه‌کن همیشه ته چاه است',
    meaning: 'کسی که برای دیگران بدی می‌خواهد، اغلب خودش گرفتار آن می‌شود.',
    category: 'رفتار',
    note: 'ترجمهٔ لفظی: کسی که برای دیگری گودال می‌کند، خودش در آن می‌افتد.',
  },
  {
    id: 11,
    language: 'de',
    proverb: 'Was du heute kannst besorgen, das verschiebe nicht auf morgen.',
    equivalent: 'کار امروز را به فردا میفکن',
    meaning: 'کاری را که امروز می‌توان انجام داد، نباید بی‌دلیل به تأخیر انداخت.',
    category: 'کار',
    note: 'ترجمهٔ لفظی و مفهوم هر دو ضرب‌المثل تقریباً یکسان‌اند.',
  },
  {
    id: 12,
    language: 'de',
    proverb: 'Übung macht den Meister.',
    equivalent: 'کار نیکو کردن از پُر کردن است',
    meaning: 'مهارت با تمرین و تکرار فراوان به دست می‌آید.',
    category: 'کار',
    note: 'ترجمهٔ لفظی: تمرین، استاد می‌سازد.',
  },
  {
    id: 13,
    language: 'de',
    proverb: 'Wie man in den Wald hineinruft, so schallt es heraus.',
    equivalent: 'هر چه کنی، به خود کنی',
    meaning: 'رفتار انسان با دیگران معمولاً به همان شکل به خودش بازمی‌گردد.',
    category: 'رفتار',
    note: 'ترجمهٔ لفظی: همان‌طور که در جنگل صدا می‌زنی، پژواک می‌شنوی.',
  },
  {
    id: 14,
    language: 'de',
    proverb: 'Der Apfel fällt nicht weit vom Stamm.',
    equivalent: 'گندم از گندم بروید، جو ز جو',
    meaning: 'فرزندان اغلب ویژگی‌ها و رفتار خانوادهٔ خود را نشان می‌دهند.',
    category: 'خانواده',
    note: 'ترجمهٔ لفظی: سیب دور از درختش نمی‌افتد.',
  },
  {
    id: 15,
    language: 'de',
    proverb: 'Wo ein Wille ist, ist auch ein Weg.',
    equivalent: 'خواستن توانستن است',
    meaning: 'اراده و پشتکار، راه رسیدن به هدف را پیدا می‌کند.',
    category: 'اراده',
    note: 'ترجمهٔ لفظی: هرجا اراده‌ای هست، راهی هم هست.',
  },
  {
    id: 16,
    language: 'de',
    proverb: 'Reden ist Silber, Schweigen ist Gold.',
    equivalent: 'زبان سرخ، سر سبز می‌دهد بر باد',
    meaning: 'گاهی سکوت و سنجیده سخن گفتن از حرف زدن ارزشمندتر است.',
    category: 'رفتار',
    note: 'معادل فارسی بر خطرِ سخن نسنجیده تأکید بیشتری دارد.',
  },
];

const proverbPairs: Proverb[] = [
  ...featuredProverbs,
  ...additionalProverbs,
  ...moreProverbs,
  ...newProverbs,
].filter((proverb) => proverb.language === 'fa');

const directionOptions: { value: Direction; label: string; sublabel: string }[] = [
  { value: 'fa', label: 'Persisch → Deutsch', sublabel: 'فارسی به آلمانی' },
  { value: 'de', label: 'Deutsch → Persisch', sublabel: 'آلمانی به فارسی' },
];

export default function Home() {
  const [query, setQuery] = useState('');
  const [direction, setDirection] = useState<Direction>('fa');
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [sortLanguage, setSortLanguage] = useState<SortLanguage>('default');

  const visibleCategories = useMemo(() => {
    const categories = Array.from(
      new Set(proverbPairs.map((proverb) => proverb.category)),
    );

    return [
      {
        value: ALL_CATEGORIES,
        label: direction === 'fa' ? 'همه' : 'Alle',
      },
      ...categories.map((value) => ({
        value,
        label: getCategoryLabel(value, direction),
      })),
    ];
  }, [direction]);

  const filteredProverbs = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('de');

    const matches = proverbPairs.filter((proverb) => {
      const matchesCategory =
        category === ALL_CATEGORIES || proverb.category === category;
      const matchesQuery =
        !normalizedQuery ||
        [
          proverb.proverb,
          proverb.equivalent,
          proverb.meaning,
          proverb.category,
          getCategoryLabel(proverb.category, direction),
        ].some((value) => value.toLocaleLowerCase('de').includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });

    if (sortLanguage === 'default') return matches;

    const collator = new Intl.Collator(sortLanguage, {
      sensitivity: 'base',
      usage: 'sort',
    });

    return [...matches].sort((a, b) =>
      collator.compare(
        sortLanguage === 'fa' ? a.proverb : a.equivalent,
        sortLanguage === 'fa' ? b.proverb : b.equivalent,
      ),
    );
  }, [category, direction, query, sortLanguage]);

  function selectDirection(nextDirection: Direction) {
    setDirection(nextDirection);
    setCategory(ALL_CATEGORIES);
  }

  return (
    <main id="top" className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-amber-950/10 bg-[#fbf7ed]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Zarbol Masal Startseite">
            <span className="logo-mark" aria-hidden="true">ض</span>
            <span className="leading-none">
              <strong className="block font-heading text-lg tracking-[-0.03em] text-[#173c36]">Zarbol Masal</strong>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a5b32]">ضرب‌المثل · Sprichwort</span>
            </span>
          </a>
          <nav className="flex flex-wrap justify-end items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#45615c] sm:text-sm" aria-label="Hauptnavigation">
            <a className="transition-colors hover:text-[#a44a2c]" href={`${process.env.NEXT_PUBLIC_ASSET_BASE ?? ''}/lernpaket/`}>Lernpaket</a>
            <a className="transition-colors hover:text-[#a44a2c]" href="#ueber">Über das Projekt</a>
          </nav>
        </div>
      </header>

      <section id="sammlung" className="mx-auto max-w-7xl px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-[#173c36]/7 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#173c36]">
            <BookOpen className="size-4" />
            Zweisprachige Sammlung
          </div>
          <h1 className="font-heading text-3xl font-semibold tracking-[-0.045em] text-[#173c36] sm:text-5xl">
            Finde das passende Sprichwort
          </h1>
          <p dir="rtl" lang="fa" className="mt-3 text-lg text-[#7c5c45]">ضرب‌المثل مورد نظرت را پیدا کن</p>
        </div>

        <aside className="learning-banner" aria-label="Kostenlose Lernprobe">
          <p><strong>Vom Nachschlagen zum Verstehen.</strong> Fünf Sprichwörter mit Umschrift und Übungen kennenlernen.</p>
          <a href={`${process.env.NEXT_PUBLIC_ASSET_BASE ?? ''}/lernpaket/#lernprobe`}>Kostenlose Lernprobe</a>
        </aside>
        <div className="search-surface mx-auto mt-9 max-w-5xl p-3 sm:p-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#8d8274]" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-14 rounded-2xl border-transparent bg-white pl-12 pr-4 text-base shadow-none placeholder:text-[#9f9589] focus-visible:border-[#b55d36]/40 focus-visible:ring-[#b55d36]/15 sm:h-16 sm:text-lg"
              placeholder="Sprichwort, Bedeutung oder واژه جستجو کنید …"
              aria-label="Sprichwörter durchsuchen"
            />
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {directionOptions.map((option) => {
              const isActive = direction === option.value;
              return (
                <Button
                  key={option.value}
                  type="button"
                  variant="ghost"
                  aria-pressed={isActive}
                  onClick={() => selectDirection(option.value)}
                  className={`h-auto min-h-14 justify-between rounded-xl px-4 py-2 text-left transition-all ${
                    isActive
                      ? 'bg-[#173c36] text-white hover:bg-[#173c36] hover:text-white'
                      : 'text-[#49645f] hover:bg-white hover:text-[#173c36]'
                  }`}
                >
                  <span>
                    <span className="block text-sm font-bold">{option.label}</span>
                    <span dir="rtl" lang="fa" className={`mt-0.5 block text-xs ${isActive ? 'text-white/65' : 'text-[#9a7a63]'}`}>{option.sublabel}</span>
                  </span>
                  <ArrowLeftRight className="size-4 opacity-55" />
                </Button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-b border-[#173c36]/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex flex-wrap gap-2"
            dir={direction === 'fa' ? 'rtl' : 'ltr'}
            lang={direction === 'fa' ? 'fa' : 'de'}
            aria-label={direction === 'fa' ? 'فیلتر بر اساس دسته‌بندی' : 'Nach Kategorie filtern'}
          >
            {visibleCategories.map((item) => (
              <Button
                key={item.value}
                type="button"
                size="sm"
                variant="outline"
                aria-pressed={category === item.value}
                onClick={() => setCategory(item.value)}
                className={`rounded-full border-[#173c36]/12 px-3.5 ${
                  category === item.value
                    ? 'border-[#b55d36] bg-[#b55d36] text-white hover:bg-[#a94f2e] hover:text-white'
                    : 'bg-transparent text-[#60736f] hover:bg-[#173c36]/5'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <p className="text-sm font-medium text-[#7a847f]">
              <strong className="text-[#173c36]">{filteredProverbs.length}</strong> Sprichwörter gefunden
            </p>
            <Select value={sortLanguage} onValueChange={(value) => setSortLanguage(value as SortLanguage)}>
              <SelectTrigger className="h-10 min-w-48 rounded-full border-[#173c36]/15 bg-white px-4 text-[#49645f]" aria-label="Sprichwörter alphabetisch sortieren">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="default">Ursprüngliche Reihenfolge</SelectItem>
                <SelectItem value="de">Deutsch: A–Z</SelectItem>
                <SelectItem value="fa"><span dir="rtl" lang="fa">فارسی: الف تا ی</span></SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredProverbs.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {filteredProverbs.map((proverb, index) => {
              const isPersian = direction === 'fa';
              const illustration = proverbArt[String(proverb.id) as keyof typeof proverbArt];
              const sourceText = isPersian
                ? proverb.proverb
                : proverb.equivalent;
              const equivalentText = isPersian
                ? proverb.equivalent
                : proverb.proverb;
              return (
                <article
                  key={proverb.id}
                  className="proverb-card group"
                  style={{ animationDelay: `${Math.min(index, 5) * 45}ms` }}
                >
                  <img
                    src={illustration.src.startsWith('data:') ? illustration.src : `${process.env.NEXT_PUBLIC_ASSET_BASE ?? ''}${illustration.src}`}
                    alt={isPersian ? illustration.fa : illustration.de}
                    lang={isPersian ? 'fa' : 'de'}
                    width={640}
                    height={300}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="mb-5 block h-auto w-full rounded-xl"
                  />
                  <div className="flex items-center justify-between gap-3">
                    <Badge
                      variant="outline"
                      className="border-[#173c36]/12 bg-[#f7f0df] text-[#6d5a48]"
                    >
                      {isPersian ? 'فارسی · Persisch' : 'Deutsch · آلمانی'}
                    </Badge>
                    <span
                      dir={isPersian ? 'rtl' : 'ltr'}
                      lang={isPersian ? 'fa' : 'de'}
                      className="text-xs font-semibold text-[#a87959]"
                    >
                      {getCategoryLabel(proverb.category, direction)}
                    </span>
                  </div>

                  <p
                    dir={isPersian ? 'rtl' : 'ltr'}
                    lang={isPersian ? 'fa' : 'de'}
                    className={`mt-6 font-heading text-[1.7rem] font-semibold leading-[1.45] text-[#173c36] ${isPersian ? 'text-right' : 'tracking-[-0.025em]'}`}
                  >
                    {sourceText}
                  </p>

                  <div className="my-6 flex items-center gap-3 text-[#b55d36]">
                    <span className="h-px flex-1 bg-current/20" />
                    <ArrowLeftRight className="size-4 transition-transform duration-300 group-hover:rotate-180" />
                    <span className="h-px flex-1 bg-current/20" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87959]">
                      {isPersian ? 'Deutsche Entsprechung' : 'معادل فارسی'}
                    </p>
                    <p
                      dir={isPersian ? 'ltr' : 'rtl'}
                      lang={isPersian ? 'de' : 'fa'}
                      className={`mt-2 text-xl font-bold leading-relaxed text-[#9c492e] ${!isPersian ? 'text-right' : ''}`}
                    >
                      {equivalentText}
                    </p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#173c36]/8 bg-[#f5f0e5]/75 p-4">
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#7b8b86]">
                      Bedeutung
                    </p>
                    <p
                      dir="ltr"
                      lang="de"
                      className="text-sm leading-6 text-[#536963]"
                    >
                      {proverb.meaning}
                    </p>
                  </div>

                  <p
                    dir="ltr"
                    lang="de"
                    className="mt-4 text-xs italic leading-5 text-[#968b7f]"
                  >
                    {proverb.note}
                  </p>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-[#173c36]/20 bg-white/45 px-6 py-16 text-center">
            <Search className="mx-auto size-8 text-[#b55d36]" />
            <h3 className="mt-4 font-heading text-2xl font-semibold text-[#173c36]">Noch nichts gefunden</h3>
            <p dir="rtl" lang="fa" className="mt-2 text-[#7a847f]">واژهٔ دیگری را جستجو کنید</p>
            <Button
              type="button"
              variant="outline"
              className="mt-6 rounded-full border-[#173c36]/15 bg-white"
              onClick={() => {
                setQuery('');
                setCategory(ALL_CATEGORIES);
              }}
            >
              Suche zurücksetzen
            </Button>
          </div>
        )}
      </section>

      <section id="ueber" className="border-y border-[#173c36]/10 bg-[#173c36] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6b980]">Mehr als Übersetzung</span>
            <h2 className="mt-4 max-w-lg font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Eine Redewendung trägt eine ganze Kultur.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#dce7e3]">
              Deshalb zeigen wir nicht nur die wörtliche Übersetzung, sondern vor allem das Sprichwort, das in der anderen Sprache dieselbe Idee ausdrückt.
            </p>
            <p dir="rtl" lang="fa" className="mt-5 max-w-lg text-right text-lg leading-8 text-[#dce7e3]">
              هدف ما ترجمهٔ کلمه‌به‌کلمه نیست؛ بلکه پیدا کردن پلی میان تجربه‌ها، تصویرها و فرهنگ دو زبان است.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#fbf7ed] p-2 shadow-2xl shadow-black/20">
            <img
              src={`${process.env.NEXT_PUBLIC_ASSET_BASE ?? ''}/og.png`}
              alt="Zarbol Masal – Sprichwörter neu verstehen"
              width="1730"
              height="909"
              loading="lazy"
              className="h-auto w-full rounded-[1.15rem]"
            />
          </figure>
        </div>
      </section>

      <footer className="bg-[#f3ead8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-[#6d716b] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="logo-mark logo-mark-small" aria-hidden="true">ض</span>
            <span><strong className="text-[#173c36]">Zarbol Masal</strong> · ضرب‌المثل</span>
          </div>
          <p>Persische und deutsche Sprichwörter im kulturellen Vergleich.</p>
        </div>
      </footer>
    </main>
  );
}
