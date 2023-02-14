import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello Pine - AI powered Multichannel</title>
        <meta
          name="description"
          content="Hello Pine enables you to connect easily with your most important marketplaces. Boost your revenues and save money by automating your workflow. Book our free trail today."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
