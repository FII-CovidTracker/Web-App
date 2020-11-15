import React, { FC, ReactNode, createContext, useContext } from 'react'

import { LocaleType } from '../interfaces'

import LOCALE from '../lib/locale'

const LocaleContext = createContext<LocaleType>(LOCALE.RO)

type LocaleProviderType = {
    locale: LocaleType,
    children?: ReactNode
}

const LocaleProvider: FC<LocaleProviderType> = ({ locale, children }) => (
    <LocaleContext.Provider value={locale}>
        {children}
    </LocaleContext.Provider>
)

const useLocale = () => useContext(LocaleContext)

export default LocaleProvider
export { useLocale }