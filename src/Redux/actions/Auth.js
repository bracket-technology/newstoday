import axios from 'axios'
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/js/iziToast.min.js';

const urlAPI = process.env.REACT_APP_API_URL;

const GetAuthRequest = () => {
    return {
        type: "GET_AUTH_REQUEST"
    };
}

const GetAuth = (data) => {
    return {
        type: "GET_AUTH",
        payload: data
    };
};

const GetAuthReg = (data) => {
    return {
        type: "GET_AUTH_REG",
        payload: data
    };
};

const GetAuthErr = (err) => {
    return {
        type: "GET_AUTH_ERR",
        payload: err
    };
}

export const AuthLogout = () => {
    return {
        type: "AUTH_LOGOUT",
    }
}

export const GetAuthLogin = (formLogin) => {
    return (dispatch) => {
        dispatch(GetAuthRequest())
        axios({
            method: "POST",
            data: formLogin,
            url: `${urlAPI}/auth/login`,
        }).then((res) => {
            if (res.status === 200) {
                iziToast.success({
                    message: `${res.data.message}`,
                    position: 'topRight',
                });
                dispatch(GetAuth(res.data))
            }
        }).catch((err) => {
            if (!err.response.data.message) {
                iziToast.error({
                    message: `Erorr, Please try again`,
                    position: 'topRight',
                });
                dispatch(GetAuthErr({ message: `Erorr, Please try again` }))
            } else {
                iziToast.error({
                    message: `${err.response.data.message}`,
                    position: 'topRight',
                });
            }
        })
    }
};

export const GetAuthRegister = (formRegister) => {
    return (dispatch) => {
        dispatch(GetAuthRequest())
        axios({
            method: "POST",
            data: formRegister,
            url: `${urlAPI}/auth/register`,
        }).then((res) => {
            if (res.status === 201) {
                iziToast.success({
                    message: `${res.data.message}`,
                    position: 'topRight',
                });
                dispatch(GetAuthReg(res.data))

            }
        }).catch((err) => {
            if (!err.response.data.message) {
                iziToast.error({
                    message: `Erorr, Please try again`,
                    position: 'topRight',
                });
                dispatch(GetAuthErr({ message: `Erorr, Please try again` }))
            } else {
                iziToast.error({
                    message: `${err.response.data.message}`,
                    position: 'topRight',
                });
            }

            dispatch(GetAuthErr(err.response.data))
        })
    }
}