import axios from "axios";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/js/iziToast.min.js';

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
            dispatch(GetNews(res.data));
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
            url: `${process.env.REACT_APP_API_URL}/news${search ? `?search=${search}` : '?search='}${orderBy ? `&orderBy=${orderBy}` : ''}${page && limit ? `&page=${page}&limit=${limit}` : ''}`,
        }).then((res) => {
            dispatch(GetNews(res.data.data));
        }).catch((err) => {
            dispatch(GetNewsError(err.response.data));
        })
    }

}