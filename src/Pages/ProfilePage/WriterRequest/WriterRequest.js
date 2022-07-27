import React, { useEffect, useState } from "react";
import "../styles.scss";
import "../mobile.scss";
import "../ManageUser/styles.scss";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer/Footer";
import Sidebar from "../Component/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "../../../Components/Metatags";
import { getAuthorReq, UpdateAuthorReq } from "../../../Redux/actions/Users";

const WriterRequest = () => {
    const dispatch = useDispatch();
    const { loading, GetAuthor } = useSelector((s) => s.users);
    const { GetAuth } = useSelector((s) => s.auth);
    const { ResponseData } = useSelector((s) => s.users);
    const [formData, setFormData] = useState({})

    useEffect(() => {
        dispatch(getAuthorReq(GetAuth.data.token));
    }, [dispatch, ResponseData]); // eslint-disable-line





    const handleUpdate = async (e, user) => {
        e.preventDefault();
        setFormData({ role: 'writer' })
        // bodyFromdata.append("newsId", formData.newsId);
        if (!formData.role) {
            alert('Please click again to change')
        } else {
            dispatch(UpdateAuthorReq(GetAuth.data.token, user.userId, formData));
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

                                <div className="form-profile">
                                    <div className="table-responsive set-table">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Email</th>
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
                                                ) : !GetAuthor.results.length ? (
                                                    <tr>
                                                        <td colSpan="6" className="text-center">
                                                            Empty Data
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    GetAuthor.results.map((user, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{user.email}</td>
                                                                <td>
                                                                    <div className="form-check form-switch">
                                                                        <input className="form-check-input" type="checkbox" role="switch" onClick={(e) => handleUpdate(e, user)} id="flexSwitchCheckDefault" />
                                                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Accept</label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                )}
                                            </tbody>
                                        </table>
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

export default WriterRequest;
