const initialState = {
    loading: false,
    GetUsers: {
        results: [],
    },
    GetAuthor: {
        results: [],
    },
    ResponseData: [],
    error: null
}

const Fetch = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_REQUEST":
            return { ...state, loading: true }
        case "GET_USERS":
            return { ...state, loading: false, GetUsers: action.payload }
        case "GET_USERS_RESPONSE":
            return { ...state, loading: false, ResponseData: action.payload }
        case "GET_USERS_AUTHOR":
            return { ...state, loading: false, GetAuthor: action.payload }
        case "GET_USERS_ERROR":
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export default Fetch