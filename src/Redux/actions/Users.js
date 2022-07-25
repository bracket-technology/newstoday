import axios from 'axios'
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/js/iziToast.min.js';

const urlAPI = process.env.REACT_APP_API_URL;

const GetUsersRequest = () => {
    return {
        type: "GET_USERS_REQUEST"
    };
}

const getAllUsers = (data) => {
    return {
        type: "GET_USERS",
        payload: data
    };
}

const GetUsersResponse = (data) => {
    return {
        type: "GET_USERS_RESPONSE",
        payload: data
    };
}

const GetUsersError = (error) => {
    return {
        type: "GET_USERS_ERROR",
        payload: error
    };
}

export const GetAllUsers = (token, { orderBy, page = 1, limit, search }) => {
    return (dispatch) => {
        dispatch(GetUsersRequest())
        axios({
            method: "GET",
            url: `${urlAPI}/users/admin${search ? `?search=${search}` : '?search='}${orderBy ? `&orderBy=${orderBy}` : ''}${page && limit ? `&page=${page}&limit=${limit}` : ''}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            dispatch(getAllUsers(res.data.data));
        }).catch((err) => {
            dispatch(GetUsersError(err.response.data));

        })
    }
}