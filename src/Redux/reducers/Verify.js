const initialState = {
    loading: false,
    GetVerify: {
        message: '',
    },
    Forgot: {
        success: false,
    },
    Verify: [],
    Reset: {
        success: false,
    }
}

const Fetch = (state = initialState, action) => {
    switch (action.type) {
        case "GET_VERIFY_REQUEST":
            return { ...state, loading: true }
        case "GET_VERIFY":
            return { ...state, loading: false, GetVerify: action.payload }
        case "SEND_FORGOT":
            return { ...state, loading: false, Forgot: action.payload }
        case "VERIF_CODE":
            return { ...state, loading: false, Verify: action.payload }
        case "RESET_PASSWORD":
            return { ...state, loading: false, Reset: action.payload }
        default:
            return state
    }
}

export default Fetch