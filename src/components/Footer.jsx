import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="https://www.hello-pine.com/#features">Features</NavLink>
              <NavLink href="https://www.hello-pine.com/#testimonials">Testimonials</NavLink>
              <NavLink href="https://www.hello-pine.com/#pricing">Pricing</NavLink>
              
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
          </div>
          <p className="mt-6 text-xs text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Hello Pine UG | <NavLink href="https://www.hello-pine.com/impressum">Impressum</NavLink> <NavLink href="https://www.hello-pine.com/privacy">Datenschutz</NavLink> <NavLink href="https://www.hello-pine.com/agb">AGB</NavLink>
          </p>
        </div>
      </Container>
    </footer>
  )
}
