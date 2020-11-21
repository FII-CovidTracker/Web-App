import HomePage, { HomeContext } from '../'
import LOCALE from '../../lib/locale'

const { getStaticProps } = HomeContext(LOCALE.RO)

export default HomePage
export { getStaticProps }