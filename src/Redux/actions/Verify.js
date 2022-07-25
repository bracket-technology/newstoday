import axios from 'axios'
import { AuthLogout } from './Auth';
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/js/iziToast.min.js';
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

const verifCode = (data) => {
    return {
        type: "VERIF_CODE",
        payload: data
    };
}

const sendForgot = (data) => {
    return {
        type: "SEND_FORGOT",
        payload: data
    };
}

const resetPassword = (data) => {
    return {
        type: "RESET_PASSWORD",
        payload: data
    };
}

export const VerifyCode = ({ email, code }) => {
    return (dispatch) => {
        dispatch(GetVerifyRequest())
        axios({
            method: "GET",
            url: `${urlAPI}/auth/verify-code?email=${email}&code=${code}`,
        }).then((res) => {
            dispatch(verifCode(res.data))
        }).catch((err) => {
            iziToast.error({
                title: "Error",
                message: err.response.data.message,
                position: "topRight",
            });
            dispatch(verifCode(err.response.data))
        })
    }
}

export const ResetPassword1 = ({ email, code, newPassword, confrimPassword }) => {
    return (dispatch) => {
        axios({
            method: "patch",
            url: `${urlAPI}/auth/change-pass?email=${email}&code=${code}`,
            data: {
                newPassword,
                confrimPassword,
            },
        }).then((res) => {
            iziToast.success({
                title: "Success",
                message: res.data.message,
                position: "topRight",
            });
            dispatch(resetPassword(res.data))
        }).catch((err) => {
            iziToast.error({
                title: "Error",
                message: err.response.data.message,
                position: "topRight",
            });
            dispatch(resetPassword(err.response.data))
        })
    }
}

export const SendForgot = ({ email }) => {
    return (dispatch) => {
        dispatch(GetVerifyRequest())
        axios({
            method: 'get',
            url: `${urlAPI}/auth/forgot-pass?email=${email}`,
        }).then(res => {
            iziToast.success({
                message: `${res.data.message}`,
                position: 'topRight',
            });
            dispatch(sendForgot(res.data))
        }).catch(err => {
            iziToast.error({
                message: `${err.response.data.message}`,
                position: 'topRight',
            });
            dispatch(sendForgot(err.response.data))
        })
    }
}

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
            if (res.data.data.exp * 1000 < Date.now()) {
                dispatch(AuthLogout())
            }
            if (res.status === 200) {
                axios({
                    method: "GET",
                    url: `${urlAPI}/users?userId=${res.data.data.userId}`,
                    headers: {
                        Authorization: `Bearer ${data}`
                    }
                }).then((res) => {
                    dispatch(GetVerify({ ...res.data.data[0], password: '' }))
                }).catch((err) => {
                    dispatch(AuthLogout())
                    dispatch(GetVerify(err))
                })
            }
        }).catch((err) => {
            dispatch(AuthLogout())
            dispatch(GetVerify(err))

        })
    }

}