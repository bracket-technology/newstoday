import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
    const { isLogin } = useSelector((s) => s.auth)

    useEffect(() => {
        if (!isLogin) {
            navigate('/signin')
        }
    }, [isLogin]) // eslint-disable-line


    return children

}

export default PrivateRoute