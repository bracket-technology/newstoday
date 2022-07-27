import React, { useEffect, useState } from "react";
import "../styles.scss";
import "../mobile.scss";
import "../ManageUser/styles.scss";
import Navbar from "../../../Components/Navbar";
import { FiSearch } from "react-icons/fi";
import Footer from "../../../Components/Footer/Footer";
import Sidebar from "../Component/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MetaTags from "../../../Components/Metatags";
import { GetNewsPrev, UpdateStatusNews } from "../../../Redux/actions/News";

const PostRequest = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams();
    const { loading, GetNews } = useSelector((s) => s.news);
    const { GetAuth } = useSelector((s) => s.auth);
    const { ResponseData } = useSelector((s) => s.news);
    const [params, setParams] = useState({
        page: query.get("page") ?? 1,
        search: query.get('search') ?? '',
        limit: 5,
        orderBy: "asc",
    });
    const [formData, setFormData] = useState({})

    useEffect(() => {
        dispatch(GetNewsPrev(params));
    }, [dispatch, params, ResponseData]); // eslint-disable-line

    let totalPage = Array(GetNews.totalPage).fill() ?? [];

    const handlePaginate = (page) => {
        setParams((prevState) => ({ ...prevState, page }));
        query.set("page", page);
        setQuery(query);
    };

    const searchHandler = async (e) => {
        e.preventDefault()
        const search = e.target.value
        setParams((prevState) => ({
            ...prevState,
            search: search,
        }))
        query.set('search', search)
        setQuery(query)
    }



    const handleUpdate = async (e, news) => {
        e.preventDefault();
        setFormData({ status: 'publish' })
        // bodyFromdata.append("newsId", formData.newsId);
        if (!formData.status) {
            alert('Please click again to publish')
        } else {
            dispatch(UpdateStatusNews(GetAuth.data.token, news.newsId, formData));
        }
    }

    return (
        <>
            <MetaTags title={"Manage Users | News Today"} />
            <Navbar />
            <div className="container">
                <div className="profile-page">
                    <div className="row">
                        <Sidebar />
                        <div className="user-box2 col-md-8">
                            <div className="set-profile">
                                <div className="search">
                                    <div className="search-bar">
                                        <input type="text" onChange={(e) => searchHandler(e)} placeholder="Search..." />
                                        <FiSearch className="search-icon" />
                                    </div>
                                </div>

                                <div className="form-profile">
                                    <div className="table-responsive set-table">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loading ? (
                                                    <tr>
                                                        <td colSpan="6" className="text-center">
                                                            Loading...
                                                        </td>
                                                    </tr>
                                                ) : !GetNews.results.length ? (
                                                    <tr>
                                                        <td colSpan="6" className="text-center">
                                                            Empty Data
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    GetNews.results.map((news, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{news.title}</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <input className="form-check-input" type="checkbox" role="switch" onClick={(e) => handleUpdate(e, news)} id="flexSwitchCheckDefault" />
                                                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Publish</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                )}
                                            </tbody>
                                        </table>
                                        <nav aria-label="pagination">
                                            <ul className="pagination justify-content-center">
                                                {totalPage.map((item, index) => {
                                                    let number = index + 1;
                                                    let page = parseInt(params.page);
                                                    return (
                                                        <li
                                                            className={
                                                                page === number
                                                                    ? "page-item active"
                                                                    : "page-item"
                                                            }
                                                            key={index}
                                                        >
                                                            <button
                                                                className="page-link"
                                                                onClick={() => handlePaginate(number)}
                                                            >
                                                                {number}
                                                            </button>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PostRequest;
