import React, { FC } from 'react'

import { API_TYPE, LocaleType } from '../../interfaces'

import API from '../../lib/fetch'
import TYPES from "../../lib/types";
import LOCALE from "../../lib/locale";

import Layout from '../../components/Layout'
import Container from '../../components/Container'

interface NewsPageProps {
    locale: LocaleType,
    slug: string,
    data: {
        news: API_TYPE
    }
}

const NewsPage: FC<NewsPageProps> = ({ locale, slug, data }) => {
    const container = { id: 'news', content: data.news }
    if (!container.content || !container.content.data) return null
    container.content.data.slug = slug

    return (
        <Layout locale={locale}>
            <Container data={container}>
                <p>{slug}</p>
            </Container>
        </Layout>
    )
}

const NewsContext = (locale: LocaleType) => ({
    getStaticPaths: async () => {
        const { type, data } = await API.NEWS.getAllSlugs(locale)
        return {
            paths: (type !== TYPES.IGNORE ? data : []),
            fallback: false
        }
    },
    getStaticProps: async ({ params }: { params: { slug: string } }) => ({
        props: {
            locale,
            slug: params.slug,
            data: {
                news: await API.NEWS.get(params.slug, locale),
            }
        }
    })
})

const { getStaticPaths, getStaticProps } = NewsContext(LOCALE.EN)

export default NewsPage
export { NewsContext, getStaticPaths, getStaticProps }