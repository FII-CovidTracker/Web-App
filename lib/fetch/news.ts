import { API_TYPE, LocaleType } from '../../interfaces'

import { fetchAPI } from '../parts/api'

import TRANSLATION from '../translation'
import TYPES, { API_IGNORE } from '../types'

const NEWS = {
    get: async (slug: string, locale: LocaleType): Promise<API_TYPE> => {
        const data = await fetchAPI(`{
            news(filter: {slug: {eq: "${slug}"}}, locale: ${locale}) {
                title
                content
                createdAt
                updatedAt
              }
        }`)
        if (!data || !data.news) return API_IGNORE
        return { type: TYPES.ARTICLE, data: data.news }
    },

    getAll: async (locale: LocaleType): Promise<API_TYPE> => {
        const data = await fetchAPI(`{
            allNews(orderBy: position_DESC, locale: ${locale}) {
                slug
                title
                description
                createdAt
                updatedAt
            }
        }`)
        if (!data || !data.allNews) return API_IGNORE
        return { type: TYPES.ARTICLES, data: data.allNews }
    },

    getAllSlugs: async (locale: LocaleType, autoPrefix: boolean = true): Promise<API_TYPE> => {
        const data = await fetchAPI(`{
            allNews(orderBy: updatedAt_DESC, locale: ${locale}) { 
                slug 
            }
        }`)
        if (!data || !data.allNews) return API_IGNORE

        const prefix = (autoPrefix ? TRANSLATION.news.slug[locale] : '')
        return {
            type: TYPES.SLUGS,
            data: data.allNews.map((item: { slug: string }) => `${prefix}/${item.slug}`)
        }
    }
}

export default NEWS