import NewsPage, { NewsContext } from '../../news'
import LOCALE from '../../../lib/locale'

const { getStaticProps } = NewsContext(LOCALE.RO)

export default NewsPage
export { getStaticProps }