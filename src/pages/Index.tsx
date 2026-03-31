import { useState } from "react"
import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"

const features = [
  {
    icon: "🌊",
    title: "Море в шаговой доступности",
    desc: "Выходи на пляж прямо из лагеря — солнце, волны и свежий черноморский бриз каждый день",
  },
  {
    icon: "🏊",
    title: "Бассейн с тёплой водой",
    desc: "Чистый бассейн для тренировок и отдыха — идеально для любого уровня подготовки",
  },
  {
    icon: "🍽️",
    title: "Домашнее питание 4 раза в день",
    desc: "Сытный завтрак, обед, полдник и ужин — всё свежее, вкусное и приготовлено с заботой",
  },
  {
    icon: "🗺️",
    title: "Насыщенные экскурсии",
    desc: "Интересные маршруты по черноморскому побережью: горы, водопады, исторические места",
  },
]

const schedule = [
  { time: "07:30", activity: "Подъём и утренняя зарядка" },
  { time: "08:30", activity: "Завтрак" },
  { time: "09:30", activity: "Спортивные тренировки / секции" },
  { time: "12:30", activity: "Свободное время на пляже" },
  { time: "13:30", activity: "Обед" },
  { time: "15:00", activity: "Тихий час / отдых" },
  { time: "16:30", activity: "Полдник" },
  { time: "17:00", activity: "Экскурсии / игры / бассейн" },
  { time: "19:30", activity: "Ужин" },
  { time: "21:00", activity: "Вечерние мероприятия, костёр" },
  { time: "22:30", activity: "Отбой" },
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

const galleryImages = [
  {
    url: "https://cdn.poehali.dev/projects/380b0771-046d-4bdc-9819-245ece75f2d8/bucket/7ff412ab-ea6a-458f-b4e5-96364fbbaf83.png",
    alt: "Черноморский пляж",
  },
  {
    url: "https://cdn.poehali.dev/projects/380b0771-046d-4bdc-9819-245ece75f2d8/bucket/c1ab0d43-3455-450c-bbf3-e7c0ebd5d932.png",
    alt: "Спортивные тренировки",
  },
  {
    url: "https://cdn.poehali.dev/projects/380b0771-046d-4bdc-9819-245ece75f2d8/bucket/34ff9c76-d053-4baa-9124-3929835612e9.jpg",
    alt: "Питание в лагере",
  },
  {
    url: "https://cdn.poehali.dev/projects/380b0771-046d-4bdc-9819-245ece75f2d8/bucket/1e5b84a2-3bc8-4ef7-ad9a-00fbc9dd91d5.jpg",
    alt: "Верёвочный парк",
  },
  {
    url: "https://cdn.poehali.dev/projects/380b0771-046d-4bdc-9819-245ece75f2d8/bucket/d3059cb0-d588-440d-a43b-6b909591436f.JPG",
    alt: "Территория лагеря",
  },
]

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

const Index = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null)

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Photo Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/380b0771-046d-4bdc-9819-245ece75f2d8/bucket/484d856f-3512-4dd6-ada2-10bf3f767a0d.JPG')" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 w-full h-full flex items-center justify-center mix-blend-multiply opacity-60">
          <GradientBlinds
            gradientColors={["#020d1a", "#043d5c", "#0e7490", "#0284c7", "#06b6d4"]}
            angle={12}
            noise={0.18}
            blindCount={11}
            blindMinWidth={55}
            spotlightRadius={0.42}
            spotlightSoftness={1.4}
            spotlightOpacity={0.45}
            mouseDampening={0.12}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="overlay"
          />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center justify-center min-h-screen w-full px-5 sm:px-20">
              <div className="relative z-10 flex max-w-5xl flex-col items-center gap-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
                  <span className="text-cyan-300">✦</span>
                  Активный отдых на Чёрном море
                </div>
                <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl text-balance drop-shadow-2xl">
                  Спорт. Море.
                  <br />
                  <span className="text-cyan-300">Приключения.</span>
                </h1>
                <p className="text-xl text-white/85 max-w-2xl text-pretty drop-shadow-lg">
                  Незабываемый лагерь для клубов, кружков и секций — море в шаговой доступности, домашнее питание и яркие экскурсии на черноморском побережье.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <a href="#prices" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:bg-cyan-50 shadow-2xl">
                    Забронировать место
                  </a>
                  <a href="#schedule" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/50 shadow-xl">
                    Узнать программу
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
                  {features.map((f) => (
                    <div
                      key={f.title}
                      className="rounded-2xl border border-white/15 backdrop-blur-md p-5 text-left flex flex-col gap-2 hover:bg-white/12 transition-all"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    >
                      <span className="text-3xl">{f.icon}</span>
                      <h3 className="text-white font-semibold text-sm leading-snug">{f.title}</h3>
                      <p className="text-white/60 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SCHEDULE ========== */}
      <section id="schedule" className="relative bg-slate-900 py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Каждый день насыщен</span>
            <h2 className="text-4xl font-bold text-white mt-2">Распорядок дня</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-cyan-500/20" />
            <div className="flex flex-col gap-1">
              {schedule.map((item, i) => (
                <div key={i} className="flex items-center gap-5 py-3">
                  <span className="w-14 text-right text-cyan-400 font-mono text-sm font-bold shrink-0">{item.time}</span>
                  <div className="relative z-10 w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-900 shrink-0" />
                  <span className="text-white/85 text-base">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section id="gallery" className="relative bg-slate-950 py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Живые моменты</span>
            <h2 className="text-4xl font-bold text-white mt-2">Галерея</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""}`}
                style={{ aspectRatio: i === 0 ? "1/1.5" : "4/3" }}
                onClick={() => setActivePhoto(img.url)}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-3xl">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <img src={activePhoto} alt="" className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl" />
            <button className="absolute top-6 right-6 text-white text-3xl hover:text-cyan-400 transition-colors">✕</button>
          </div>
        )}
      </section>

      {/* ========== PRICES ========== */}
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

      {/* ========== REVIEWS ========== */}
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

      {/* ========== FOOTER CTA ========== */}
      <section id="contacts" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-5">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-white">Готовы к незабываемому лету?</h2>
          <p className="text-white/60 text-lg">Свяжитесь с нами — расскажем о свободных местах и ответим на все вопросы</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a
              href="tel:+78001234567"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/30"
            >
              📞 Позвонить
            </a>
            <a
              href="https://t.me/aquasport_camp"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all"
            >
              ✈️ Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Index