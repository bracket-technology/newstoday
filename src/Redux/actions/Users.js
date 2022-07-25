import axios from 'axios'
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/js/iziToast.min.js';
import Swal from 'sweetalert2';

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

export const DeleteUsers = (token, userId) => {
    return dispatch => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: "DELETE",
                    url: `${urlAPI}/users/admin/${userId}`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(res => {
                    dispatch(GetUsersResponse(res.data));
                    iziToast.success({
                        title: 'Success',
                        message: `${res.data.message}`,
                        position: 'topRight'
                    });
                }).catch(err => {
                    dispatch(GetUsersError(err.response.data));
                    iziToast.error({
                        title: 'Error',
                        message: `${err.response.data.message}`,
                        position: 'topRight'
                    });
                })
            }
        }).catch(error => {
            dispatch(GetUsersError(error.response.data));
            iziToast.error({
                title: 'Error',
                message: `${error.response.data.message}`,
                position: 'topRight'
            });
        })


    }
}

export const UpdateUsers = (token, userId, bodyFromdata) => {
    return (dispatch) => {
        dispatch(GetUsersRequest());
        axios({
            method: "PATCH",
            url: `${urlAPI}/users/${userId}`,
            data: bodyFromdata,
            headers: {
                "Content-type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            iziToast.success({
                title: 'Success',
                message: `${res.data.message}`,
                position: 'topRight'
            });
            dispatch(GetUsersResponse(res.data));
        }).catch((error) => {
            iziToast.error({
                title: 'Error',
                message: `${error.response.data.message}`,
                position: 'topRight'
            });
            dispatch(GetUsersError(error.response.data));
        })
    }
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

export const GetUserById = (token, id) => {
    return (dispatch) => {
        dispatch(GetUsersRequest())
        axios({
            method: "GET",
            url: `${urlAPI}/users?userId=${id}`,
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