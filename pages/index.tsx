import React, { FC } from 'react'
import {
  FaBuilding as IconAuthority,
  FaUserAstronaut as IconUser
} from 'react-icons/fa'

import { LocaleType, API_TYPE } from '../interfaces'

import API from '../lib/fetch'
import LOCALE from '../lib/locale'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Container from '../components/Container'
import TYPES from "../lib/types";
import TRANSLATION from "../lib/translation";

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
  const intro = [
    <div className="applications" key="applications">
      <div><IconUser/></div>
      <div>{TRANSLATION.intro.user[locale]}</div>
      <div>
        <p>{TRANSLATION.intro.user.advice[locale]}</p>
      </div>
      <div>
        <img src={`/assets/badges/${locale}/android-badge.png`} height={43} alt=""/>
        <img src={`/assets/badges/${locale}/ios-badge.svg`} height={43} alt=""/>
      </div>
    </div>,
    <div className="authority" key="authority">
      <div><IconAuthority/></div>
      <div>{TRANSLATION.intro.authority[locale]}</div>
      <div>
        <p>{TRANSLATION.intro.authority.advice[locale]}</p>
      </div>
      <div>
        <button>Access the portal for Authorities</button>
      </div>
    </div>
  ]

  return (
    <Layout locale={locale}>
      <Banner data={banner} />
      <Container data={container} before={intro}/>
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

const { getStaticProps } = HomeContext(LOCALE.EN)

export default HomePage
export { HomeContext, getStaticProps }