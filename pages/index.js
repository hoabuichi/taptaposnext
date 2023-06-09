import Layout from '@/components/layout/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  return (
    <Layout isAbout={false}>
      <div>Hoa</div>
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
