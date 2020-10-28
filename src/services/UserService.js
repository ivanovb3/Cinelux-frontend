import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/users"

class UserService{


    getUser() {
        return axios.get("http://localhost:8080/users?id=10");
    }

     addUser(user) {
        axios.post("http://localhost:8080/users/add",  user )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })


    } 
}

export default new UserService