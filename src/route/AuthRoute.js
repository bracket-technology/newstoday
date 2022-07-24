import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const AuthRoute = ({ children, isRestricted = false }) => {
    const navigate = useNavigate()
    const { isLogin, GetAuth } = useSelector((s) => s.auth)

    useEffect(() => {
        if (isLogin) {
            if (!GetAuth.success) {
                navigate('/signin')
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