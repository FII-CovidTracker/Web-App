import React, { FC, ReactNode } from 'react'
import { FiChevronRight as IconArrow } from 'react-icons/fi'

import TRANSLATION from '../lib/translation'

import { fromUTCtoLocalDate } from '../lib/locale'
import { markdownToHtml } from '../lib/markdown'
import { useLocale } from '../context/Locale'

import Styles from '../styles/Article.styled'

interface ArticleProps {
    data: {
        title: string,
        slug: string,
        category?: string
        description?: string,
        content?: string,
        createdAt: string, // UTC Date
        updatedAt: string,
    }
    options: {
        type: string
    }
    children?: ReactNode
}

const Article: FC<ArticleProps> = ({ data, children, options = {} }) => {
    if (!options.type) return null

    const locale = useLocale()
    const {
        title,
        slug,
        category,
        description,
        content,
        createdAt, updatedAt
    } = data

    if (!slug || !title) return null

    /*
     * TODO: make a ArticleRender
     * for this component
     */

    const href = (category ? category : '') + `/${slug}`
    const date = (updatedAt ? updatedAt : (createdAt ? createdAt : null))
    const type = options.type;

    switch (type) {
        case 'preview':
            return (
                <Styles className={`article article--${type}`}>
                    <h1 className="slug">
                        <a href={href} className="title">
                            <span>{title}</span>
                        </a>
                        <a href={href} className="more">
                            {TRANSLATION.article.more[locale]} <IconArrow />
                        </a>
                    </h1>
                    {date && <div className="date">{fromUTCtoLocalDate(date, locale)}</div>}
                    {description && <div className="description" dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />}
                    {children}
                </Styles>
            )
        case 'full':
            return (
                <Styles className={`article article--${type}`}>
                    <h1 className="title">{title}</h1>
                    {date && <div className="date">{fromUTCtoLocalDate(date, locale)}</div>}
                    {content && <div className="content" dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }} />}
                    {children}
                </Styles>
            )
        default:
            return null
    }
}

export default Article;