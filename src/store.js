import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userListReducer, repoListReducer, searchReducer } from './reducers/searchReducers'
import { userDetailReducer, userReposReducer } from './reducers/userReducers'

const reducer = combineReducers({
  userList: userListReducer,
  repoList: repoListReducer,
  search: searchReducer,
  userDetail: userDetailReducer,
  userRepos: userReposReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store