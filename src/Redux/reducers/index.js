import { combineReducers } from 'redux'
import Auth from '../reducers/Auth'
import Verify from '../reducers/Verify'
import News from '../reducers/News'
const rootReducers = combineReducers({
    auth: Auth,
    verify: Verify,
    news: News,
})
export default rootReducers