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

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center">
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
        {/* Hero Section */}
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
                <a href="#contacts" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:bg-cyan-50 focus:outline-none shadow-2xl">
                  Забронировать место
                </a>
                <a href="#program" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/50 focus:outline-none shadow-xl">
                  Узнать программу
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Feature cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-md p-5 text-left flex flex-col gap-2 hover:bg-white/12 transition-all"
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
    </main>
  )
}

export default Index