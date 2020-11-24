// import { useRouter } from 'next/router'

interface ProtectedParams {
    to: string
    isAuthenticated?: boolean
    redirectPath?: string
}

const Protected = (params: ProtectedParams) => {
    let redirectPath = ''
    // const router = useRouter()

    if (!params.isAuthenticated) {
        redirectPath = params.redirectPath || '/'
        console.log('redirect', redirectPath)
    }
    //
    // if (redirectPath) {
    //     router.push(redirectPath)
    //     return false
    // }

    return true
}

export default Protected;