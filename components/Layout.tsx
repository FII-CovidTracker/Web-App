import React, { FC, ReactNode } from 'react'
import Head from 'next/head'

import { LocaleType } from '../interfaces'

import TRANSLATION from '../lib/translation'

import Locale from '../context/Locale'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    locale: LocaleType,
    children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ locale, children }) => {
    if (typeof document != 'undefined' && document.documentElement) {
        document.documentElement.lang = locale;
    }

    return (
        <Locale locale={locale}>
        <Head>
            <title>{TRANSLATION.title[locale]}</title>

            <meta charSet="utf-8" />

            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <meta name="msapplication-TileColor" content="#47182E" />
            <meta name="msapplication-TileImage" content="/assets/favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#47182E" />

            <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/assets/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href={"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"} rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />

            <link rel="stylesheet" href="/styles/reset.css" />
            <link rel="stylesheet" href="/styles/main.css" />
        </Head>
        <div id="__grid">
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
        </Locale>
    )
}

export default Layout