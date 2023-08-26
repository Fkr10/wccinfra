export const metadata = {
  title: 'WCC Infra Private Limited',
  description: 'Discover construction excellence with Wcc Infra Private Limited. Specializing in innovative infrastructure solutions, we bring expertise to water construction, pipelines, and more. Shape the future with us.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
