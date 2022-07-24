const initialState = {
    loading: false,
    GetNews: {
        results: [],
    },
    error: null
}

const Fetch = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NEWS_REQUEST":
            return { ...state, loading: true }
        case "GET_NEWS":
            return { ...state, loading: false, GetNews: action.payload }
        case "GET_NEWS_ERROR":
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export default Fetch