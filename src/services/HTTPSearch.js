import axios from 'axios';

class HTTPSearch {

  users = async (text, selectedPage, searchContext, alertContext) => {
    const url = `https://api.github.com/search/users?q=${text}&page=${selectedPage}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

    try {
      searchContext.setLoading()
      const response = await axios.get(url);
      searchContext.dispatchUsers(text, response.data)
    } catch (error) {
      if (error.response) {
        searchContext.clearUsers()
        alertContext.popAlert(error.response.data.message, 'error')
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error')
      }
    }
  }
}

export default HTTPSearch