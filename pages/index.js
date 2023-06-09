import Features from '@/components/features/features'
import HowItWorks from '@/components/howitworks/howItWorks'
import Intro from '@/components/intro/intro'
import Layout from '@/components/layout/Layout'
import Partners from '@/components/partners/partners'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  return (
    <Layout isAbout={false}>
      <Intro />
      <Features />
      <HowItWorks />
      <Partners />
    </Layout>
  )
}

export const getStaticProps = async ({
  locale,
}) => {
  console.log("current locale", locale)
  return ({
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common'
      ])),
    },
  })
}
