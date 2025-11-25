// pages/compressors/frequency-controlled.jsx
import PageLayout from '../../components/PageLayout'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Частотно-регулируемые компрессоры (ПМД)",
  "description": "Частотно-регулируемые винтовые компрессоры с ПМД — плавный контроль оборотов, экономия электроэнергии."
}

export default function FrequencyControlledPage() {
  return (
    <PageLayout
      title="Частотно-регулируемые компрессоры (ПМД) — экономия энергии и точный контроль"
      description="Частотно-регулируемые винтовые компрессоры с ПМД — плавный контроль оборотов, низкая энергоёмкость при переменной нагрузке. Подбор и примеры."
      canonical={`${SITE}/compressors/frequency-controlled`}
      heroImage="/assets/compressors-frequency-hero.png"
      jsonLd={jsonLd}
    >
      <section className="container mx-auto px-6 py-12 max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">Частотно-регулируемые компрессоры с ПМД</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Частотно-регулируемые компрессоры позволяют точно подстраивать подачу воздуха под реальную нагрузку, существенно снижая
          энергопотребление при непостоянном потреблении. Для промышленных линий с переменным спросом это один из лучших способов
          уменьшить OPEX.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 border rounded bg-gray-50">
            <h3 className="font-semibold mb-2">Экономия и управление</h3>
            <p className="text-sm text-gray-600">Возможна экономия электроэнергии до 20–40% в режимах переменной нагрузки.</p>
          </div>

          <div className="p-6 border rounded bg-gray-50">
            <h3 className="font-semibold mb-2">Интеграция</h3>
            <p className="text-sm text-gray-600">Комбинируются с ресиверами и системами управления нагрузкой, подходят для удалённого мониторинга.</p>
          </div>
        </div>

        <div className="text-center my-10">
          <a
            href="#footer"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Рассчитать экономию от ПМД для вашей линии
          </a>
        </div>

        <section>
          <h4 className="text-2xl font-semibold mb-3">FAQ</h4>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong>В каких случаях ПМД невыгоден?</strong>
              <p className="text-sm">При абсолютно постоянной нагрузке выгоднее фиксированные приводы меньшей мощности.</p>
            </div>
          </div>
        </section>
      </section>
    </PageLayout>
  )
}
