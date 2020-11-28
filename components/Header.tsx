import React, { FC, PropsWithChildren, useState } from 'react'
import {
    BiHome as IconHome,
    BiNews as IconNews,
    BiCog as IconSettings,
    BiInfoCircle as IconAbout
} from 'react-icons/bi'
import {
    HiOfficeBuilding as IconAuthority
} from 'react-icons/hi'
import {
    FaUserCircle as IconUser
} from 'react-icons/fa'
import {
    IoLogOut as IconLogout
} from 'react-icons/io5'

import Link from 'next/link'
import { useRouter } from 'next/router'

import STATIC from '../data'
import TRANSLATION from '../lib/translation'
import { useUser } from '../lib/auth/useUser'
import { useLocale } from '../context/Locale'
import { LoginRedirect } from '../pages'

import Language from './Language'
import Styles from '../styles/Header.styled'

const HeaderLogo: FC<{ disableTitle?: boolean }> = ({ disableTitle } = { disableTitle: false }) => {
    const locale = useLocale()

    return (
        <div className="logo-container">
            <Link href={TRANSLATION.home.slug[locale]}>
                <a className="logo">
                    <div className="icon">
                        <img src="/assets/logo.png" alt="Logo" />
                    </div>
                    {
                        disableTitle ? null : (
                            <div className={`title title--${locale}`}>
                                <span>{TRANSLATION.header.title[locale][0]}</span>
                                <span>{TRANSLATION.header.title[locale][1]}</span>
                            </div>
                        )
                    }
                </a>
            </Link>
        </div>
    )
}

const HeaderNav: FC<PropsWithChildren<any>> = (props) => {
    const { disableIcons, ...rest } = props
    const { pathname } = useRouter()
    const locale = useLocale()
    const nav = {
        sections: STATIC.header.sections,
        icon: (section: string) => {
            switch (section) {
                case 'home':
                    return <IconHome className={`icon icon--${TRANSLATION[section]['en'].toLowerCase()}`} />
                case 'news':
                    return <IconNews className={`icon icon--${TRANSLATION[section]['en'].toLowerCase()}`} />
                case 'about':
                    return <IconAbout className={`icon icon--${TRANSLATION[section]['en'].toLowerCase()}`} />
                default:
                    return null
            }
        }
    }

    return (
        <nav {...rest}>
            {nav.sections.map((page, index) => {
                const href = TRANSLATION[page].slug[locale]
                return (
                    <Link href={href} key={index}>
                        <a className={'link' + (pathname === href ? ' active' : '')}>
                            {disableIcons ? null : nav.icon(page)}
                            {TRANSLATION[page][locale]}
                        </a>
                    </Link>
                )
            })}
        </nav>
    )
}

const HeaderUser: FC = () => {
    const { user, logout } = useUser()
    if (!user) return null

    const locale = useLocale()
    const router = useRouter()
    const href = LoginRedirect(locale)
    const { pathname } = router

    document.body.classList.add('extra')

    const Portal = () => (
        <div className="portal">
            <Link href={href}>
                <a className={'link' + (pathname === href ? ' active' : '')}>
                    <span>{TRANSLATION.authorities.portal[locale]}</span>
                    <IconAuthority/>
                </a>
            </Link>
        </div>
    )

    const Controls = () => {
        const handleLogout = async() => {
            await logout((error: any) => {
                if (error) {
                    console.error(error);
                    return;
                }

                document.body.classList.remove('extra')

                if (pathname === href) {
                    router.push('../../')
                }
            })
        }

        return (
            <div className="user">
                <div className="email">
                    <span>{user.email}</span>
                    <IconUser/>
                </div>
                <div className="menu">
                    <button onClick={async () => await handleLogout()}>
                        <span>{TRANSLATION.header.disconnect[locale]}</span>
                        <IconLogout/>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            <Portal/>
            <Controls/>
        </>
    )
}

const HeaderPreferences: FC = () => {
    const locale = useLocale()

    return (
        <div className="preferences">
            <button>
                <IconSettings />
                <span>{TRANSLATION.header.settings[locale]}</span>
            </button>
        </div>
    )
}

const Header: FC = () => {
    const [fixedHeader, setFixedHeader] = useState<boolean>(false)

    if (typeof window !== 'undefined') {
        const getComputedValue = (style: CSSStyleDeclaration, property: string) => (
            parseInt(style.getPropertyValue(property).trim().slice(0, -2))
        )
        const root = document.documentElement
        const computedStyle = getComputedStyle(root)
        const headerHeight = getComputedValue(computedStyle, '--header-height')
        const navHeight = getComputedValue(computedStyle, '--nav-height')
        const minimScroll = headerHeight + navHeight

        window.addEventListener('scroll', _ => {
            if (!fixedHeader && window.scrollY >= minimScroll) {
                setFixedHeader(true)
            }
            else if (fixedHeader && window.scrollY < minimScroll) {
                setFixedHeader(false)
            }
        })
    }

    return (
        <Styles>
            <div className="header">
                <div className="container">
                    <HeaderLogo/>
                    <div className="header-options">
                        <Language/>
                        <HeaderPreferences/>
                    </div>
                </div>
            </div>
            <div className={`nav nav--${fixedHeader ? 'fixed' : 'absolute' }`}>
                <div className="container">
                    { fixedHeader ? <HeaderLogo disableTitle /> : null }
                    <HeaderNav />
                    <HeaderUser />
                </div>
            </div>
        </Styles>
    )
}

export default Header

const Logo = HeaderLogo;
const Nav = HeaderNav;
export { Logo, Nav }