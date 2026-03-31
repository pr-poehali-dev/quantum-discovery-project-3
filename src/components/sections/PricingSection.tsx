const prices = [
  {
    title: "Старт",
    duration: "7 дней",
    price: "24 990 ₽",
    features: ["Проживание", "4-разовое питание", "Тренировки", "1 экскурсия", "Бассейн"],
    highlight: false,
  },
  {
    title: "Оптимальный",
    duration: "14 дней",
    price: "47 990 ₽",
    features: ["Проживание", "4-разовое питание", "Тренировки", "3 экскурсии", "Бассейн", "Пляжный спорт"],
    highlight: true,
  },
  {
    title: "Максимум",
    duration: "21 день",
    price: "59 900 ₽",
    features: ["Проживание", "4-разовое питание", "Тренировки", "5 экскурсий", "Бассейн", "Пляжный спорт", "Трансфер"],
    highlight: false,
  },
]

const extras = [
  { icon: "🚌", title: "Трансфер", price: "5 000 ₽", desc: "Доставка из вашего города и обратно" },
  { icon: "🛡️", title: "Страховка", price: "2 500 ₽", desc: "Медицинская страховка на весь период" },
  { icon: "📸", title: "Фотосессия", price: "5 000 ₽", desc: "Профессиональная съёмка воспоминаний" },
  { icon: "⭐", title: "VIP экскурсии", price: "10 000 ₽", desc: "Эксклюзивные маршруты с гидом" },
]

const reviews = [
  {
    name: "Марина К.",
    child: "мама Артёма, 12 лет",
    text: "Сын вернулся счастливый и загорелый! Питание отличное, воспитатели внимательные. Уже планируем следующее лето.",
    stars: 5,
  },
  {
    name: "Дмитрий С.",
    child: "папа Насти, 10 лет",
    text: "Дочка занимается плаванием — бассейн чистый, тренировки каждый день. Море рядом — это огромный плюс. Всем рекомендую!",
    stars: 5,
  },
  {
    name: "Ольга Т.",
    child: "мама близнецов Миши и Кости",
    text: "Отправили обоих сыновей — не было ни одной жалобы. Экскурсии разнообразные, еда вкусная. Спасибо организаторам!",
    stars: 5,
  },
  {
    name: "Светлана Р.",
    child: "мама Ани, 9 лет",
    text: "Первый раз отправила дочку одну — переживала очень. Но лагерь превзошёл все ожидания. Аня уже спрашивает, когда снова!",
    stars: 5,
  },
]

const PricingSection = () => {
  return (
    <>
      {/* PRICES */}
      <section id="prices" className="relative bg-slate-900 py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Выберите свой вариант</span>
            <h2 className="text-4xl font-bold text-white mt-2">Стоимость путёвок</h2>
            <p className="text-white/50 mt-3">Цены указаны на одного ребёнка. Скидка 10% при бронировании до 1 мая.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prices.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-3xl p-8 flex flex-col gap-6 border transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-b from-cyan-500/20 to-blue-600/20 border-cyan-500/50 scale-105 shadow-2xl shadow-cyan-500/20"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {plan.highlight && (
                  <div className="text-center">
                    <span className="bg-cyan-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Популярный
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-white text-xl font-bold">{plan.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{plan.duration}</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-white/75 text-sm">
                      <span className="text-cyan-400">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacts"
                  className={`text-center py-3 rounded-2xl font-semibold transition-all ${
                    plan.highlight
                      ? "bg-cyan-500 text-slate-900 hover:bg-cyan-400"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Забронировать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section className="relative bg-slate-950 py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">По желанию</span>
            <h2 className="text-3xl font-bold text-white mt-2">Дополнительные опции</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {extras.map((extra) => (
              <div key={extra.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3 hover:border-cyan-500/40 hover:bg-white/8 transition-all">
                <span className="text-3xl">{extra.icon}</span>
                <div>
                  <h3 className="text-white font-semibold">{extra.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{extra.desc}</p>
                </div>
                <p className="text-cyan-400 font-bold text-lg mt-auto">+ {extra.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative bg-slate-950 py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Нам доверяют</span>
            <h2 className="text-4xl font-bold text-white mt-2">Отзывы родителей</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rounded-3xl border border-white/10 p-7 flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/80 text-base leading-relaxed">«{r.text}»</p>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-white font-semibold">{r.name}</p>
                  <p className="text-white/40 text-sm">{r.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingSection
