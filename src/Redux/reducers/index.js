import { combineReducers } from 'redux'
import Auth from '../reducers/Auth'
const rootReducers = combineReducers({
    auth: Auth,
})
export default rootReducers