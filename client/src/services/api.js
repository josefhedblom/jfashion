export const api = async (endpoint) => {
    const response = await fetch(endpoint)
    if (!response.ok) {
        throw new Error('API error.')
    }

    return response.json();
}