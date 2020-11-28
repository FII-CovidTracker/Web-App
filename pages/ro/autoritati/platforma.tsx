import AuthorityDashboardPage, { AuthorityDashboardContext } from '../../authorities/portal'
import LOCALE from '../../../lib/locale'

const { getStaticProps } = AuthorityDashboardContext(LOCALE.RO)

export default AuthorityDashboardPage
export { getStaticProps }