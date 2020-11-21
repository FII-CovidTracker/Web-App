import React, { FC } from 'react'
import {
    FiGithub as IconGithub
} from 'react-icons/fi'

import {
    GiHeartOrgan as IconHeart
} from 'react-icons/gi'

import TRANSLATION from '../lib/translation'

import { useLocale } from '../context/Locale'
import { Nav } from './Header'

import Styles from '../styles/Footer.styled'

const Footer: FC = () => {
    const locale = useLocale()

    return (
        <Styles className={`footer--locale-${locale}`}>
            <div className="container">
                <div>
                    <Nav disableIcons={true} className="dots" />
                </div>
                <div>
                    <span>{TRANSLATION.footer.madeWith[0][locale]}</span>
                    <IconHeart/>
                    <span>{TRANSLATION.footer.madeWith[1][locale]}</span>
                    <a href="https://en.wikipedia.org/wiki/Ia%C8%99i" target="_blank">Iași</a>
                </div>
                <div>
                    <a href="">
                        <IconGithub/>
                        <span>{TRANSLATION.footer.development[locale]}</span>
                    </a>
                </div>
            </div>
        </Styles>
    )
}

export default Footer