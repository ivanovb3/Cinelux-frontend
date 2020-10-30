import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/users"

class UserService {    

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '?id=' + userId);
    }

    addUser(user) {
        axios.post("http://localhost:8080/users/add", user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    logInUser(email, password) {
      return axios.get(USER_API_BASE_URL + '/login' +'?email=' + email + '&' + 'password' +'='+ password)
             /* .then(res => {
                console.log(res);
                console.log(res.data);                               
            })  */
    }

}

export default new UserService