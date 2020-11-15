import React, { FC } from 'react'

import { LocaleType, API_TYPE } from '../interfaces'

import API from '../lib/fetch'
import LOCALE from '../lib/locale'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Container from '../components/Container'
import TYPES from "../lib/types";

interface HomePageProps {
  locale: LocaleType,
  data: {
    banner: API_TYPE,
    news: API_TYPE
  }
}

const HomePage: FC<HomePageProps> = ({ locale, data}) => {
  const banner = data.banner
  const container = { id: 'news', content: data.news }

  return (
    <Layout locale={locale}>
      <Banner data={banner} />
      <Container data={container} />
    </Layout>
  )
}

const HomeContext = (locale: LocaleType) => ({
  getStaticProps: async () => ({
    props: {
      locale,
      data: {
        banner: { type: TYPES.BANNER, data: { type: 'intro' } },
        news: await API.NEWS.getAll(locale),
      }
    }
  })
})

const { getStaticProps } = HomeContext(LOCALE.RO)

export default HomePage
export { HomeContext, getStaticProps }