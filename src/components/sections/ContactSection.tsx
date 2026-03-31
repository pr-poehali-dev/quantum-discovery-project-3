import { useState } from "react"
import func2url from "../../../func2url.json"

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', comment: '' })
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    try {
      const res = await fetch(func2url.applications, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setFormState('success')
        setForm({ name: '', phone: '', comment: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <>
      {/* APPLICATION FORM */}
      <section id="application" className="relative bg-slate-900 py-20 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Оставьте заявку</span>
            <h2 className="text-4xl font-bold text-white mt-2">Забронировать место</h2>
            <p className="text-white/50 mt-3">Оставьте имя и номер — мы перезвоним и расскажем обо всех деталях</p>
          </div>

          {formState === 'success' ? (
            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-10 text-center flex flex-col items-center gap-4">
              <span className="text-5xl">🎉</span>
              <h3 className="text-white text-2xl font-bold">Заявка отправлена!</h3>
              <p className="text-white/60">Мы свяжемся с вами в ближайшее время</p>
              <button onClick={() => setFormState('idle')} className="mt-2 text-cyan-400 hover:text-cyan-300 text-sm underline underline-offset-4">
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm">Имя ребёнка и родителя *</label>
                <input
                  type="text"
                  required
                  placeholder="Например: Иван Петров"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="rounded-2xl bg-white/8 border border-white/15 px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm">Телефон *</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="rounded-2xl bg-white/8 border border-white/15 px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm">Комментарий (необязательно)</label>
                <textarea
                  rows={3}
                  placeholder="Возраст ребёнка, вопросы, пожелания..."
                  value={form.comment}
                  onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
                  className="rounded-2xl bg-white/8 border border-white/15 px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                />
              </div>
              {formState === 'error' && (
                <p className="text-red-400 text-sm text-center">Ошибка отправки. Попробуйте ещё раз или позвоните нам.</p>
              )}
              <button
                type="submit"
                disabled={formState === 'loading'}
                className="rounded-full bg-cyan-500 py-4 text-lg font-semibold text-slate-900 hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
              </button>
              <p className="text-white/30 text-xs text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-5">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <div className="text-center">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Мы рядом</span>
            <h2 className="text-4xl font-bold text-white mt-2">Наши контакты</h2>
            <p className="text-white/50 mt-3">Свяжитесь удобным способом — ответим быстро</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="tel:+79881561911"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-500/40 hover:bg-white/8 transition-all group"
            >
              <span className="text-3xl">📞</span>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide">Телефон (MAX)</p>
                <p className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">+7 (988) 156-19-11</p>
              </div>
            </a>

            <a
              href="https://t.me/+79881561911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-500/40 hover:bg-white/8 transition-all group"
            >
              <span className="text-3xl">✈️</span>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide">Telegram</p>
                <p className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">Написать</p>
              </div>
            </a>

            <a
              href="https://wa.me/79881561911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-500/40 hover:bg-white/8 transition-all group"
            >
              <span className="text-3xl">💬</span>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide">WhatsApp</p>
                <p className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">Написать</p>
              </div>
            </a>

            <a
              href="mailto:BSHolidays@yandex.ru"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-500/40 hover:bg-white/8 transition-all group"
            >
              <span className="text-3xl">📧</span>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide">Почта</p>
                <p className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">BSHolidays@yandex.ru</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2 lg:col-span-2">
              <span className="text-3xl">📍</span>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide">Адрес</p>
                <p className="text-white font-semibold text-lg">г. Сочи, посёлок Уч-Дере</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79881561911"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/30"
            >
              📞 Позвонить
            </a>
            <a
              href="https://t.me/+79881561911"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all"
            >
              ✈️ Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection
