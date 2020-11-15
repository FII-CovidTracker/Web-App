import moment from 'moment'

import { LocaleType } from '../interfaces'

const LOCALE: { EN: 'en' , RO: 'ro'} = { EN: 'en', RO: 'ro' }

function fromUTCtoLocalDate(dateUTC: string | undefined, locale: LocaleType) {
    if (!dateUTC) return ''

    const date = moment(dateUTC)

    switch (locale) {
        case LOCALE.EN:
            return date.format('DD/MM/YY HH:mm')
        case LOCALE.RO:
            return date.format("DD.MM.YYYY HH:mm")
        default:
            return date
    }
}

export default LOCALE
export {
    fromUTCtoLocalDate
}