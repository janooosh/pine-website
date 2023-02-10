import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.png'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-pine py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Deine wertvolle Zeit
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white break-words">
          Verkaufst Du schon auf Marktplätzen? Dann weißt Du sicherlich, dass es fast unmöglich ist, Produktdaten, Lagerbestände und Bestellungen im Blick zu behalten. Unser Tool automatisiert diese Prozesse innerhalb von Minuten und Du musst nicht mehr Tag für Tag verschiedene Systeme pflegen. 
          </p>
          <Button href="https://app.hello-pine.com/regiter" color="white" className="mt-10">
            Jetzt kostenlos testen
          </Button>
        </div>
      </Container>
    </section>
  )
}
