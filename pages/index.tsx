import React, { FC } from 'react'
import {
  FaBuilding as IconAuthority,
  FaUserAstronaut as IconUser
} from 'react-icons/fa'
import {
  HiCursorClick as IconClick
} from 'react-icons/hi'

import { LocaleType } from '../interfaces'

import LOCALE from '../lib/locale'
import TYPES from '../lib/types'
import TRANSLATION from '../lib/translation'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Container from '../components/Container'

interface HomePageProps {
  locale: LocaleType,
  data: any
}

const HomePage: FC<HomePageProps> = ({ locale, data }) => {
  const banner = data.banner
  const container = { id: 'home', content: data }
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
        <button>
          <span>{TRANSLATION.intro.authority.accessPortal[locale]}</span>
          <IconClick/>
        </button>
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
        banner: { type: TYPES.BANNER, data: { type: 'intro' } }
      }
    }
  })
})

const { getStaticProps } = HomeContext(LOCALE.EN)

export default HomePage
export { HomeContext, getStaticProps }