import axios from 'axios'
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/js/iziToast.min.js';
import Swal from 'sweetalert2';

const urlAPI = process.env.REACT_APP_API_URL;

const GetCategoryRequest = () => {
    return {
        type: "GET_CATEGORY_REQUEST"
    };
}

const getAllCategory = (data) => {
    return {
        type: "GET_CATEGORY",
        payload: data
    };
}

const GetCategoryResponse = (data) => {
    return {
        type: "GET_CATEGORY_RESPONSE",
        payload: data
    };
}

const GetCategoryError = (error) => {
    return {
        type: "GET_CATEGORY_ERROR",
        payload: error
    };
}

export const GetAllCategory = (token) => {
    return dispatch => {
        dispatch(GetCategoryRequest())
        axios({
            method: "GET",
            url: `${urlAPI}/category`,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(res => {
            dispatch(getAllCategory(res.data.data))
        }).catch(err => {
            dispatch(GetCategoryError(err.response.data))
            iziToast.error({
                title: "Error",
                message: `${err.response.data.message}`,
                position: "topRight"
            });
        })
    }
}
