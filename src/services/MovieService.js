import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/movies"

class MovieService {    

    getMovieById(movieId) {
        return axios.get(USER_API_BASE_URL + '?id=' + movieId);
    }

    addMovie(movie) {
        axios.post("http://localhost:8080/movies/add", movie)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    getAllMovies(){
        return axios.get(USER_API_BASE_URL + '/all') //.then(res => {
            //return res.data.result.map(obj => ({name: obj.name, picture: obj.picture}));
          //});  
        
    }
}

export default new MovieService