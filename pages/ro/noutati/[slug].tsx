import NewsPage, { NewsContext } from '../../news/[slug]'
import LOCALE from '../../../lib/locale'

const { getStaticPaths, getStaticProps } = NewsContext(LOCALE.RO)

export default NewsPage
export { getStaticPaths, getStaticProps }