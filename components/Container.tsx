import React, { FC, ReactNode } from 'react'

import { API_TYPE, LocaleType } from "../interfaces";

import { useLocale } from '../context/Locale'

import TYPES, { API_IGNORE } from "../lib/types";
import TRANSLATION from '../lib/translation'

import Article from './Article'
import Styles from '../styles/Container.styled'

type ContainerProps = {
    data?: ContainerData,
    children?: ReactNode,
    before?: ReactNode,
    after?: ReactNode
}

const Container: FC<ContainerProps> = ({data, before, after, children}) => {
    if (!data) data = { id: null, content: API_IGNORE }
    const locale = useLocale()
    const content = new ContainerRender(data, locale).element

    return (
        <Styles className={`main main--${locale}`}>
            {before}
            {content || children ? (
                <main className="content">
                    {content}
                    {children}
                </main>
            ) : null}
            {/*<aside className="aside">aside</aside>*/}
            {after}
        </Styles>
    )
}

type ContainerData = {
    id: string | null
    content: API_TYPE | typeof API_IGNORE
}

class ContainerRender {
    private readonly id: string | null
    private readonly data: any
    private readonly locale: LocaleType

    public element: any = null

    constructor(fetched: ContainerData, locale: LocaleType) {
        this.id = fetched.id;
        this.data = fetched.content.data;
        this.locale = locale;

        switch (fetched.content.type) {
            case TYPES.ARTICLES:
                this.articles()
                break
            case TYPES.ARTICLE:
                this.article();
                break
        }
    }

    articles() {
        const category = (this.id ? TRANSLATION[this.id].slug[this.locale] : '')
        this.element = (!this.id || !this.data || !Array.isArray(this.data) ? null : (
            <>
                <h1>
                    <span>{TRANSLATION[this.id][this.locale]}</span>
                </h1>
                <section className={`section ${this.id} ${this.id}--${this.locale}`}>
                    {this.data.map((item: any, index: number) => {
                        item.category = category;
                        return <Article data={item} key={index} options={{type: 'preview'}} />
                    })}
                </section>
            </>
        ))
    }

    article() {
        this.data.category = (this.id ? TRANSLATION[this.id].slug[this.locale] : '')
        this.element = (!this.id ? null : (
            <section className={`section ${this.id} ${this.id}--${this.locale}`}>
                <Article data={this.data} options={{type: 'full'}} />
            </section>
        ))
    }
}

export default Container;