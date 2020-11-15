import HomePage, { HomeContext } from '../'
import LOCALE from '../../lib/locale'

const { getStaticProps } = HomeContext(LOCALE.EN)

export default HomePage
export { getStaticProps }