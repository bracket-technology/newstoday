const initialState = {
    loading: false,
    GetVerify: {
        message: '',
    }
}

const Fetch = (state = initialState, action) => {
    switch (action.type) {
        case "GET_VERIFY_REQUEST":
            return { ...state, loading: true }
        case "GET_VERIFY":
            return { ...state, loading: false, GetVerify: action.payload }
        default:
            return state
    }
}

export default Fetch