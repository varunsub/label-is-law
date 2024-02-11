const baseUrl =
    'https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/';

const apiService = async (url, ...args) => {
    // return {};
    const init = args[0] || {};

    const res = await fetch(`${baseUrl}${url}`, init);
    if (!res.ok) {
        const json = await res.json();
        throw new Error(
            json.detail || json.error || 'An unknown error occurred.',
        );
    }
    return res.json();
};

export default apiService;
