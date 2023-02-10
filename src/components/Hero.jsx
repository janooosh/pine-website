import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoAvocadostore from '@/images/logos/avocadostore.svg'
import logoEtsy from '@/images/logos/etsy.svg'
import logoGoogle from '@/images/logos/google.svg'
import logoMeta from '@/images/logos/meta.svg'
import logoOtto from '@/images/logos/otto.svg'
import logoZalando from '@/images/logos/zalando.svg'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="max-w-4xl mx-auto text-5xl font-medium tracking-tight font-display text-slate-900 sm:text-7xl">
        Easy to use{' '}
        <span className="relative text-blue-600 whitespace-nowrap">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-pine-digga"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative text-pine">multichannel</span>
        </span>{' '}
        
      </h1>
      <p className="max-w-2xl mx-auto mt-6 text-lg tracking-tight text-slate-700">
        Hello Pine verbindet dich mit einer großen Auswahl an Markt mit nur wenigen Klicks.
      </p>
      <div className="flex justify-center mt-10 gap-x-6">
        <Button href="https://app.hello-pine.com/register">Kostenlos Testen</Button>

      </div>
      <div className="mt-36 lg:mt-44 mb-12 lg:mb-0">
        <p className="text-base font-display text-slate-900">
          Verbinde dich ganz einfach mit:
        </p>
        <ul
          role="list"
          className="flex items-center justify-center h-12 mt-8 gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Avocadostore', logo: logoAvocadostore },
              { name: 'Etsy', logo: logoEtsy },
              { name: 'Google', logo: logoGoogle },
            ],
            [
              { name: 'Meta', logo: logoMeta },
              { name: 'Otto', logo: logoOtto },
              { name: 'Zalando', logo: logoZalando },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 h-12 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex flex-1 object-contain h-full">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
