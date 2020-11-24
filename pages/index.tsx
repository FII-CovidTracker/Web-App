import React, { FC, useState } from 'react'
import {
  FaBuilding as IconAuthority,
  FaUserAstronaut as IconUser,
  FaUserShield as IconLoginUser
} from 'react-icons/fa'
import {
  HiCursorClick as IconClick
} from 'react-icons/hi'
import {
  RiLockPasswordFill as IconLoginPassword
} from 'react-icons/ri'

import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'

import { LocaleType } from '../interfaces'

import LOCALE from '../lib/locale'
import TYPES from '../lib/types'
import TRANSLATION from '../lib/translation'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Container from '../components/Container'

import LoginDialogStyle, {
    LoginDialogHeader,
    LoginDialogFooter
} from '../styles/LoginDialog.styled'

interface HomePageProps {
  locale: LocaleType,
  data: any
}

class LoginDialog {
  private readonly locale: LocaleType;

  constructor(locale: LocaleType) {
    this.locale = locale;
  }

  children() {
    const locale = this.locale;

    return (
      <LoginDialogStyle>
        <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
            <IconLoginUser/>
        </span>
          <InputText placeholder={TRANSLATION.username[locale]} />
        </div>
        <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
            <IconLoginPassword/>
        </span>
          <Password feedback={false} placeholder={TRANSLATION.password[locale]} />
        </div>
      </LoginDialogStyle>
    )
  }

  header() {
    const locale = this.locale;

    return (
        <LoginDialogHeader>
          <p>{TRANSLATION.portal[locale]}</p>
        </LoginDialogHeader>
    )
  }

  footer() {
    const locale = this.locale;

    return (
        <LoginDialogFooter>
          <Button label={TRANSLATION.login[locale]}
            className="p-button-raised"
            icon="pi pi-sign-in"
            iconPos="right"
          />
        </LoginDialogFooter>
    )
  }
}

const HomePage: FC<HomePageProps> = ({ locale, data }) => {
  const banner = data.banner
  const container = { id: 'home', content: data }

  const [loginDialog, setLoginDialog] = useState(false)
  const loginDialogHide = () => { setLoginDialog(false) }
  const loginDialogShow = () => { setLoginDialog(true) }
  const loginRendered = new LoginDialog(locale);

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
        <button onClick={loginDialogShow}>
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

      <Dialog visible={loginDialog} onHide={loginDialogHide}
        children={loginRendered.children()}
        header={loginRendered.header()}
        footer={loginRendered.footer()}
      />
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