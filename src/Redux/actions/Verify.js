import axios from 'axios'
const urlAPI = process.env.REACT_APP_API_URL;

const GetVerifyRequest = () => {
    return {
        type: "GET_VERIFY_REQUEST"
    };
}

const GetVerify = (data) => {
    return {
        type: "GET_VERIFY",
        payload: data
    };
};

export const VerifyToken = (data) => {
    return (dispatch) => {
        dispatch(GetVerifyRequest())
        axios({
            method: "GET",
            url: `${urlAPI}/auth/verify-token`,
            headers: {
                Authorization: `Bearer ${data}`
            }
        }).then((res) => {
            if (res.status === 200) {
                axios({
                    method: "GET",
                    url: `${urlAPI}/users?email=${res.data.data.email}`,
                    headers: {
                        Authorization: `Bearer ${data}`
                    }
                }).then((res) => {
                    dispatch(GetVerify({ ...res.data.data[0], password: '' }))
                }).catch((err) => {
                    dispatch(GetVerify(err.response.data))
                })
            }
        }).catch((err) => {
            dispatch(GetVerify(err.response.data))
        })
    }

}