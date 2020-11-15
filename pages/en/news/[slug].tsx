import NewsPage, { NewsContext } from '../../noutati/[slug]'
import LOCALE from '../../../lib/locale'

const { getStaticPaths, getStaticProps } = NewsContext(LOCALE.EN)

export default NewsPage
export { getStaticPaths, getStaticProps }