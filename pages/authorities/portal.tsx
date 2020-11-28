import React, { FC } from 'react'
import ErrorPage from 'next/error'

import { LocaleType } from '../../interfaces'

import LOCALE from '../../lib/locale'
import { useUser } from '../../lib/auth/useUser'
import { API_IGNORE } from '../../lib/types'

import Layout from '../../components/Layout'
import Container from '../../components/Container'

interface AuthorityDashboardPageProps {
    locale: LocaleType
}

const AuthorityDashboardPage: FC<AuthorityDashboardPageProps> = ({ locale }) => {
    const { user } = useUser()

    if (typeof window === 'undefined' || !user) {
        return <ErrorPage statusCode={404} />
    }

    const container = { id: 'authorities', content: API_IGNORE }
    return (
        <Layout locale={locale}>
            <Container data={container}/>
        </Layout>
    )
}

const AuthorityDashboardContext = (locale: LocaleType) => ({
    getStaticProps: async () => ({
        props: {
            locale
        }
    })
})

const { getStaticProps } = AuthorityDashboardContext(LOCALE.EN)

export default AuthorityDashboardPage
export { AuthorityDashboardContext, getStaticProps }