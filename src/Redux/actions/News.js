import axios from "axios";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/js/iziToast.min.js';
import Swal from "sweetalert2";

const GetNews = (news) => {
    return {
        type: "GET_NEWS",
        payload: news,
    };
}

const GetNewsRequest = () => {
    return {
        type: "GET_NEWS_REQUEST",
    };
}

const GetNewsError = (error) => {
    return {
        type: "GET_NEWS_ERROR",
        payload: error,
    };
}

const GetNewsResponse = (data) => {
    return {
        type: "GET_NEWS_RESPONSE",
        payload: data
    };
}

export const UpdateStatusNews = (token, id, data) => {
    return dispatch => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, publish it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: "PATCH",
                    url: `${process.env.REACT_APP_API_URL}/news/status/${id}`,
                    data: data,
                    headers: {
                        'Accept': '*',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        Authorization: `Bearer ${token}`
                    }
                }).then(res => {
                    dispatch(GetNewsResponse(res.data));
                    iziToast.success({
                        title: 'Success',
                        message: `${res.data.message}`,
                        position: 'topRight'
                    });
                }).catch(err => {
                    dispatch(GetNewsError(err.response.data));
                    iziToast.error({
                        title: 'Error',
                        message: `${err.response.data.message}`,
                        position: 'topRight'
                    });
                })
            }
        }).catch(error => {
            dispatch(GetNewsError(error.response.data));
            iziToast.error({
                title: 'Error',
                message: `${error.response.data.message}`,
                position: 'topRight'
            });
        })


    }
}

export const NewsById = (id) => {
    return dispatch => {
        dispatch(GetNewsRequest())
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/news/${id}`,
        }).then(res => {
            dispatch(GetNewsResponse(res.data.data))
        }).catch(err => {
            dispatch(GetNewsError(err.response.data))
            iziToast.error({
                title: "Error",
                message: `${err.response.data.message}`,
                position: "topRight"
            });
        })
    }
}

export const AddNews = (token, news) => {
    return (dispatch) => {
        dispatch(GetNewsRequest());
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API_URL}/news`,
            data: news,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            dispatch(GetNewsResponse(res.data));
            iziToast.success({
                title: "Success",
                message: `${res.data.message}`,
                position: "topRight"
            });
        }).catch((err) => {
            dispatch(GetNewsError(err.response.data));
            iziToast.error({
                title: "Error",
                message: `${err.response.data.message}`,
                position: "topRight"
            });
        })
    }

}

export const GetNewsAction = ({ orderBy, page = 1, limit, search }) => {
    return (dispatch) => {
        dispatch(GetNewsRequest());
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/news/pubs${search ? `?search=${search}` : '?search='}${orderBy ? `&orderBy=${orderBy}` : ''}${page && limit ? `&page=${page}&limit=${limit}` : ''}`,
        }).then((res) => {
            dispatch(GetNews(res.data.data));
        }).catch((err) => {
            dispatch(GetNewsError(err.response.data));
        })
    }

}

export const GetNewsPrev = ({ orderBy, page = 1, limit, search }) => {
    return (dispatch) => {
        dispatch(GetNewsRequest());
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/news/rev${search ? `?search=${search}` : '?search='}${orderBy ? `&orderBy=${orderBy}` : ''}${page && limit ? `&page=${page}&limit=${limit}` : ''}`,
        }).then((res) => {
            dispatch(GetNews(res.data.data));
        }).catch((err) => {
            dispatch(GetNewsError(err.response.data));
        })
    }

}