import { additionalProverbs, type Proverb } from './additional-proverbs';
import { moreProverbs } from './more-proverbs';
import { newProverbs } from './new-proverbs';

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

export const proverbPairs: Proverb[] = [
  ...featuredProverbs,
  ...additionalProverbs,
  ...moreProverbs,
  ...newProverbs,
].filter((proverb) => proverb.language === 'fa');

