import axios from 'axios';

  export const searchUsers = async (text, page, usersContext, alertContext) => {
    const url = `https://api.github.com/search/users?q=${text}&page=${page}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

    try {
      usersContext.setLoading()
      usersContext.setPage(page)
      const response = await axios.get(url);
      usersContext.dispatchUsers(text, page, response.data)
    } catch (error) {
      if (error.response) {
        usersContext.clearUsers()
        alertContext.popAlert(error.response.data.message, 'error')
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log(error)
      }
    }
  }

