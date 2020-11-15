import React, { FC, useState } from 'react'
import {
    BiHome as IconHome,
    BiNews as IconNews,
    BiUserCircle as IconConnect,
    BiInfoCircle as IconAbout
} from 'react-icons/bi'
import {
    FaSearch as IconSearch
} from 'react-icons/fa'

import Link from 'next/link'
import { useRouter } from 'next/router'

import STATIC from '../data'
import TRANSLATION from '../lib/translation'

import { useLocale } from '../context/Locale'

import Language from "./Language";
import Styles from '../styles/Header.styled'

const HeaderLogo: FC<{ disableTitle?: boolean }> = ({ disableTitle } = { disableTitle: false }) => {
    const locale = useLocale()

    return (
        <div className="logo-container">
            <Link href={TRANSLATION.home.slug[locale]}>
                <a className="logo">
                    {
                        disableTitle
                        ? (
                            <div className="icon">
                                <img src="/assets/logo.png" alt="Logo" />
                            </div>)
                        : (
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

const HeaderNav: FC = () => {
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
        <nav>
            {nav.sections.map((page, index) => {
                const href = TRANSLATION[page].slug[locale]
                return (
                    <Link href={href} key={index}>
                        <a className={'link' + (pathname === href ? ' active' : '')}>
                            {nav.icon(page)}
                            {TRANSLATION[page][locale]}
                        </a>
                    </Link>
                )
            })}
        </nav>
    )
}

const HeaderSearch: FC = () => {
    const locale = useLocale()

    return (
        <div className="search">
            <button className="link" aria-label={TRANSLATION.header.search[locale]}>
                <IconSearch />
            </button>
        </div>
    )
}

const HeaderConnect: FC = () => {
    const locale = useLocale()

    return (
        <div className="connect-container">
            <button>
                <IconConnect />
                {TRANSLATION.header.connect[locale]}
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
                    <HeaderLogo />
                    <div className="header-options">
                        <Language />
                        <HeaderConnect />
                    </div>
                </div>
            </div>
            <div className={`nav nav--${fixedHeader ? 'fixed' : 'absolute' }`}>
                <div className="container">
                    { fixedHeader ? <HeaderLogo disableTitle /> : null }
                    <HeaderNav />
                    <HeaderSearch />
                </div>
            </div>
        </Styles>
    )
}

export default Header