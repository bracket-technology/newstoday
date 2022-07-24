import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { VerifyToken } from '../../Redux/actions/Verify'
import MyLoader from './Loader';
import Navbar from './Navbar' // eslint-disable-line
import NavbarUser from './NavbarUser' // eslint-disable-line

const Index = ({ isDark = false }) => {
    const dispatch = useDispatch();
    const { isLogin, GetAuth } = useSelector((s) => s.auth)
    const { loading } = useSelector((s) => s.verify)

    useEffect(() => {
        if (isLogin) {
            dispatch(VerifyToken(GetAuth.data.token))
        }
    }, [dispatch]) // eslint-disable-line

    return (<>
        {loading ? <MyLoader /> : <>
            {isLogin ? <NavbarUser isDark={isDark} /> : <Navbar isDark={isDark} />}
        </>}
    </>)
}

export default Index

