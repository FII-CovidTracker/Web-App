import { LocaleType } from '../../interfaces'

import { fetchAPI } from '../parts/api'

import TRANSLATION from '../translation'
import TYPES from '../types'

const HOME = {
    getBanner: async (locale: LocaleType) => {
        const data = await fetchAPI(`{
            home {
              banner(locale: ${locale}) {
                title
                description
              }
            }
        }`)
        if (!data || !data.home || !data.home.banner || data.home.banner.length != 1) {
            return {
                type: TYPES.BANNER,
                data: {
                    title: TRANSLATION.banner.title[locale],
                    description: TRANSLATION.banner.description[locale]
                }
            }
        }
        const { title, description } = data.home.banner[0]
        return { type: TYPES.BANNER, data: { type: 'text', title, description } }
    }
}

export default HOME