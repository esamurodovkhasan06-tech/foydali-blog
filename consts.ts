// Sayt bo‘yicha umumiy sozlamalar. Maʼlumotlarni shu yerda oʻzgartirasiz.
export const SITE = {
  name: 'Foydali Blog',
  tagline: 'Kundalik hayotda asqotadigan aniq va sodda maqolalar',
  description:
    "Foydali Blog — salomatlik, moliya, xavfsizlik va taʼlim boʻyicha jamiyat uchun foydali maqolalar. Oʻzbek tilida, sodda va amaliy.",
  // DIQQAT: haqiqiy elektron pochtangizni yozing (Aloqa sahifasida shu manzil ishlatiladi).
  email: 'salom@example.com',
  defaultAuthor: 'Foydali Blog jamoasi',
};

export const CATEGORIES = [
  { slug: 'salomatlik', name: 'Salomatlik', description: 'Sogʻlom turmush tarzi, uyqu, ovqatlanish va kundalik odatlar.' },
  { slug: 'moliya', name: 'Moliya', description: 'Oila byudjeti, jamgʻarma va pulni oqilona boshqarish.' },
  { slug: 'texnologiya', name: 'Texnologiya', description: 'Internet xavfsizligi va raqamli savodxonlik.' },
  { slug: 'talim', name: 'Taʼlim', description: 'Samarali oʻrganish usullari va shaxsiy rivojlanish.' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const getCategory = (slug: string) => {
  const found = CATEGORIES.find((c) => c.slug === slug);
  if (!found) throw new Error(`Nomaʼlum kategoriya: ${slug}`);
  return found;
};


export const NAV = [
  { href: '/', label: 'Bosh sahifa' },
  { href: '/maqolalar/', label: 'Maqolalar' },
  { href: '/esse/', label: 'Esse' },
  { href: '/kategoriyalar/', label: 'Kategoriyalar' },
  { href: '/biz-haqimizda/', label: 'Biz haqimizda' },
  { href: '/aloqa/', label: 'Aloqa' },
];

