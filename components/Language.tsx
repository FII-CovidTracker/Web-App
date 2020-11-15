import React, { FC } from 'react'

import { LocaleType } from '../interfaces'

import LOCALE from '../lib/locale'
import TRANSLATION from '../lib/translation'

import { useLocale } from "../context/Locale"

import { SelectLanguageStyle, OptionLanguageStyle } from '../styles/Select.styled'

const OptionLanguage: FC<{ locale: LocaleType }> = ({ locale: language }) => {
    const locale = useLocale()
    const label = TRANSLATION.language[language]
    const hasAnchor = language !== locale

    const option = (
        <>
            <img src={`/assets/flags/${language}.png`} alt={label} />
            <span>{label}</span>
        </>
    )

    const handleFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        e.stopPropagation()
        e.target.parentElement?.parentElement?.classList.add('active')
    }
    const handleBlur = (e: React.FocusEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        e.stopPropagation()
        e.target.parentElement?.parentElement?.classList.remove('active')
    }

    if (hasAnchor) {
        return (
            <a href={TRANSLATION.home.slug[language]}
               onFocus={(e) => handleFocus(e)}
               onBlur={(e ) => handleBlur(e)}>
                <OptionLanguageStyle>{option}</OptionLanguageStyle>
            </a>
        )
    }
    return <OptionLanguageStyle className="active">{option}</OptionLanguageStyle>
}

const Language: FC = () => {
    const locale = useLocale()

    return (
        <div className="language-container">
            <SelectLanguageStyle>
                <OptionLanguage locale={locale} />
                <div className="options">
                    { Object
                        .values(LOCALE)
                        .filter((language: LocaleType) => language !== locale)
                        .map((language: LocaleType) => <OptionLanguage key={language} locale={language} />)
                    }
                </div>
            </SelectLanguageStyle>
        </div>
    )
}

export default Language