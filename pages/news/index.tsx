import React, { FC } from 'react'

import { LocaleType } from '../../interfaces'

import LOCALE from '../../lib/locale'
import TRANSLATION from '../../lib/translation'

import Layout from '../../components/Layout'
import Container from '../../components/Container'


interface NewsPageProps {
    locale: LocaleType
}

const NewsPage: FC<NewsPageProps> = ({ locale}) => {
    return (
        <Layout locale={locale}>
            <Container>
                {TRANSLATION.news[locale]}
            </Container>
        </Layout>
    )
}

const NewsContext = (locale: LocaleType) => ({
    getStaticProps: async () => ({
        props: {
            locale
        }
    })
})

const { getStaticProps } = NewsContext(LOCALE.EN)

export default NewsPage
export { NewsContext, getStaticProps }