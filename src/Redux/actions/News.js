import axios from "axios";

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

export const GetNewsAction = ({ orderBy, page = 1, limit, search }) => {
    return (dispatch) => {
        dispatch(GetNewsRequest());
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/news${search ? `?search=${search}` : '?search='}${orderBy ? `&orderBy=${orderBy}` : ''}${page && limit ? `&page=${page}&limit=${limit}` : ''}`,
        }).then((res) => {
            dispatch(GetNews(res.data.data));
        }).catch((err) => {
            dispatch(GetNewsError(err));
        })
    }

}