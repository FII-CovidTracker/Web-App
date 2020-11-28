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
import { NextRouter, useRouter } from 'next/router'

import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'

import { LocaleType } from '../interfaces'

import LOCALE from '../lib/locale'
import TYPES from '../lib/types'
import TRANSLATION from '../lib/translation'
import { useUser } from '../lib/auth/useUser'
import { useLocale } from "../context/Locale";

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

interface LoginDialogProps {
    visible: boolean,
    onHide: () => void
}

type UserType = {
    email: string,
    password: string
}

class LoginDialogHandler {
    private readonly locale: LocaleType;
    private readonly user: UserType
    private readonly auth: { login: Function }
    private readonly router: NextRouter

    constructor(locale: LocaleType) {
        this.locale = locale
        this.user = { email: '', password: '' }
        this.auth = useUser()
        this.router = useRouter()
    }

    header = () => (
        <LoginDialogHeader>
            <p>{TRANSLATION.portal[this.locale]}</p>
        </LoginDialogHeader>
    )

    children = () => {
        const locale = this.locale

        return (
            <LoginDialogStyle>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <IconLoginUser/>
                    </span>
                    <InputText
                        placeholder={TRANSLATION.username[locale]}
                        onChange={(e: any) => this.user.email = e.target.value}
                    />
                </div>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <IconLoginPassword/>
                    </span>
                    <Password
                        feedback={false}
                        placeholder={TRANSLATION.password[locale]}
                        onChange={(e: any) => this.user.password = e.target.value}
                    />
                </div>
            </LoginDialogStyle>
        )
    }

    footer = () => (
        <LoginDialogFooter>
            <Button
                label={TRANSLATION.login[this.locale]}
                className="p-button-raised"
                icon="pi pi-sign-in"
                iconPos="right"
                onClick={(e: any) => this.handleLogin(e)}
            />
        </LoginDialogFooter>
    )

    private async handleLogin(e: any) {
        e.preventDefault();
        const { email, password } = this.user

        await this.auth.login(email, password, (error: any, _: any) => {
            if (error) {
                console.error(error);
                return;
            }

            return this.router.push(LoginRedirect(this.locale))
        })
    }
}

const LoginDialog: FC<LoginDialogProps> = ({ visible, onHide }) => {
    const locale = useLocale()
    const loginDialogHandler = new LoginDialogHandler(locale);

    return (
        <Dialog visible={visible} onHide={onHide}
                children={loginDialogHandler.children()}
                header={loginDialogHandler.header()}
                footer={loginDialogHandler.footer()}
        />
    )
}

const LoginRedirect = (locale: LocaleType) => {
    let redirect = TRANSLATION.authorities.slug[locale]
    if (locale === LOCALE.EN) redirect += TRANSLATION.portal.slug[locale]
    else redirect += `/${TRANSLATION.portal.slug[locale].substr(1).split('/').slice(1).join('/')}`
    return redirect;
}

const HomePage: FC<HomePageProps> = ({ locale, data }) => {
    const { user } = useUser()
    const router = useRouter()
    const banner = data.banner
    const container = { id: 'home', content: data }
    const [loginDialog, setLoginDialog] = useState(false)

    const handleLogin = () => {
        if (user) {
            router.push(LoginRedirect(locale))
            return
        }

        setLoginDialog(true)
    }

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
                <button onClick={() => handleLogin()}>
                    <span>{TRANSLATION.intro.authority.accessPortal[locale]}</span>
                    <IconClick/>
                </button>
            </div>
        </div>
    ]

    return (
        <Layout locale={locale}>
          <Banner data={banner}/>
          <Container data={container} before={intro}/>
          <LoginDialog visible={loginDialog} onHide={() => setLoginDialog(false)}/>
        </Layout>
    )
}

const HomeContext = (locale: LocaleType) => ({
  getStaticProps: async () => ({
    props: {
      locale,
      data: {
        banner: {
            type: TYPES.BANNER, data: { type: 'intro' }
        }
      }
    }
  })
})

const { getStaticProps } = HomeContext(LOCALE.EN)

export default HomePage
export { HomeContext, LoginRedirect, getStaticProps }