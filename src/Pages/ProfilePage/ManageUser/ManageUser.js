import React, { useEffect, useState } from "react";
import "../styles.scss";
import "../mobile.scss";
import "./styles.scss";
import Navbar from "../../../Components/Navbar";
import { FaEdit } from "react-icons/fa";
import { FiTrash, FiSearch } from "react-icons/fi";
import Footer from "../../../Components/Footer/Footer";
import Sidebar from "../Component/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { GetAllUsers } from "../../../Redux/actions/Users";

const ManageUser = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const { GetAuth } = useSelector((s) => s.auth);
  const { loading, GetUsers } = useSelector((s) => s.users);
  const [params, setParams] = useState({
    page: query.get("page") ?? 1,
    limit: 5,
    orderBy: "asc",
  });

  useEffect(() => {
    dispatch(GetAllUsers(GetAuth.data.token, params));
  }, [dispatch, params]); // eslint-disable-line

  let totalPage = Array(GetUsers.totalPage).fill() ?? [];

  const handlePaginate = (page) => {
    setParams((prevState) => ({ ...prevState, page }));
    query.set("page", page);
    setQuery(query);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="profile-page">
          <div className="row">
            <Sidebar />
            <div className="user-box2 col-md-8">
              <div className="set-profile">
                <div className="search">
                    <div className="search-bar">
                        <input type="text" placeholder="Search..."/>
                        <FiSearch className="search-icon" />
                    </div>
                </div>
                
                <div className="form-profile">
                  <div className="table-responsive set-table">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Email</th>
                          <th scope="col">Username</th>
                          <th scope="col">Name</th>
                          <th scope="col">Role</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan="6" className="text-center">
                              Loading...
                            </td>
                          </tr>
                        ) : !GetUsers.results.length ? (
                          <tr>
                            <td colSpan="6" className="text-center">
                              Empty Data
                            </td>
                          </tr>
                        ) : (
                          GetUsers.results.map((user, index) => {
                            return (
                              <tr key={index}>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>
                                  <div className="d-flex justify-content-end form-set">
                                    <button
                                      className="btn btn-primary mx-2"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalmovie"
                                    >
                                      <FaEdit className="set-icon" />{" "}
                                    </button>
                                    <button className="btn btn-danger">
                                      <FiTrash className="set-icon" />
                                    </button>
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

export default ManageUser;
