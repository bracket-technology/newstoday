import { combineReducers } from 'redux'
import Auth from '../reducers/Auth'
import Verify from '../reducers/Verify'
const rootReducers = combineReducers({
    auth: Auth,
    verify: Verify,
})
export default rootReducers