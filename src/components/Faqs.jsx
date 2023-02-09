import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Welche Shopsysteme werden unterstützt? ',
      answer:
        'Hello Pine unterstützt momentan Shopify und WooCommerce. Wir arbeiten an weiteren Schnittstellen, die in Kürze angeboten werden. ',
    },
    {
      question: 'Wie viel Zeit muss ich für die Einrichtung einplanen? ',
      answer: 'Die Einrichtung funktioniert super schnell. Die meisten Händler brauchen wenige Minuten. Bei Fragen unterstützt dich unser Customer Support gerne jederzeit. ',
    },
    {
      question: 'Wie lange dauert die Testphase? ',
      answer:
        'Wir bieten dir eine Testphase von einem Monat an, damit du genug Zeit hast, um dich von Hello Pine zu überzeugen. ',
    },
  ],
  [
    {
      question: 'Brauche ich spezielles Vorwissen?',
      answer:
        'Nein, unsere Software ist auf Benutzerfreundlichkeit ausgelegt. Außerdem wissen wir, dass Multichannel für Dich vielleicht ein brandneues Thema ist - daher erleichtern wir Dir den Einstieg durch unseren Support und hilfreiche Anleitungen. ',
    },
    {
      question:
        'Sind EANs verpflichtend?',
      answer:
        'Ob EANs verpflichtend sind oder nicht, das hängt vom Marktplatz ab. Wir unterstützen Dich aber dabei, herauszufinden, ob Du eine EAN benötigst oder nicht. Kontaktiere gerne unseren Kundensupport.',
    },
    {
      question:
        'Wie lange ist Kündigungsfrist?',
      answer:
        'Du kannst die Subscription jederzeit kündigen - es gibt also keine bestimmten Vertragslaufzeiten. Wir sind uns aber sicher, dass Du sehr gerne Hello Pine Nutzer bleibst :-)',
    },
  ],
  [
    {
      question: 'Werde ich während des Setups von Hello Pine unterstützt?',
      answer:
        'In unserem Knowledge Hub findest Du alle Antworten auf Deine Fragen. Falls es darüberhinaus noch Unklarheiten gibt, kannst Du uns jederzeit eine Email schreiben unter connect@hello-pine.com',
    },
    {
      question: 'Sind Preispläne flexibel?',
      answer: 'Alle Preispläne sind flexibel, anpassbar und aktualisieren sich jeden Monat automatisch, basierend auf der Anzahl der abgewickelten Bestellungen.',
    },
    {
      question: 'Gibt es eine Shopify App von Hello Pine?',
      answer:
        'Selbstverständlich findest Du uns im Shopify App Store. Unsere App wird regelmäßig aktualisiert und ermöglicht Dir, Deine Produkte innerhalb weniger Sekunden zu synchronisieren.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0  h-full "
        src={backgroundImage}
        alt=""
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            FAQ
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Schau doch gerne in unserem Knowledge Hub nach oder schreibe uns eine Email unter <a href="mailto:connect@hello-pine.com">connect@hello-pine.com</a>, falls Du noch weitere Fragen hast :)
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
