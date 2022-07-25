import React, { useEffect, useState } from "react";
import "./styles.scss";
import "./mobile.scss";
import Navbar from "../../Components/Navbar";
// import avatar from "../../assets/users/user3.jpg";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "./Component/Sidebar";
import Metatags from "../../Components/Metatags";
import { useDispatch, useSelector } from "react-redux";
import { VerifyToken } from "../../Redux/actions/Verify";
import { UpdateUsers } from "../../Redux/actions/Users";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { GetAuth } = useSelector(state => state.auth);
  const { GetVerify } = useSelector((state) => state.verify);
  // const { ResponseData } = useSelector((state) => state.users);
  // console.log(ResponseData, "ResponseData")
  const [params, setParams] = useState({})
  // const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    dispatch(VerifyToken(GetAuth.data.token));
    getData();
  }, [dispatch]); // eslint-disable-line

  const getData = async () => {
    setParams({
      name: GetVerify.name,
      username: GetVerify.username,
      email: GetVerify.email,
      description: GetVerify.description,
      userImage: GetVerify.userImage,
      job: GetVerify.job,
      phone: GetVerify.phone,
    })
  }

  // const handleChange = (movie) => {
  //   setParams(movie)
  // }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const bodyFormData = new FormData()
    // bodyFormData.append('name', params.name)
    // bodyFormData.append('description', params.description)
    // bodyFormData.append('userImage', params.image)
    // bodyFormData.append('username', params.username)
    // bodyFormData.append('email', params.email)
    // bodyFormData.append('job', params.job)
    // bodyFormData.append('phone', params.phone)
    // dispatch(UpdateUsers(GetAuth.data.token, GetAuth.data.userId, bodyFormData))
    // console.log(bodyFormData)
  }





  return (
    <>
      <Metatags title={'Profile | News Today'} />
      <Navbar />
      <div className="container">
        <div className="profile-page">
          <div className="row">
            <Sidebar />
            <div className="user-box2 col-md-8">
              <div className="set-profile">
                <div className="set-profile-img">
                  <img src={GetVerify.userImage === 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png' ? GetVerify.userImage : `${process.env.REACT_APP_URL_IMG}/${GetVerify.userImage}`} alt="avatar" />
                </div>
                <div className="form-profile">
                  <form encType='multipart/form-data' onSubmit={handleUpdate}>
                    <div className="set-form-profile">
                      <label htmlFor="">Username</label>
                      <br />
                      <input type="text" placeholder="Enter your username" onChange={(e) => setParams(prevData => ({ ...prevData, username: e.target.value }))} value={params.username || ''} required />
                      <br />
                      <label htmlFor="">Email</label>
                      <br />
                      <input type="text" placeholder="Enter your email" value={params.email} onChange={(e) => setParams(prevData => ({ ...prevData, email: e.target.value }))} required />
                      <br />
                      <label htmlFor="">Job</label>
                      <br />
                      <input type="text" placeholder="Enter your job" value={params.job || ''} onChange={(e) => setParams(prevData => ({ ...prevData, job: e.target.value }))} required />
                      <br />
                      <label htmlFor="">About</label>
                      <br />
                      <textarea type="text" placeholder="Tell us about your self" value={params.description || ''} onChange={(e) => setParams(prevData => ({ ...prevData, description: e.target.value }))} required />
                    </div>
                    <div className="set-form-profile">
                      <label htmlFor="">Name</label>
                      <br />
                      <input type="text" placeholder="Enter your name" value={params.name || ''} onChange={(e) => setParams(prevData => ({ ...prevData, name: e.target.value }))} required />
                      <br />
                      <label htmlFor="">Phone</label>
                      <br />
                      <input type="text" placeholder="Enter your phone number" value={params.phone} onChange={(e) => setParams(prevData => ({ ...prevData, phone: e.target.value }))} required />
                      <br />
                      <label htmlFor="">Profile Image</label>
                      <br />
                      <input className="form-control remove-border" type="file" onChange={(e) => setParams(prevData => ({ ...prevData, userImage: e.target.files[0] }))} />
                      <div className="profile-button">
                        <button>Save Changes</button>
                        <br />
                      </div>
                    </div>
                  </form>
                  <br />
                  <button className="request-btn">Request to be an author</button>
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

export default ProfilePage;
