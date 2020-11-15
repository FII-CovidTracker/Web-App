const API_URL = process.env.DATOCMS_API_URL
const API_URL_PREVIEW = process.env.DATOCMS_API_URL_PREVIEW
const API_TOKEN = process.env.DATOCMS_API_TOKEN

interface FetchOptions {
    preview: boolean,
    variables?: any
}

async function fetchAPI(query: string, options: FetchOptions = { preview: false }) {
    if (!API_URL_PREVIEW || !API_URL) return

    const { preview, variables } = options

    try {
        const response = await fetch((preview ? API_URL_PREVIEW : API_URL), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${API_TOKEN}`
            },
            body: JSON.stringify({query, variables})
        })

        const json = await response.json()
        return json.data
    }
    catch(error) {
        console.error(error);
        return { message: 'Failed to fetch the CMS API' }
    }
}

export { fetchAPI };