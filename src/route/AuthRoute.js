import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const AuthRoute = ({ children, isLogin = false, isRestricted = false }) => {
    const navigate = useNavigate()
    const { GetAuth } = useSelector(state => state.auth)
    useEffect(() => {
        if (isLogin) {
            if (!GetAuth.success) {
                navigate('/auth')
            }
        }
        if (isRestricted) {
            if (GetAuth.success) {
                navigate('/', { replace: true })
            }
        }
    }, [GetAuth]) // eslint-disable-line
    return (children)
}

export default AuthRoute