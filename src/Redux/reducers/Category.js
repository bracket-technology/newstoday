const initialState = {
    loading: false,
    GetCategory: {
        results: [],
    },
    ResponseData: [],
    error: null
}

const Fetch = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORY_REQUEST":
            return { ...state, loading: true }
        case "GET_CATEGORY":
            return { ...state, loading: false, GetCategory: action.payload }
        case "GET_CATEGORY_RESPONSE":
            return { ...state, loading: false, ResponseData: action.payload }
        case "GET_CATEGORY_ERROR":
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export default Fetch