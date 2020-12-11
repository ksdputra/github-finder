import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userListReducer, repoListReducer, searchReducer } from './reducers/searchReducers'
import { userDetailReducer, userReposReducer } from './reducers/userReducers'
import { alertReducer } from './reducers/alertReducers'

const reducer = combineReducers({
  userList: userListReducer,
  repoList: repoListReducer,
  search: searchReducer,
  userDetail: userDetailReducer,
  userRepos: userReposReducer,
  alert: alertReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store