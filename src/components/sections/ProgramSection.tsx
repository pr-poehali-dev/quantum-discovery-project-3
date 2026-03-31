import { useState } from "react"

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

const ProgramSection = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null)

  return (
    <>
      {/* SCHEDULE */}
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

      {/* GALLERY */}
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
    </>
  )
}

export default ProgramSection
