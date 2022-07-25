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
import { DeleteUsers, GetAllUsers, UpdateUserByAdmin } from "../../../Redux/actions/Users";
import MetaTags from "../../../Components/Metatags";

const ManageUser = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const { GetAuth } = useSelector((s) => s.auth);
  const { loading, GetUsers } = useSelector((s) => s.users);
  const { ResponseData } = useSelector((s) => s.users);
  const [params, setParams] = useState({
    page: query.get("page") ?? 1,
    search: query.get('search') ?? '',
    limit: 5,
    orderBy: "asc",
  });
  const [formData, setFormData] = useState({})

  useEffect(() => {
    dispatch(GetAllUsers(GetAuth.data.token, params));
  }, [dispatch, params, ResponseData]); // eslint-disable-line

  let totalPage = Array(GetUsers.totalPage).fill() ?? [];

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

  const editUser = async (user) => {
    setFormData({
      userId: user.userId || '',
      name: user.name || '',
      username: user.username || '',
      email: user.email || '',
      role: user.role || '',
      job: user.job || '',
      phone: user.phone || 0,
      description: user.description || '',
      userImage: user.userImage || '',

    });
  }

  const handleDelete = async (id) => {
    dispatch(DeleteUsers(GetAuth.data.token, id));
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    // console.log(formData.userId);
    const bodyFromdata = new FormData();
    bodyFromdata.append("userId", formData.userId);
    bodyFromdata.append("name", formData.name);
    bodyFromdata.append("username", formData.username);
    bodyFromdata.append("email", formData.email);
    bodyFromdata.append("role", formData.role);
    bodyFromdata.append("job", formData.job);
    bodyFromdata.append("phone", formData.phone);
    bodyFromdata.append("description", formData.description);
    bodyFromdata.append("userImage", formData.userImage);
    dispatch(UpdateUserByAdmin(GetAuth.data.token, formData.userId, bodyFromdata));
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
                                      onClick={() => editUser(user)}
                                      className="btn btn-primary mx-2"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modalmovie"
                                    >
                                      <FaEdit className="set-icon" />{" "}
                                    </button>
                                    <button className="btn btn-danger">
                                      <FiTrash onClick={() => handleDelete(user.userId)} className="set-icon" />
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
      <div className="modal fade" id="modalmovie" tabIndex="-1" aria-labelledby="modalmovie" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-title">Edit User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id='form' encType='multipart/form-data' onSubmit={(e) => handleUpdate(e)}>
              <div className="modal-body">

                <div className="mb-3">
                  <label htmlFor="" className="form-label">Name</label>
                  <input className="form-control" value={formData.name} onChange={(e) => {
                    setFormData(prevState => ({ ...prevState, name: e.target.value }))
                  }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Username</label>
                  <input className="form-control" id="" value={formData.username} onChange={(e) => {
                    setFormData(prevState => ({ ...prevState, username: e.target.value }))
                  }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Email</label>
                  <input className="form-control" id="" value={formData.email} onChange={(e) => {
                    setFormData(prevState => ({ ...prevState, email: e.target.value }))
                  }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Job</label>
                  <input className="form-control" id="" value={formData.job} onChange={(e) => {
                    setFormData(prevState => ({ ...prevState, job: e.target.value }))
                  }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputImage" className="form-label">image</label>
                  <input type="file" className="form-control" id="InputImage" onChange={(e) => {
                    setFormData(prevState => ({ ...prevState, userImage: e.target.files[0] }))
                  }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Role</label>
                  <select defaultValue={formData.role} onChange={(e) => setFormData(prevState => ({ ...prevState, role: e.target.value }))} className="form-select">
                    <option value={formData.role}>{formData.role}</option>
                    <option value={'admin'}>Admin</option>
                    <option value={'writer'}>Writer</option>
                    <option value={'user'}>User</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Phone</label>
                  <input className="form-control" id="" value={formData.phone} onChange={(e) => {
                    setFormData(prevState => ({ ...prevState, phone: e.target.value }))
                  }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">About</label>
                  <textarea rows={5} className="form-control" id="" value={formData.description} onChange={(e) => {
                    setFormData(prevState => ({ ...prevState, description: e.target.value }))
                  }} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={(e) => handleUpdate(e)} data-bs-dismiss="modal">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageUser;
