import { combineReducers } from 'redux'
import Auth from '../reducers/Auth'
import Verify from '../reducers/Verify'
import News from '../reducers/News'
import Users from '../reducers/Users'
const rootReducers = combineReducers({
    auth: Auth,
    verify: Verify,
    news: News,
    users: Users
})
export default rootReducers